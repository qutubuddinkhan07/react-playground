import axios from "axios";
import { Link } from "react-router-dom";

const BASE_URL = "http://localhost:5000/student";

const Card = (props) => {
  //   console.log(props.data);
  const {
    data: {
      id,
      studentAge,
      studentEmail,
      studentGrade,
      studentImg,
      studentName,
    },
    fn,
  } = props;

  const deleteCard = () => {
    axios.delete(`${BASE_URL}/${id}`).then(() => fn());
  };
  return (
    <div className="card mb-3" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={studentImg}
            className="img-fluid rounded-start"
            alt={studentName}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{studentName}</h5>
            <p className="card-text">Email: {studentEmail}</p>
            <p className="card-text">Grade: {studentGrade}</p>
            <p className="card-text">Age: {studentAge}</p>
            <p className="d-flex gap-3">
              <button className="btn btn-danger" onClick={deleteCard}>
                Delete
              </button>
              <Link className="btn btn-primary" to={`/update-student/${id}`}>
                Update
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
