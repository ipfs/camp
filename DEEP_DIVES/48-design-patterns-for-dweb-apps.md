Textile, lower the permission and roles system from ~15 methods to 2
Also did that on a number of large scale apps throughout the years.

# Design Patterns for DWeb Apps
UX/design workshop. Pick any difficult IPFS problem. We'll draft a simple, ready to implement solution.

## Goal
The goal is something ready to code for an update.
I've done this exercise with the Textile team, where we changed the permissions and roles model from ~15 cases to 2. Tons of code and education saved!
Intend to achieve the same with another app during this workshop.

## Requirements to consider
Have a problem that requires UX/design thinking!

## Where to learn about it
Lots and lots of UX resources!
https://uxplanet.org/how-to-radically-simplify-your-product-727a1321bb56?gi=c71f3512bc4e
and
https://www.interaction-design.org/literature/article/simplicity-in-design-4-ways-to-achieve-simplicity-in-your-designs
are a good start.

## Team

* [@leshokunin](https://github.com/leshokunin)
* [@AquiGorka](https://github.com/AquiGorka)
* [@cesarosum](https://github.com/cesarosum)
* [@aksanoble](https://github.com/aksanoble)
* [@vrortvedt](https://github.com/vrortvedt)
* [@makoto](https://github.com/makoto)

## Presentation

🎤 [Slides](https://docs.google.com/presentation/d/105KwT6ZmcneywGnvUyww5y-u_GHSY0FFQ0yIXZQf7Y0/edit#slide=id.g5c8d7f2770_17_14)

## Notes

### An outline of user testing

Here's the process we went through to come up with a list of potential improvements for an app.

#### Introduction to Design Thinking

@leshokunin gave the group an introduction to the core ideas in Design Thinking and took us through the design process used at Stanford Design School.

#### First impressions

Everyone was asked to thank about "what is this for?", and comment on their expectations while navigating through the app 

#### How should it work? What are the jobs to be done?

After first impressions, everyone was asked to consider how the app should work and what jobs it should perform for them. Users either described the workflow and features they want and some drew pictures to illustrate aspects of what they wanted. 

#### Solutions

From the above considerations, we distilled features and then brainstormed how we could implement these features with as little code as possible in order to deploy them quickly. Features were ranked by cost of delay (low cost of delay --- not implementing the feature would not result in an adverse result vs high cost of delay --- delaying implementation of the feature would significantly affect adoption, revenue etc.). The challenge was always to try and make the solution simpler while still remaining effective.

#### Summary 

The process above was super-helpful in understanding how user experience can diverge from the developer's design and intentions.

### Peergos user testing

Four interplanetary campers (@aksanoble, @makoto, @aquigorka, @vrortvedt) had a go at using Peergos for the very first time on both mobile and web. Here are the results of the user testing.

#### Impressions

1. It's a thing for uploading files
2. It's to upload any file.
3. Didn't look a photo gallery (not file specific)
4. Not for music
5. For very private but somehow also public
6. For small content (because of small allowance)
7. Kind of like Pastebin
8. It's for data that you care about, 
9. No other service needed.
10. Encrypted, difficult to hack.
11. Dropbox equivalent.
12. Is it for sharing or is it for backup?

#### How should it work and jobs to be done

@aquigorka

1. Should be as seamless as going into any browser and dragging and dropping between file browser.
2. Context menu -- when you right-click 
3. Open with native application when opening in Peergos.
4. Moving large files should show a progress bar.
5. Only people who you've shared the folder with could read/write to the folder.
6. Dropbox without Dropbox.

@aksanoble

1. Immediately share content with someone over a LAN (Dropbox for LAN)
2. Find a name for someone nearby, click send, they go to a page and can then download it immediately (encrypted on the way).
3. Mesh network solution

@vrortvedt

1. Sharing securely - it first tells me that I am in a safe environment. Need a visualization of "safety". Files are transformed and given a logo. 
2. When it is sent, something that shows it was shared securely. 
3. Visual optionality of being able to retract.
4. Has the recipient received it?
5. OK when uploading should be 'Dismiss'

@makoto

1. Some visual handshake to verify that the person you are sharing with is who you think they are. 
2. Some verification task?
3. Would probably end up verifying over some channel before sharing.
4. Need a shibboleth
5. Finds Keybase super-annoying (can copy text but can't take a screen shot)

@leshokunin

1. Visualizations of encryption, manifest of what has been shared.
2. Key folder.

#### Solutions

##### Triage

Four options ranked by cost of delay:

1. Drag and drop (8)
2. Mesh network sharing (3)
3. Everything is visually super-encrypted. (7)
4. Sharing and interactively verification (people would pay money for this). (9)

Potential solutions for verification (number 4):

1. Diffie Hellman authentication
2. Swap public keys over email, chat
3. Generate a 4 digit PIN and send it to that person over another channel. Verify that your follower has received it before your confirm your would like o
4. Send a link for the person to accept the follow request.
