import React, { useState } from "react";
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from "./style";
import InputForm from "../../components/InputForm/InputForm";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import imageLogo from '../../assets/images/anh1.webp'
import {Image} from 'antd'
import {EyeFilled, EyeInvisibleFilled} from '@ant-design/icons'
const SignInPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false)
  return (
    <div style={{display:'flex', alignItems:"center", justifyContent:'center', background: 'rgba(0,0,0,0.53)', height:'100vh '}}>
      <div
        style={{
          display:'flex',
          width: "800px",
          height: "445px",
          borderRadius: "6px",
          background: "#fff",
        }}
      >
        <WrapperContainerLeft>
          <h1>Xin chao</h1>
          <p>Dang nhap hoac tao tai khoan</p>
          <InputForm  style={{ marginBottom: '10px'}} placeholder='abc@gmail.com'/>
          <div style={{position:'relative'}}>
            <span style={{zIndex: '10', position:'absolute', top:'4px', right:'8px'}}>
                {
                  isShowPassword ? (
                    <EyeFilled />
                  ) : (
                    <EyeInvisibleFilled />
                  )
                }
            </span>

          <InputForm placeholder="password" type={isShowPassword ? 'text': 'password'}/>
          </div>
          <ButtonComponent
            bordered={false}
            size={40}
            styleButton={{
              background: "rgb(255,57,59)",
              height: "48px",
              width: "100%",
              border: "none",
              borderRadius: "4px",
              margin: '26px 0 10px'
            }}
            textButton={"Dang nhap"}
            styeTextButton={{
              color: "#fff",
              fontSize: "15px",
              fontWeight: "700",
            }}
          ></ButtonComponent>
          <p><WrapperTextLight>Quen mat khau</WrapperTextLight></p>
          <p>Chua co tai khoan?  <WrapperTextLight>Tao tai khoan</WrapperTextLight></p>
        </WrapperContainerLeft>
        <WrapperContainerRight>
          <Image src={imageLogo} preview={false} alt="image-logo" width='203px' height='203px'/>
          <h4>Mua sam tai Tiki</h4>
        </WrapperContainerRight>
      </div>
    </div>
  );
};

export default SignInPage;
