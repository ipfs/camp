# Pubsub

Publish-Subscribe, called ‘pubsub’ for short, is a pattern often used to handle events in large-scale networks. ‘Publishers’ send messages classified by topic or content and ‘subscribers’ receive only the messages they are interested in, all without direct connections between publishers and subscribers. This approach offers much greater network scalability and flexibility.

## Goal

Use whatever resources available to you, in order to come up with a visual representation of the topic that can be projected on to a poster (similar in spirit to the [poster description](README.md#description) but with whatever creative freedom your group prefers :^)

## Questions to Answer

- What implementations exist for this (floodsub, gossipsub, et al.)?
- How do they compare?
- When/where would you use pubsub?
- How does it interact with other dynamic data systems (such as IPNS)?

## Where to learn about it

<https://github.com/libp2p/go-libp2p-pubsub>  
<https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern>
