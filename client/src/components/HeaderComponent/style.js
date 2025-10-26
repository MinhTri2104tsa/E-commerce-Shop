import {Row} from 'antd'
import styled from 'styled-components'

export const WrapperHeader = styled(Row)`
  background-color: rgb(26,148,255);
  padding: 10px 0;
  align-items: center;
  gap: 16px;
  flex-wrap: nowrap;
  width: 1270px
`

export const WrapperTextHeader = styled.span`
    font-size: 18px;
    color: white;
    font-weight: bold;
    text-align: left;
`


export const WrapperHeaderAccount = styled.div`
    display: flex;
    align-items: center;
    color: white;
    gap: 10px;
    font-size: 14px;
    `

export const WrapperTextHeaderSmall = styled.span`
    font-size: 14px;
    color: white;
    white-space: nowrap;
    `

