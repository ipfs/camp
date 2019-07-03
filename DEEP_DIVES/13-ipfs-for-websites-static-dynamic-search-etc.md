# IPFS for websites (static, dynamic, search, etc)

Basic publishing on IPFS is dead simple! But many traditional workflows on the centralized web are not at all straightforward.

Additionally, traditional search engines will not work the same, either in a technology nor a business sense.

If a website is published in a merkle forest and no one is around to read it, is its information truly free?

Let's dive deeply into understanding the challenges for traditional web developers and publishers in moving to IPFS. Let's define some best-practices, helpful workflows, tools and resources for Busy Web Developers.

## Goal

Some possible goals...

* We'll have identified a set of primary use-cases for publishing websites with IPFS
* We'll have a set of recommended workflows and tools for meeting those use-cases
* We'll understand and be able to describe the trade-offs (pros and cons)
* We'll know what the biggest roadblocks are, so we can know what to work on next
* We'll know what the biggest misconceptions are, so we can educate people about them
* We'll know what higher-level workflows and patterns are needed to bridge the gap with traditional web development
* We'll identify where we can integrate into existing tools, IDEs, servers for easing adoption

## Requirements to consider

Some possible requirements...

* Websites need to stay up
* People need names not hashes
* A vibrant web has dynamic content
* Search is the most powerful content discovery tool in the history of the internet

## Where to learn about it

* [@agentofuser's tools and posts for easing publication of static sites to IPFS](https://interplanetarygatsby.com/)
* [Tom Macwright's post about challenges in publishing a website on IPFS](https://macwright.org/2019/06/08/ipfs-again.html)
* [End-to-end tutorial for publishing an update-able static website with human-readable name with IPFS and IPNS](https://medium.com/coinmonks/how-to-add-site-to-ipfs-and-ipns-f121b4cfc8ee)
* (Add yours with a PR!)

## Team

* [@autonome](https://github.com/autonome)
* [@soapdog](https://github.com/soapdog)
* [@ana0](https://github.com/ana0)
* [@litvintech](https://github.com/litvintech)
* [@schwartz10](https://github.com/schwartz10)


## Presentation

🎤 [Slides](https://docs.google.com/presentation/d/105KwT6ZmcneywGnvUyww5y-u_GHSY0FFQ0yIXZQf7Y0/edit#slide=id.g5c6a5171f6_0_133)

## Notes

### Deep Dive: Websites on IPFS

1. Explain the problem
2. Design solutions
3. Send PR to camp repo
4. Design slide for report back

### (WEBSITES ARE) THE PROBLEM

Interests
* search
* dynamic vs static content
* publishing
* developer workflow

...

SEARCH IS THE PROBLEM

### What's ok?

* what privacy problems in search?
* moral divisions?
* can search by executed client side?
* lots of surveillance and tracking go away
* is possible?
* common knowledge
* your local dataset is a knowledge subset
* can you extend dht to support client side search
* search is sniffing dht?
* what if you wanted to ask though?
* where is the connection? as a block?
* ipld graph? who builds it?
* layer on top of network layer
* right now google picks what shows first
* economic incentives, political
* is it your responsibility to make your stuff indexable?
* if your name is not easily google-able, is already your responsible
* schema.org
* weighted pagerank
* how do you build it?
* blockchain network - nodes recalculate in a window the knowledge graph
* for client node, you have your own subset
* everyone has their own knowledge graph
* is it part of global knowledge graph?
* local kgraph can respond to requests
* and merge requests into local
* if i have token, i can submit links
* name -> cid
* cid -> content
* name (cid) -> content (cid)

### What's hard

* hard to find
* hard to discover
* hard to index
* disambiguation

### Solutionising

* can have a bot?
* push a bunch to elastic search?
* expensive slow and stupid
* browsing web, your agent is collecting data
* start assembling graph
* establish relationships with friends
* re-searching
* if can't find in local graph, ask friends
* and ask their friends
* slow, error prone, kinda works
* (over time)
* local maximum - good restaurants in Barcelona
* might return some things for different reasons

* deliberate tagging by user decisions
* vs crawling social graph 
* difference?
* is how index is assembled
* active vs passive
* lazy
* if someone wants to find something, some index is made and somehow you return the result

* we have an index
* we have book library
* many sources, one place to look
* another approach, phone your friends to see who has the book
* commons increases probability

* how to build index?
* what difference between index and knowledge graph?
* kg is richer than index?
* index is a list
* The Underlay
* making kg on ipfs
* claim "city x is in country y"
* show probability of whether the claim is true

* google collects what's clicked on and time spent
* browser also knows that
* can you collect all public content?

* what about social graph?
* what about echo chamber? filter bubble

* let's make layers

* value comes from what people link to
* content + linkout + linkin

* trust - social graph, barcelona restaurant
* ambient index - vaccination
* might pay for medical info
* marketplace of information?
* bounty for search
* people in barcelona will have cheaper source of info on restaurants beacuse it's real
* social path - current bias is against human collaboration
* instead of social graph, use local history?
* we choose echo chambers for good reasons
* eg, we chose to be at this event, not NRA meetup
* our real life choices dictate our local search

* bidding - offer $100, and get 5 answers back
* but no rewards?
* what if no economic interest?
* we cannot measure value
* hard to trust economic incentive
* denies opportunity who don't have the money to play
* equal outcome and equal opportunity
* searchers don't pay - providers have separate economic incentive
* ipfs is freemium model, extended with filecoin
* both is best
* if you remove the economic incentive does it still work?

### Taxonomy

Active Indexing
* deliberately crafted indexes
* tagging/labeling
* knowledge graph playlists
* by creater or by viewer

Passive Indexing
* lazy index of browser experience over time
* then sharing index
* can be anonymized or attributed
* metadata: when you looked, how long, etc
* what other criteria?

Dystopian Indexing
* location based passive index
* social graph passive index
* breakup playlist index
* robots

Incentivised
* marketplace
* may be economic or not
* free store, free box
* ego marketplace - my index is better than yours

THE CYCLE
* store it
* surface it
* close the loop -> feed back good answers into the index
  * passive does that over time
  * happy/sad

### web3

* distributed computing of data
* blockchain dapps
* broadly synonomous to dweb
* web1 -> webpages on internet, navigate between
* web2 -> change those webpages you visit
* web3 -> layer of trust for those webpages

### QRI

* fire off a message
* each node looks into their local store
* makes local index
* they decide a local rank
* more entries, more priority
* opt-in response
* put your own peer id in the request
* schema?
* all datasets have same schema
* can't merge schema types
* results coming in async, which is funky ux
* wait for first 3 msgs for low # of peers
* bigger problem than schemas is indexing
* what do you index

### More

* what about snakes
* index plain text search
* more powerful than you think

* push search to the edges
* massive advantage there

* multiple loops to refine results
* on fast connection?

* trust problem
* asking remote nodes to do computation is trust/risk
* ask for snakes, get porn
* big unsolved problem

* comparing search strategies
* mixing: active local, passive local, active remote, passive remote

* speed vs quality
* bit by snake, poisonous? speed and quality
* accuracy is relative
