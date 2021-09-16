import styled from 'styled-components';

export const SentenceContainer = styled.div`
`

export const Sentence = styled.p`
    font-size:1.4rem;
`;

export const SaveButton = styled.button`
    width: 100px;
    height: 30px;
    background-color: coral;
    transition: all 0.2s ease-in-out;
    border:0;
    cursor: pointer;
    color: white;

    &:hover{
        background-color: lightcoral;
        color:black;
    }
`;
