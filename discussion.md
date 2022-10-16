Publishing Projects (on Github pages)
====================================
Josh Rehman 5.23.2016

# Introduction 

Simpatico is an 'intimate experience sharing platform'.
It is a new way to share important life experiences with others in a way that
respects their time and everyone's privacy.
Simpatico is both tooling and hosting for these new experiences that are multimedia
mashups of personal photos, and important things you saw and did during a given time in your life.
The goal should be to give a realistic depiction of what you've been up to, 
what's enjoyable what's been hard. 

## What about a phone call?

To properly present Simpatico's technology sufficiently that a programmer could be
productive, requires a good 10 pages of interactive html.

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

- Minimize initial load time.
- Minimize total load time.
	- Page weight
	- Resource tricks.
	- Minimize bandwidth usage
- Maximize availability
	- Keep it simple - reduce moving parts.
- Maximize compatibility.
- Maximize device capability.
	- Tension with compatibility, polyfill.
- Maximize meaningful representation
	- Accessability
	- Low entropy
- Maximize visual control (tension with semantic)
	- Fonts, layout, images
	- Pixel Perfect
	- High entropy
- Maximize engagement
	- Site-coherence, 
	- 	navigation, Site-map. Visualization, pan and zoom.


Start with a document. A document has 3 parts: markup, styles, and code. Common refactorings: 

1. Extract resource. Move part of the document into it's own file, and add markup that causes the resource to be integrated at runtime. (opposite: integrate resource).
2. Delegate resource. Similar to 1, particualrly useful for common resources. Adds to runtime complexity (increases moving parts); minimizes bandwidth usage. CDN, hot-linking.

There are different kinds of documents:

1. 





The starting point for the web is the URL which is loaded into the browser as a resource. 
This resource is usually an HTML file. 
HTML is an interesting format because it is inherently polyglot, supporting document markup, 
a style langauge, and arbitrary computer code. 

In the simplest case, all pages are canonically hosted in the same repo. 
Modifications to p1, p2 and the index 

Really what we need is a small program that integrates multiple branches, repos, 
or both into a working copy. 
This is similar to a static build tool, except it's scope is in some sense less. 
Let "rev" = repo+revision. We then need a name/rev mapping. 
If we had control over the server, we could do this dynamically! 
We could add some extra bells and whistles like deduping.

Canonical:
git.javajosh.com/repo/rev



How to put multiple projects online with github pages. 
How to develop multiple projects. 
	Option 1: One project per repo.
	Option 2: One project per branch of one repo.
	
Constraint: all files must be committed on the master branch of a site repo. 
Definition: site repo. This is the repo associated with a site.

A question of independence. Consider a site that is composed of multiple SPAs, and each of these is an independant 



		<hr>
		<h3>Background</h3>
		<h4>1990-1999: The early years</h4>
		<p>I've been programming for a very long time. When I was 14 I programmed an application in FoxPro for my parents small mobile medical diagnostics business to handle their paperwork. In college I worked toward a BS in physics while also working for the UCI Office of Academic Computing doing basic web design when the field was new. I also did some VBA programming for research credit with a biology professor, Joe Arditti. After college I went into business for myself doing MS Access programming for small businesses and individuals. This got me noticed by Silicon Valley recruiters during the first internet boom, circa 1999, when I worked as a contractor for TCI-BR. I liked Access a lot but was frustrated by its limitations, so I learned Java and was hired to work at HP Education, and then a (now defunct) SF startup called Spark Online. My focus was on desktop Java GUI programming with Swing interfacing with relational databases.</p>

		<h4>2000-2008: The Java years</h4>
		<p>Although my experience with HP doing Java was good, it was my connection with the LA Java User's group that got me a job with Citysearch when things really got going. Eventually I led a team of five developers there and re-architected several customer-facing and internal systems using a (then new) Java/Hibernate/Spring stack. Evite and Match were sister companies under Vivendi and housed in the same building, and those teams learned from my team's experience. Also, that architecture was chosen to replace the mod_perl based system for the consumer Citysearch site. Citysearch was when I added consumer-oriented webapps to my 'enterprise Java' repertoire.</p>

		<p>I worked briefly for the Blizzard Entertainment (now horribly renamed ActivisionBlizzard) web team in 2008 doing more Java webapp stuff. (Being a gamer myself, I was really happy there, and the circumstances of my departure were rather sad - ask me about it some time over a drink.) I had another interesting work experience at JPL in 2011, where I worked on a Lucene project for the ISS, and a cloud-hosted image processing system that used a novel distributed continuation library from EC2  destined to be used for processing images from the Curiosity Mars rover. (Personally I thought Hadoop was a much better fit, if more boring, but it's hard to change JPL's mind once it's made!)</p>

		<h4>2009-Present: The Age of the Open Web</h4>
		<p>These days I'm bullish on the open web, and that means HTML, CSS and JavaScript. Java (and occasional Ruby and Python) is still there, but JavaScript's native environment, the browser, makes JS the best language around, even with it's warts. All of my projects since 2003 have required at least some HTML, CSS and JavaScript - with the balance usually in Java. Node has really shaken things up, giving JavaScript a lot of reach, and the capacity to use one language for the whole stack. New products like Meteor are really shaking things up. And of course, browsers keep increasing their capabilities as well. The neat thing is that web technology will run anywhere: I have written programs using open web technologies that run on iPhone, Android, Mac and Windows desktop, and you'd be unable to tell the difference. JavaScript, HTML and CSS has fulfilled Java's promise of "write once, run anywhere".</p>



		<p class="updated" title="It's kind of a pet peeve of mine that a lot of content doesn't mention when it was written or by whom. Consider this a small gesture to rectify that.">Updated: Jan 12, 2017, Josh Rehman</p>
		<hr>
		<footer>Copyright &copy; 2017 JavaJosh Enterprises, Inc. and Josh Rehman. <a href="mailto:josh@javajosh.com">josh@javajosh.com</a> (562) 546-3882. All rights reserved.</footer>
		