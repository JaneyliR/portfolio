import Link from "next/link";

const NavBar = () => {
    return(
        <div className="nav-container">
            <div className="logo">
                <Link href="/">
                 Janeyli's Portfolio
                </Link>
         </div>
            <a href="../Janeylirosario-resume.pdf" className="cta-btn">Resume</a>
        </div>
    )
}
export default NavBar;

