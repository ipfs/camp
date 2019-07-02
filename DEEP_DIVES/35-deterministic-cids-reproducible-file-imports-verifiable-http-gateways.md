# Deterministic CIDs! Reproducible File Imports! Verifiable HTTP Gateways!

- How to deterministically get the same CID for the same data, even if `ipfs.add` defaults change or a custom chunker/hash was used?
- How can we validate data read via HTTP Gateway without running full IPFS node?

## Goal

- Identify possible solutions
- Map how they overlap with listed requirements
- Produce suggestions for next steps

## Requirements to consider

- Archival: a way to do specify parameter space for `ipfs add` that is guaranteed to produce the same CID even if defaults change (package managers and other use cases that require convergence of past and future identifiers)
- Data Preservation: ability to "revive" dead IPFS links even if the original DAG is not available anymore on the network
- Data Validation: being able to confirm that payload returned by a HTTP Gateway is matching requested CID without running full IPFS node
- Interop: how to handle old data without `[the thing]`

## Where to learn about it

- Reproducible CID ([multiformats/cid/issues/22](https://github.com/multiformats/cid/issues/22))
- Reproducible File Imports ([ipfs/unixfs-v2/issues/15](https://github.com/ipfs/unixfs-v2/issues/15))
- Verifiable HTTP Gateway Responses: ([ipfs/in-web-browsers/issues/128](https://github.com/ipfs/in-web-browsers/issues/128))
- Prioritizing unixfs-v2 ([ipfs/roadmap/issues/19](https://github.com/ipfs/roadmap/issues/19))


## Graphical interlude

![](https://i.kym-cdn.com/photos/images/original/001/077/550/1d9.jpg)


# Deep Dive Notes

About session: [deterministic-cids-reproducible-file-imports-verifiable-http-gateways.md](https://github.com/ipfs/camp/blob/master/DEEP_DIVES/35-deterministic-cids-reproducible-file-imports-verifiable-http-gateways.md)


## Team
@lidel @drbh

## Problems

- Reproducing CID requires ipfs add params  
- Client trusts HTTP Gateway to return valid payload  
- Cannot revive dead link without knowledge of input params  
- Default params can/will change  
- New params can be added  
- Param space is really really really big  

## Proposed Solutions

### Growing parameter space of `ipfs add`

`ipfs add --hash A --chunker B  --cid-version n [--trickle] [--raw-leaves] [--inline-limit] [--something-new]`


###  Reproducible Archives

> a way to do specify parameter space for ipfs add that is guaranteed to produce the same CID even if defaults change (package managers and other use cases that require convergence of past and future identifiers)
  
- hardcoding explicit parameters 
  - what happens when new one is added?
- Reproducible File Imports (parameter metadata embedded in unixfs-v2)
- `ipfs add --fmt fmtstr`



### Data Preservation 
 
> ability to "revive" dead IPFS links even if the original DAG is not available anymore on the network
  
 -  track default parameters over time 
 	- add `ipfs add --recreate CID file.jpg` 
      - uses parameter space from CID root (if available)
      - brute-forces CID using known historical defaults ([ipfs-catify](https://github.com/MichaelMure/ipfs-catify)-style))
  
  
### Data Validation and HTTP Gateway Response Verification

> being able to confirm that payload returned by a HTTP Gateway is matching requested CID without running full IPFS node


- detect parameter space metadata in unixfsv2, if missing then fallback to matching one of known defaults 
  - A) use it to calculate CID for verification
  - B) return it in HTTP Header


### Interop
  > how to handle old data without `[the thing]`

(see `--reproduce` idea above)