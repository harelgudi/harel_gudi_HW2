
export const lightboxInit = () => {
  createLightBox();
  hideLightBox();
}

const createLightBox = () => {
  let divLight = document.createElement("div");
  divLight.className = "light_box";
  divLight.id = "id_lightbox";
  document.body.append(divLight);
  divLight.innerHTML =
    `<div class="light_box_inside ">
        <img id="id_img">
        <h2 id="id_name"></h2>
        <div>email: <span id="id_email"></span>
        <div>adress: <span id="id_adress"></span></div>
        <p>phone: <span id="id_phone"></span></p>
        <button class="btn btn-warning myBtn">Exit</button>
      </div>`

  let closebtn = divLight.querySelector(".myBtn");
  closebtn.addEventListener("click", hideLightBox)
}



const hideLightBox = () => {
  let id_lightbox = document.querySelector("#id_lightbox");
  id_lightbox.style.display = "none";
}

export const showLightBox = (_item) => {
  
  let id_lightbox = document.querySelector("#id_lightbox");
  id_lightbox.style.display = "flex";


  document.querySelector("#id_img").src = _item.img
  document.querySelector("#id_name").innerHTML = _item.first_name + " " + _item.last_name;
  document.querySelector("#id_email").innerHTML = _item.email;
  document.querySelector("#id_phone").innerHTML = _item.phone;
  document.querySelector("#id_adress").innerHTML = _item.asressstreet_name + " " + _item.street_number;
}