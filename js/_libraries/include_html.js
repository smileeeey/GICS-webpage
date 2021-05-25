function includeJs(jsFilePath) {
  var js = document.createElement('script');
  js.type = 'text/javascript';
  js.src = jsFilePath;
  document.body.appendChild(js);
}

window.addEventListener('load', function () {
  var allElements = document.getElementsByTagName('*');
  Array.prototype.forEach.call(allElements, function (el) {
    var includePath = el.dataset.includePath;
    if (includePath) {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          el.outerHTML = this.responseText;
          parsed_name = includePath.split('/');
          page_type = parsed_name[parsed_name.length - 2];
          page_name = parsed_name[parsed_name.length - 1].split('.')[0];
          jsPath = '/gics2021/js/' + page_type + '/' + page_name + '.js';
          includeJs(jsPath);
        }
      };
      xhttp.open('GET', includePath, true);
      xhttp.send();
    }
  });
});
