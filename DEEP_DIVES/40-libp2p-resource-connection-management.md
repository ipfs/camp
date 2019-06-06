# libp2p resource/connection management

When you lose the server/client roles and networks become collaborative, the volume of peering increases, and so does connection count. This can kill residential routers. We have a rudimentary connection manager that keeps connection count within bounds, but we are conceptualising connection manager v2 with things like protocol quotas, burst modelling, and lazy scoring. Help us navigate the design choices we have to make!

## Goal

<Define what we would get if the Open Problem(s) are solved for this Deep Dive>

## Requirements to consider

<Do we have requirements (i.e. work with 1MM nodes)?>

## Where to learn about it

<List of talks, links to github issues, code, notes and so on>
