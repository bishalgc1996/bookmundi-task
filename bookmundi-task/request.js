function makeRequests() {
  const request1 = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = () => resolve(xhr.responseText);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send(JSON.stringify({ data: 'request1' }));
  });

  const request2 = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = () => resolve(xhr.responseText);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send(JSON.stringify({ data: 'request2' }));
  });

  const request3 = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = () => resolve(xhr.responseText);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send(JSON.stringify({ data: 'request3' }));
  });

  Promise.all([request1, request2, request3])
    .then((responses) => {
      console.log(responses[0]);
      console.log(responses[1]);
      console.log(responses[2]);
    })
    .catch((error) => console.error(error));
}

makeRequests();
