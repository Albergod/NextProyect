import Link from "next/link";
import Layout from "../../components/layout";

const Detalles = ({ data }) => {
  return (
    <Layout>
      <h1>Detalles del Artículo</h1>
      <h2>
        {data.id} - {data.title}
      </h2>
      <p>{data.body}</p>
      <Link href='/tienda/productos'>
        <a>Ver Productos</a>
      </Link>
    </Layout>
  );
};

export async function getStaticPaths() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    const paths = data.map(({ id }) => ({
      params: {
        id: `${id}`,
      },
    }));
    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.log(error);
  }
}

export async function getStaticProps({ params }) {
  try {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts/" + params.id
    );
    const data = await res.json();
    return {
      props: { data },
    };
  } catch (error) {
    console.log(error);
  }
}

export default Detalles;
