 $ = (function() {

     http = (function() {

         function onloadhandler(request, onsuccess) {

             request.onload = function() {
                 if (request.readyState == 4 && request.status == 200) {
                     console.log(request.status);
                     onsuccess(request);
                 } else {
                     console.error(request.status);
                 }
             }
         }

         function sendrequest(method, url, callback, data) {
             var request = new XMLHttpRequest();
             request.open(method, url, true);
             addheader(request, method);
             onloadhandler(request, callback)
             request.send(data);

         }

         function get(url, callback) {
             sendrequest("GET", url, callback, null);
         }

         function post(url, callback, data) {
             sendrequest("POST", url, callback, data);
         }

         function update(url, callback, data) {
             sendrequest("PUT", url, callback, data);

         }

         function del(url, callback) {

             sendrequest("DELETE", url, callback, null);
         }

         function addheader(request, method) {
             switch (method) {
                 case "POST":
                 case "PUT":
                     {
                         request.setRequestHeader("Content-type", "application/json");
                     }
             }

         }

         return {
             get: get,
             post: post,
             update: update,
             delete: del
         };
     })();

     query = function(selector) {

         var self = {};
         self.selector = selector;
         self.element = document.getElementById(selector);
         self.html = function() {
             return self.element.innerHtml();
         }

         self.update = http.update;
         self.get = http.get;
         self.delete = http.delete;
         self.post = http.post;

         return self;

     };

     return query;
 })();