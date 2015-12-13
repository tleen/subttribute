# subttribute

[![Build Status](https://travis-ci.org/tleen/subttribute.png?branch=master)](https://travis-ci.org/tleen/subttribute)

A sub-attribute system for constrained markup environments. 

Use JavaScript to extract HTML element attributes from the content of other attributes. Primary use case at this time is to add other attributes to *a* and *img* tags on Markdown files in [GitHub Pages](https://pages.github.com/).

This is a JavaScript way to solve the problem of [adding class names to links in Markdown](http://www.codesiderations.com/2013/08/10/adding-class-names-to-links-in-markdown.html), and other similar problems when you want to, or **have** to, write Markdown but need to put in some more information for styling purposes.

## Examples


### HTML

See [the HTML example](examples/html/index.html) or [run it live](https://rawgit.com/tleen/subttribute/master/example/index.html):

The attributes are defined within the title or alt attributes on any element. They are seperated by the *~* character. The section preceding the first *~* is the actual content you want to end up in that attribute. The other are a series of *:* seperated attribute:value pairs. These will be attached to the same element.

```html
<html>
  <head></head>
  <body>
    <img id="image-one" src="http://lorempixel.com/g/200/100/" title="title text ~ class: border border-purple ~ alt: Some new alt tag">
    <img id="image-two" src="http://lorempixel.com/g/200/100/" alt="alt text ~ class: border border-red ~ title: Some new title tag">
    </p>
    <script src="https://rawgit.com/tleen/subttribute/master/dist/subttribute.min.js"></script>
  </body>
</html>
```

Would (after JavaScript execution) end up looking like:

```html
<html>
  <head></head>
  <body>
    <img id="image-one" src="http://lorempixel.com/g/200/100/" class="border border-purple" alt="Some new alt tag" title="title text">
    <img id="image-two" src="http://lorempixel.com/g/200/100/" class="border border-red" alt="alt text" title="Some new title tag">
    </p>
    <script src="https://rawgit.com/tleen/subttribute/master/dist/subttribute.min.js"></script>
  </body>
</html>
```

Although you can set the attributes yourself in HTML the place where subttribute really shines is in:

### Markdown

Assuming the subttribute JavaScript included elsewhere [in the template](examples/markdown/_layouts/default.html):

```markdown
![some alt tag](http://lorempixel.com/g/200/100/ "title text ~ id: image-one ~ class: border border-purple ~ title: Some new title tag")
![alt text ~ id: image-two ~ class: border border-red](http://lorempixel.com/g/200/100/ "Some title tag")
```

Will eventually set the attributes on the images:

```html
<p><img src="http://lorempixel.com/g/200/100/" alt="some alt tag" title="Some new title tag" id="image-one" class="border border-purple"></p>
<p><img src="http://lorempixel.com/g/200/100/" alt="alt text" title="Some title tag" id="image-two" class="border border-red"></p>
```

See [the example](examples/markdown/) for Jekyll/Markdown (GitHub Pages-style) usage.
