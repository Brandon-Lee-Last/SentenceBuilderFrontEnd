import React, {useState, useEffect} from 'react'
import Loader from '../loader/loader.component';
import { SentenceContainer, Sentence, SaveButton } from './sentence.styles';

const SentenceGenerator = ({type, word}) => {

    const [sentence, setSentence] = useState("");

    useEffect(() => {
        const getSentence = async () => {
            try{
                if(word !== undefined){
                    const rawData = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
                    const data = await rawData.json();

                    data[0].meanings.map(speech => {
                        if(speech.partOfSpeech === type){
                            return setSentence(speech.definitions[0].example);
                        }
                        else{
                            setSentence(speech.definitions[0].example);
                        }
                    })
                }
            }
            catch(err){
                console.log(err.message);
            }
        }

        getSentence();
    }, [word])

    return (
        <div>
            {sentence ? (<SentenceContainer>
                <Sentence>{sentence}</Sentence>
                <SaveButton>Save</SaveButton>
            </SentenceContainer>) : null}
        </div>
    )
}

export default SentenceGenerator;
