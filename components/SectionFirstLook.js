import Image from "next/image";
import React from "react";
function SectionFirstLook({ image, title }) {

    return (
        <>

            <section className="first-look">
                <h2>{title}</h2>
                <div className="first-look-container">

                    <Image
                        src={image}
                        alt={title}
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </div>
            </section>
            <div>
                <img src="images/background1.jpg"></img>
                <img src="images/background1.jpg"></img>
            </div>

        </>
    );
}
export default SectionFirstLook;


