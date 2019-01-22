# alisiina.github.io
> Published on Github Pages

### Notes to self
* Use `jekyll serve --drafts` to view posts in `_drafts` folder on `localhost`.


### Directory Structure
```
.     
├── _drafts  
|   └── . . .  
├── _includes  
|   ├── footer.html  
|   ├── head.html
|   └── header.html  
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
|   |    ├── _pagination.scss
|   |    └── _syntax-highlighting.scss
|   └── style.scss    
├── about
|   └── about.md
├── assets
|   └── main.scss
.
.
.
└── index.html  
```


### Issues
* Although uses Kramdown's [Rouge](https://kramdown.gettalong.org/syntax_highlighter/rouge.html) as syntax highlighter, the pigments were
changed by hand.
* Would like to only show `Ali Sina's Page` as title of main page and then
for every other page, show ` Page Title | Ali Sina`.


### Plugins used
* `jekyll-paginate` v1.1.0
* `jekyll-seo-tag` v2.5.0


### License
<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.
