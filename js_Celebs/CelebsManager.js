
import CelebsClass from "./CelebsClass.js";

export const doApi = async () => {
  document.querySelector("#id_row").innerHTML = `<h2>Loading...</h2>`;
  let url = "https://randomuser.me/api/?results=12&seed=google"
    let resp = await fetch(url);
    let data = await resp.json();
    console.log(data.results);
    createCelebsList(data.results);
}

export const ApiSearch = async(searchQ) => {
  document.querySelector("#id_row").innerHTML = `<h2>Loading...</h2>`;
  let url = `https://randomuser.me/api/?results=12&seed=google=${searchQ}`
    let resp = await fetch(url);
    let data = await resp.json();
    console.log(data.results);
    createCelebsList(data.results);
}

const createCelebsList = (_arr) => {
  document.querySelector("#id_row").innerHTML = " ";
  _arr.forEach(item => {
    let Celebs = new CelebsClass("#id_row", item);
    Celebs.render();
  })
}