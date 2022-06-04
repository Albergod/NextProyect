import Head from "next/head";
import styles from "../styles/layout.module.css";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";

const Layout = ({ children, title, content, home }) => {
  const name = "Trebal17";

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta content={content} name='description' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src='/img/cielo.jpg'
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href='/'>
              <a>
                <Image
                  priority
                  src='/img/frag.jpg'
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href='/'>
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <nav>
        <Link href='/'>
          <a> Inicio |</a>
        </Link>
        <Link href='/tienda'>
          <a> Tienda |</a>
        </Link>
        <Link href='/contact'>
          <a> Contactos |</a>
        </Link>
        <Link href='/about'>
          <a> About</a>
        </Link>
      </nav>

      <main>{children}</main>

      {!home && (
        <div className={styles.backToHome}>
          <Link href='/'>
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
};

Layout.defaultProps = {
  title: "Next.js | Tienda virtual",
  content: "Productos y cosméticos",
};

export default Layout;
