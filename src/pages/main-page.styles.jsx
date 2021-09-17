import styled from 'styled-components'

export const MainContainer = styled.div`
    width: 70vw;
    padding: 10px;
    margin:5vh auto;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

`;

export const DropDownContainer = styled.div`
    text-align: center;
    display: flex !important;
    width: 20%;
    margin: auto;
    gap: 2rem;

    @media (max-width: 768px) {
    width: 100%;
    }
`;

export const Option = styled.option`
    
`;