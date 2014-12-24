---
layout: example
title:  "Forms"
date:   2014-12-25 11:59:59
categories: ["examples", "core", "forms"]
---

## Basic Example

<div class="lt-example">

  <form>

    <div class="form-group">
      <label class="form-label">Label</label>
      <input class="form-control" type="text" placeholder="Label">
    </div>

    <div class="form-group">
      <label class="form-label">
        Label
        <input class="form-control" type="text" placeholder="Label">
      </label>
    </div>

    <div class="form-group">
      <label class="form-label">Label</label>
      <input class="form-control" type="text" placeholder="Label">
      <p class="form-help">This is helpful message.</p>
    </div>

    <div class="form-group">
      <label class="form-label">
        Label
        <input class="form-control" type="text" placeholder="Label">
      </label>
      <p class="form-help">This is helpful message.</p>
    </div>

    <div class="form-group">
      <label class="form-checkbox">
        <input type="checkbox" name="exampleCheckbox1"> Standalone Checkbox
      </label>
    </div>

    <div class="form-group">
      <span class="form-label">Checkboxes</span>
      <label class="form-checkbox">
        <input type="checkbox" name="exampleCheckbox2"> Option 1
      </label>
      <label class="form-checkbox">
        <input type="checkbox" name="exampleCheckbox2"> Option 2
      </label>
    </div>

    <div class="form-group">
      <span class="form-label">Radio Buttons</span>
      <label class="form-radio">
        <input type="radio" name="exampleRadio1"> Option 1
      </label>
      <label class="form-radio">
        <input type="radio" name="exampleRadio1"> Option 2
      </label>
    </div>

  </form>

</div>

<div class="lt-code">
{% highlight html %}
<form>

  <div class="form-group">
    <label class="form-label">Label</label>
    <input class="form-control" type="text" placeholder="Label">
  </div>

  <div class="form-group">
    <label class="form-label">
      Label
      <input class="form-control" type="text" placeholder="Label">
    </label>
  </div>

  <div class="form-group">
    <label class="form-label">Label</label>
    <input class="form-control" type="text" placeholder="Label">
    <p class="form-help">This is helpful message.</p>
  </div>

  <div class="form-group">
    <label class="form-label">
      Label
      <input class="form-control" type="text" placeholder="Label">
    </label>
    <p class="form-help">This is helpful message.</p>
  </div>

  <div class="form-group">
    <label class="form-checkbox">
      <input type="checkbox" name="exampleCheckbox1"> Standalone Checkbox
    </label>
  </div>

  <div class="form-group">
    <span class="form-label">Checkboxes</span>
    <label class="form-checkbox">
      <input type="checkbox" name="exampleCheckbox2"> Option 1
    </label>
    <label class="form-checkbox">
      <input type="checkbox" name="exampleCheckbox2"> Option 2
    </label>
  </div>

  <div class="form-group">
    <span class="form-label">Radio Buttons</span>
    <label class="form-radio">
      <input type="radio" name="exampleRadio1"> Option 1
    </label>
    <label class="form-radio">
      <input type="radio" name="exampleRadio1"> Option 2
    </label>
  </div>

</form>
{% endhighlight %}
</div>


## Inline form
<div class="lt-example">

  <form>

    <div class="form-group">
      <label class="form-label">Label</label>
      <input class="form-control" type="text" placeholder="Label">
    </div>

    <div class="form-group">
      <label class="form-label">
        Label
        <input class="form-control" type="text" placeholder="Label">
      </label>
    </div>

    <div class="form-g"

    <div class="form-group">
      <label class="form-label">Label</label>
      <input class="form-control" type="text" placeholder="Label">
      <p class="form-help">This is helpful message.</p>
    </div>

    <div class="form-group">
      <label class="form-label">
        Label
        <input class="form-control" type="text" placeholder="Label">
      </label>
      <p class="form-help">This is helpful message.</p>
    </div>

    <div class="form-group">
      <label class="form-checkbox">
        <input type="checkbox" name="exampleCheckbox1"> Standalone Checkbox
      </label>
    </div>

    <div class="form-group">
      <span class="form-label">Checkboxes</span>
      <label class="form-checkbox">
        <input type="checkbox" name="exampleCheckbox2"> Option 1
      </label>
      <label class="form-checkbox">
        <input type="checkbox" name="exampleCheckbox3"> Option 2
      </label>
    </div>

    <div class="form-group">
      <span class="form-label">Radio Buttons</span>
      <label class="form-radio">
        <input type="radio" name="exampleRadio1"> Option 1
      </label>
      <label class="form-radio">
        <input type="radio" name="exampleRadio1"> Option 2
      </label>
    </div>

  </form>

