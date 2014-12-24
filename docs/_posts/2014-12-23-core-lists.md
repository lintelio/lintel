---
layout: example
title:  "Lists"
date:   2014-12-25 11:59:59
categories: ["examples", "core", "lists"]
---

<div class="lt-example">
  <ul class="list">
    <li>List item 1</li>
    <li>List item 2</li>
    <li>List item 3</li>
  </ul>
</div>

<div class="lt-code">
{% highlight html %}
<ul class="list">
  <li>List item 1</li>
  <li>List item 2</li>
  <li>List item 3</li>
</ul>
{% endhighlight %}
</div>


### Modifiers
`*` = x or y

<ul class="list">
  <li><code>.list-*-xl</code></li>
  <li><code>.list-*-lg</code></li>
  <li><code>.list-*-md</code></li>
  <li><code>.list-*-sm</code></li>
  <li><code>.list-*-xs</code></li>
  <li><code>.list-*-hard</code></li>
</ul>

<div class="lt-example">
  <h4>.list-y-lg</h4>
  <ul class="list-stacked list-striped list-y-lg">
    <li>Why would I want to know that?</li>
    <li>Shut up and take my money!</li>
    <li>This opera's as lousy as it is brilliant!</li>
  </ul>

  <h4>.list-y-sm</h4>
  <ul class="list-stacked list-striped list-y-sm">
    <li>And until then, I can never die?</li>
    <li>It doesn't look so shiny to me.</li>
    <li>But existing is basically all I do!</li>
  </ul>
</div>

<div class="lt-code">
{% highlight html %}
<ul class="list-y-lg">
  ...
</ul>
{% endhighlight %}
</div>

### Stacked

<div class="lt-example">
  <ul class="list-stacked">
    <li>List item 1</li>
    <li>List item 2</li>
    <li>List item 3</li>
  </ul>
</div>

<div class="lt-code">
{% highlight html %}
<ul class="list-stacked">
  ...
</ul>
{% endhighlight %}
</div>


### Striped

<div class="lt-example">
  <ul class="list-striped">
    <li>List item 1</li>
    <li>List item 2</li>
    <li>List item 3</li>
  </ul>
</div>

<div class="lt-code">
{% highlight html %}
<ul class="list-striped">
  ...
</ul>
{% endhighlight %}
</div>


### Inline

<div class="lt-example">
  <ul class="list-inline">
    <li>List item 1</li>
    <li>List item 2</li>
    <li>List item 3</li>
  </ul>
</div>

<div class="lt-code">
{% highlight html %}
<ul class="list-inline">
  ...
</ul>
{% endhighlight %}
</div>


## Definition

### Basic
<div class="lt-example">
  <dl>
    <dt>Definition Term</dt>
    <dd>Definition 1</dd>
    <dd>Definition 2</dd>
    <dt>Morbo</dt>
    <dd>PUNY HUMAN NUMBER ONE, PUNY HUMAN NUMBER TWO, and Morbo's good friend, Richard Nixon.</dd>
    <dt>I'm Santa Claus!</dt>
    <dd>I usually try to keep my sadness pent up inside where it can fester quietly as a mental illness.</dd>
  </dl>
</div>

<div class="lt-code">
{% highlight html %}
<dl>
  <dt>...</dt>
  <dd>...</dd>
</dl>
{% endhighlight %}
</div>

### Split
<div class="lt-example">
  <dl class="dl-split">
    <dt>Definition Term</dt>
    <dd>Definition 1</dd>
    <dd>Definition 2</dd>
    <dt>Morbo</dt>
    <dd>PUNY HUMAN NUMBER ONE, PUNY HUMAN NUMBER TWO, and Morbo's good friend, Richard Nixon.</dd>
    <dt>I'm Santa Claus!</dt>
    <dd>I usually try to keep my sadness pent up inside where it can fester quietly as a mental illness.</dd>
  </dl>
</div>

<div class="lt-code">
{% highlight html %}
<dl class="dl-split">
  <dt>Definition Term</dt>
  <dd>Definition 1</dd>
  <dd>Definition 2</dd>
  <dt>Morbo</dt>
  <dd>PUNY HUMAN NUMBER ONE, PUNY HUMAN NUMBER TWO, and Morbo's good friend, Richard Nixon.</dd>
  <dt>I'm Santa Claus!</dt>
  <dd>I usually try to keep my sadness pent up inside where it can fester quietly as a mental illness.</dd>
</dl>
{% endhighlight %}
</div>
