import BestSelling from "../../components/Home components/BestSelling";
import Categories from "../../components/Home components/Categories";
import CategoriesBaner from "../../components/Home components/CategoriesBaner";
import Featured from "../../components/Home components/Featured";
import HeroSlider from "../../components/Home components/HeroSlider";
import OurProducts from "../../components/Home components/OurProducts";
import Services from "../../components/Home components/Services";
import Side from "../../components/Home components/Side";
import Todays from "../../components/Home components/Todays";
import Container from "../../components/ui/Container";

const Home = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 ">
        <Side />
        <HeroSlider />
      </div>
      <Todays />
      <Categories />
      <BestSelling title="Best Selling" />
      <CategoriesBaner />
      <OurProducts />
      <Featured />
      <Services />
    </Container>
  );
};

export default Home;
