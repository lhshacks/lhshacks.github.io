import "./App.css";
import logo from "./images/viking_helmet.png";
import React, {Component, Fragment} from 'react';

class App extends Component {
    render() {
        return (
            <Fragment>
                <header>
                    <div>
                        <h1 style={{flexGrow: 1}}>VikeHacks</h1>
                        <nav>
                            <ul>
                                <li className="squishy button blue gradient">Apply</li>
                            </ul>
                        </nav>
                    </div>
                </header>
                <main>
                    <section className={"animated fadeInUp"} style={{
                        backgroundImage: "url(https://www.pixelstalk.net/wp-content/uploads/2016/11/Desktop-Flat-Design-Wallpapers.jpg)",
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: "center",
                        minHeight: "80vh"
                    }}>
                        <div style={{textAlign: "center"}}>
                            <img alt="" src={logo} style={{
                                width: 256
                            }}/>
                            <h1 style={{marginTop: 0}}>VikeHacks</h1>
                            <h2>Lynbrook's Annual Hackathon</h2>
                            <a className="big squishy button blue gradient" id="apply-button">Apply Now</a>
                        </div>
                    </section>
                </main>
            </Fragment>
        );
    }
}

export default App;
