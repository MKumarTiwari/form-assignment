import React from 'react'
import styled from 'styled-components'
import reactLogo from '../../assets/Illustration.png'


const Wrapper = styled.div`
  background: linear-gradient(45deg, #66ff66, #000000);
  height: 100vh;
  flex: 0 0 45%;
max-width: 45%;
  border-top-right-radius: 55px;
  border-bottom-right-radius: 50px;
  position: relative;
`;

const Image = styled.img`
  position: absolute;
  right: -100px;
  top: 50%;
  transform: translateY(-50%);
  width: auto;
  height: 70%;
`;

const Index = () => {
    return (
        <>
            <Wrapper>
                <Image src={reactLogo} />
            </Wrapper>
        </>
    )
}

export default Index
