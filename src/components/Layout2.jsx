import photo1 from '../assets/photo1.jpeg'
import photo2 from '../assets/photo2.jpeg'

export default function (){

    return(
        <>
        <div>
            <section className="description-l-r bg-terz border-t border-t-gray-600">
                <figure className="img-container hover:opacity-70 hover:scale-105 transition shadow-black" >
                    <img src={photo1} alt="" />
                </figure>
                <div>
                    <h1 className="title pt-4">Lorem ipsum dolor sit amet.</h1>
                    <p className="leading-relaxed m-auto paragraph text-slate-400 animate-fade pt-2">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Iste sit voluptatum in at quas sapiente soluta asperiores 
                        illum labore, omnis totam non repellendus accusantium temporibus
                        quisquam impedit iusto maxime earum.
                        Id odit similique nam enim facilis autem aspernatur quos,
                        repellendus quaerat iure atque, exercitationem officiis eos,
                        consectetur velit quibusdam dolore.
                    </p>
                </div>
            </section>
            <section className="description-r-l bg-terz 
                    border-t border-t-gray-600">
                <div>
                    <h1 className="title pt-4">Lorem ipsum dolor sit amet.</h1>
                    <p className="leading-relaxed m-auto paragraph text-slate-400 animate-fade pt-2">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Iste sit voluptatum in at quas sapiente soluta asperiores 
                        illum labore, omnis totam non repellendus accusantium temporibus
                        quisquam impedit iusto maxime earum.
                        Id odit similique nam enim facilis autem aspernatur quos,
                        repellendus quaerat iure atque, exercitationem officiis eos,
                        consectetur velit quibusdam dolore.
                    </p>
                </div>
                <figure className="img-container">
                    <img className="rounded-md" src={photo2} alt="" />
                </figure>
            </section>
        </div>
        </>
    )

}
