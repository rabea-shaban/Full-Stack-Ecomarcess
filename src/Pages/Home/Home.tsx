import BestSelling from "../../components/Home components/BestSelling";
import Categories from "../../components/Home components/Categories";
import HeroSlider from "../../components/Home components/HeroSlider";
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
      <BestSelling />
    </Container>
  );
};

export default Home;
