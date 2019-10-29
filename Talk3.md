We need 1,2,3,4,5,6,7 techniques
And some use-cases
Maybe use-cases are better.
Let's try with use-cases.

Show image of browser timeline

TODO:
who is this for
finish slides
couple of dry runs behind my pc
test run

Case: Styling
    - bootstrap is very handy, tho you can do everything in flex and grid, they have a learning curve, but it's quite
    easy to build interfaces with these technologies, 
        - when we're squeezing the performance, we need to give up on bootstrap and any big frameworks
            - bootstrap comparison picture & jquery comparison picture
        - react even, there's preact available
            - react vs preact bundle comparison picture
            - caveat
    - images, just don't send big images
        - comparison picture with image on the page and actual size
Case: Features like xml-parsing, pdf-constructing
    - just handle this functionality on server-side
        - bundle comparison picture (255kb vs 0kb)
        - remark on the bundle splitting and dynamic imports
            - use react-loadable or react-universal-components
            - use webpack split chunks plugin, though I'd recommend using dynamic import libraries mentioned above
Case: Rendering huge list
    - example thousand of cat images/facebook feed, slack feed
    - use react-window or react-virtualized
Vastly Different features between mobile and desktop versions 
    - use two different bundles for desktop and mobile and send them separately depending on user-agent
    - now this is quite complicated webpack setup, but it's possible and it gives us much needed performance gain.

Easy, but minor performance gains
    - async, defer clause
    - preload, prefetch
    - html-caching
    - send only needed data to your components, save on kilobytes of data

Infrastructure
    - i will just touch the topic, since we don't have much time
    - things like nginx caching, cloudflare (the easiest way to have http2 as of now)
    - reducing server response time, things like redis caching layer on backend
    - and so on