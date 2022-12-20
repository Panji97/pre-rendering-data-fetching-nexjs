import path from "path";
import fs from "fs";

export default function Home(props) {
  const { products } = props;
  return (
    <ul>
      {products.map((product) => {
        return (
          <li key={product.id}>
            <span>{product.name}</span> <p>{product.price}</p>
          </li>
        );
      })}
    </ul>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "dummy-data.json");
  const file = await fs.readFileSync(filePath);
  const data = JSON.parse(file.toString());
  return {
    props: {
      products: data.products,
    },
  };
}
