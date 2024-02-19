import React, { useEffect, useState } from 'react'

import axios from 'axios';
function Dictionary() {

    const [word, setWord] = useState('')
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    'https://api.dictionaryapi.dev/api/v2/entries/en/hello',

                );
                console.log(response);
                // setMeaning(response.data[0].meanings[0].definitions[0].definition);
                // setMeaning(response[0].meanings[0].partOfSpeech);



            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [word]);
    // const search = () => {
    //   setWord((e)=>{

    //   })
    // }
    return (
        <div className='p-3'>
            <div className=' flex flex-col align-items-center '>
                <input type="text"
                    placeholder='Search   '
                    onChange={(e) => {
                        setWord(e.target.value);
                    }}
                    className='p-2 pr-3 w-[300px] mb-3' />
                <button type="button" className=' w-[130px] h-[40px] bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded ' >Search</button>
            </div>



            <div className='p-3 '>
                <div >
                    <h1>Defintion of the Word:</h1>
                </div>
                {word ? (
                    <p>{JSON.stringify(word, null, 2)}</p>
                ) : (
                    <p id='msg'>Meaning Not found</p>
                )}
            </div>
        </div>
    )
}

export default Dictionary
