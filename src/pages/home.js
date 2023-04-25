import Footer from "../components/footer/footer";
import Header from "../components/home/header";
import Services from "../components/home/services";
import './home.scss'

export default function Home()
{
    return (
        <div className="home">
            <Header />
            <Services />
            <Footer/>

        </div>

    
    )
}