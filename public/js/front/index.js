/* By Xlator /°-°\ and SkyX [ID FR] **_** */
/* <Arduinor-Nanor Project> Web DEV Fullstack Part */

const tabLink = document.querySelectorAll(".tab-menu-link");
const tabContent = document.querySelectorAll(".tab-bar-content");
tabLink.forEach((item) => { item.addEventListener("click", activeTab); });

function activeTab(item) {
        const btnTarget = item.currentTarget;
        const content = btnTarget.dataset.content;

        tabContent.forEach((item) => {
            item.classList.remove("is-active");
        });

        tabLink.forEach((item) => {
            item.classList.remove("is-active");
        });

        document.querySelector("#" + content).classList.add("is-active");
        btnTarget.classList.add("is-active");
}

$(".open-login-modal").on("click", function() {
  $(".overlay").addClass("is-on");
});

$(".open-sign-in-modal").on("click", function() {
  $(".overlay-2").addClass("is-on");
});

$("#close").on("click", function() {
  $(".overlay").removeClass("is-on");
});

$("#close-2").on("click", function() {
  $(".overlay-2").removeClass("is-on");
});

/* Login and user's space section : */
function login() {
  var username_login = document.getElementById("login_username").value;
  var password_login = document.getElementById("login_password").value;

  if (username_login == "skyx" && password_login == "123") {
    console.log("Login successfully for %c" + username_login, "background-color: blue; padding: 4px; border-radius: 7px; color: white;");
    document.location = "users/skyx.html";
  } else if (username_login == "xlator" && password_login == "password") {
    console.log("Login successfully for %c" + username_login, "background-color: blue; padding: 4px; border-radius: 7px; color: white;");
    document.location = "users/xlator.html";
  } else {
    document.getElementById('login_error_msg').innerHTML = "Incorrect password and/or username :/";
  }
}

function logout() {
  document.location = "../index.html";
}
/* End of Login and user's space section : */

/* Component declaration : */
const notification_item_1 = `
  <ul class="list-group">
    <li class="list-group-item notif d-flex justify-content-between align-items-center">
      <h1 class="title">Hi !</h1>
      <p class="description">Welcome to Arduinor-Nanor! A social network based on hardware and electronics. Coded in Native JS and Web DEV with the Bootstrap framework in CSS and JS. For more info, go to the Github repository associated with the project : <a href="https://github.com/SkyX-ID-FR/Arduinor-Nanor-Project" target="_blank">https://github.com/SkyX-ID-FR/Arduinor-Nanor-Project</a></p>
      <span class="badge rounded-pill">ALPHA</span>
      <i class="gg-calendar-today"></i><p class="date">Posted by SkyX [ID FR], 1st Februar...</p><br></br>
  </li>
  </ul>
`;

const xlator_user = `
  <div class="card" id="user-two">
  <div class="card-bg1"></div>

  <a href="#"><div id="view-profile">
      <i class="gg-eye"></i>
      <!-- <i class="gg-arrow-top-right"></i> -->
  </div></a>
  
  <div class="card-avatar"><img src="https://avatars.githubusercontent.com/u/104075872?v=4" alt="Avatar"/></div>
  <div class="card-content">
    <img class="crow" src="https://i.pinimg.com/originals/50/7f/2c/507f2cb3a03c5c1d9c20d57f0bd5042f.png"/>
    <h1>Xlator</h1>
    <p>Hi. Me, it's Xaltor : I like coding robots in arduino, so if you like it come join me ! In the <code>Arduinor-Nanor</code>'s Project, I'm the main admin/modo of this project and already, the main designer. :)</p>
    
    <br><span class="label-classification blue">👑 Admin</span>
    <span class="label-classification green">🧒 Junior DEV</span><br>
  </div>
  </div>
`;

const skyx_user = `
  <div class="card" id="user-one">
  <div class="card-bg2"></div>
  
  <a href="#"><div id="view-profile">
      <i class="gg-eye"></i>
      <!-- <i class="gg-arrow-top-right"></i> -->
  </div></a>

    <div class="card-avatar"><img src="https://avatars.githubusercontent.com/u/89273191?v=4" alt="Avatar"/></div>
    <div class="card-content">
      <h1>SkyX [ID FR]</h1>
      <p>Hi. I'm SkyX and you ? I play with coding so much that for me it has become an art ! I'm the main Front/Back/Fullstack developer of <code>Arduinor-Nanor</code>'s Project and the second designer.</p>
    
      <br><span class="label-classification red">💻 Main DEV</span>
      <span class="label-classification gray">🔧 Contributor</span>
    </div>
  </div>
`;

const account_space_render = `
<ul class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-center">
        <button onclick="logout();" class="btn btn-primary">Log-out of your account !</button>
    </li>
</ul>                                
`
/* End of Component declaration */

function sign_in() {
  if (document.getElementById("sign-in-username").value == "") {
    alert("false !");
  } else if (document.getElementById("sign-in-password").value == "") { 
    alert("false !");
  } else {
    console.log("Username : "+ document.getElementById("sign-in-username").value + " \nPassword : " + document.getElementById("sign-in-password").value);
  }
}

/* Component render : */
document.getElementById("notifications_area").innerHTML = notification_item_1;
document.getElementById("users-area").innerHTML = xlator_user + skyx_user;
document.getElementById("account_space").innerHTML = account_space_render;

document.getElementById('community').innerHTML = "cocou";

/* End of Component render */
  
/* END */