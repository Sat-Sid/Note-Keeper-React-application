import React from "react";

function Header(){
    return (
            <nav className="navbar navbar-light bg-warning px-5 py-3">
                <div className="container-fluid">
                    <a className="navbar-brand d-flex" href="/">
                        <img src="../images/note_keeperLogo.png" alt="" width="60" height="50" className="d-inline-block align-text-top" />
                        <span className="mx-3 headingTitle">Note Keeper</span>

                    </a>
                </div>
            </nav>
    );
}

export default Header;