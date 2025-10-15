import { auth } from "./firebase-config.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

const form = document.querySelector("#loginForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = form.email.value;
  const password = form.password.value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Đăng nhập thành công!");
      window.location.href = "admin.html";
    })
    .catch(() => alert("Sai tài khoản hoặc mật khẩu!"));
});
