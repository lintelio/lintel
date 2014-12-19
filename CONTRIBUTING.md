# How to contribute

## Issues and labels

Please use one of the following labels if appropriate:
- `help wanted` - help from the community
- `feature request` - request new feature or modify existing feature
- `browser bug` - browser-specific bug
- `confirmed` - bug is reproducible in a reduced test case (please include fiddle, plunk, bin, etc.)
- `css` - bug related to css
- `docs` - related to our documentation
- `accessibility` - related to accessibility


## Bug reports

Before submitting a bug, please use this checklist:

1. **Validate and lint code** &mdash; your bug may be related to diselxya.

2. **Search for an existing issue** &mdash; someone else may have reported the issue already.

3. **Check if issue has been fixed** &mdash; can you reproduce it against `master`?

4. **Create an isolated test case** &mdash; create the minimum viable bug (MVB?) in [JS Bin](http://jsbin.com/) or your favorite tool. The easier it is for us to reproduce your bug, the quicker it will be solved.


## Pull Requests

**IMPORTANT**: By submitting a pull request, you agree to allow the project owners to license your work under the terms of the MIT License.

Pull requests are welcome! Please make sure your pull requests meet the project goals listed in the README.

Before submitting a pull request, please follow these guidelines:


## Code Guidelines

In general, please adhere to the same format as the rest of the project. You will be asked to correct formatting errors, however minor they are.

General [code style](http://codeguide.co).

### CSS

Adhere to the [Code Guide](http://codeguide.co/#css).

#### Comments

Please follow the exact same comment format as used throughout the project:

- Each major section comment should contain an extra line with the same amount dashes as the comment. 

- Keep section names short. 

- Leave 2 blank lines above a section comment (unless it's the first line of the file).

- Make sure subsection comments are capitalized too.

- Do not use `/* comments */` unless they should show up in minified CSS.

See example below:

```


// Section name
// ------------
.a {
  
}

// Subsection
.b {
  
}
```

#### Mixin guidelines:

- Give mixins descriptive names. Make sure they are camelCased.

- Provide useful defaults when it makes sense.

#### Function guidelines:

- Give functions descriptive names. Make sure they are camelCased.

- Provide useful defaults when it makes sense.
