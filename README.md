# subttribute

[![Build Status](https://travis-ci.org/tleen/subttribute.png?branch=master)](https://travis-ci.org/tleen/subttribute)

A sub-attribute system for constrained markup environments.

Use JavaScript to extract HTML element attributes from the content of other attributes. Primary use case at this time is to add other attributes to *a* and *img* tags on Markdown files in [GitHub Pages](https://pages.github.com/).

## Example

See [example/index.html](example/index.html):

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

Would end up looking like

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

Lets say you were using this in Markdown with the JavaScript included elsewhere in the template:

```markdown
![alt text ~ id: image-two ~ class: border border-red ~ title: Some new title tag](http://lorempixel.com/g/200/100/)
```

