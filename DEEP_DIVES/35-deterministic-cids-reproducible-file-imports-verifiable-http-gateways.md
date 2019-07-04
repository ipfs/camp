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

 ## Team

- [@lidel](http://github.com/lidel)
- [@drbh](http://github.com/drbh)

## Presentation

🎤 [Slides](https://docs.google.com/presentation/d/105KwT6ZmcneywGnvUyww5y-u_GHSY0FFQ0yIXZQf7Y0/edit#slide=id.g5c6a5171f6_0_265)

## Notes

### Problems 

- Reproducing CID requires ipfs add params  
- Client trusts HTTP Gateway to return valid payload  
- Cannot revive dead link without knowledge of input params  
- Default params can/will change  
- New params can be added  
- Param space is really really really big  

Due to limited time we focused on archival use case and unixfs/files.  
We produced some solutions for Reproducible CIDs

#### Growing parameter space of `ipfs add`

`ipfs add --hash A --chunker B  --cid-version n [--trickle] [--raw-leaves] [--inline-limit] [--something-new]`

Solutions:

- (A) remove parameters, make things deterministic
- (B) improve UX of reading and passing entire parameter space 
  - `ipfs add --fmt fmtstr`

####  Reproducible Archives

> a way to do specify parameter space for ipfs add that is guaranteed to produce the same CID even if defaults change (package managers and other use cases that require convergence of past and future identifiers)
  
Solutions:

- (A) Archive creator can pass explicit parameters every time `ipfs add` is called 
  - Question: what happens when new one is added?
- (B) Reproducible File Imports (parameter metadata embedded in unixfs-v2 - [ipfs/unixfs-v2/issues/15](https://github.com/ipfs/unixfs-v2/issues/15))


#### Data Preservation 
 
> ability to "revive" dead IPFS links even if the original DAG is not available anymore on the network
  
 Soution:
 
 - we could support some sort of best-effort heuristic
   - metadata from unixfsv2 if possble
   - we can try known historical defaults
 - prototype: add `ipfs add --expected-cid CID file.jpg` 
    - tries to recreate DAG that hashes to provided CID or trows an error if does not have enough data to do that 
      - if there is access to IPFS network, we can look for root block and fetch it to get metadata from unixfsv2
        - useful when we want to revive "partially dead" DAGs 
      - tries to build a DAG matching CID using known historical defaults 
    - throw an error if it was not possible to reproduce DAG matching provided CID 
  
#### Data Validation and HTTP Gateway Response Verification

> being able to confirm that payload returned by a HTTP Gateway is matching requested CID without running full IPFS node

Solution:

- http gateway could detect the presence of DAG parameter metadata in unixfsv2
- if missing then fallback to matching one of known defaults (logic shared with `ipfs add --expected-cid CID file.jpg`)
- return metadata it in HTTP Header
- client can use it to build DAG and calculate CID for verification without running IPFS node 


#### Interop

> how to handle old data without `[the thing]`

Solution: 

- see "try historical defaults" in  `--expected-cid` idea above
