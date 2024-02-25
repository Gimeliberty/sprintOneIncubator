import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Work } from './work/Work';
import socialImg from '../../../assets/img/proj-1.png';
import timerImg from '../../../assets/img/proj-2.png';
import { HeaderMenu } from '../../header/headerMenu/HeaderMenu';
import { Container } from '../../../components/Container';
import { TabMenu } from './menu/TabMenu';

const worksItems = ["All","Landing Page","React","SPA"]


export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu menuItems={worksItems}></TabMenu>
                <FlexWrapper justify={"space-between"} >
                    <Work title={"Social Network"} 
                    src={socialImg}
                    text={"Lorem ipsumLorem ipsum kekum pekum bupum lolololoLorem ipsum kekum pekum bupuum lolololoLorem ipsum kekum pekum bum lolololoLorem ipsum kekum pekum bum lolololoLorem ipsum kekum pekum bum lolololoLorem ipsum kekum pekum bm lolololo"}/>
                    <Work title={"Timer"} 
                    src={timerImg}
                    text={"Lorem ipsum kekumm bupum lolololoLorem ipsum kekum um lolololoLorem ipsum kekum pekum bum lolololoLorem ipsum kekum pekum bum lolololoLorem ipsum kekum pekum bum lolololoLorem ipsum kekum pekum bpekum bupum lolololoLorem ipsum kekum pekum bupum lolololo"}/>
                </FlexWrapper>
            </Container>

        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    min-height: 100vh;
    background-color: #a2a2ed;
`