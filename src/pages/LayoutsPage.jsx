import Archive from "../components/Archive";
import CarouselContainer from "../components/CarouselContainer";
import Layout2 from "../components/Layout2";

export default function () {

    /* si puo' inserire un layout stile carousel / galleria che scorre le immagini  */

    return (
        <>
            <div>
                <h1 className="text-lg font-semibold py-2 px-4 bg-gradient-to-b from-slate-700 to-slate-900 text-slate-300">
                    Questi sono alcuni esempi di layout di pagina e di componenti
                </h1>
                <Layout2/>
                <CarouselContainer/>
                <Archive/>
            </div>
        </>
    )
}