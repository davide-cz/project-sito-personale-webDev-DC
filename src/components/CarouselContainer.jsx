import Carousel from "./Carousel";
import stock1 from "../assets/stock1.jpg";
import stock2 from "../assets/stock2.jpg";
import stock3 from "../assets/stock3.jpg";



export default function () {

    const slides=[stock1,stock2,stock3,]

    return(
        <>
            <div className="carousel bg-slate-800">
                <Carousel
                slides={slides}
                />
            </div>
        </>
    )
}