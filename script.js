let details = document.querySelector(".details");
let imgContainer = document.querySelector(".img-container");
let getUserBtn = document.getElementById("get-user-btn");
let url = "https://random-data-api.com/api/v2/users?response_type=json";


let getUser = () => {
    fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
        imgContainer.innerHTML = `<img src= ${data.avatar}>`;
        details.innerHTML = `<h3>${data.first_name} ${data.last_name}</h3>
        <p>${data.employment.title}</p>
        <p> <i class="bi bi-geo-alt-fill"></i> ${data.address.city}</p>`;

        let randomColor = "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
        document.documentElement.style.setProperty("--theme-color", randomColor);
    });
}

window.addEventListener("load", getUser);
getUserBtn.addEventListener("click", getUser);