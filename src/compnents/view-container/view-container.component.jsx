import React, {useState, useEffect} from 'react'
import { Container, SentenceContainer, P } from './view-container.styles'

import Loader from '../loader/loader.component';

const ViewContainer = ({type}) => {

    const [sentences, setSentences] = useState(null);

    useEffect(() => {
        const callAPIRequest = async () => {
            try{
                const rawData = await fetch("http://localhost:5000/sentences");
                const data = await rawData.json();
                setSentences(data);
            }
            catch(err){
                console.log(err.message);
            }
        }

        callAPIRequest();
    }, [type]) //Update on type change.

    return (
        <Container>
            Saved Sentences
            {sentences ? (sentences.map(sentence => (<SentenceContainer>
                <P>Sentence: {sentence.sentence}</P> 
                <P>Date Added: {sentence.date}</P>
            </SentenceContainer>))) : <Loader customStyle={{width: '10rem', height: '10rem'}}/>}
        </Container>
    )
}

export default ViewContainer;
