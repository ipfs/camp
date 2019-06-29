## Participants
- Victor Grishchenko, [@gritzko](https://github.com/gritzko)
- Molly Mackinlay, [@momack2](https://github.com/momack2)
- Pierre Niedhardt, [@ambrevar](https://github.com/ambrevar)
- Daniel Petranek, [@dpetranek](https://github.com/dpetranek)
- Alex Potsides, [@achingbrain](https://github.com/achingbrain)
- Héctor Sanjuán, [@hsanjuan](https://github.com/hsanjuan)
- Jessica Schilling, [@jessicaschilling](https://github.com/jessicaschilling)

## What we did
- Presented a summary of the [IPFS Package Managers Special Interest Group](https://github.com/ipfs/package-managers)'s work so far this year
- Walked through the group's roadmap for next steps in 2019
- Discussed and ranked key pain points in the current package manager landscape that could be solved by incorporating IPFS, as well as potential benefits presented by IPFS-enabled package managers
- In conjunction with [Pierre Niedhardt](https://github.com/ambrevar)'s [deep dive on problem solving for IPFS and Guix](https://github.com/ipfs/camp/blob/master/DEEP_DIVES/49-ipfs-and-guix.md), worked through open questions in the IPFS patch for Guix at [https://issues.guix.gnu.org/issue/33899](https://issues.guix.gnu.org/issue/33899)

*Note: In order to include as many voices as possible, this deep dive also included the participants from the Guix deep dive described at [49-ipfs-and-guix.md](https://github.com/ipfs/camp/blob/master/DEEP_DIVES/49-ipfs-and-guix.md).*

## Pain points and potential benefits
*See the links for images of these statements with dot ranking added.*

- **Pain point:** Dependencies

  1. Not being able to reproduce a known working set of dependencies at a later date
  
- **Pain points:** Security, verifiability and trust 

  2. Can’t confirm package contents are as originally published
  3. Hard to coordinate key-signing infra between maintainers
  
- **Pain points:** Reliability and availability

  4. Package releases get removed from registries
  5. Can’t install or build packages when you’re offline
  
- **Pain point:** Cost

  6. Hosting internal/private mirrors costs in both time and maintenance/infrastructure 

- **Potential benefit:** Ease of use

  7. Easier (and therefore less costly) to mirror a registry
  
- **Potential benefits:** Resource savings 

  8. Save bandwidth by reducing re-downloads
  9. Minimise storage requirements by de-duping contents
  
- **Potential benefit:** Performance

  10. Faster to download from IPFS-powered registries/mirrors
  
- **Potential benefits:** Offline availability

  11. Better resilience to network problems during installations
  12. Possible to install and verify packages when offline
  
- **Potential benefit:** Reproducibility

  13. Easy to declare/verify the provenance of everything you run
  
- **Potential benefits:** Forkability

  14. Users can easily fork existing registries
  15. Users can easily start their own registries
  
- **Potential benefits:** User-hosted

  16. Users can replicate and provide packages they care about
  17. Users automatically cache items that they rely on
  
- **Potential benefits:** Decentralised publishing

  18. Community doesn’t need to rely on centralised registries
  19. Users can publish directly to IPFS
  20. Not as many central points of failure — or of trust


## Key takeaways from ranking exercise
*Source: @achingbrain*

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
- Package creators care more about self-hosting than package users
- All participants liked the option to fork, but not very often -- it's most useful if need to modify software for yourself

## Guix patch notes that may be helpful in other package manager efforts
*Source: @momack2*

- Want executable bit
- Create an IPLD node with that metadata using CBOR with a pointer to package and whatever key values 
- Flexible and can get going right now 
- Add stuff normally to IPFS, then reference in JSON file with other metadata, then hash that and get a new root CID
- Easier because working in schema
- Add to unixfs v1 using metadata 
- If you make the file executable, is it a different file? Using unixfs metadata -- they'd be different
- Tar the result, send to IPFS, then chunk it
- Would need to improve chunker in go-ipfs
- Need to make the tar chunker reproducible
- When rebuilding the tarball out of IPFS, might not reconstruct the tarball metadata perfectly
- Take the gradual approach: This is smooth from user perspective, because can look at multiple registries
- Can do on a per-package basis
- Pin just the root instead of each at once

## Next steps
- Discuss the dot-rankings and how they might impact overall prioritization efforts on the package manager roadmap
