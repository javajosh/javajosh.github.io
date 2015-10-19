#SVG Thing

##Overview

SVG Thing is interactive documentation for SVG. It comes about because I wanted to work seriously with [D3](http://d3js.org/) but kept forgetting attributes and values for common SVG constructs.

Another goal is to publish a simple page with github-pages, and generally pin-down a simple text-based workflow for publishing through github.

Eventually, I'd like to spruce up the work-flow to use something like Brunch, and once I get a workflow I like, I can work it up in a different way, and fork.

First things first, let's get some content!

### Why SVG?

Many people might wonder, why SVG? Because people will reinvent SVG within Canvas. Because SVG, or something like it, is the lowest entropy description of a screen that is general enough to describe "text-filled diagrams".

If UI's are fundamentally text positioning (and I think they are!) then why even bother with SVG? Why not just use absolutely positioned p tags? This simple answer is that if your dynamism is low enough, then you could draw a background, position your p tags over spaces in that drawing, and have a lovely user interface.

So what UI's have become are much more than positioned text. They are much richer environements where multiple systems watch what the user does and attempts to assist them - with animations, autocompletions. There is usually the notion of "focus" built-in.

SVG is incredibly powerful, but it's a large language that is difficult to debug, and this has hindered it's adoption.

