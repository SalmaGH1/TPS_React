export default function General() {
    const rows = [
        ["Roll", "125"],
        ["Academic Year", "2020"],
        ["Gender", "Male"],
        ["Religion", "Group"],
        ["Blood", "B+"],
    ];

    return (
        <div className="card card--general">
            <h2 className="card__title">General Information</h2>
            <table className="general__table">
                <tbody>
                    {rows.map(([label, value]) => (
                        <tr key={label}>
                            <td className="general__label">{label} :</td>
                            <td className="general__value">{value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}