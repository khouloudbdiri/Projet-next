import React from "react";
import Image from 'next/image'
const DashboardPage = async () => {
    return (
        <div className="container mx-auto shadow p-5">
            <Image src="/images/parfum.jpg" alt="" width="1000" height="400"
                priority />
        </div>
    )
}
export default DashboardPage;