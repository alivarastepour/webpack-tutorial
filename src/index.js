import "./index.css";
import photo from "./photo-1592853285454-34691b7b74c4.jpeg";
import Data from "./index.csv";
const container = document.getElementById("container");
container.innerHTML = "سلام";
container.style.color = "red";
container.classList.add("salam");

const node = document.createElement("img");
node.src = photo;
node.classList.add("pic");
container.appendChild(node);

console.log(Data);
