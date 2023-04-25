import { NavLink } from "react-router-dom";
import Navbar from "../components/navbar/navbar";
import './market.scss'
export default function Market()
{
    return (
        <div className="market">
            <div className="categories">
                <NavLink to={"dress"}>
                 categorie
                </NavLink>
        
                <NavLink>
                categorie
                </NavLink>
                
                <NavLink>
                categorie

                </NavLink>
                
                <NavLink>
                categorie

                </NavLink>
                
            </div>
 
        </div>
    )
}