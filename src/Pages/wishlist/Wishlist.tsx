import BestSelling from "../../components/Home components/BestSelling";
import WishlistComoants from "../../components/WishlistComoants";
import Container from "../../components/ui/Container";

const Wishlist = () => {
  return (
    <Container>
      <WishlistComoants />
      <BestSelling title="Just For You" />
    </Container>
  );
};

export default Wishlist;
