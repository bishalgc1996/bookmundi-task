var myLibrary = (function () {
  // Private variables and methods
  var apiUrl = 'https://jsonplaceholder.typicode.com';

  function ajaxRequest(url, data) {
    return fetch(apiUrl + url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(function (response) {
      return response.json();
    });
  }

  function getRequest(url) {
    return fetch(apiUrl + url).then(function (response) {
      return response.json();
    });
  }

  function changeClass(selector, className) {
    var elems = document.querySelectorAll(selector);
    for (var i = 0; i < elems.length; i++) {
      elems[i].className = className;
    }
  }

  // Private function to retrieve data attribute from DOM element
  function getDataset(el, datasetName) {
    return el.dataset[datasetName];
  }

  // Private variables and functions
  var baseUrl = ''; // Set your base URL here
  var xhr = new XMLHttpRequest();

  function handleResponse(callback) {
    if (xhr.readyState === 4 && xhr.status === 200) {
      callback(xhr.responseText);
    }
  }
  // Private functions
  function setValue(selector, value) {
    var element = document.querySelector(selector);
    if (element) {
      if (element.tagName === 'SELECT') {
        var options = element.options;
        for (var i = 0, l = options.length; i < l; i++) {
          if (options[i].value === value) {
            options[i].selected = true;
            break;
          }
        }
      } else if (element.type === 'checkbox') {
        element.checked = value;
      } else {
        element.value = value;
      }
    }
  }
  function getValue(selector) {
    var element = document.querySelector(selector);
    if (element) {
      if (element.tagName === 'SELECT') {
        return element.options[element.selectedIndex].value;
      } else if (element.type === 'checkbox') {
        return element.checked;
      } else {
        return element.value;
      }
    }
    return null;
  }

  return {
    changeClass: changeClass,
    // Method to retrieve data attribute from a single element
    get: function (selector, datasetName) {
      var el = document.querySelector(selector);
      if (el) {
        return getDataset(el, datasetName);
      }
    },

    // Method to retrieve data attributes from multiple elements
    getAll: function (selector, datasetName) {
      var els = document.querySelectorAll(selector);
      var datasets = [];
      for (var i = 0; i < els.length; i++) {
        datasets.push(getDataset(els[i], datasetName));
      }
      return datasets;
    },

    // Method to inject a new element into the DOM
    inject: function (parentSelector, element, text) {
      var parentEl = document.querySelector(parentSelector);
      if (parentEl) {
        var newEl = document.createElement(element);
        newEl.textContent = text;
        parentEl.appendChild(newEl);
        return newEl;
      }
    },
    ajax: function (url, method, data, callback) {
      xhr.onreadystatechange = function () {
        handleResponse(callback);
      };
      xhr.open(method, baseUrl + url);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send(JSON.stringify(data));
    },
    getRequest: function (url, callback) {
      xhr.onreadystatechange = function () {
        handleResponse(callback);
      };
      xhr.open('GET', baseUrl + url);
      xhr.send();
    },
    set: setValue,
    getnext: getValue,
    makeAjaxRequest: function (url, data) {
      return ajaxRequest(url, data);
    },

    makeGetRequest: function (url) {
      return getRequest(url);
    },
  };
})();
