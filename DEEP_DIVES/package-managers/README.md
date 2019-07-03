# Package Managers Deep Dive: Writeup and Notes

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
- [Walked through the group's roadmap](https://github.com/ipfs/camp/blob/master/DEEP_DIVES/package-managers/IPFS%20Camp%20Package%20Managers%20Deep%20Dive.pdf) for next steps in 2019
- Discussed and ranked key pain points in the current package manager landscape that could be solved by incorporating IPFS, as well as potential benefits presented by IPFS-enabled package managers
- In conjunction with [Pierre Niedhardt](https://github.com/ambrevar)'s [deep dive on problem solving for IPFS and Guix](https://github.com/ipfs/camp/blob/master/DEEP_DIVES/49-ipfs-and-guix.md), worked through open questions in the IPFS patch for Guix at [https://issues.guix.gnu.org/issue/33899](https://issues.guix.gnu.org/issue/33899)

*Note: In order to include as many voices as possible, this deep dive also included the participants from the Guix deep dive described at [49-ipfs-and-guix.md](https://github.com/ipfs/camp/blob/master/DEEP_DIVES/49-ipfs-and-guix.md).*

## Pain points and potential benefits
*See the links for images of these statements with dot ranking added.*

- **Pain point:** Dependencies

  1. [Not being able to reproduce a known working set of dependencies at a later date](dependencies-laterdate.jpg)
  
- **Pain points:** Security, verifiability and trust 

  2. [Can’t confirm package contents are as originally published](security-aspublishedbyauthor.jpg)
  3. [Hard to coordinate key-signing infra between maintainers](security-keysigning.jpg)
  
- **Pain points:** Reliability and availability

  4. [Package releases get removed from registries](reliability-packagesremoved.jpg)
  5. [Can’t install or build packages when you’re offline](reliability-offlineavailability.jpg)
  
- **Pain point:** Cost

  6. [Hosting internal/private mirrors costs in both time and maintenance/infrastructure](cost-mirroring.jpg) 

- **Potential benefit:** Ease of use

  7. [Easier (and therefore less costly) to mirror a registry](easeofuse-mirroring.jpg)
  
- **Potential benefits:** Resource savings 

  8. [Save bandwidth by reducing re-downloads](resourcesavings-reduceredownloads.jpg)
  9. [Minimise storage requirements by de-duping contents](resourcesavings-dedupe.jpg)
  
- **Potential benefit:** Performance

  10. [Faster to download from IPFS-powered registries/mirrors](performance-speed.jpg)
  
- **Potential benefits:** Offline availability

  11. [Better resilience to network problems during installations](offlineavailability-networkproblems.jpg)
  12. [Possible to install and verify packages when offline](offlineavailability-install.jpg)
  
- **Potential benefit:** Reproducibility

  13. [Easy to declare/verify the provenance of everything you run](reproducibility-provenance.jpg)
  
- **Potential benefits:** Forkability

  14. [Users can easily fork existing registries](forkability-forkregistries.jpg)
  15. [Users can easily start their own registries](forkability-startregistries.jpg)
  
- **Potential benefits:** User-hosted

  16. [Users can replicate and provide packages they care about](userhosted-favoritepackages.jpg)
  17. [Users automatically cache items that they rely on](userhosted-caching.jpg)
  
- **Potential benefits:** Decentralised publishing

  18. [Community doesn’t need to rely on centralised registries](decentralizedpub-fewercentralregistries.jpg)
  19. [Users can publish directly to IPFS](decentralizedpub-publishtoipfs.jpg)
  20. [Not as many central points of failure — or of trust](decentralizedpub-fewercentralpoints.jpg)


## Key takeaways from ranking exercise

For the dot-ranking exercise, we discussed each of the 20 pain points/potential benefits individually, but focused the discussion on the items in which the dots were divergent between participants. Since our participants came from a variety of backgrounds and areas of focus -- particularly in that we had a mix of package manager users of various backgrounds and preferred languages, as well as a package manager maintainer -- the most interesting nuances were to be found in the areas where opinions differed. See the below for key takeaways.
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

## UnixFS v1.5?

Hands down our most requested feature from package manager maintainers is to add persistent metadata to UnixFS files.  There is an unused [metadata](https://github.com/ipfs/js-ipfs-unixfs/blob/master/src/unixfs.proto.js#L22-L24) construct in the spec but implementing it would have the side-effect of changing the file's CID when it's metadata changes.

Building on @hsanjuan's suggestion we could enable the majority of use cases by creating a dag-CBOR node that contains unstructured metadata and a link to a UnixFS file.  Call it UnixFSv1.5.

The `content` linked to could be a UnixFSv1 file/dir/hamt/whatever which also gives users an upgrade path without having to re-encode all of their data:

```javascript
{
  mtime: 1561879007581
  perm: '0777',
  // ... more metadata here
  content: {
    '/': 'Qmfoo' // link to a UnixFSv1 file or dir or hamt or cbor, etc..
  }
}
