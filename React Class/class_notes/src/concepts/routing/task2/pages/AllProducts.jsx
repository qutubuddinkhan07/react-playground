import withProductData from "../hof/withProductData";
import ProductList from "../components/ProductList";

const AllProducts = withProductData((props) => (
  <ProductList {...props} title="All Products" />
));

export default AllProducts;
