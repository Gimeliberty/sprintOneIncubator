import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import {SectionTitle} from '../../../components/SectionTitle';
import { Skill } from './skill/Skill';
import { Container } from '../../../components/Container';

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
            <SectionTitle>My Skills</SectionTitle>
            <FlexWrapper wrap='wrap' justify='space-between'>
                <Skill iconId={"code"} 
                title='HTML5'
                description ={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error atque amet rem nihil."}/>
                <Skill 
                iconId={"css"} 
                title='CSS3'
                description ={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error atque amet rem nihil."}/>
                <Skill 
                iconId={"react"} 
                title='REACT'
                description ={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error atque amet rem nihil."}/>
                <Skill iconId={"stcomponents"} 
                title='Styled Components'
                description ={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error atque amet rem nihil."}/>
                <Skill 
                iconId={"tscript"} 
                title='Typescript'
                description ={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error atque amet rem nihil."}/>
                <Skill 
                iconId={"figma"} 
                title='Figma'
                description ={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error atque amet rem nihil."}/>
            </FlexWrapper>
            </Container> 
        </StyledSkills>
    );
};

const StyledSkills = styled.section``