import { LeftNav } from "./LeftNav.js";
import { RightNav } from "./RightNav";
import "../styles/NavBar.css";

export function NavBar(props) {
  return (
    <div class="navbardiv">
      <LeftNav />
      <RightNav />
    </div>
  );
}
