import { PartnerProduct } from "../components/profil/products";
import ProfilSidebar from "../components/profil/sidebar";
import "./profil.scss"

export default function  Profil()
{
    return (
        <div className="profil">
            <ProfilSidebar />
            <PartnerProduct/>
    </div>
)
}