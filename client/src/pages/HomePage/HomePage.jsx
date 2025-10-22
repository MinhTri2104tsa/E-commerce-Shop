import React from "react";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import { WrapperTypeProduct } from "./style";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import slider1 from "../../assets/images/slider1.png";
import slider2 from "../../assets/images/slider2.webp";
import slider3 from "../../assets/images/slider3.webp";
import { Card } from "antd";
import CardComponent from "../../components/CardComponent/CardComponent";
const HomePage = () => {
  const productTypes = ["TV", "Tu lanh", "May giat", "Dieu hoa"];
  return (
   <>
    <div style={{ padding: "0 120px" }}>
      <WrapperTypeProduct>
        {productTypes.map((item) => {
          return <TypeProduct key={item} name={item} />;
        })}
      </WrapperTypeProduct>
      <div id="container" style={{backgroundColor:"#efefef", padding: " 0 120px", height: "1000px"}}>
        <SliderComponent arrImages={[slider1, slider2, slider3]} />
        <div style={{marginTop:"20px", display:"flex", alignItems: "center", gap:"20px"}}>
          <CardComponent />
        </div>
      </div>
    </div>
   </>
  );
};

export default HomePage;
