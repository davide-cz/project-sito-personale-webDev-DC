export default function({id, frase }){



    return  (
        <>
            <div className="quote-card rounded-md ">
                <h1>{id}{frase}</h1>
            </div>
        </>
    )
}