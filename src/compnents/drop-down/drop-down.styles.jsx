import styled from 'styled-components';

export const Select = styled.select`
    width: 8vw;
    height: 3vh;
    background-color: coral;
    border: 0;
    outline: 0;
    margin: auto;

    @media (max-width: 768px) {
        width: 25vw;
    }
`;