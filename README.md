# [alisiina.github.io](https://alisiina.github.io)
> Personal Jekyll website. Published on Github Pages

### Notes to self
* Use `jekyll serve --drafts` to view posts in `_drafts` folder on `localhost`.
* Read more into the [Jekyll Feed](https://github.com/jekyll/jekyll-feed) plugin.


### Issues
* Would like to only show `Ali Sina's Page` as title of main page and then
for every other page, show ` Page Title | Ali Sina`.
* Need to fix the top margin of the `About` dropdown screen for mobile.
* Need to make the SCSS more modular.
* The social sharing links in haven't been fully tested.


### Plugins used
* `jekyll-paginate` v1.1.0
* `jekyll-seo-tag` v2.5.0
* `jekyll-feed` v0.11.0


### Directory Structure
```
.     
├── _drafts  
|   └── . . .  
├── _includes  
|   ├── footer.html  
|   ├── head.html
|   ├── header.html
|   ├── mathjax.html
|   └── socialsharing.html
├── _layouts  
|   ├── default.html  
|   ├── home.html
|   ├── page.html  
|   └── post.html  
├── _posts    
|   └── . . .  
├── _sass  
|   ├── styles  
|   |    ├── _base.scss
|   |    ├── _layout.scss
|   |    ├── _mobile-dropdown.scss
|   |    ├── _pagination.scss
|   |    ├── _sharebuttons.scss
|   |    ├── _syntax-highlighting-monokai.scss
|   |    └── _syntax-highlighting.scss
|   └── style.scss    
├── about
|   └── index.md
├── assets
|   ├── apple-touch-icon.png
|   ├── favicon.png
|   └── main.scss
├── images    
|   └── . . .
.
.
.
└── index.html  
```


### License
<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.
