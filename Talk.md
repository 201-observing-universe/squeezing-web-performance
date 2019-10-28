# Performance talk

## Funny introduction to the topic

- common developer in 2019:
- need to figure out whether the object is empty or not? Huyax, zaebashim lodash with footprint of 24.3kb, slowing the shit out of it you know.




## So why do we need performance?


## Topic craft

Topic: Component Driven Development (CDD)
Are you a front-end developer? Have the term CCD hit you at any point of time recently? No matter you are the expert or a beginner in the front-end world, 7 Peaks kindly invite you to join our relaxing talk about CCD. Component-Driven Development or CDD has been around lately due to the emerging of a modularisation UI component, the patter that got introduces by a modern front-end library, React and Vue for example. This session we will discuss the benefits, use case and how to start to employ this new approach of UI development into your future project.

Topic: Squeezing Web Performance

Ever wondered what it takes to do create a performant web application? Is your website taking more than 5 seconds to load or Users complaining about the performance? It's not about the libraries, network speed or features. It all have to do with techniques and strategies you can apply to make it faster. Wanna know?
Join us at 7PeaksSoftware for the meetup evening where we'll explore how to improve said performance of your web app. We'll be talking about important metrics to reason about performance, discuss a checklist to go over, tooling techniques, such as code splitting and windowing, and more on how to squeeze your app performance resulting in improvement of your Google performance ranking from 20 to 90.


- intro
  - hi, I'm Dan
  - I work on React
- problems
  - wrapper hell
  - long components
  - fixing one makes the other worse
  - should we give up
    - lol mixins?
- crossroads
  - maybe we can't fix this
  - but what if we can?
  - we have a proposal
    - no breaking changes
- demo
  - state Hook
  - more than one state Hook
    - mention rules
  - effect Hook
  - effect cleanup
  - custom Hooks <----- "aha" moment
- recap
  - no breaking changes
  - you can try now
  - link to the rfc
- outro
  - make it personal
  - hook : component :: electron : atom
  - logo + "hooks have been here all along"

1. Don't use other libraries if they don't give you substantial advantage
- tooltip for instance, moment.js other stuff












Performance is always a trade-off with investors and managers who make money. They want this feature and this feature, and want it fast.

One thing you can try to raise in your company is emerging of indian markets in next 5 years, the mobile users can be increased drastically. That's why you need to think about performance a bit. If you don't - your competitors with better performance will take away your users in emerging markets.

So now you've got the permission to work on this stuff. What the hell you do next? I'm presenting you the web performance super-checklist.

0. Before we start, we need to think about what it means to have web performance. It's all about sending less assets. Less js, less images, less html and css. Less doesn't mean less features. Less only means less filesize. 
1. So have we can send less? Easy. Bundle splitting. First and the most important one. Most efficient way to do it is using Dynamic Imports.


1. Less assets
  - less js
    - minification (for free if you use webpack)
    - bundle splitting
    - get rid of libraries
    - tree-shaking
    - sending heavy computations to server + caching
    - ua-splitting
  - less css
    - split css (for free with emotion)
    - ua-splitting
  - less images
    - just don't send huge images
  - less everything
    - use compression, brotli
2. Less rendering
  - render lists with windowing technique
  - 
3. Proper rendering priorities
  - 

- what kind of performance I'm talking about
- rendering performance (fps, interactivity)
- page load performance (time took before interactive)


## talk notes

### less js
First step to send less js, minify the code. Now if you use webpack it comes out of the box if you set NODE_ENV or mode to production.
But then, if you include libraries from cdns to improve load performance, then you'd need to make sure to use minified versions of them.

So far pretty obvious, let's move to the less obvious techniques.

And we really don't know how it would perform on different setups and sites when we talking about splitting, so try it out for yourself. 

Live demo
- 




- intro
  - hi, I'm Ivan
  - I work on Front-end in 7peaks
- problems
  -