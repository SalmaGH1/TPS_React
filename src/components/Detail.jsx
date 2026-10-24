export default function Detail() {
    const info = {
        Id: 12345,
        nom: "Meriem Chakour",
        class: 4,
        section: "A",
        img: require("../Images/Profile.jpg")
    };

    return (
        <div className="card card--detail">
            <img className="detail__img" src={info.img} alt="Profile" />
            <h2 className="detail__name">{info.nom}</h2>
            <div className="detail__info">
                <p>Student ID: {info.Id}</p>
                <p>Class: {info.class}</p>
                <p>Section: {info.section}</p>
            </div>
        </div>
    );
}