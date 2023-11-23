import React, { useState } from "react";
import Input from "../../../components/input/Input.jsx";
import "./ddtail.css";
import Select from "../../../components/select/Select.jsx";
import TextArea from "../../../components/textArea/TextArea.jsx";
const DDetail = () => {
  const [inputs, setInputs] = useState({
    doctorID: "",
    firstN: "",
    address: "",
    nIC: "",
    lastN: "",
    homePhone: "",
    mobilePhone: "",
    qualifications: "",
    specialization: "",
    doctorType: "",
    notes: "",
    visitingCharge: "",
    channelingCharge: "",
    basicSalary: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const options = [
    { value: "Female", label: "F" },
    { value: "Male", label: "M" },
  ];
  const options1 = [
    { value: "Visiting Doctor", label: "Visiting Doctor" },
    { value: "Permanent Doctor", label: "Permanent Doctor" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };
  return (
    <div className="DDetailContainer">
      <h2>Doctor Details</h2>
      <div className="DDSection">
        <form onSubmit={handleSubmit}>
          <div className="section">
            <label htmlFor="D_Id">Doctor ID</label>
            <Input
              placeholder="Doctor Id"
              name="doctorID"
              type="text"
              value={inputs.doctorID}
              onChange={handleOnChange}
            />
          </div>
          <div>
            <p>Personal Details</p>
          </div>
          <div className="section">
            <div className="section1">
              <div>
                <label htmlFor="FirstN">First Name</label>
                <Input
                  placeholder="First Name"
                  name="firstN"
                  type="text"
                  onChange={handleOnChange}
                  value={inputs.firstN}
                />
              </div>
              <div>
                <label htmlFor="address"></label>
                <Select
                  options={options}
                  name="address"
                  value={inputs.address}
                  onChange={handleOnChange}
                />
              </div>

              <div>
                <label htmlFor="NIC">NIC No</label>
                <Input
                  placeholder="NIC No"
                  name="nIC"
                  type="text"
                  value={inputs.nIC}
                  onChange={handleOnChange}
                />
              </div>
              <div>
                <label htmlFor="address">Address</label>
                <TextArea
                  name="address"
                  tvalue={inputs.address}
                  onChange={handleOnChange}
                />
              </div>
            </div>
            <div className="section1">
              <div>
                <label htmlFor="LastN">Last Name</label>
                <Input
                  placeholder="Last Name"
                  name="lastN"
                  type="text"
                  onChange={handleOnChange}
                  value={inputs.lastN}
                />
              </div>
              <div>
                <label htmlFor="HomeP">Home phone</label>
                <Input
                  placeholder="Home phone"
                  onChange={handleOnChange}
                  name="homePhone"
                  type="text"
                  value={inputs.homePhone}
                />
              </div>
              <div>
                <label htmlFor="MobileP">Mobile Phone</label>
                <Input
                  placeholder="Mobile Phone"
                  name="mobilePhone"
                  type="text"
                  onChange={handleOnChange}
                  value={inputs.mobilePhone}
                />
              </div>
              <div>
                <label htmlFor="Qualifications">Qualifications</label>
                <Input
                  placeholder="Qualifications"
                  name="qualifications"
                  onChange={handleOnChange}
                  type="text"
                  value={inputs.qualifications}
                />
              </div>
              <div>
                <label htmlFor="Specialization">Specialization</label>
                <Input
                  placeholder="Specialization"
                  name="specialization"
                  type="text"
                  onChange={handleOnChange}
                  value={inputs.specialization}
                />
              </div>
            </div>
            <div>
              <p>Employee Details</p>
            </div>
            <div className="section">
              <div className="section1">
                <div>
                  <label htmlFor="doctorType">Doctor Type</label>
                  <Select
                    options={options1}
                    name="doctorType"
                    onChange={handleOnChange}
                    value={inputs.doctorType}
                  />
                </div>
                <div>
                  <label htmlFor="notes">Notes</label>
                  <TextArea
                    name="notes"
                    tvalue={inputs.notes}
                    onChange={handleOnChange}
                  />
                </div>
              </div>

              <div className="section1">
                <div>
                  <label htmlFor="visitingCharge">Visiting Charge</label>
                  <Input
                    placeholder="Visiting Charge"
                    name="visitingCharge"
                    value={inputs.visitingCharge}
                    onChange={handleOnChange}
                    type="text"
                  />
                </div>
                <div>
                  <label htmlFor="channelingCharge">Channeling Charge</label>
                  <Input
                    placeholder="Channeling Charge"
                    name="channelingCharge"
                    onChange={handleOnChange}
                    value={inputs.channelingCharge}
                    type="text"
                  />
                </div>
                <div>
                  <label htmlFor="bSalary">Basic Salary</label>
                  <Input
                    placeholder="Basic Salary"
                    onChange={handleOnChange}
                    name="basicSalary"
                    value={inputs.basicSalary}
                    type="text"
                  />
                </div>
              </div>
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default DDetail;
