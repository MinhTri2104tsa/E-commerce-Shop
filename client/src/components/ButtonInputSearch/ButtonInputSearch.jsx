import { Button, Input } from "antd";
import React from "react";
import { SearchOutlined } from "@ant-design/icons";

const ButtonInputSearch = (props) => {
  const {
    size,
    placeholder,
    textButton,
    bordered,
    backgroundColorInput = "#fff",
    backgroundColorButton = "rgb(13,92,182)",
    colorButton = "#fff",
  } = props;
  return (
    <div style={{ display: "flex"}}>
      <Input
        size={size}
        placeholder={placeholder}
        bordered={bordered}
        style={{ backgroundColor: backgroundColorInput, border: !bordered && "none" , borderRadius: "inherit"}}
      />
      <Button
        size={size}
        bordered={bordered}
        style={{ backgroundColor: backgroundColorButton, color: colorButton, border: !bordered && "none" ,borderRadius: "inherit"}}
        icon={<SearchOutlined style={{color: colorButton}} />}
      >
        <span style={{color: colorButton}}>{textButton}</span>
      </Button>
    </div>
  );
};

export default ButtonInputSearch;
