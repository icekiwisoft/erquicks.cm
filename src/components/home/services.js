
function Service(props)
{
   const {title, img, description}=props
    return (
        <div className="service">

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
                 <Service title="devenez livreur"></Service>
            </div>
        </section>
    )

}