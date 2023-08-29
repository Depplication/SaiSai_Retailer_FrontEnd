import React from "react";
import * as I from "./WebTextField.style";
import deleteImg from "../../asset/img/delete.svg";

function InputField({
  placeholder,
  value,
  onChange,
  showDeleteImg,
  onDeleteImgClick,
}) {
  return (
    <I.InputBox1Wrapper>
      <I.InputBox1
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {showDeleteImg && (
        <I.InputBoxDeleteImg
          src={deleteImg}
          alt="deleteImg"
          onClick={onDeleteImgClick}
        />
      )}
    </I.InputBox1Wrapper>
  );
}

export default InputField;