</div>

<div class="lt-code">
{% highlight html %}
<form class="form-inline">...</form>
{% endhighlight %}
</div>


## Postfix and Suffix

<div class="lt-example">
  <div class="form-group">
    <label class="visible-sr">Amount</label>
    <div class="form-control-group">
      <div class="form-control-addon">$</div>
      <input class="form-control" type="number" placeholder="Amount">
      <div class="form-control-addon">.00</div>
    </div>
  </div>

  <div class="form-group">
    <label>
      <span class="visible-sr">Amount</span>
      <div class="form-control-group">
        <div class="form-control-addon">$</div>
        <input class="form-control" type="number" placeholder="Amount">
        <div class="form-control-addon">.00</div>
      </div>
    </label>
  </div>

  <div class="form-group">
    <label class="visible-sr">After</label>
    <div class="form-control-group">
      <input class="form-control" type="number" placeholder="Amount">
      <div class="form-control-addon">.00</div>
    </div>
  </div>

  <div class="form-group">
    <label class="visible-sr">After</label>
    <div class="form-control-group">
      <div class="form-control-addon">$</div>
      <input class="form-control" type="number" placeholder="Amount">
    </div>
  </div>
</div>

<div class="lt-code">
{% highlight html %}
<div class="form-group">
  <label class="visible-sr">Amount</label>
  <div class="form-control-group">
    <div class="form-control-addon">$</div>
    <input class="form-control" type="number" placeholder="Amount">
    <div class="form-control-addon">.00</div>
  </div>
</div>

<!-- OR -->

<div class="form-group">
  <label>
    <span class="visible-sr">Amount</span>
    <div class="form-control-group">
      <div class="form-control-addon">$</div>
      <input class="form-control" type="number" placeholder="Amount">
      <div class="form-control-addon">.00</div>
    </div>
  </label>
</div>
{% endhighlight %}
</div>


## Form Controls

### Text Inputs

See MDN <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input">&lt;input&gt;</a> article for full list.

<div class="lt-example">
  <input type="text" class="form-control" placeholder="Text input">
</div>

<div class="lt-code">
{% highlight html %}
<input type="text" class="form-control" placeholder="Text input">
{% endhighlight %}
</div>

#### Input placeholder
<div class="lt-example">
  <div class="form-group">
    <label class="form-label">Label</label>
    <div class="form-control-placeholder">Placeholder text here.</div>
  </div>

  <div class="form-group">
    <label class="form-label">
      Label
      <div class="form-control-placeholder">Placeholder text here.</div>
    </label>
  </div>
</div>

<div class="lt-code">
{% highlight html %}
<div class="form-group">
  <label class="form-label">Label</label>
  <div class="form-control-placeholder">Placeholder text here.</div>
</div>

<div class="form-group">
  <label class="form-label">
    Label
    <div class="form-control-placeholder">Placeholder text here.</div>
  </label>
</div>
{% endhighlight %}
</div>

#### Focus state
<div class="lt-example">
  <input type="text" class="form-control lt-form-control-focused" placeholder="Text input">
</div>

#### Disabled state
<div class="lt-example">
  <input disabled type="text" class="form-control" placeholder="Text input">
</div>

<div class="lt-code">
{% highlight html %}
<input disabled type="text" class="form-control" placeholder="Text input">
{% endhighlight %}
</div>

