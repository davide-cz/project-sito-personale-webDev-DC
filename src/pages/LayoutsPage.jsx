import Archive from "../components/Archive";
import CarouselContainer from "../components/CarouselContainer";
import Layout2 from "../components/Layout2";

export default function () {

    /* si puo' inserire un layout stile carousel / galleria che scorre le immagini  */

    return (
        <>
            <div>
                <h1 className="text-lg font-semibold p-4 bg-slate-700 text-slate-300">
                    Questi sono alcuni esempi di layout di pagina e di componenti
                </h1>
                <Layout2/>
                <CarouselContainer/>
                <Archive/>
            </div>
        </>
    )
}