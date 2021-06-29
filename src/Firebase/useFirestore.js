import {useState, useEffect} from 'react';
import { projectFirestore } from "./config";

const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);

    useEffect(()=> {
        projectFirestore.collection(collection)
            .onSnapshot((snap) => {

            },[])
        return { docs };
    })
}