#### Readonly state
<div class="lt-example">
  <input readonly type="text" class="form-control" placeholder="Text input">
</div>

<div class="lt-code">
{% highlight html %}
<input readonly type="text" class="form-control" placeholder="Text input">
{% endhighlight %}
</div>


### Checkboxes and Radio Buttons

#### Stacked
<div class="lt-example">
  <div class="form-group">
    <span class="form-label">Checkboxes</span>
    <label class="form-checkbox">
      <input type="checkbox" name="exampleCheckbox4"> Option 1
    </label>
    <label class="form-checkbox">
      <input type="checkbox" name="exampleCheckbox5"> Option 2
    </label>
  </div>
</div>

#### Inline
<div class="lt-example">
  <div class="form-group">
    <span class="form-label">Checkboxes</span>
    <label class="form-checkbox form-checkbox-inline">
      <input type="checkbox" name="exampleCheckbox6"> Option 1
    </label>
    <label class="form-checkbox form-checkbox-inline">
      <input type="checkbox" name="exampleCheckbox7"> Option 2
    </label>
  </div>
</div>


### Textarea

<div class="lt-example">
  <textarea class="form-control"></textarea>
</div>

<div class="lt-code">
{% highlight html %}
<textarea class="form-control"></textarea>
{% endhighlight %}
</div>


### Selects

#### Default
<div class="lt-example">
  <select class="form-control">
    <option>1</option>
    <option>2</option>
    <option>3</option>
  </select>
</div>

<div class="lt-code">
{% highlight html %}
<select class="form-control">
  <option>1</option>
  <option>2</option>
  <option>3</option>
</select>
{% endhighlight %}
</div>

#### Multiple
<div class="lt-example">
  <select multiple class="form-control">
    <option>1</option>
    <option>2</option>
    <option>3</option>
  </select>
</div>

<div class="lt-code">
{% highlight html %}
<select multiple class="form-control">
  <option>1</option>
  <option>2</option>
  <option>3</option>
</select>
{% endhighlight %}
</div>


## Validation States
<div class="lt-example">

  <form>

    <div class="form-group form-group-error">
      <label class="form-label">
        Label
        <input class="form-control" type="text" placeholder="Label">
      </label>
    </div>

    <div class="form-group form-group-warning">
      <label class="form-label">
        Label
        <input class="form-control" type="text" placeholder="Label">
      </label>
    </div>

    <div class="form-group form-group-success">
      <label class="form-label">
        Label
        <input class="form-control" type="text" placeholder="Label">
      </label>
    </div>

    <div class="form-group">
      <label class="form-checkbox form-group-error">
        <input type="checkbox" name="exampleCheckbox1"> Option 1
      </label>
      <label class="form-checkbox form-group-warning">
        <input type="checkbox" name="exampleCheckbox2"> Option 2
      </label>
      <label class="form-checkbox form-group-success">
        <input type="checkbox" name="exampleCheckbox3"> Option 3
      </label>
    </div>

  </form>

</div>

<div class="lt-code">
{% highlight html %}
<form>

  <div class="form-group form-group-error">
    <label class="form-label">
      Label
      <input class="form-control" type="text" placeholder="Label">
    </label>
  </div>

  <div class="form-group form-group-warning">
    <label class="form-label">
      Label
      <input class="form-control" type="text" placeholder="Label">
    </label>
  </div>

  <div class="form-group form-group-success">
    <label class="form-label">
      Label
      <input class="form-control" type="text" placeholder="Label">
    </label>
  </div>

  <div class="form-group">
    <label class="form-checkbox form-group-error">
      <input type="checkbox" name="exampleCheckbox1"> Option 1
    </label>
    <label class="form-checkbox form-group-warning">
      <input type="checkbox" name="exampleCheckbox2"> Option 2
    </label>
    <label class="form-checkbox form-group-success">
      <input type="checkbox" name="exampleCheckbox3"> Option 3
    </label>
  </div>

</form>
{% endhighlight %}
</div>
