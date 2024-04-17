import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>Hello World!</h1>
      {/* <a href="/users">Users</a> -- This is not good since it will reload everything */}
      <Link href="/users">Users</Link>
      <ProductCard></ProductCard>
    </main>
  );
}
