import { View, Text } from "react-native-web";
import React, { useState, useEffect } from "react";


export default function FetchApi({table,id,texte}){

    

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`http://www.json.ogrinami.com/ogrimobile.php?table=${table}&id=${id}`)
        .then(function(response) {
            // console.log(response);
            response.json().then(e=>{
                setData(e);
        
            })
        })
        

    }, []);

    
    console.log(data);

    if (texte == true){

        return(<Text>{data.texte_FR}</Text>)
    } else {
        return( data );
    
    }

    
}