import React, {useState, useEffect} from 'react'
import { MainContainer, Option, DropDownContainer } from './main-page.styles';
import SentenceGenerator from '../compnents/sentence/sentence.component';
import DropDown from '../compnents/drop-down/drop-down.component';
import ViewContainer from '../compnents/view-container/view-container.component';

const MainPage = () => {

    //states needed to re-render when changed.
    const [types, setTypes] = useState(null);
    const [type, setType] = useState(null);
    const [speech, setSpeech] = useState(null);
    const [word, setWord] = useState(null);

    //calles all types from backed to populate state which will populate drop-drowns
    useEffect(() => {
        const callAPIRequest = async () => {
            const rawData = await fetch("http://localhost:5000/types");
            const data = await rawData.json();
            setTypes(data[0].all_types); //gets all the types from backend
        }

        callAPIRequest();
    }, [])

    //gets the spacific types from the first selected frop down.
    useEffect(() => {
        const callAPIRequest = async () => {
        const rawData = await fetch(`http://localhost:5000/types/type:${type}`);
        const data = await rawData.json();
        setSpeech(Object.values(data)[1]); //gets the array closest to the object returned.
        }

        callAPIRequest();
    }, [type]);

    //sets the states null when a sentence was saved.
    //This re-renders the page so a user can re-select options and sentence is viewed in history.
    const handleChange = () => {
        setType(null);
        setWord(null);
    }

    return (
        <MainContainer>
            <DropDownContainer>
                <DropDown onChange={e =>  setType(e.target.value)} value={type}>
                    {types ? types.map(type => (<Option name={type} value={type} key={Math.random()}>{type}</Option>)) : null}
                </DropDown>

                <DropDown onChange={e =>  setWord(e.target.value)} value={word}>
                    {speech && speech.map(value => (<Option key={Math.random()}>{value}</Option>))}
                </DropDown>
            </DropDownContainer>
            {word && <SentenceGenerator handleChange={handleChange} type={type} word={word} />}

            <ViewContainer type={type}/>
        </MainContainer>
    )
}

export default MainPage;
