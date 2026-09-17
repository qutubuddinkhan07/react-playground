import withProductData from "../hof/withProductData";
import ProductList from "../components/ProductList";

const Beauty = withProductData(
  (props) => <ProductList {...props} title={"Beauty"} />,
  (product) => product.category === "beauty",
);

export default Beauty;
