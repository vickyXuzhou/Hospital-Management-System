import React from "react";
import Input from "../../../components/input/Input.jsx";
import "./ddtail.css";
import Select from "../../../components/select/Select.jsx";
import TextArea from "../../../components/textArea/TextArea.jsx";
const DDetail = () => {
  const options = [
    { value: "Female", label: "F" },
    { value: "Male", label: "M" },
  ];
  return (
    <div className="DDetailContainer">
      <h2>Doctor Details</h2>
      <div>
        <form>
          <div>
            <label htmlFor="D_Id">Doctor ID</label>
            <Input placeholder="Doctor Id" name="D_Id" type="text" />
          </div>
          <div>
            <p>Personal Details</p>
          </div>
          <div className="section">
            <div className="section1">
              <div>
                <label htmlFor="D_Id">First Name</label>
                <Input placeholder="Doctor Id" name="D_Id" type="text" />
              </div>
              <div>
                <Select options={options} />
              </div>

              <div>
                <label htmlFor="D_Id">NIC No</label>
                <Input placeholder="NIC No" name="D_Id" type="text" />
              </div>
              <div>
                <label htmlFor="">Address</label>
                <TextArea
                // value={value}
                />
              </div>
            </div>
            <div className="section1">
              <div>
                <label htmlFor="D_Id">Last Name</label>
                <Input placeholder="Last Name" name="D_Id" type="text" />
              </div>
              <div>
                <label htmlFor="D_Id">Home phone</label>
                <Input placeholder="Home phone" name="D_Id" type="text" />
              </div>
              <div>
                <label htmlFor="D_Id">Mobile Phone</label>
                <Input placeholder="Mobile Phone" name="D_Id" type="text" />
              </div>
              <div>
                <label htmlFor="D_Id">Qualifications</label>
                <Input placeholder="Qualifications" name="D_Id" type="text" />
              </div>
              <div>
                <label htmlFor="D_Id">Specialization</label>
                <Input placeholder="Specialization" name="D_Id" type="text" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DDetail;
