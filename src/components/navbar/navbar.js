import { Link } from "react-router-dom";

export default function Navbar()
{

    return (

        <div className="navbar">
            <Link to={"/"}>
           <h1> Erquicks </h1>
            </Link>

            <input type={"type"}/>

<nav >  
            
            <Link to={"market"}>
                Produits
                </Link>
                <Link to={"market"}>
                partenaires
            </Link>
        </nav>
        </div>

    )
}