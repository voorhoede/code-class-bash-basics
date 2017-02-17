# Code Class Bash

## Getting started

Clone project at [project url](https://github.com/voorhoede/code-class-bash-basics)

### Bash

Get an up to date version of `bash`. The default version of bash that is
included with MacOS, is **3.2**, which is pretty old and misses features. You
can install a recent version with **brew**

```sh
$ brew install bash
```

Brew will tell you where it installed bash.

0. Copy the path to the bash executable. It will be something like:
`/usr/local/Cellar/bash/4.4.12/bin/bash`

0. Add the path to the executable to `/etc/shells`
```sh
# open /etc/shells with nano, or another text editor
$ sudo nano /etc/shells
# paste the path you copied earlier & save the file
```

0. Change your login shell
```sh
# replace [path] with the path to bash you copied earlier
$ chsh -s [path]
# You will be asked for your password.
```

Make sure that in your terminal preferences @ General > shells open with,
**Default login shell** radio-button is selected.

**iTerm** user will find the `command` option under **profile**

Do restart your terminal!

### Shell lint

Linting is essential if you want to write proper bash. As in most
scripting languages, there are many ways to write code, which achieve the same
result. Bash is string-based; whitespace has meaning. This makes bash pretty
unforgiving about syntax. Shellcheck will point out possible mistakes and
missed opportunities to apply best practices.

* Install [shellcheck](https://github.com/koalaman/shellcheck)
```sh
$ brew install shellcheck
```

* Install node dependencies
```sh
$ npm install
```

## Resources

[tldp bash beginners guide](http://www.tldp.org/LDP/Bash-Beginners-Guide/html/Bash-Beginners-Guide.html)
is an excellent reference for bash. Pro tip: enlarge the font and reduce
browser window width to 50%.
