
# nodegitmon

nodegitmon is scheduling switch web pages(such as HTML, CSS and JavaScript) of web server. 

If there are several web sites need to display in a web server, nodegitmon could replace web site periodically.

>    nodegitmon can be used to demo large of different web sites schedulely.
>    For example, If you want to display web site "A" 10 minutes then show web site "B" 3 minutes, finally, web site "C" render 30 minutes, nodegitmon would be the choice.

It can completely change web content by checking out git branches. 
>    Each git branch indicates a web site in nodegitmon.
Checking out a git branch means changing current node.js rendering web site at the same time.

# Requirement

nodegitmon required

[git](https://github.com/git/git)
[node.js](https://github.com/nodejs/node)
[nodegit](https://github.com/nodegit/nodegit)
[nodemon](https://github.com/remy/nodemon)

Either through forking or by using [npm](http://npmjs.org) (the recommended way):

    npm install -g nodemon nodegit

# Preliminary
nodegitmon require domain knowledge of git

# Installation

nodegitmon is recommended clone github repository. 

    
    git clone https://github.com/kodgen/nodegitmon.git

# Example

See
    [example](http://github.com/kodgen/nodegitmon/tree/master/example/)

Run the example
    
    ./example.sh
    
    nodemon app.js

# Usage
- Create a git repository,  
- Create a node.js file "app.js" for web site A 
- git clone https://github.com/kodgen/nodegitmon.git
- Modify nodegitmon/common.js
- git commit -m "Web site A"
- Create a git branch B and check out git branch B
- Modify the node.js file "app.js" for web site B
- Modify nodegitmon/common.js
- git commit -m "Web site B"
- nodemon app.js

## More detail
### Create a git repository
    git init 

### Create a node.js file "app.js" for web site A
```js
const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

var common = require('./nodegitmon/common')

var nodegitmon = require("./nodegitmon/checkout");
nodegitmon.checkout();

var page = fs.readFileSync(__dirname + '/A.html', 'utf8');
const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'text/html');
    res.setHeader('refresh',common.refreshTime);
    res.end(page);
});

server.listen(port, hostname, () => {
  console.log('Web site A running at http://${hostname}:${port}/');
});
```

It require add these lines to call nodegitmon
    var common = require('./nodegitmon/common')
    var nodegitmon = require("./nodegitmon/checkout");
    nodegitmon.checkout();

And add this line to refresh the browser
    res.setHeader('refresh',common.refreshTime);

### Clone nodegitmon github repository 
    git clone https://github.com/kodgen/nodegitmon.git

### Set nodegitmon/common.js
Set the displaying time of demo web site.

    const refreshTime 30
    //display 30 seconds

Set next displaying web site.
    const nextCheckoutBranch "B"

### Commit your web site 
    git add .
    git commit -m "Web site A"

### Rename current git branch
    git branch -m A

### Create lots of git branches (Depending on how many web sites requiring display)
    git branch B
    git checkout B

### Modify the node.js file "app.js" for web site B
```js
const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

var common = require('./nodegitmon/common')

var nodegitmon = require("./nodegitmon/checkout");
nodegitmon.checkout();

var page = fs.readFileSync(__dirname + '/B.html', 'utf8');
const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'text/html');
    res.setHeader('refresh',common.refreshTime);
    res.end(page);
});

server.listen(port, hostname, () => {
  console.log('Web site B running at http://${hostname}:${port}/');
});
```

### Set nodegitmon/common.js
Set the displaying time of demo web site.

    const refreshTime 30
    //display 30 seconds

Set next displaying web site.
    const nextCheckoutBranch "A"

### Commit the other web site
    git add .
    git commit -m "Web site B"

Then run nodemon.
    
    nodemon [your node app]

## Note: All file name of JavaScript must the same, such as "app.js" in different web site.    
    For example: nodemon app.js

Please see [example](https://github.com/kodgen/nodegitmon/tree/master/example)

# License

MIT 