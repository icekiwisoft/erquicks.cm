import service1 from '../../images/service1.jpg';
import service2 from '../../images/service2.jpg';
import service3 from '../../images/service3.jpg';

function Service(props)
{
   const {title, img, description}=props
    return (
        <div className="service">
            <div className='service-img'>
            <img src={img}  />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
  
        </div>
    )
}

export default function Services()
{

    return (
        <section>
            <h2>Services</h2>
            <div className="services">
                <Service title="devenez livreur" img={service1} description={"faites vos courses depuis chez vous" } />
                <Service title="devenez livreur" img={service2} description={"livrer avec Erquicks"} />

                <Service title="devenez livreur" img={service3} description={"commander vos plat favoris"} />

            </div>
        </section>
    )

}