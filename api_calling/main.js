const postsListContainer = document.querySelector(".post-list-container");

// XHR

// function fetchUsingXHR() {
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
//   xhr.responseType = "json";
//   xhr.send();

//   xhr.onload = () => {
//     if (xhr.status == 200) {
//       displayResults(xhr.response);
//     } else {
//       console.log("Some error");
//     }
//   };
// }

//fetch

// function fetchMethod() {
//   fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "GET",
//   })
//     .then((response) => {
//       return response.json();
//     })
//     .then((result) => {
//       displayResults(result);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }

//async await

async function asyncAwait() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
  });

  const result = await response.json();

  displayResults(result);
}


function displayResults(posts) {
  postsListContainer.innerHTML = posts
    .map((item) => {
      return `
    <div class="post-item">
      <h3> title: ${item.title}</h3>
      <p> body: ${item.body}</p>
    </div>

    `;
    })
    .join("");
}

// fetchUsingXHR();

// fetchMethod();

asyncAwait();
