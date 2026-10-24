import Detail from "./Detail";
import General from "./General";
import Other from "./Other";

export default function Profil() {
    return (
        <div className="profil">
            <h1 className="profil__title">Student Profile Page Design Example</h1>
            <p className="profil__subtitle">A responsive student profile page design</p>

            <div className="profil__grid">
                <Detail />
                <General />
                <Other />
            </div>
        </div>
    );
}