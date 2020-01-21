import { Header, Nav, Main, Footer } from "./components";

import capitalize from "lodash.capitalize";

import * as state from "./store";

import Navigo from "navigo";

// import axios from "axios";

const router = new Navigo(location.origin);

//import { db } from "./firebase";
//console.log(db);

/**
 *
 * @param {*} st
 */

console.log(Navigo);
function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `
${Header(st)}
${Nav(state.Links)}
${Main(st)}
${Footer(st)}

`;
  router.updatePageLinks();
}

router
  .on(":page", params => {
    render(state[capitalize(params.page)]);
  })
  .on("/", () => render())
  .resolve();

// must querySelectorAll after the page is rendered.
// axios
//   // We GET from a RESTful
//   .get("https://jsonplaceholder.typicode.com/posts")
//   // then grab the results and convert to JSON
//   .then(results => {
//     state.Blog.posts = results.data;

//     // Slice off the slash from 'url'
//     // Capitalize the result
//     // If it is 'Blog', then render the new posts
//     if (capitalize(router.lastRouteResolved().url.slice(1)) === "Blog") {
//       render(state.Blog);
//     }
//   }) // Include a catch for basic error handling when working with
//   .catch(error => console.error(error));

// db.collection("pics")
//   .get()
//   .then(querySnapshot => {
//     querySnapshot.forEach(pic => state.Gallery.pics.push(pic.data()));

//     if (capitalize(router.lastRouteResolved().url.slice(1)) === "Gallery") {
//       render(state.Gallery);
//     }
//   })
//   .catch(error => {
//     console.error(error);
//   });

// axios
//   // We GET from a RESTful
//   .get("https://jsonplaceholder.typicode.com/photos")
//   .then(photos => {
//     photos.data.forEach(photo =>
//       db
//         .collection("pics")
//         .add(photo)
//         .then(() => console.log("Added pic"))
//         .catch(error => console.error(error))
//     );
//   });


const quotes = [
  {
    quote: 'Hello World',
    author: 'unknown'
  }
]

