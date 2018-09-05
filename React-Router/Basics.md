# Basic Components

## Routers
At the core of every React Router application should be a router component. For web projects, react-router-dom provides <BrowserRouter> and <HashRouter> routers. Both of these will create a specialized history object for you. Generally speaking, you should use a <BrowserRouter> if you have a server that responds to requests and a <HashRouter> if you are using a static file server.
  
  Server Rendering
Rendering on the server is a bit different since it’s all stateless. The basic idea is that we wrap the app in a stateless <StaticRouter> instead of a <BrowserRouter>. We pass in the requested url from the server so the routes can match and a context prop we’ll discuss next.
