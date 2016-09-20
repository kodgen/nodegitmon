
# This example

The example scheduled switch "ALL" content of web server. It can be used to demo several different web sites periodically.

There are four demo web sites in the example,"git" "nodegit" "nodemon" and "nodegitmon".

example.sh will create 4 git branches and commit HTML pages for each branch in the git repository.

    Each git branch indicates a web site.

Running app.js will automaticly check out git branches and switch current web pages of web site periodiclly based on the setting.

# Requirement

nodegitmon needs fellowing software.
    [git][node.js][nodegit][nodemon]
    npm install -g nodemon nodegit

# Setting

[nodegitmon/common.js]


    const nextCheckoutBranch = "nodegitmon";
nextCheckoutBranch assigns git branch to check out. The value must be assigned to show next git branch.

That is next rendering page of node server. 

The idea like a pointer indicates the following git branch/web page. 
    const refreshTime = 10;
The basic time unit is second. The refreshTime is used to set the demo time of current web site.

In this example, There are ten seconds showing current web site.

After time up, current rendering web site will be replaced by "nodegitmon" web site.

# Usage

    ./example.sh
nodegitmon needs [nodemon](https://github.com/remy/nodemon/) to regular restart node http server.

    nodemon app.js

Demo page runs in [Localhost](http://127.0.0.1:3000)

