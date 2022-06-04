import utilStyles from "../styles/utils.module.css";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout";

const index = () => {
  return (
    <Layout home>
      <h1>Incio</h1>
      <Link href={"/contact"}>
        <a>Contactos</a>
      </Link>
      {/* <Image
        src='/img/cielo.jpg'
        width={300}
        height={300}
        alt={"imagen del cielo"}
      ></Image> */}
      <section className={utilStyles.headingMd}>
        <p>¡Bienvenidos a ésta tienda super cool!</p>
        <p>pasen, pasen, pero no se vayan sin pagar qleros</p>
      </section>
      <Link href={"/tienda"}>
        <a>Ver tienda</a>
      </Link>
    </Layout>
  );
};

export default index;
