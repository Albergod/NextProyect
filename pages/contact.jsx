import Link from "next/link";
import React from "react";
import Layout from "../components/layout";

const contact = () => {
  return (
    <Layout title={"Contactos | Next.js"} content={"Contactenos por aquí"}>
      <h1>Contactos</h1>
      <div>
        <h3>Definicion y lo que sea</h3>
      </div>

      <br />
      <Link href={"/tienda"}>
        <a>Ver tienda</a>
      </Link>
    </Layout>
  );
};

export default contact;
