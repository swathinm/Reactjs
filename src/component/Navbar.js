import React from "react";
export class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand">Welcome to Reactbootstrap</a>
                <div class="ml-auto">
                    <ul class="navbar-nav">
                        <li class="nav-list"><a href="./about.html" class="nav-link">About</a></li>
                        <li class="nav-list"><a href="./contact.html" class="nav-link">Contact</a></li>
                        <li class="nav-list"><a href="./service.html" class="nav-link">Service</a></li>
                        <li class="nav-list"><a href="./product.html" class="nav-link">Dogs</a></li>
                        <li class="nav-list"><a href="./login.html" class="nav-link">Login</a></li>
                    </ul>
                </div>
        
          </nav>
          
      </div>
    )
  }
}

export default Navbar;