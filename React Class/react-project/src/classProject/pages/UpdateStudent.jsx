import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

const BASE_URL = "http://localhost:5000/student";

const UpdateStudent = () => {
  const { id } = useParams(); // to fetch the id from the url

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    studentName: "",
    studentEmail: "",
    studentAge: "",
    studentGrade: "",
    studentImg: "",
    studentPassword: "",
    studentAgreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    const notify = toast("Student updated");
    e.preventDefault();
    try {
      const response = await axios.put(`${BASE_URL}/${id}`, formData);
      //   console.log(response);
      //   console.log("Submitted Form Data:", formData);
      notify;
      navigate("/view-all");
    } catch (err) {
      console.error("Some error occurred:", err);
    }
  };

  const fetchData = async () => {
    const { data } = await axios.get(BASE_URL);
    const result = data.find((val) => val.id == id);
    setFormData(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100 py-5">
      <div
        className="card shadow-lg p-4 rounded-4 border-0"
        style={{ maxWidth: "480px", width: "100%" }}
      >
        <div className="text-center mb-4">
          <h2 className="fw-bold text-primary">Update Student</h2>
          <p className="text-muted small">
            Enter student information to register a new profile
          </p>
        </div>

        {/* Live Image Preview */}
        {formData.studentImg && (
          <div className="text-center mb-3">
            <img
              src={formData.studentImg}
              alt="Student Preview"
              className="rounded-circle object-fit-cover shadow-sm"
              style={{ width: "100px", height: "100px" }}
              onError={(e) => (e.target.style.display = "none")}
            />
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="studentName" className="form-label fw-semibold">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="studentName"
              name="studentName"
              value={formData.studentName}
              placeholder="e.g. John Doe"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="studentImg" className="form-label fw-semibold">
              Enter Image URL
            </label>
            <input
              type="url"
              className="form-control"
              id="studentImg"
              name="studentImg"
              value={formData.studentImg}
              placeholder="https://example.com/avatar.jpg"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="studentPassword" className="form-label fw-semibold">
              Enter Password
            </label>
            <input
              type="password"
              className="form-control"
              id="studentPassword"
              name="studentPassword"
              value={formData.studentPassword}
              onChange={handleChange}
              placeholder="••••••••"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="studentEmail" className="form-label fw-semibold">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="studentEmail"
              name="studentEmail"
              value={formData.studentEmail}
              onChange={handleChange}
              placeholder="e.g. john.doe@example.com"
              required
            />
          </div>

          <div className="row g-3 mb-3">
            <div className="col-md-6">
              <label htmlFor="studentAge" className="form-label fw-semibold">
                Age
              </label>
              <input
                type="number"
                className="form-control"
                id="studentAge"
                name="studentAge"
                value={formData.studentAge}
                onChange={handleChange}
                placeholder="18"
                min="1"
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="studentGrade" className="form-label fw-semibold">
                Grade / Class
              </label>
              <select
                className="form-select"
                id="studentGrade"
                name="studentGrade"
                value={formData.studentGrade}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select grade
                </option>
                <option value="Freshman">Freshman</option>
                <option value="Sophomore">Sophomore</option>
                <option value="Junior">Junior</option>
                <option value="Senior">Senior</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100 py-2 fw-semibold rounded-3"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateStudent;
