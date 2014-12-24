---
layout: post
title:  "Typography"
date:   2014-12-25 11:59:59
categories: ["examples", "core", "typography"]
---

## Headings

<div class="lt-example">
  <h1>h1 - Lintel is so sweet</h1>
  <h2>h2 - Lintel is so sweet</h2>
  <h3>h3 - Lintel is so sweet</h3>
  <h4>h4 - Lintel is so sweet</h4>
  <h5>h5 - Lintel is so sweet</h5>
  <h6>h6 - Lintel is so sweet</h6>
</div>

<div class="lt-code">
{% highlight html %}
<h1>h1 - Lintel is so sweet</h1>
<h2>h2 - Lintel is so sweet</h2>
<h3>h3 - Lintel is so sweet</h3>
<h4>h4 - Lintel is so sweet</h4>
<h5>h5 - Lintel is so sweet</h5>
<h6>h6 - Lintel is so sweet</h6>
{% endhighlight %}
</div>


## Font Size

You can control font-size through the following modifiers:

`.text-*` - where `*` is the desired size (ex: `lg`, `md`, `sm`, `xs`) or `base` to reset

<div class="lt-example">
  <p class="text-lg">This paragraph is fat and juicy.</p>
  <p class="text-md">This paragraph is slightly overweight.</p>
  <p class="text-base">This is a normal paragraph.</p>
  <p class="text-sm">This paragraph is small and nimble.</p>
  <p class="text-xs">This paragraph is tiny and cute.</p>
</div>

<div class="lt-code">
{% highlight html %}
<p class="text-lg">...</p>
<p class="text-md">...</p>
<p class="text-sm">...</p>
<p class="text-xs">...</p>
{% endhighlight %}
</div>

<p class="lt-tip lt-tip-extend">
  Create your own font-size by defining the `$font-size-*` variable and styling the `.text-*` utility class.
</p>


## Inline elements

### Highlight Text

<div class="lt-example">
  Use the &lt;mark&gt; tag to <mark>highlight</mark> text.
</div>

<div class="lt-code">
{% highlight html %}
Use the <mark> tag to <mark>highlight</mark> text.
{% endhighlight %}
</div>


### Inserted Text

<div class="lt-example">
  Use the &lt;ins&gt; tag to indicate <ins>additions</ins> to the original text.
</div>

<div class="lt-code">
{% highlight html %}
Use the <ins> tag to indicate <ins>additions</ins> to the original text.
{% endhighlight %}
</div>


### Deleted Text

<div class="lt-example">
  Use the &lt;del&gt; tag to indicate <del>deletions</del> from the original text.
</div>

<div class="lt-code">
{% highlight html %}
Use the <del> tag to indicate <del>deletions</del> from the original text.
{% endhighlight %}
</div>


### Strikethrough Text

<div class="lt-example">
  Use the &lt;s&gt; tag to indicate <s>no longer accurage</s> text.
</div>

<div class="lt-code">
{% highlight html %}
Use the <s> tag to indicate <s>no longer accurage</s> text.
{% endhighlight %}
</div>


### Underline Text

<div class="lt-example">
  Use the &lt;u&gt; tag to <u>underline</u> text.<br>

</div>

<div class="lt-code">
{% highlight html %}
Use the <u> tag to <u>underline</u> text.
{% endhighlight %}
</div>


### Bold Text

<div class="lt-example">
  Use the &lt;strong&gt; tag to <strong>bold</strong> text.
</div>

<div class="lt-code">
{% highlight html %}
Use the <strong> tag to <strong>bold</strong> text.
{% endhighlight %}
</div>

<p class="lt-tip lt-tip-info">
  Feel free to use the &lt;b&gt; tag if the word or phrase does not convey additional importance.
</p>


### Italic Text

<div class="lt-example">
  Use the &lt;em&gt; tag to <em>emphasize</em> text.
</div>

<div class="lt-code">
{% highlight html %}
Use the <em> tag to <em>emphasize</em> text.
{% endhighlight %}
</div>

<p class="lt-tip lt-tip-info">
  Note that the &lt;i&gt; tag has <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/i">additional meaning</a>.
</p>

<p class="lt-tip lt-tip-accessibility">
  Help out screen readers and keep your code semantic by familiarizing yourself with the full <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/HTML5_element_list">list of html elements</a>.
</p>


## Text Alignment
<div class="lt-example">
  <p class="text-center">.text-center</p>
  <p class="text-left">.text-left</p>
  <p class="text-right">.text-right</p>
  <p class="text-justify">.text-justify</p>
  <p class="text-nowrap">.text-nowrap</p>
  <p class="text-ellipsis">.text-ellipsis</p>
</div>

<div class="lt-code">
{% highlight html %}
<p class="text-center">.text-center</p>
<p class="text-left">.text-left</p>
<p class="text-right">.text-right</p>
<p class="text-justify">.text-justify</p>
<p class="text-nowrap">.text-nowrap</p>
<p class="text-ellipsis">.text-ellipsis</p>
{% endhighlight %}
</div>


## Text Colors
<div class="lt-example">
  <p class="text-primary">.text-primary</p>
  <p class="text-secondary">.text-secondary</p>
  <p class="text-danger">.text-danger</p>
  <p class="text-warning">.text-warning</p>
  <p class="text-success">.text-success</p>
  <p class="text-info">.text-info</p>
</div>

<div class="lt-code">
{% highlight html %}
<p class="text-primary">.text-primary</p>
<p class="text-secondary">.text-secondary</p>
<p class="text-danger">.text-danger</p>
<p class="text-warning">.text-warning</p>
<p class="text-success">.text-success</p>
<p class="text-info">.text-info</p>
{% endhighlight %}
</div>


## Text Grays
<div class="lt-example">
  <p class="text-darkest">.text-darkest</p>
  <p class="text-darker">.text-darker</p>
  <p class="text-dark">.text-dark</p>
  <p class="text-base">.text-base</p>
  <p class="text-light">.text-light (also .text-muted)</p>
  <p class="text-lighter">.text-lighter</p>
  <p class="text-lightest">.text-lightest</p>
</div>

<div class="lt-code">
{% highlight html %}
<p class="text-darkest">.text-darkest</p>
<p class="text-darker">.text-darker</p>
<p class="text-dark">.text-dark</p>
<p class="text-base">.text-base</p>
<p class="text-light">.text-light</p>
<p class="text-lighter">.text-lighter</p>
<p class="text-lightest">.text-lightest</p>
{% endhighlight %}
</div>
