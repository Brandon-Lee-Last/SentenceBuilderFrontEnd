import React, {useState, useEffect} from 'react'
import { SentenceContainer, Sentence, SaveButton } from './sentence.styles';

const SentenceGenerator = ({type, word, handleChange}) => {

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
                        return 0;
                    })
                }
            }
            catch(err){
                console.log(err.message);
            }
        }

        getSentence();
    }, [word])

    const saveSentence = async () => {

        try{
            const data = {
                sentence: sentence
            }
    
            await fetch("http://localhost:5000/sentences", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });
    
            handleChange(); //Will handle change and re render page to show changes.
            alert("Saved Succesfully");
            
        }
        catch(err){
            console.log(err.message);
            alert("Something went wrong");
        }
    }

    return (
        <div>
            {sentence ? (<SentenceContainer>
                <Sentence>{sentence}</Sentence>
                <SaveButton onClick={saveSentence}>Save</SaveButton>
            </SentenceContainer>) : null}
        </div>
    )
}

export default SentenceGenerator;
