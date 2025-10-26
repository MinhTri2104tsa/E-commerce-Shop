import styled from 'styled-components'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'

export const WrapperTypeProduct = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 24px;
    height: 44px;
    `

export const WrapperButtonMore = styled(ButtonComponent)`
    &:hover{
        color: #fff;
        background: rgb(13,92,182);
        span {
        color: #fff;
        }
    }
        width: 100%;
        text-align: center;

`

export const WrapperProducts = styled.div`
    display: flex;
    justify-content: center;
    gap: 14px;
    margin-top: 20px;
    flex-wrap: wrap;
`