# `Elective E` Deploying IPFS Infrastructure

> Take your IPFS game to the next level by learning how to deploy and manage your very own IPFS node in the cloud.

## Trainers

| **Matt Ober**                                      	| **Michael Burns**                                     	| **Jakub Sztandera**                      	|
|----------------------------------------------------	|-------------------------------------------------------	|------------------------------	|
| ![](https://avatars2.githubusercontent.com/u/7811297) 	| ![](https://avatars2.githubusercontent.com/u/5170) 	| ![](https://avatars3.githubusercontent.com/u/2259282)                     	|
| [@obo20](https://github.com/obo20/)                	| [@mburns](https://github.com/mburns)                  	| [@kubuxu](https://github.com/Kubuxu) 	|

## What you will learn with this Course

* How to deploy an IPFS node using a cloud provider
* How to configure that node for your specific use case
* Tips and tricks for running IPFS infrastructure in the cloud

## Digital Ocean Account
For this course, you can either:

* Sign up for an account preloaded with $50 in free credits with this link: https://do.co/pinata - (Requires a credit card but you won't be charged)

* Use a community account we'll provide during the course


## Course walkthrough / commands

The following commands are provided for easy copy / pasting during the node deployment part of the course. During the course, we will go over when and why to use these commands when setting up your infrastructure.

### SSH Setup
#### Creating your SSH key with OpenSSH
1) Open up your terminal
2) Type in `ssh-keygen`
3) Hit enter to accept the recommended default path. *DO NOT CHOOSE TO OVERWRITE IF A KEY ALREADY EXISTS*
4) Optionally provide a password to require each time you use your key or just hit enter twice to avoid requiring a password

#### Copying your SSH key
To copy your SSH Key, do either of these:

* Type: `cat ~/.ssh/id_rsa.pub`
* Travel to your public key with: `cd ~/.ssh/id_rsa.pub` and open the file to copy the contents

( The above instructions are assuming your key is saved in the default location )

### Connecting to your droplet
In your terminal type: `ssh root@your_droplet_ip`

( You'll need to type `yes` when ssh-ing into your node for the first time )

You should now be connected to your droplet!

### Updating your droplet
Now, in your terminal type:
1) `apt-get update`
2) `apt-get upgrade`

    2.1. If you get a pink screen asking whether to automatically restart, hit `LEFT ARROW` and then `ENTER`

    2.2. If you get another pink screen asking for a confirmation, hit `ENTER`
  
3) `apt autoremove`
4) `shutdown -r 0`

Your droplet should now be updated and rebooted.

### Securing your droplet

### Installing IPFS

#### Installing IPFS-update
In your terminal:
1) Download ipfs-update with: `curl -O https://dist.ipfs.io/ipfs-update/v1.5.2/ipfs-update_v1.5.2_linux-amd64.tar.gz`
2) Unzip it with: `tar -xzf ipfs-update_v1.5.2_linux-amd64.tar.gz`
3) Go into the ipfs-update folder with: `cd ipfs-update`
4) Install ipfs-update with: `./install.sh`

#### Use IPFS-update to install IPFS
1) Install the latest ipfs version with: `ipfs-update install latest`
2) Initialize ipfs with `ipfs init --profile server`
3) Check that IPFS was installed with: `ipfs daemon`
4) Hit `CTRL + C` to end the process

### Keeping IPFS running

#### Create a system service
1) Create a system service with: `nano /etc/systemd/system/ipfs.service`
2) Enter the following instructions:
```
[Unit]
Description=IPFS Daemon
[Service]
ExecStart=/usr/local/bin/ipfs daemon --enable-gc
Restart=always
Environment="IPFS_PATH=/root/.ipfs"
[Install]
WantedBy=multi-user.target
```
3) Save your new service by hitting `CTRL + X`, then `y`, then `ENTER`

#### Enable the system service
1) Reload your system with: `systemctl daemon-reload`
2) Enable your new service with: `systemctl enable ipfs`
3) Start your new service with: `systemctl start ipfs`
4) Test that this succeeded with: `systemctl status ipfs`

### Let's try pinning something
1) In your terminal type: `ipfs pin add -r QmWcLKHWqrRB95zQnb4vX8RRgoGsVm5YAUHyZyiAw4mCMQ`
2) Now in your browser go to http://yourDropletIp:8080/ipfs/QmWcLKHWqrRB95zQnb4vX8RRgoGsVm5YAUHyZyiAw4mCMQ

## Bonus written guide for attendees to refer back to
https://medium.com/pinata/how-to-deploy-an-ipfs-node-on-digital-ocean-c59b9e83098e
