import Header from "./components/Header/Header";
import Nav from "./components/Navigation/Navigation";
import Profil from "./components/Profil";
import Footer from "./components/Footer/Footer";
import './App.css';

function App() {
    const appStyle = {
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh", 
        backgroundColor: "#f4f7f6",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#333",
        margin: "0",
        padding: "0"
    };

    const mainContentStyle = {
        flex: "1", 
        padding: "20px 0"
    };

    return (
        <div style={appStyle}>
            <Header />
            <Nav />
            <main style={mainContentStyle}>
                <Profil />
            </main>
            <Footer />
        </div>
    );
}

export default App;