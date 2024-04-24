import { Link } from "react-router-dom";

export default function (){
    return (
        <>
            <h3>errore 404 URL non trovato...</h3>
            <button>
                <Link to={'/'}>
                    HomePage
                </Link>
            </button>
        </>
    )
}