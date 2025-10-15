import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

const db = getDatabase();
const auth = getAuth();

document.querySelector("#orderForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const user = auth.currentUser;

  if (!user) {
    alert("Vui lòng đăng nhập để đặt hàng!");
    return;
  }

  const order = {
    userId: user.uid,
    name: document.querySelector("#name").value,
    address: document.querySelector("#address").value,
    total: document.querySelector("#total").innerText,
    timestamp: new Date().toISOString()
  };

  const ordersRef = ref(db, "orders");
  await push(ordersRef, order);
  alert("Đặt hàng thành công!");
});
