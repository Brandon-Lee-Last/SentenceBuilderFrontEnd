import React, {useState} from 'react'
import { Container, SentenceContainer } from './'

import Loader from '../loader/loader.component';

const ViewContainer = () => {

    const [sentences, setSentences] = useState(null);

    return (
        <Container>
            {sentences ? (<SentenceContainer>
                
            </SentenceContainer>) : <Loader/>}
        </Container>
    )
}

export default ViewContainer;
