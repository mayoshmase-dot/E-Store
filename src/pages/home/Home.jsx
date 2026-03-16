import Banner from '../../components/banner/Banner'
import Categories from '../../components/categories/Categories'
import Discounts from '../../components/discounts/Discounts'
import FeaturedSection from '../../components/featuredSection/FeaturedSection'
import Hero from '../../components/hero/Hero'
import Products from '../../components/products/Products'

export default function Home() {
  return (
    <>
      <Hero />
      <Products />
      <FeaturedSection />
      <Categories />
      <Discounts />
      <Banner />
    </>
  )
}