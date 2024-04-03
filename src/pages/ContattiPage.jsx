import { BsEnvelopeAt } from "react-icons/bs";
import { BsTelephoneFill } from "react-icons/bs";
import { BsGeoAltFill } from "react-icons/bs";
import  certificato  from "../assets/certificato1.png";




export default function () {
    return (
        <>
            <div className="contacts min-h-fit flex align-middle" >
                <div className="border-2 h-auto "> 
                    <img  src={certificato} alt="" />
                </div>
                <div className="certified-frame h-auto p-4">
                    <h1 className="text-3xl font-semibold">Contatti</h1>
                    <div className="contact-info " >
                        <div className="flex h-10 gap-2">
                            <BsTelephoneFill className="my-auto text-lg" />
                            <h1 className="text-lg font-bold pb-1 place-self-end">cellulare:</h1>
                           
                        </div>

                        <p className="text-md pl-8"> <a href="tel:+393463573746">+39 346 357 3746</a></p>
                    </div>
                    <div className="contact-info " >
                        <div className="flex  h-10 gap-2">
                            <BsEnvelopeAt className="my-auto text-lg " />
                            <h1 className="text-lg font-bold pb-1 place-self-end">e-mail:</h1>
                        </div>

                        <p className="text-md pl-8"><a href="mailto:carletti.dav@gmail.com">carletti.dav@gmail.com</a></p>
                    </div>
                    <div className="contact-info " >
                        <div className="flex h-10 gap-1 ">
                            <BsGeoAltFill className="my-auto text-lg " />
                            <h1 className="text-lg font-bold pb-1 place-self-end">indirizzo:</h1>
                        </div>
                        <p className="text-md pl-8">Via fratelli Cervi 10 - Valeggio sul Mincio, C.A.P.-37067</p>
                    </div>
                </div>
            </div>
        </>
    )
}