import React, { useState } from "react";
import * as I from "./WebTextField.style";
import InputField from "../../components/WebTextField/inputField";

function WebButton() {
  const [inputValue1, setInputValue1] = useState("");
  const [showDeleteImg1, setShowDeleteImg1] = useState(false);

  const [inputValue2, setInputValue2] = useState("");
  const [showDeleteImg2, setShowDeleteImg2] = useState(false);

  const handleInputBox1Change = (event) => {
    const newValue = event.target.value;
    setInputValue1(newValue);
    setShowDeleteImg1(newValue !== "");
  };

  const handleInputBox2Change = (event) => {
    const newValue = event.target.value;
    setInputValue2(newValue);
    setShowDeleteImg2(newValue !== "");
  };

  const handleDeleteImg1Click = () => {
    setInputValue1("");
    setShowDeleteImg1(false);
  };

  const handleDeleteImg2Click = () => {
    setInputValue2("");
    setShowDeleteImg2(false);
  };

  return (
    <I.Container>
      <I.Column>
        <I.Label1>label1</I.Label1>
        <InputField
          placeholder="value"
          value={inputValue1}
          onChange={handleInputBox1Change}
          showDeleteImg={showDeleteImg1}
          onDeleteImgClick={handleDeleteImg1Click}
        />
      </I.Column>

      <I.Column>
        <I.errorTextLabel1>errorText1</I.errorTextLabel1>
        <I.errorInputBox1
          placeholder="value"
          value={inputValue2}
          onChange={handleInputBox2Change}
          showDeleteImg={showDeleteImg2}
          onDeleteImgClick={handleDeleteImg2Click}
        />
      </I.Column>
    </I.Container>
  );
}

export default WebButton;
