import React, { useState } from "react";
import "./roomform.css";
import axios from "axios";

interface FormState {
  name: string;
  relationship: string;
  gender: string;
  slogan: string;
}

const RoomForm: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    relationship: "친구",
    gender: "남",
    slogan: "",
  });
  console.log(formState);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.slogan.length <= 15) {
      axios
        .post("/main", formState)
        .then((response) => {
          console.log("Response:", response.data);
          alert("Form Submitted Successfully");
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("Form Submission Failed");
        });
    } else {
      alert("슬로건은 15자 이내로 입력해주세요.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="roomForm">
      <div className="formGroup">
        <label>
          이름(그룹명):
          <input
            type="text"
            name="name"
            value={formState.name}
            onChange={handleChange}
            required
            className="input"
          />
        </label>
      </div>
      <div className="formGroup">
        <label>
          관계:
          <select
            name="relationship"
            value={formState.relationship}
            onChange={handleChange}
            required
            className="select"
          >
            <option value="친구">친구</option>
            <option value="가족">가족</option>
            <option value="여자친구">여자친구</option>
            <option value="남자친구">남자친구</option>
            <option value="애완동물">애완동물</option>
            <option value="기타">기타</option>
          </select>
        </label>
      </div>
      <div className="formGroup">
        <label>
          성별:
          <select
            name="gender"
            value={formState.gender}
            onChange={handleChange}
            required
            className="select"
          >
            <option value="남">남</option>
            <option value="여">여</option>
            <option value="단체">단체</option>
          </select>
        </label>
      </div>
      <div className="formGroup">
        <label>
          슬로건(15자 이내):
          <input
            type="text"
            name="slogan"
            value={formState.slogan}
            onChange={handleChange}
            maxLength={15}
            required
            className="input"
          />
        </label>
      </div>
      <button type="submit" className="button">
        전송
      </button>
    </form>
  );
};

export default RoomForm;
