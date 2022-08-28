import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + "- Juju's Cookies" : "Juju's Cookies"}</title>
        <meta name="description" content="ECommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 items-center px-4 justify-between shadow-md">
            <Link href="/">
              <a className="text-lg font-bold">Juju's Cookies</a>
            </Link>
            <div>
              <Link href="/cart">
                <a className="p-2 text-lg">Cart</a>
              </Link>
              <Link href="/login">
                <a className="p-2 text-lg">Login</a>
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className='flex h-10 justify-center items-center shadow-inner'>footer</footer>
      </div>
    </>
  );
}
