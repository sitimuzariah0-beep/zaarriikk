const PASSWORD = "eco123"; // Password khusus

function login() {
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value;

  if (pass === PASSWORD && user !== "") {
    localStorage.setItem("login", "true");
    localStorage.setItem("username", user);
    window.location.href = "home.html";
  } else {
    alert("Username atau password salah!");
  }
}

function checkLogin() {
  if (localStorage.getItem("login") !== "true") {
    window.location.href = "index.html";
  }
}

function logout() {
  localStorage.removeItem("login");
  localStorage.removeItem("username");
}
