import React from 'react'
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from '../SignInPage/style'
import InputForm from '../../components/InputForm/InputForm'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import imageLogo from '../../assets/images/anh1.webp'
import {Image} from 'antd'
const SignUpPage = () => {
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
          {/* <Divider size='large' />   */}
          <InputForm placeholder="password" style={{ marginBottom: '10px'}}/>
          <InputForm placeholder="confirm password"/>
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
          <p>Ban da co tai khoan?  <WrapperTextLight>Dang nhap</WrapperTextLight></p>
        </WrapperContainerLeft>
        <WrapperContainerRight>
          <Image src={imageLogo} preview={false} alt="image-logo" width='203px' height='203px'/>
          <h4>Mua sam tai Tiki</h4>
        </WrapperContainerRight>
      </div>
    </div>
  )
}

export default SignUpPage
