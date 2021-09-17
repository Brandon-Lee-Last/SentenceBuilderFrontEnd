import styled from 'styled-components';

export const Container = styled.div`
    width: 68vw;
    padding: 10px;
    margin-top: 150px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    max-height: 20vh;
    overflow: auto;

    @media (max-width: 768px) {
      margin-top: 50px;
      width: 65vw;
    }
`;

export const SentenceContainer = styled.div`
    text-align:center;
    display: grid;
    grid-template-columns: 50% 50%;
    margin: 1vh auto;
    max-height: 3vh;

    @media (max-width: 768px) {
      margin-top: 50px;
      max-height: 40vh;
      font-size: 10px;
    }
`;

export const P = styled.p`
  margin:0;
  padding: 0;  
`;