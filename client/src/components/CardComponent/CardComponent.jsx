import React from "react";
import {
  StyleNameProduct,
  WrapperDiscountText,
  WrapperPriceText,
  WrapperReportText,
  WrapperCardStyle
} from "../CardComponent/style";
import { StarFilled } from "@ant-design/icons";
import { WrapperStyleTextSell } from "./style";

const CardComponent = () => {
  return (
    <WrapperCardStyle
      hoverable
      headStyle={{width: "200px", height: "200px"}}
      style={{ width: 240 }}
      bodyStyle={{ padding: "10px" }}
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      <StyleNameProduct>Iphone</StyleNameProduct>
      <WrapperReportText>
        <span style={{marginRight: "4px"}}>
          <span>4.95 </span>
          <StarFilled style={{ fontSize: "12px", color: "yellow" }} />
        </span>
        <WrapperStyleTextSell>| Da ban 1000+</WrapperStyleTextSell>
      </WrapperReportText>
      <WrapperPriceText><span style={{marginRight:'8px'}}>10.000.000 VND</span>
        <WrapperDiscountText>-5%</WrapperDiscountText>
      </WrapperPriceText>
    </WrapperCardStyle>
  );
};

export default CardComponent;
