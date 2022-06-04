import Link from "next/link";
import React from "react";
import Layout from "../../components/layout";

export default function index({ data }) {
  return (
    <Layout title={"Tienda | Next.js"} content={"Tienda de artículos"}>
      <h1>Tienda</h1>
      <div>
        <Link href={"/tienda/productos"}>
          <a>Ver productos</a>
        </Link>
        <br />
      </div>
    </Layout>
  );
}
