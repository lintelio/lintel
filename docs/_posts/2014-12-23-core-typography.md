---
layout: post
title:  "Typography"
date:   2014-12-25 11:59:59
categories: ["examples", "core", "typography"]
---

## Headings

Use the `h1` through `h6` tags or `.text-h1` through `.text-h6` helper classes.

<p class="lt-tip lt-tip-accessibility">
  Use the tag that makes the most sense for screen readers and use the heading helper classes or <code>.text-reset</code> to adjust visually.
</p>

<div class="lt-example">
  <h1>h1 - This heading is fat and juicy</h1>
  <h2>h2 - This heading is chubby</h2>
  <h3>h3 - Many donuts, much weight</h3>
  <h4>h4 - Lean heading machine</h4>
  <h5>h5 - Slight anorexic</h5>
  <h6>h6 - Feed me</h6>

  <h1 class="text-h5">h1 - This tag tells screen readers it's important, but it looks tiny.</h1>
</div>

<div class="lt-code">
{% highlight html %}
<h1>h1 - This heading is fat and juicy</h1>
<h2>h2 - This heading is chubby</h2>
<h3>h3 - Many donuts, much weight</h3>
<h4>h4 - Lean heading machine</h4>
<h5>h5 - Slight anorexic</h5>
<h6>h6 - Feed me</h6>

<h1 class="text-h5">h1 - This tag tells screen readers it's important, but it looks tiny.</h1>
{% endhighlight %}
</div>


## Font Size

You can control font-size through the following modifiers:

`.text-*` - where `*` is the desired size (ex: `xl`, `lg`, `md`, `sm`, `xs`). You can use `.text-base` to also reset body color.

<p class="lt-tip lt-tip-extend">
  Create your own font-size by defining the `$font-size-*` variable and styling the `.text-*` utility class.
</p>

<div class="lt-example">
  <p class="text-xl">This paragraph is just fat.</p>
  <p class="text-lg">This paragraph is slightly overweight.</p>
  <p class="text-md text-base">This is paragraph is fit and normal.</p>
  <p class="text-sm">This paragraph is small and nimble.</p>
  <p class="text-xs">This paragraph is tiny and cute.</p>
</div>

<div class="lt-code">
{% highlight html %}
<p class="text-xl">...</p>
<p class="text-lg">...</p>
<p class="text-md">...</p>
<p class="text-sm">...</p>
<p class="text-xs">...</p>
{% endhighlight %}
</div>


## Elements

<p class="lt-tip lt-tip-accessibility">
  Help out screen readers and keep your code semantic by familiarizing yourself with the full <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/HTML5_element_list">list of html elements</a>.
</p>

### Highlight Text

<div class="lt-example">
  Use the <code>&lt;mark&gt;</code> tag to <mark>highlight</mark> text.
</div>

<div class="lt-code">
{% highlight html %}
<mark>highlight</mark>
{% endhighlight %}
</div>


### Inserted Text

<div class="lt-example">
  Use the <code>&lt;ins&gt;</code> tag to indicate <ins>additions</ins> to the original text.
</div>

<div class="lt-code">
{% highlight html %}
<ins>additions</ins>
{% endhighlight %}
</div>


### Deleted Text

<div class="lt-example">
  Use the <code>&lt;del&gt;</code> tag to indicate <del>deletions</del> from the original text.
</div>

<div class="lt-code">
{% highlight html %}
<del>deletions</del>
{% endhighlight %}
</div>


### Strikethrough Text

<div class="lt-example">
  Use the <code>&lt;s&gt;</code> tag to indicate <s>no longer accurate</s> text.
</div>

<div class="lt-code">
{% highlight html %}
<s>no longer accurate</s>
{% endhighlight %}
</div>


### Underline Text

<div class="lt-example">
  Use the <code>&lt;u&gt;</code> tag to <u>underline</u> text.<br>
</div>

