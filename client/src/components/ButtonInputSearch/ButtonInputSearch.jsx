import { Button} from "antd";
import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import InputComponent from "../InputComponent/InputComponent";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

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
      <InputComponent
        size={size}
        placeholder={placeholder}
        bordered={bordered}
        style={{ backgroundColor: backgroundColorInput, border: !bordered && "none" , borderRadius: "inherit"}}
      />
      <ButtonComponent
        size={size}
        bordered={bordered}
        styleButton={{ background: backgroundColorButton, border: !bordered && "none" ,borderRadius: "inherit"}}
        styleTextButton={{ color: colorButton }}
        textButton={textButton}
        icon={<SearchOutlined style={{color: colorButton}} />}
      >
        <span style={{color: colorButton}}>{textButton}</span>
      </ButtonComponent>
    </div>
  );
};

export default ButtonInputSearch;
