/*
 * this file contains functions which are used more than ones in this app
 */

import { Link } from "react-router-dom";

export function Menu(Items) {
  return (
    <ul class="navbar-nav ml-auto">{Items.map((item) => Option(item))}</ul>
  );
}
export function Option(type) {
  return (
    <li key={type.name}>
      <Link to={type.link}>{type.name}</Link>
    </li>
  );
}

export function BtnLink(redirectPath,btnText){
  return(
    <Link className="btn btn-submit"  to={redirectPath}>{btnText}</Link>
  )
}