import SectionFirstLook from "@/components/SectionFirstLook"
export default function Home() {
  const bannerList = [
    {
      index: 0,
      background: "/images/background3.jpg",
      title: "NOS MEILLEURES VENTES",
    },
    {
      index: 1,
      background: "/images/background2.jpg",
      title: "NOS MEILLEURES VENTES",
    }
  ]

  return (
    <div>
      <div className="banner-item-01">
        <div className="text-content">
          <h4>Smell good..Feel good</h4>
          <h2>New Arrivals On Sale</h2>
        </div>
      </div>
      <div >
        {bannerList.map((banner) => (
          <SectionFirstLook
            key={banner.index}
            image={banner.background}
            title={banner.title}
          />
        ))}
      </div>
          
    </div>
  )
} 