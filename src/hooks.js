import {useState} from "react";
import axios from 'axios';
import {v4 as uuid} from "uuid";

function useFlip(){
    const [flipState, setFlipState] = useState(true);
    const toggleFlip = () => {
        setFlipState(!flipState);
    }

    return [flipState, toggleFlip]
}


function useAxios(){

    const [cards, setCards] = useState([]);
    const addCard = async URL => {
      const response = await axios.get(URL);
      setCards(cards => [...cards, { ...response.data, id: uuid() }]);
    };

    return [cards, addCard];
}




export {useFlip, useAxios};