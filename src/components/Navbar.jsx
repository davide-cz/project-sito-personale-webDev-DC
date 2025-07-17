import { NavLink } from "react-router-dom";

export default function (){

    return (
        <>
            <nav className="flex h-20 justify-between bg-gradient-to-b from-gray-700 to-gray-950">
                <div className="flex align-middle justify-center">
                    <div className="w-6 h-6 mx-2 flex rounded-full bg-lime-600 my-auto animate-bounce">
                        <div className="w-3 h-3 m-auto bg-amber-600"></div>
                    </div>
                    <h1 className="my-auto text-slate-300 text-xl font-semibold">DC Web Solution</h1>
                </div>
                    <ul className="flex my-auto    ">
                        <li><NavLink to='/'><h2 className="nav-link ">homePage</h2></NavLink></li>
                        <li><NavLink to='/layouts'><h2 className="nav-link ">layouts</h2></NavLink></li>
                        <li><NavLink to='/contatti'><h2 className="nav-link ">contatti</h2></NavLink></li>
                    </ul>
            </nav>
        </>
    )
}