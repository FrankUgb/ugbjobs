const pass = document.getElementById("pass"),
      icon = document.querySelector(".bx");

icon.addEventListener("click", e => {
    if (pass.type === "password") {
        pass.type = "pass";
    } else {
        pass.type = "password"
    }
})