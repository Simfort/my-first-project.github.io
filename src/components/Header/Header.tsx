import './Header.css'

export default function Header() {
    return <header className="header">
        <h1 className="header__title">STS</h1>
        <nav className="header__nav">
            <a href="#" className="header__nav-link">Home</a>
            <a href="#" className="header__nav-link">Service</a>
            <a href="#" className="header__nav-link">Create List</a>
            <a href="#" className="header__nav-link">LogIn</a>
        </nav>
    </header>
}