<div class="lt-code">
{% highlight html %}
<u>underline</u>
{% endhighlight %}
</div>


### Bold Text

<p class="lt-tip lt-tip-info">
  Feel free to use the <code>&lt;b&gt;</code> tag if the word or phrase does not convey additional importance.
</p>

<div class="lt-example">
  Use the <code>&lt;strong&gt;</code> tag to <strong>bold</strong> text.
</div>

<div class="lt-code">
{% highlight html %}
<strong>bold</strong>
{% endhighlight %}
</div>


### Italic Text

<p class="lt-tip lt-tip-info">
  Note that the <code>&lt;i&gt;</code> tag has <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/i">additional meaning</a>. If you need to italicize text without emphasis, use the <code>.text-italic</code> utility class.
</p>

<div class="lt-example">
  Use the <code>&lt;em&gt;</code> tag to <em>emphasize</em> text.
</div>

<div class="lt-code">
{% highlight html %}
<em>emphasize</em>
{% endhighlight %}
</div>


### Abbreviations

Use the `.text-abbr` class to uppercase at a smaller font.

<div class="lt-example">
  Old New York is underneath <abbr title="New New York">NNY</abbr>.<br>
  <abbr title="Cascading Style Sheets" class="text-abbr">CSS</abbr> is great.
</div>

<div class="lt-code">
{% highlight html %}
<abbr title="New New York">NNY</abbr>
<abbr title="Cascading Style Sheets" class="text-abbr">CSS</abbr>
{% endhighlight %}
</div>


## Blockquotes

### Basic

<div class="lt-example">
  <blockquote>
    <p>You see, killbots have a preset kill limit. Knowing their weakness, I sent wave after wave of my own men at them until they reached their limit and shut down.</p>
  </blockquote>
</div>

<div class="lt-code">
{% highlight html %}
<blockquote>
  <p>You see, killbots have a preset kill limit. Knowing their weakness, I sent wave after wave of my own men at them until they reached their limit and shut down.</p>
</blockquote>
{% endhighlight %}
</div>


### Citation

<div class="lt-example">
  <blockquote>
    <p>Too much work. Let's burn it and say we dumped it in the sewer.</p>
    <footer>Bender Rodriguez in <cite title="Futurama">Futurama</cite></footer>
  </blockquote>
</div>

<div class="lt-code">
{% highlight html %}
<blockquote>
  <p>Too much work. Let's burn it and say we dumped it in the sewer.</p>
  <footer>Bender Rodriguez in <cite title="Futurama">Futurama</cite></footer>
</blockquote>
{% endhighlight %}
</div>


### Right

<div class="lt-example">
  <blockquote class="blockquote-right">
    <p>I always thought by this point in my life I'd be the one making the crank calls.</p>
    <footer>Philip J. Fry in <cite title="Futurama">Futurama</cite></footer>
  </blockquote>
</div>

<div class="lt-code">
{% highlight html %}
<blockquote class="blockquote-right">
  ...
</blockquote>
{% endhighlight %}
</div>


### Center

<div class="lt-example">
  <blockquote class="blockquote-center">
    <p>With a warning label this big, you know they gotta be fun!</p>
    <footer>Hermes Conrad in <cite title="Futurama">Futurama</cite></footer>
  </blockquote>
</div>

<div class="lt-code">
{% highlight html %}
<blockquote class="blockquote-center">
  ...
</blockquote>
{% endhighlight %}
</div>


### Variations
You can use the `.bg-*`, `.border-color-*`, and `.text-*` classes to create variations of blockquotes.

<div class="lt-example">
  <blockquote class="bg-light border-color-error text-error">
    <p>You must smoke peace pipe, and you must do it peacefully. Or we'll kill you.</p>
    <footer>Chief Singing Wind in <cite title="Futurama">Futurama</cite></footer>
  </blockquote>

  <blockquote class="bg-light border-color-primary">
    <p>They're like sex, except I'm having it!</p>
    <footer>Philip J. Fry in <cite title="Futurama">Futurama</cite></footer>
  </blockquote>
