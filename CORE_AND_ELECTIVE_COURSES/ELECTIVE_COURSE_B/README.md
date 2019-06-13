# `Elective B`: Managing pinsets with IPFS Cluster

> A workshop on operating and using IPFS Cluster to orchestrate a common pinset among multiple IPFS nodes

## Trainers

| **Hector Sanjuan**                                    	| **Michelle Hertzfeld**                                	| **Adrian Lanzafame**                                  	|
|-------------------------------------------------------	|-------------------------------------------------------	|-------------------------------------------------------	|
| ![](https://avatars1.githubusercontent.com/u/1027022) 	| ![](https://avatars1.githubusercontent.com/u/4827522) 	| ![](https://avatars3.githubusercontent.com/u/5924712) 	|
| [@hsanjuan](https://github.com/hsanjuan)              	| [@meiqimichelle](https://github.com/meiqimichelle)    	| [@lanzafame](https://github.com/lanzafame)            	|

## What you will learn with this Course

This course will show use and administer an IPFS Cluster.

It will explore different ways of configuring and running IPFS Cluster peers, interacting with peers and integrating on top of them.

## Requirements

In order to take full advantage of this course:

* You will need to some familiarity with IPFS concepts (pinning, adding to IPFS, IPFS API)
* You will need some familiarity with libp2p concepts (peers, swarm)
* For the hands-on part, you need to be familiar with working on the command line, extracting tarballs and running binaries.
* A computer or laptop running go-ipfs will be necessary to install and play with IPFS Cluster. If you do not have it, you can pair with someone that has it.

## Workshop agenda

The workshop will proceed along the following milestones:

* **Introduction**: you will get a high-level introduction of IPFS Cluster
* **Installation**: you will learn how to install a Cluster Peer on your machine
* **Hands-on**: you will use your recently installed Cluster peer to form a cluster with the rest of participants and interact with it by pinning new things etc.
* **Cluster administration**: you will learn what you need to know to setup full clusters and the different ways of doing it
* **Cluster usage**: we will cover what the different commands to interact with a cluster do
* **Cluster APIs and integrations**: we will learn what programming interfaces a Cluster peer offers and see examples of how to integrate against them.

## Installation instructions

During the workshop, you will be asked to strictly follow the following
instructions to install and configure an IPFS Cluster peer. They are written
here so that you can easily display them on your computer and copy-paste
relevant parts.

0. Start your `ipfs` daemon (with the terminal or with IPFS Desktop should be ok).
1. Download `ipfs-cluster-service`:
   1. For Mac download: https://dist.ipfs.io/ipfs-cluster-service/v0.11.0-rc3/ipfs-cluster-service_v0.11.0-rc3_darwin-amd64.tar.gz
   2. For Linux download: https://dist.ipfs.io/ipfs-cluster-service/v0.11.0-rc3/ipfs-cluster-service_v0.11.0-rc3_linux-amd64.tar.gz
   3. For Windows download: https://dist.ipfs.io/ipfs-cluster-service/v0.11.0-rc3/ipfs-cluster-service_v0.11.0-rc3_windows-amd64.zip
   4. For other platforms check: http://dist.ipfs.io/ipfs-cluster-service/v0.11.0-rc3

2. Similarly, download `ipfs-cluster-ctl`:
   1. For Mac download: https://dist.ipfs.io/ipfs-cluster-ctl/v0.11.0-rc3/ipfs-cluster-ctl_v0.11.0-rc3_darwin-amd64.tar.gz
   2. For Linux download: https://dist.ipfs.io/ipfs-cluster-ctl/v0.11.0-rc3/ipfs-cluster-ctl_v0.11.0-rc3_linux-amd64.tar.gz
   3. For Windows download: https://dist.ipfs.io/ipfs-cluster-ctl/v0.11.0-rc3/ipfs-cluster-ctl_v0.11.0-rc3_windows-amd64.zip
   4. For other platforms check: http://dist.ipfs.io/ipfs-cluster-ctl/v0.11.0-rc3

3. Extract the downloaded `tar.gz` or `zip` files in a `cluster-workshop` folder. You should endup with something like:

```
cluster-workshop/
 ipfs-cluster-ctl
    ipfs-cluster-ctl
    LICENSE
    README.md
 ipfs-cluster-ctl_v0.11.0-rc3_linux-amd64.tar.gz
 ipfs-cluster-service
    ipfs-cluster-service
    LICENSE
    README.md
 ipfs-cluster-service_v0.11.0-rc3_linux-amd64.tar.gz

2 directories, 8 files
```

4. Open two terminal windows:
   1. Use one to navigate to the `ipfs-cluster-ctl` folder. i.e. `cd cluster-workshop/ipfs-cluster-ctl`.
   2. The second one to navigate to the `ipfs-cluster-service` folder. i.e. `cd cluster-workshop/ipfs-cluster-service`.
  
5. From the `ipfs-cluster-service` folder, run `./ipfs-cluster-service init`.
   1. Cluster will now write a default configuration and generate a peer identity
   2. Navigate to the `~/.ipfs-cluster` folder using your file browser or a
  new terminal. You should see an `identity.json` and a `service.json` file in
  this folder.

6. Open and edit the `service.json` file with an editor of your choice:
   1. Find the `crdt` section and edit the `trusted_peers` value to `[ "*" ]`.
   2. Change the value of `secret` to `""` (empty). It should look like:

```
{
    "cluster" {
    ...
    "secret": "",
    ...
    },
    "consensus": {
        "crdt": {
            "cluster_name": "ipfs-cluster",
            "trusted_peers": [
                "*"
            ]
        },
        ...
    },
    ...
}
```

7. That's all! From this point you can follow the instructions from the workshop slides!
