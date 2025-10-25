import { Card } from "antd";
import styled from "styled-components";

export const WrapperCardStyle = styled(Card)`
    width: 200px;
    & img {
        width: 200px;
        height: 200px;
    }
`;


export const StyleNameProduct = styled.div`
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    line-height: 16px;
    color: rgb(56,56,61);`;

    export const WrapperReportText = styled.div`
    font-size: 11px;
    color: rgb(134, 142, 150);
    display: flex;
    align-items: center;
    margin: 6px 0 0;
    `;
    

export const WrapperPriceText = styled.div`
    font-size: 16px;
    color: rgb(255, 66, 78);
    font-weight: 500;
`;
export const WrapperDiscountText = styled.span`
    font-size: 12px;
    color: rgb(255, 66, 78);
    font-weight: 500;
`;
export const WrapperStyleTextSell = styled.span`
    font-size: 15px;
    line-height: 24px;
    color: rgb(120,120,120);

`