</div>

<div class="lt-code">
{% highlight html %}
<blockquote class="bg-light border-color-error text-error">
  ...
</blockquote>
{% endhighlight %}
</div>


## Code

<div class="lt-tip lt-tip-info">
  Don't forget about the <code>&lt;var&gt;</code> and <code>&lt;samp&gt;</code> tags. See all tags on MDN's <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/HTML5_element_list">list of html elements</a>.
</div>

### Inline
<div class="lt-example">
  Wrap code in <code>&lt;code&gt;</code>.
</div>

<div class="lt-code">
{% highlight html %}
<code>&lt;code&gt;</code>
{% endhighlight %}
</div>

### Block
Use the <code>&lt;pre&gt;</code> tag for blocks of code.

<div class="lt-example">
<pre>
.hidden {
  display: none;
}
</pre>
</div>

<div class="lt-code">
{% highlight html %}
<pre>
.hidden {
  display: none;
}
</pre>
{% endhighlight %}
</div>

### Keyboard
Wrap keyboard input in `<kbd>`.

<div class="lt-example">
  List all the files in the current directory by typing <kbd>ls</kbd> in your terminal.<br/>
  Press <kbd><kbd>cmd</kbd> + <kbd>w</kbd></kbd> for a fun surprise!
</div>

<div class="lt-code">
{% highlight html %}
<kbd>ls</kbd>
<kbd><kbd>cmd</kbd> + <kbd>w</kbd></kbd>
{% endhighlight %}
</div>

## Text Alignment
<div class="lt-example">
  <p class="text-left">.text-left</p>
  <p class="text-center">.text-center</p>
  <p class="text-right">.text-right</p>
  <p class="text-justify">.text-justify</p>
  <p class="text-nowrap">.text-nowrap</p>
  <p class="text-ellipsis">.text-ellipsis</p>
</div>

<div class="lt-code">
{% highlight html %}
<p class="text-left">.text-left</p>
<p class="text-center">.text-center</p>
<p class="text-right">.text-right</p>
<p class="text-justify">.text-justify</p>
<p class="text-nowrap">.text-nowrap</p>
<p class="text-ellipsis">.text-ellipsis</p>
{% endhighlight %}
</div>

## Text Transformations

<div class="lt-example">
  <p class="text-italic">Meaningless italic text.</p>
  <p class="text-bold">Meaningless bold text.</p>
  <p class="text-lowercase">Lowercase text.</p>
  <p class="text-uppercase">Uppercase text.</p>
  <p class="text-titlecase">Titlecase text.</p>
  <p class="text-capitalize">block-level capitalized text.</p>
  <p class="text-capitalize-inline-block">inline-block capitalized text.</p>
</div>

<div class="lt-code">
{% highlight html %}
<p class="text-italic">Meaningless italic text.</p>
<p class="text-bold">Meaningless bold text.</p>
<p class="text-lowercase">Lowercase text.</p>
<p class="text-uppercase">Uppercase text.</p>
<p class="text-titlecase">Titlecase text.</p>
<p class="text-capitalize">block-level capitalized text.</p>
<p class="text-capitalize-inline-block">inline-block capitalized text.</p>
{% endhighlight %}
</div>

## Text Colors
<div class="lt-example">
  <p class="text-primary">.text-primary</p>
  <p class="text-secondary">.text-secondary</p>
  <p class="text-error">.text-error</p>
  <p class="text-warning">.text-warning</p>
  <p class="text-success">.text-success</p>
  <p class="text-info">.text-info</p>
</div>

<div class="lt-code">
{% highlight html %}
<p class="text-primary">.text-primary</p>
<p class="text-secondary">.text-secondary</p>
<p class="text-error">.text-error</p>
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
