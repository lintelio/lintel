---
layout: example
title:  "Utils"
date:   2014-12-25 11:59:59
categories: ["examples", "core", "utils"]
---

## Media Object

Use the media object for classic facebook or twitter-like interfaces. See more how the [media object](http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/) can save hundreds of lines of codes.

<div class="lt-example">
  <div class="media">
    <a class="media-object media-left" href="#">
      <img data-src="holder.js/50x50" alt="Media Object">
    </a>
    <div class="media-body">
      <h4 class="media-heading">Media Left</h4>
      <p>Professor, make a woman out of me. Large bet on myself in round one. Humans dating robots is sick. You people wonder why I'm still single? It's 'cause all the fine robot sisters are dating humans!</p>
    </div>
  </div>
</div>

<div class="lt-code">
{% highlight html %}
<div class="media">
  <a class="media-object media-left" href="#">
    <img src="..." alt="...">
  </a>
  <div class="media-body">
    ...
  </div>
</div>
{% endhighlight %}
</div>


### Nesting

<div class="lt-example">
  <div class="media">
    <a class="media-object media-left" href="#">
      <img data-src="holder.js/50x50" alt="Media Object">
    </a>
    <div class="media-body">
      <h4 class="media-heading">Media Left</h4>
      <p>Professor, make a woman out of me. Large bet on myself in round one. Humans dating robots is sick. You people wonder why I'm still single? It's 'cause all the fine robot sisters are dating humans!</p>

      <div class="media">
        <a class="media-object media-left" href="#">
          <img data-src="holder.js/50x50" alt="Media Object">
        </a>
        <div class="media-body">
          <h4 class="media-heading">Nested Media Left</h4>
          <p>And I'm his friend Jesus. We're also Santa Claus! What are you hacking off? Is it my torso?! 'It is!' My precious torso! That's the ONLY thing about being a slave. Spare me your space age technobabble, Attila the Hun! Yes. You gave me a dollar and some candy.</p>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="lt-code">
{% highlight html %}
<div class="media">
  <a class="media-object media-left" href="#">
    <img src="..." alt="...">
  </a>
  <div class="media-body">
    ...
    <div class="media">
      ...
    </div>
  </div>
</div>
{% endhighlight %}
</div>

### Alignment

<div class="lt-example">
  <div class="media">
    <a class="media-object media-left" href="#">
      <img data-src="holder.js/50x50" alt="Media Object">
    </a>
    <div class="media-body">
      <h4 class="media-heading">Media Left</h4>
      <p>And I'm his friend Jesus. We're also Santa Claus! What are you hacking off? Is it my torso?! 'It is!' My precious torso! That's the ONLY thing about being a slave. Spare me your space age technobabble, Attila the Hun! Yes. You gave me a dollar and some candy.</p>
    </div>
  </div>
  <div class="border-top push-y-lg"></div>
  <div class="media">
    <div class="media-body">
      <h4 class="media-heading">Media Right</h4>
      <p>And so we say goodbye to our beloved pet, Nibbler, who's gone to a place where I, too, hope one day to go. The toilet. File not found. Oh dear! She's stuck in an infinite loop, and he's an idiot! Well, that's love for you. Shinier than yours, meatbag. With a warning label this big, you know they gotta be fun!</p>
    </div>
    <a class="media-object media-right" href="#">
      <img data-src="holder.js/50x50" alt="Media Object">
    </a>
  </div>
  <div class="border-top push-y-lg"></div>
  <div class="media">
    <a class="media-object media-left media-middle" href="#">
      <img data-src="holder.js/50x50" alt="Media Object">
    </a>
    <div class="media-body">
      <h4 class="media-heading">Media Left Middle</h4>
      <p>We'll go deliver this crate like professionals, and then we'll go home. I meant 'physically'. Look, perhaps you could let me work for a little food? I could clean the floors or paint a fence, or service you sexually? For example, if you killed your grandfather, you'd cease to exist! I love you, buddy!</p>
    </div>
  </div>
  <div class="border-top push-y-lg"></div>
  <div class="media">
    <div class="media-body">
      <h4 class="media-heading">Media Right Bottom</h4>
      <p>But existing is basically all I do! Oh Leela! You're the only person I could turn to; you're the only person who ever loved me. You're going back for the Countess, aren't you? You, minion. Lift my arm. AFTER HIM! You guys aren't Santa! You're not even robots. How dare you lie in front of Jesus?</p>
    </div>
    <a class="media-object media-right media-bottom" href="#">
      <img data-src="holder.js/50x50" alt="Media Object">
    </a>
  </div>
</div>
<div class="lt-code">
{% highlight html %}
<a class="media-object media-left" href="#">...</a>
<a class="media-object media-right" href="#">...</a>
<a class="media-object media-left media-middle" href="#">...</a>
<a class="media-object media-right media-bottom" href="#">...</a>
{% endhighlight %}
</div>
