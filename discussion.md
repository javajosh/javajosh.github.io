Publishing Projects (on Github pages)
====================================
Josh Rehman 5.23.2016

#Introduction 

Sharing multiple independant projects through Github pages is a surprisingly subtle problem. This is a discussion of this issue.

# Github pages basics

It is quite simple to publish a static website with Github Pages. You follow some simple setup steps, then build out your site in the way you like it, then you publish, and it's live. It is a fundamentally *declarative* way to write the site, as you create the resources as they are seen by Github's web server process. It follows the usual rules with static sites.

This works really well for a single coherent site, either an SPA or a more traditional site. A problem arises when you have multiple projects, and wish to publish them not as a top-level URL but rather 

# Publishing independant experiments.

Consider two independant pages on the same site. This would be the case if they are stand-alone experiments. There would need to be a third that gives the user access to the other two pages, often called an "index".

/index.html

/p1/p1.html
/p1/p1.js
/p1/p1.css

/p2/p2.html
/p2/p2.js
/p2/p2.css

Refactoring the web.
Refactoring is reversible. No information is lost.
Refactorings have a build-time and runtime cost, which includes time and risk.


Goals and constraints:

Minimize initial load time.
Minimize total load time.
	Page weight
	Resource tricks.
	Minimize bandwidth usage
Maximize availability
	Keep it simple - reduce moving parts.
Maximize compatibility.
Maximize device capability.
	Tension with compatibility, polyfill.
Maximize meaningful representation
	Accessability
Maximize visual control (tension with semantic)
	Fonts, layout, images
	Pixel Perfect
Maximize engagement
	Site-coherence, 
		navigation, Site-map. Visualization, pan and zoom.


Start with a document. A document has 3 parts: markup, styles, and code. Common refactorings: 

1. Extract resource. Move part of the document into it's own file, and add markup that causes the resource to be integrated at runtime. (opposite: integrate resource).
2. Delegate resource. Similar to 1, particualrly useful for common resources. Adds to runtime complexity (increases moving parts); minimizes bandwidth usage. CDN, hot-linking.

There are different kinds of documents:

1. A human-written story. This is the traditional use of the web.
2. The momentary state of a server program.
3. A client-side program.
	a. Stand-alone, like a game.
	b. Expressing the state of a server program. Usually with XHR and client-side rendering.


The SimpatiCore document model. If we can abstract what a document is, then we can model document creation. This allows us to model the document as a sequence of changes.








The starting point for the web is the URL which is loaded into the browser as a resource. This resource is usually an HTML file. HTML is an interesting format because it is inherently polyglot, supporting document markup, a style langauge, and arbitrary computer code. 

In the simplest case, all pages are canonically hosted in the same repo. Modifications to p1, p2 and the index 

Really what we need is a small program that integrates multiple branches, repos, or both into a working copy. This is similar to a static build tool, except it's scope is in some sense less. Let "rev" = repo+revision. We then need a name/rev mapping. If we had control over the server, we could do this dynamically! We could add some extra bells and whistles like deduping.

Canonical:
git.javajosh.com/repo/rev



How to put multiple projects online with github pages. 
How to develop multiple projects. 
	Option 1: One project per repo.
	Option 2: One project per branch of one repo.
	
Constraint: all files must be committed on the master branch of a site repo. 
Definition: site repo. This is the repo associated with a site.

A question of independence. Consider a site that is composed of multiple SPAs, and each of these is an independant 