## Participants
- Victor Grishchenko, [@gritzko](https://github.com/gritzko)
- Molly Mackinlay, [@momack2](https://github.com/momack2)
- Pierre Niedhardt, [@ambrevar](https://github.com/ambrevar)
- Daniel Petranek, [@dpetranek](https://github.com/dpetranek)
- Alex Potsides, [@achingbrain](https://github.com/achingbrain)
- Héctor Sanjuán, [@hsanjuan](https://github.com/hsanjuan)
- Jessica Schilling, [@jessicaschilling](https://github.com/jessicaschilling)

## What we did
Note: This deep dive incorporated [49-ipfs-and-guix.md](https://github.com/ipfs/camp/blob/master/DEEP_DIVES/49-ipfs-and-guix.md).

## Key takeaways
- Connectivity is important, eg. working offline
- Replication of content not important to end users
- New paradigms of package management enable new use cases
- Reproducibility! Very important
- Decentralised publishing is a great goal
- Decentralised registries not massively important
- Excessive network activity is slow, user hosted packages would help
- Why refetch assets/tarballs/etc that we know will not have changed? - e.g. redownloading is bad
- Performance is not that important as long as it's 'fast enough'
- Performance regressions the worst
- Left-pad type issues are not common but are show stoppers when they do
- Being able to reproduce builds when dependencies change over time very important
- Cost of hosting private/internal registries not important
- Deduping package contents important for developers but less so for maintainers, particularly if they dedupe already

## Dot ranking images
1. TK
2.
3.
4.
5.
6.
7.
8.
9.
10.
11.
12.
13.
14.
15.
16.
17.
18.
19.
20.
