![website-status](https://img.shields.io/website-up-down-green-red/https/alisiina.github.io.svg?style=flat) ![last-commit](https://img.shields.io/github/last-commit/alisiina/alisiina.github.io.svg?colorB=blue&style=flat) ![size](https://img.shields.io/github/repo-size/alisiina/alisiina.github.io.svg?colorB=red&style=flat)

# [alisiina.github.io](https://alisiina.github.io)
> Personal Jekyll website. Published on Github Pages

### Note to self
* Use `jekyll serve --drafts` to view posts in `_drafts` folder on `localhost`.
* Read more into the [Jekyll Feed](https://github.com/jekyll/jekyll-feed) plugin.


### Issues
* Would like to only show `Ali Sina's Page` as title of main page and then
for every other page, show ` Page Title | Ali Sina`.
* Need to fix the top margin of the `About` dropdown screen for mobile.
* Need to make the SCSS more modular.
* The social sharing links haven't been fully tested.
* Sizing is mostly in `px`. Should change to the more robust `rem` and `em` where possible.


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
