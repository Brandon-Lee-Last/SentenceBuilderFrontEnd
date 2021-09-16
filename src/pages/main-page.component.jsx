import React, {useState, useEffect} from 'react'
import { MainContainer, Option, DropDownContainer } from './main-page.styles';
import SentenceGenerator from '../compnents/sentence/sentence.component';
import DropDown from '../compnents/drop-down/drop-down.component';


const MainPage = () => {

    const [types, setTypes] = useState(null);
    const [type, setType] = useState(null);
    const [speech, setSpeech] = useState(null);
    const [word, setWord] = useState(null);

    useEffect(() => {
        const callAPIRequest = async () => {
            const rawData = await fetch("http://localhost:5000/types");
            const data = await rawData.json();
            setTypes(data[0].all_types);
        }

        callAPIRequest();
    }, [])

    useEffect(() => {
        const callAPIRequest = async () => {
            const rawData = await fetch(`http://localhost:5000/types/type:${type}`);
        const data = await rawData.json();
        setSpeech(Object.values(data)[1]);
        }

        callAPIRequest();
    }, [type]);

    return (
        <MainContainer>
            <DropDownContainer>
                <DropDown onChange={e =>  setType(e.target.value)}>
                    {types ? types.map(type => (<Option name={type} value={type} key={Math.random()}>{type}</Option>)) : null}
                </DropDown>

                <DropDown onChange={e =>  setWord(e.target.value)}>
                    {speech && speech.map(value => (<Option key={Math.random()}>{value}</Option>))}
                </DropDown>
            </DropDownContainer>
            {word && <SentenceGenerator type={type} word={word} />}
        </MainContainer>
    )
}

export default MainPage;
