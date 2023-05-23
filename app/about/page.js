import Image from 'next/image'

export default function About() {
    return (
        <div className="container">
            <div className="banner-item-02">
                <div className="text-content">
                    <h4>About us</h4>
                    <h2>Our company</h2>
                </div>
            </div>
            <div></div>
            <div className="row">
                <div>
                    <div className="col-md-4">
                        <div>
                            <h2>Our Background</h2>
                        </div>
                        <p className="text-justify fw-italic" >Nothing stands between a girl and her perfume</p>
                    </div>
                    <div className="col-md-6">
                        <div>
                            <Image src="/images/company.jpg" alt="" width="600"
                                height="300" priority />
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mt-4">
                    <div>
                        <h4>Who we are &amp; What we do?</h4>
                       
                       <p className="text-justify fw-italic" > Votre parfumerie en ligne. Butterflies Parfums c'est un large choix de produits en ligne </p>
                      
                    </div>
                </div>
            </div>
        </div>
    )
}