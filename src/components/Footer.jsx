import { NavLink } from "react-router-dom";


export default function (){
    return (
        <>
           <div className="flex justify-center h-auto bg-slate-700 border-y-2 border-y-slate-900">
            <footer className="flex-col justify-center align-middle">
                <div>
                    <p className="p-4 text-gray-200 text-center font-semibold">
                        Davide Carletti - Web Developer
                    </p>
                </div>
                <div className="flex ">
                    <p className="p-5 text-slate-300">Contattami a <a href="mailto:carletti.dav@gmail.com">carletti.dav@gmail.com</a></p>
                   {/*  <ul className=" flex-col gap-1 py-4 px-8">
                        <li ><NavLink to={'/'}><h2 className="footer-link">homePage</h2></NavLink></li>
                        <li ><NavLink to={'/layouts'}><h2 className="footer-link">layouts</h2></NavLink></li>
                        <li ><NavLink to={'/contatti'} ><h2 className="footer-link">contatti</h2></NavLink></li>
                    </ul> */}
                </div>
            </footer>
           </div>
        </>
    )
}