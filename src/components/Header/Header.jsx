export default function Header() {
    return (
        <header className="header">
            <img src={require("./GM.png")} alt="logo" className="header__logo" />
            <h1 className="header__title">GoodDesign</h1>
        </header>
    );
}