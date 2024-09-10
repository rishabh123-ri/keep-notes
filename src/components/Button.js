import React from "react";

const Button = ({ Icon, iconStyle, containerStyle, onClick }) => {
  return (
    <button style={containerStyle} className="Delete_btn" onClick={onClick}>
      <Icon style={iconStyle} />
    </button>
  );
};

export default Button;
