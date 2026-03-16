import Categories from '../../components/categories/Categories'
import FeaturedSection from '../../components/featuredSection/FeaturedSection'
import Hero from '../../components/Hero/Hero'
import Products from '../../components/products/Products'

export default function Home() {
  return (
    <>
      <Hero />
      <Products />
      <FeaturedSection />
      <Categories />
    </>
  )
}
