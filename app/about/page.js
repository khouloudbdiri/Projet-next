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
            <div className="row">
                <div className="col-md-6">
                    <div>
                        <h2>Our Background</h2>
                    </div>
                </div>
                <div className="col-md-6">
                    <div>
                        <Image src="/images/company.jpg" alt="" width="600"
                            height="300" priority />
                    </div>
                </div>
                <div className="col-md-6">
                    <div>
                        <h4>Who we are &amp; What we do?</h4>
                        <div>
                        Votre parfumerie en ligne. Butterflies Parfums c'est un large choix de produits en ligne
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}