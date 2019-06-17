## Cookies?!? What do you mean?
A web cookie is a small bit of text that is sent to your browser by a server. A cookies purpose is to carry bits of useful information about your interaction 
with the website that sets them. The browser may store it and send it back with the next request to the same server. 
This way, the server can distinguish whether two requests came from the same browser.

* Remember your settings on a website. Example Sites like Flipkart remember where you left off the shopping cart.
* To understand how you and other users are using the site. Sites like Medium uses cookies to how much time a user spent on a article. 
* Authentication services. 


## What are cookies used for?

HTTP Requests are Stateless, meaning server does not know about your past request. All requests by your browser are considered as a new one.

### How to maintain state?
 For the very first time, you login to a website and search. You will get search results for your request. 
When you search again, do you login again? If HTTP is stateless, then you should login again. No? But we don’t login again. 

This can be achieved by setting the cookiee and Seesion.

## How this Works:

1. The very first request to the server from a browser, the HTTP request will not have a cookie value. 
So server will set a new cookie for that browser session and sends it back with the response. So the browser will store the cookie for that domain.
2. In next request, the cookie info is set in the header request and sent it to the server. 
3. If the sent cookie ID is present in the server, It will use the session indicated by the browser.


## Difference between Cookie and Session.

### Cookie is a bit of data stored by the browser and sent to the server with every request.

### Session is a collection of data stored on the server and associated with a given user.

