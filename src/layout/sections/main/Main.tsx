import React from 'react';
import styled from 'styled-components';
import photo from '../../../assets/img/portrait_cut_min.jpg';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';

export const Main = () => {
    return (
        <StyledMain>
             <Container>          
          <FlexWrapper align={"center"} justify={"space-between"}>
          <div>
                <SmallText>Hi There</SmallText>
                <Name>I am Rauf Dola</Name>
                <MainTitle>A Web Developer</MainTitle>
            </div>

            <Photo src={photo} alt="" />

          </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: 100vh;
    display:flex;
`



const Photo = styled.img`
    width:350px;
    height: 430px;
    object-fit:cover;
`

const MainTitle = styled.h1`

    font-size: 27px;
    font-weight: 400;
`

const Name = styled.h2`
    font-family: "Josefin Sans";
    font-size: 50px;
    font-weight: 700;
    letter-spacing: 0.5em;
    margin: 10px 0;
`
const SmallText = styled.h2`
    font-size: 14px;
    font-weight: 400;
`