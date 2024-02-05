import axios from 'axios';

export const NationalizeFetch = async (name) => {
    let arrayOfCharacters = []
    try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=0`)
        const data = await response.data.results
        data.forEach(element => {
            arrayOfCharacters.push(element);
        });
        return arrayOfCharacters;
    }

    catch (error) {
        console.error('Error at NationalizeFetch', error);
    }
}
export const searchByName = async (characterName) => {
    let arrayOfCharacters = []
    try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${characterName}`)
        const data = await response.data.results
        data.forEach(element => {
            arrayOfCharacters.push(element);
        });
        return arrayOfCharacters;
    }

    catch (error) {
        console.error('Error at searchByName', error);
    }
}