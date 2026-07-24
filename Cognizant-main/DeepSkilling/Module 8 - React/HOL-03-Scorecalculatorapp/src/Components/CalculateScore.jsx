import "../Stylesheets/mystyle.css";

function CalculateScore(props) {

    const average = ((props.total / props.goal)*100).toFixed(2);

    return (
        <div className="container">

            <h1>Student Details:</h1>

            <h3>
                <span className="name">Name:</span> {props.name}
            </h3>

            <h3>
                <span className="school">School:</span> {props.school}
            </h3>

            <h3>
                <span className="total">Total:</span> {props.total} Marks
            </h3>

            <h3>
                <span className="score">Score:</span> {average}%
            </h3>

        </div>
    );
}

export default CalculateScore;