In this era of web services and mashups, we have seen a blooming of REST APIs. One might wonder, how do we use these APIs easily and elegantly? Since REST is very simple compared to SOAP, it is not hard to build a dedicated client ourselves.

We have developed [rest-core][] with composable middlewares to build a REST client, based on the effort from [rest-graph][]. In the cases of common APIs such as Facebook, Github, and Twitter, developers can simply use the built-in dedicated clients provided by rest-core, or do it yourself for any other REST APIs.

[rest-core]: http://github.com/cardinalblue/rest-core
[rest-graph]: http://github.com/cardinalblue/rest-graph
