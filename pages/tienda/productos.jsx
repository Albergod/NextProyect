import Link from "next/link";
import React from "react";
import Layout from "../../components/layout";

function productos({ data }) {
  return (
    <Layout title={"Productos | Next.js"} content={"Lista de prodcutos"}>
      <h1>Productos</h1>
      <Link href='/tienda'>
        <a>Volver a Tienda</a>
      </Link>
      <br />
      {data.map(({ id, title, body }) => (
        <div key={id}>
          <h3>
            <Link href={`/tienda/${id}`}>
              <a>
                {id} - {title}{" "}
              </a>
            </Link>
          </h3>
          <p>{body}</p>
        </div>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return {
      props: { data },
    };
  } catch (error) {
    console.log(error);
  }
}
export default productos;
