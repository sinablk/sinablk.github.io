---
layout: post
title:  What is "statistical learning"?
date:   2019-01-29
author: Ali Sina
mathjax: true
summary: This post is just for testing the Markdown. It serves as my handy kramdown Markdown quick-reference.
tags: [statistics, machine_learning, statistical_learning]
postFooter: Additional information, and maybe a <a href="#">link or two</a>.
---
> This is the first in a series of posts 


In N-dimensional simplex noise, the squared kernel summation radius $r^2$ is $\frac 1 2$
for all values of N. This is because the edge length of the N-simplex $s = \sqrt {\frac {N} {N + 1}}$
divides out of the N-simplex height $h = s \sqrt {\frac {N + 1} {2N}}$.
The kerel summation radius $r$ is equal to the N-simplex height $h$.


$$ r = h = \sqrt{\frac {1} {2}} = \underbrace{\sqrt{\frac {N} {N+1}}}_\text{text 1} \sqrt{\frac {N+1} {2N}} $$
When $a \ne 0$, there are two solutions to \(ax^2 + bx + c = 0\) and they are
$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$

$$ A_1, A_2,\underbrace{A_3,\overbrace{A_4}^{\text{over}}, A_5}_{\text{under}}, A_6, A_7 $$

Nullam sit amet laoreet ipsum. Donec in ullamcorper purus. Integer at ante quis neque dignissim rutrum. Curabitur pretium viverra aliquam. Phasellus vel viverra quam. Cras laoreet laoreet metus, in fermentum dui vestibulum ut. Morbi[^2] et lobortis ante. Nunc mauris velit, dignissim non nisl vel, luctus pellentesque nisi. Fusce ullamcorper est.

Cras eget congue erat. In blandit viverra metus nec lacinia.[^3] Aliquam at ante turpis. In ligula massa, tempor quis ullamcorper eget, bibendum vitae risus. Etiam semper quam sem, quis viverra.

This is line is broken into  
two with line breaks. In this case, by a double space.

# H1 Header
## H2 Header
### H3 header
#### H4 header
##### H5 header
###### H6 header

> A sample blockquote.
>
> > Nested blockquote are also possible
>
> ### Headers work too
> This is the outer quote again.

~~~ruby
# This is a Ruby code snippet
class Magic
  def initialize
    @tricks = []
  end
end

magic = Magic.new
begin
  magic.to_json
rescue NoMethodError
  puts "no such method as to_json"
end
~~~

~~~python
# Here is Python
def not_bad(s):
  """Assumes something about the given string
  input: A string
  return: Whatever the output is
  """
  n = s.find('not')      # some comment
  b = s.find('bad')      # another comment
  if n != -1 and b != -1 and b > n:
    s = s[:n] + 'good' + s[b+3:]
  return s
~~~


This below is a horizontal rule.
* * *


1. This is a list item;
2. And another item;
2. And a third one with more text.


* Non numbered item in list.
* A second non-numbered item in list.
* A third `<ul>` list item.


| a simple | table |
| with multiple | lines |

| header 1 | header 2 | header 3 |
|:--------|:--------:|--------:|
| cell 1 | cell 2 | cell 3 |
| cell 4 | cell 3 | cell 6 |


This is *emphasized*, __this__ too!

This w**ork**s as expectd.


An image: ![image](http://placekitten.com/200/200)


Use `Kramdown::Document.new(text).to_html` to convert the
`text` in kramdown syntax to html.


Use backticks to markup code, e.g. `` `code` ``.


* * *
##### REFERENCES


[^1]: The definition goes here.
[^2]: The other definition goes here.
[^3]: Some reference to something.
