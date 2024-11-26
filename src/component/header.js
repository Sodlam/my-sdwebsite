import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faComputer, faDownload, faMoon, faPhoneVolume, faSun } from "@fortawesome/free-solid-svg-icons";
const Home = () => {
    return (
        <div>
            <header className="section1">
                <div id="main">
                    <Image
                        src="/logo.png"
                        alt="culture"
                        width={1000} height={500}
                        className="logo"
                    />
                    <nav>
                        <ul className="lists">
                            <li>
                                <a href="#intro">intro</a>
                            </li>
                            <li>
                                <a href="#countdown">countdown</a>
                            </li>
                            <li>
                                <a href="#note">notes</a>
                            </li>
                            <li>
                                <a href="#location">location</a>
                            </li>
                            <li>
                                <a href="#contact">contact</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="toggleswitch">
                        <FontAwesomeIcon icon={faMoon} className="fa-solid fa-moon" />
                        <button className="toggle" onClick="toggleMode()">
                            <i className="fa-solid fa-toggle-on toggleon" id="toggle" />
                        </button>
                        <FontAwesomeIcon icon={faSun} className="fa-solid fa-sun" />
                    </div>
                    <button className="call-us-btn">
                    <FontAwesomeIcon icon={faPhoneVolume} className="fa-solid fa-phone-volume" />
                    Call Us
                    </button>
                    {/* <button class="button1">Call Us</button> */}
                    <FontAwesomeIcon icon={faBars} className="fa-solid fa-bars fa-2xl" id="bar" />
                </div>
                <p className="first-text" id="intro">
                    <i>imomotimi foundation presents</i>
                </p>
                <h1 className="second-text">imomotimi ijaw</h1>
                <h1 className="third-text">dance contest 2024</h1>
                <button className="button2">
                    download entry form{" "}
                    <FontAwesomeIcon icon={faDownload} className="fa-solid fa-download fa" style={{ paddingLeft: 5 }} />
                </button>
                <p className="last-p">
                    All duly filled out forms and the entry fees should be brought along to the
                    audition
                </p>
                <FontAwesomeIcon icon={faComputer} className="fa fa-computer-mouse" id="coffee" />
                <Image
                    id="topWhite"
                    src="/shape-top-white-80.png" width={1000} height={500}
                    className="img2"
                    alt="wave"
                />
            </header>
        </div>
    )
}

export default Home;