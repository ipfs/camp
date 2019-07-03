# Revocation/Rotating of IPNS Keys

The idea of using a public key to identify mutable data is cool, but what happens when that key becomes compromised?

Peer to peer systems (IPNS, DAT, SSB, etc.) rely on public keys to identify peers as well as mutable data streams, but there doesn't seem to be a strong user story for what happens when those keys are deemed no longer secure (e.g. RSA-1024 no longer deemed secure, discovered bug in RNG used to generate keys, laptop stolen...). Most approaches involve some amoun

## Goal

- Good user experience around revocation and rotation of IPNS keys such that users are not discouraged from best practices around upgrading/rotating their keys
- Increased user security by not interacting with or loading IPNS content from compromised keys that the author has flagged as compromised

## Requirements to consider

- Eventually consistent (i.e. once a revocation makes eventually makes its way around the network it should be clear a revocation occurred)
- UX
  
## Team

* [@smihaylov](https://github.com/smihaylov)
* [@adria0](https://github.com/adria0)
* [@jonnycrunch](https://github.com/jonnycrunch)
* [@eshon](https://github.com/eshon)
* [@aschmahmann](https://github.com/aschmahmann)

## Presentation

🎤 [Slides](https://docs.google.com/presentation/d/105KwT6ZmcneywGnvUyww5y-u_GHSY0FFQ0yIXZQf7Y0/edit#slide=id.g5c6a5171f6_0_144)

## Notes

###  Problem statement

- So much is reliant on the security of the control of the IPNS keys
- How do we declare that a particular key has been compromised, lost and just updated? 
- How do we update and rotate a key to a new key? 
- There is no sense of time in the DWeb 

#### Why are we updating the key? 

1. Machine has been compromised ( thief may also rotate keys )
2. Good housekeeping to rotate the keys 
3. Lost your key and want to be safe ( not in scope )

#### Zooko's triangle 
- non-consensus, uniqueness, human-readable 

### Top Solutions

**TODO**
- ZkSnark of Revocation proof?
- Consensus within a smaller namespace???

### Solutions

###### What happens when you invalidate your IPNS record?
- Set the incrementer to max integer & Set the (Validity/End of Life) EOL to infinity.  
- Wait out the EOL and 
- Set a validity code to zero to indicate revoked
- Sequence number is smallest way to represent single user DAG of history


###### Automated Group Signatures / Proxy Signatures / Vault
- multi-signatures, m of n keys, Shamir is not good for signatures
- group signature in DNS - currently 9 signers do signing ceremony every year
- BLS12-318 threshold signatures 2/3 to generate the signature


###### Using a blockchain for consensus
- lightweight version uses a blockchain to anchor a chain periodically
- requires blockchain primitives and latency of blockchain consensus
- multi-writer validators or challengers (token-curated registries/staking) or auctions
- or any community that listens to the updates and gossips about updates to IPNS records and tries to reach consensus
- move everything to the new bunker ( hermit crab with signed history )
- global ordering so easy to move to new key and give up on old
- generalized solution is collect more info or use another system to reach consensus


###### "It's turtles all the way down" 
- key protecting a key protecting a key protecting a key
- problem always boils down to a single piece of secret information


###### Consensus within a smaller namespace
- non-unique names and non-global namespaces
- find consensus within a smaller community
- everyone has an addressbook


###### List of revoked keys
- DNS Link can point to this list but then trust moves to DNS
- using DNS_link sign the value of <cid> with the private key of the IPNS ( not available to all that don't use DNS )


###### Keep alive or previous flag
- need to periodically sign IPNS record as proof of life ( proof of key ownership )
- 2 new field that includes `previous` and `set revoke`, even if a malicious actor has access, as long has you can write once and set to revoked, the check whether valid = 0 ever existed in any previous entry.  


#### ZkSnark of Revocation proof? 
- master key + operational keys - Alabama maze problem
- pre-derived certified chain of rotation keys based on master key with derivations hidden by zkSnarks
- Benefits: pre-rotation can provide time/global ordering and solves how to rotate keys after keys are compromised 
- Options:
    * pre-rotation of keys with pointer to next key in the chain and don't publish it until- record is updated at which time you create a new key.  
    * prerotation with a higher key in HD wallet and prove key is ancestor of derived key that was compromied. 
    * ZKsnark 
    * pre-rotation with pointer to hash of next key, but it isn't published to the next key.  

###### Quantum leaps
* quantum entagled photons ( which uses `lazers` )
  
  
###### IPNS x DHT is also slow
- multi-writer support for multiple writers (multiple devices) and dag sync with history https://github.com/ipfs/notes/issues/379



#### Notes 
- there is a bug in the documentation that doesn't state that the signature includes the sequence number 
- "it's turtles all the way down" key protecting a key protecting a key protecting a key 
- just present user all the options?
  



### References

https://github.com/jonnycrunch/ipid/issues/4#issuecomment-503897437
