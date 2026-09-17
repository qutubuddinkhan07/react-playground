import withProductData from "../hof/withProductData";
import ProductList from "../components/ProductList";

const Groceries = withProductData(
  (props) => <ProductList {...props} title={"Groceries"} />,
  (product) => product.category === "groceries",
);

export default Groceries;
