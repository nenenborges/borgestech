import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
//import {getAuth, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";
import {getFirestore,  setDoc,  doc} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js";
import {getStorage, ref as storageRef, uploadBytesResumable, getDownloadURL} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-storage.js";


const firebaseConfig = {
    apiKey: "AIzaSyCaPv_OzBN9vI20I0ynTaIZRsViD9fa3WE",
    authDomain: "borgestechlogin.firebaseapp.com",
    projectId: "borgestechlogin",
    storageBucket: "borgestechlogin.appspot.com",
    messagingSenderId: "769990569355",
    appId: "1:769990569355:web:48e3efddc44248fa30538e"
};
 


const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

let uploadForm = document.getElementById("uploadForm");
uploadForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const marca = document.getElementById("marca").value;
  const produto = document.getElementById("produto").value;
  const valor = document.getElementById("valor").value;
  const file = document.getElementById("image").files[0];
 
  const fileRef = storageRef(storage, "images/" + file.name);
  const uploadTask = uploadBytesResumable(fileRef, file);





//-----Enviar dados para o storage firebase-------//
  uploadTask.on(
    "state_changed",
    (snapshot) => {},
    (error) => {
      console.log("🚀 ~ uploadTask.on ~ error:", error);
    },
    async () => {
      try {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        const docRef = doc(db, "products", file.name);
        await setDoc(docRef, {
          marca,
          produto,
          valor,
          image: downloadURL,
        });
        alert("Upload Data Successfully!!!");
        e.target.reset();
      } catch (error) {
        console.log("🚀 ~ error:", error);
      }
    }
  );
});
//----------------//------------------//