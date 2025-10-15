import { db } from "./firebase-config.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

async function loadStore() {
  const querySnapshot = await getDocs(collection(db, "products"));
  const grid = document.querySelector("#storeGrid");
  grid.innerHTML = "";
  querySnapshot.forEach((doc) => {
    const p = doc.data();
    grid.innerHTML += `
      <div class="product-card">
        <h3>${p.name}</h3>
        <p>${p.price}₫</p>
      </div>`;
  });
}

loadStore();
