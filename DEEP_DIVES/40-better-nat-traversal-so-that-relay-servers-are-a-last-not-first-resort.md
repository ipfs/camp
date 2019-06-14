# Better NAT traversal so that Relay servers are a last (not first) resort

The current cost of running relay servers for IPFS is unsustainable.  We need to implement better NAT hole punching mechanisms in libp2p to reduce the usage of relay servers by NAT’d hosts.  TCP hole punching has a success rate of ~60%, so we should be preferentially hole punching.  TCP simultaneous open is one example.  STUN servers are another example; yet another is making every non-NATed host in a libp2p network a relay node.

## Goal

<Define what we would get if the Open Problem(s) are solved for this Deep Dive>

## Requirements to consider

<Do we have requirements (i.e. work with 1MM nodes)?>

## Where to learn about it

<List of talks, links to github issues, code, notes and so on>
