# IPFS metrics and usage statistics

## Problem space
1. Certain user groups (such as scientific research organizations, and binary/library package managers) will not adopt IFPS unless they can track metrics and usage statistics in as good or better ways as they do today. Today, download count is used as a proxy for usage. How could IPFS provide even better metrics/stats?
1. How are applications using IPFS features today? How are those applications themselves being used?

## Goal
By the end of the session, we'd like to have a prioritized list of features that would most help applications built on top of IPFS, and provide that list to the IPFS development team to help focus their time and energy on highest-value work.

## Open problems around IPFS metrics and usage statistics
- Collection Logistics
  - How to collect telemetry-like application metrics and usage in a distributed world?
  - Is metric collection done by a separate kind of IPFS node? If so, who runs these collector nodes?
- Storage Logistics
  - Where do the collected metrics go?
  - How is the metrics datastore accessed? 
  - Who can access this metrics datastore? 
- Meaningful Statistics 
  - What information can we reliably extract from the network?
    - How to determine the distribution of a file across the network?
    - What is the average lifetime of a file on IPFS?
  - What statistics become meaningless or impossible to measure in the context of IPFS?
    - What is the download count of a file?

## Considerations
- Telemetry collection MUST allow for opting out, ideally though, it should be opt-in
- Metrics should be meaningful, or at least a proxy for something meaningful, and if all else fails, it should be understood where certain metrics fall short in conveying meaning[^1]
- Increased traffic on the IPFS network, a certain amount is acceptable but there is a limit

## Where to learn about it
- https://github.com/ipfs/package-managers/issues/6
- https://github.com/ipfs/notes/issues/107
- https://github.com/ipfs/ipfs-gui/issues/33
- https://github.com/ipfs/go-ipfs/issues/5912
- https://github.com/ipfs/integration-mini-projects/issues/14
- https://github.com/whyrusleeping/ipfs-counter

[^1]: https://github.com/ipfs/integration-mini-projects/issues/14#issuecomment-495279240
