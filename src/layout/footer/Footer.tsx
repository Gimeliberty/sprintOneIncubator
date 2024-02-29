
import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../components/icon/Icon';
import { FlexWrapper } from '../../components/FlexWrapper';
import { theme } from '../../styles/Theme';

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={"column"} align={"center"}>
            <SocialList>
            <SocialItem>
                <SocialLink>
                        <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"instagram"}/>
                </SocialLink>
            </SocialItem>

            <SocialItem>
                <SocialLink>
                        <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"instagram"}/>
                </SocialLink>
            </SocialItem>

            <SocialItem>
                <SocialLink>
                        <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"instagram"}/>
                </SocialLink>
            </SocialItem>

            <SocialItem>
                <SocialLink>
                        <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"instagram"}/>
                </SocialLink>
            </SocialItem>

            </SocialList>
            <Name>Rauf</Name>
            <Copyright>2024</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: ${theme.colors.primaryBg};
    padding: 40px 0;
`
const Name = styled.span`
    
`
const SocialList = styled.ul`
    display: flex;
    gap:30px;
`
const SocialItem = styled.li`
    
`
const SocialLink = styled.a`
    
`
const Copyright = styled.small`
    
`