# OpenMyGarageDoor

### The Idea:
We want to be able to open our garage door with a Web app because the remote is lame.
We also want the Web app to be built with adequate security posture so that the car won't get stolen.

## The Frontend:
The frontend is going to be built from React with TypeScript and uitilise MUI components.


## The Backend:
The backend is going to be built with Node.js that runs on a server.

We could easily just run a single backend on the Pi which directly controls the Garage Door. This raises some security concerns for us though. Since it is on our home network, this would be exposing our home IP on the frontend of the App. By using this backend as a proxy of sorts, we can offload a large amount of the processing to a cloud server, while hiding our IP and avoid using the Pi to make database quires. This keeps all parts of the project seperate and more secure.


## The Pi Backend:
The Pi-end is going to run Flask.
