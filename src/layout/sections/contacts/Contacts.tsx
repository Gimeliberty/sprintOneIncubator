import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { Button } from '../../../components/Button';
import { Container } from '../../../components/Container';
import { theme } from '../../../styles/Theme';

export const Contact = () => {
    return (
        <StyledContacts>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                    <StyledForm>
                        <Field placeholder={"name"}/>
                        <Field placeholder={"subject"}/>
                        <Field placeholder={"message"} as={"textarea"}/>
                        <Button type={"submit"} >Send message</Button>
                    </StyledForm>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section `

`
const StyledForm = styled.form `
    max-width:540px;
    width:100%;
    display:flex;
    flex-direction:column;
    align-items: center;
    gap: 16px;
    margin: 0 auto;

`
const Field = styled.input `
    width: 100%;
    border: 1px solid ${theme.colors.borderColor};
    background-color: ${theme.colors.secondaryBg};
    padding: 8px;

    color: #495057;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.6px;
`