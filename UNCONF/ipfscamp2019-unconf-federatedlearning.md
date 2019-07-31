# 	Federated Learning on the Chain/IPFS

Hosted by : [@prtfw](https://github.com/Prtfw)  
Participants : *not captured*

We briefly discussed how a very light decentralized ML algorithm could go a long way to help each node optimize its own behavior/reward + end up optimizing the network as a whole. 

## Key points

Namely, each node can be viewed as a distributed agent, reward = some function of low latency/high availability (a combined metric we would like the network to optimize for), model = some function of probability of the rewards + we can simulate key network variables (as the "environment") and test convergence/performance in a similar fashion. (Before/without setting up an actual hardware network lab : ).
- The same idea can be applied to help nodes decide which version of the algorithm is optimal for them to use in real time etc... (this increases resiliency/backwards compatibility of the network)
- We can also extend the code to see how the crypto-economics of a reward model/function like filecoin would interact if introduced to the IPFS system.
You can just make a copy and run the whole thing using google's free GPU or just "eye-ball" the code: link

This is targeted at ML folks outside of this particular field so it should be relatively easy to follow.

Or we can start simple and try to model which nodes are unreachable / behind NATs using network data.
