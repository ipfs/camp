# Scaling up the DHT

Kademlia DHT is a massive distributed KV-store. It isn't reliable but has enormous other benefits.
Can we find improvements or alternatives that would allow us to improve it futher.

## Goal

Finding possible schemes improving or replacing Kademlia DHT for our usecases (IPNS, provider and peer records) which would
reduce:
 - DHT lookup time
 - DHT put time
 - Bulk DHT puts

## Requirements to consider:
 - Large scale network (1Milion+ nodes)
 - Massive put orders

## Where to learn about it

 - https://github.com/libp2p/research-dht/issues/6
 - https://github.com/libp2p/research-dht
 - https://github.com/ipfs/notes/issues/291
 
## Team

* [@Stebalien](https://github.com/Stebalien)
* [@koalalorenzo](https://github.com/koalalorenzo)
* [@prtfw](https://github.com/prtfw)
* [@obo20](https://github.com/obo20)
* [@MichaelMure](https://github.com/MichaelMure)
* [@gregdhill](https://github.com/gregdhill)
* [@kumavis](https://github.com/kumavis)

## Presentation

🎤 [Slides](https://docs.google.com/presentation/d/105KwT6ZmcneywGnvUyww5y-u_GHSY0FFQ0yIXZQf7Y0/edit#slide=id.g5c6a5171f6_0_0)

## Notes

### Nature of the problem

One of the biggest problems facing the DHT involves undialable / unreliable peers. Essentially, nodes spend significantly much time handling dial timeouts than actually announcing content to the DHT. This is due to the fact that IPFS nodes currently treat all peers as equal when attempting to announce content, regardless of how reliable individual peer actually are. 

1. A large number of the nodes in peer-tables are behind NATs
2. Even if we can predict/know which nodes are behind NATs, other (potentially) malicious nodes could become unresponsive
3. We would like a solution that prioritizes:

	3.1	fast peer lookup
	
	3.2	fast cid lookup
	
	3.3	fast/low latency IPNS
	
	(due to dependencies)
4. Filecoin / Other incentive structure / crypto-economic mechanism has uncertain ETA and could be a lot of work
5. Most nodes are likely to upgrade but we must ensure backwards compatibility

### Proposed solution

#### Priority peer stack

Nodes will assign a peer "score" to each node in its peer table (a.k.a Peer or peers). The value/score will be derived from the "positive" and "negative" interactions the node has experienced with that peer over time. If a node is easily reachable and behaves as expected when requests are sent to it (responds to pings), its value will rise over time. Pattern of negative interactions such as persistent dial failures will cause the node's value to be downgraded. Each node aims to maintain a list at at least N peers with a "good" score. When providing the peer ID to a requester; use the top of the priority stack (still getting closer in XOR distance to target PID or CID but could b more reliable).

#### Details and properties of proposed solution:

- instead of a list, use a "priority stack" based on this score
- the scores of peers in the peer table is not broadcasted, each node in the network determines and updates the score locally
- no historical records needs to be kept (i.e. use an running mean)
- when a peer's score becomes unacceptable, a new node slightly further in XOR distance is added and given a neutral score. The none performing peer is NOT dropped from the peer table (until garbage collection needs to occurs)
- to balance network resilience/robustness and speed, choose an appropriate exploit vs explore ratio [i.e. 80/20 => 80% of the time use the top of the stack (more reliable / likely to be more performant), 20% of the time randomly choose a peer in the table that is close in XOR distance to target ID (which may not respond and time out the request)] (this could be dynamically determined via a formula / model, this is so that nodes have an opportunity to change their score)
- scores can be persisted through reboots (and maybe should)
- what we expect to happen is: reliable nodes will be higher up in peer tables for other nodes... should have stable values and the network ('s other nodes) should tend to evaluate a node in a none divergent way
- when new nodes join, bootstrap from high scored peers (transitive properties of "trust")

##### How this solves the issue

When it comes time to announce content to the DHT, a node doesn't need to waste time trying dialing unproven peers in an attemt to announce content. Instead, it should have a relatively "stable" set of peers in each peer bucket for DHT announcements.

Nodes that consistantly remain reliable / stable will also gravitate towards each other they'll consistantly be proving themselves reliable to other reliable peers. What this leads to is a "self healing" effect on the network DHT, where there exists a natural hierarchy of peer stability that's highly decentralized in nature.

### Potential Next Steps

- build a model of the network and run simulations with different parameters to verify convergence and performance improvement properties (i.e. what if 80% of the nodes are behind NATs, what if 20% vs. 60% nodes go offline/online evert 3 hrs vs 5 hrs)
- further brainstorm on failure modes and attack vectors war gaming
- build a dynamic optimization model using ML / Domain knowledge, hooked into a real time feed of network data to find and set optimal hyper-parameters (i.e. if the network nodes is switching on/off more, increase explore vs. exploit ratio; N for number of performing peers to keep etc... )

### Things that need to be further explored

As this solution was prepared during a 2 hour long session, there are items that will need to be further explored if this is to be considered as a potential scaling solution. Two items that immediately come to mind are:

1) The value formula - This proposal doesn't dive into the actual formula that will be use to assign peer values. The complexity requirements of the formula are unknown.
2) Accounting for "unknown" peers. There may need to be a mechanism that exists so that newly discovered peers have a way to prove themselves as trustworthy on nodes that already have a highly tested peer list.
