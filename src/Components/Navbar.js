import React, { Component } from 'react'

export class Navbar extends Component {

  render() {
    return (
      <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">NewsMonkey</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link " aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About</a>
                        </li>
                        {/* <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Country
                                </a>
                                 <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="in">India</a></li>
                                    <li><a class="dropdown-item" href="us">United States Of America</a></li>
                                    <li><a class="dropdown-item" href="au">Australia</a></li>
                                    <li><a class="dropdown-item" href="za">South Africa</a></li>
                                    <li><a class="dropdown-item" href="se">Sweden</a></li>
                                    <li><a class="dropdown-item" href="tr">Turkey</a></li>
                                </ul> 
                        </li> */}
                    </ul>
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default Navbar
