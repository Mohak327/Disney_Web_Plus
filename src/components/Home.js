import React from 'react';
import styled from 'styled-components';
import ImgSlider from './ImgSlider'

const Home = () => {
    return (
        <Container>
            <ImgSlider/>
        </Container>
    )
}

export default Home

const Container = styled.main`
    position: relative;
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    overflow-x: hidden;
    display: block;
    top: 70px;

// This is another div we create, which will be behind the content
    &:after {
        background:
            url("/images/home-background.png")
            center center / cover
            no-repeat fixed;
        content: "";
        position: absolute;
// shorthand for the top , right , bottom and/or left
        inset: 0px;
        z-index: -1;
    }
`;
