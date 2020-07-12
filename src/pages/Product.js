import React, {useState, useEffect} from 'react';
import Axios from 'axios';

export default function Product({ match }){

    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function getProducts () {
            const response = await Axios.get(
                "http://localhost:3001/product",
                {
                    headers: {
                        "_link": match.id
                    }
                }
            );

            setProducts(response.data);
        };

        getProducts();

    }, [ match ]);

    console.log(products);

    return(
        <>
            <section className="flex-ns vh-100 items-center sans-serif">
                <div className="mw6 ph5">
                    <img src="" alt="Este texto es indescifrable" /> 
                </div>
                <div className="tc tl-ns ph3">
                    <h1 className="f3 f1-l fw2 mb3 mt4 mt0-ns">Connect in a whole new way.</h1>
                    <h2 className="f5 f3-l fw1 mb4 mb5-l lh-title">Rated the #1 app for communicating with customers.</h2>
                    <a href="http://www.google.com" className="dib grow">Comprar</a>
                </div>
            </section>
        </>
    );
}