import { Link } from "react-router-dom";

export default function Navbar()
{

    return (
        <nav>
            <Link to={"/"}>
            Erquicks
            </Link>

            
            
            <Link to={"market"}>
                market
            </Link>
        </nav>
    )
}