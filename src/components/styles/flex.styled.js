import styled from "styled-components";

export const FlexStyles = styled.div`
display: flex;
align-items: center;
& > div,
  & > ul {
    flex: 1;
  }
  
  @media(max-width: ${({theme})=>theme.mobile}){

    flex-direction: column;
    text-align: center;
    &>div{
      margin-bottom: 40px;
    }
}

  `