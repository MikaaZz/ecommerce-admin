import Layout from "@/components/Layout";
import Link from "next/link";

export default function Products() {
  return (
    <Layout>
      <Link className="bg-green-500 text-white py-1 px-2 rounded-lg" href={'/products/new'}>Add new product</Link>
    </Layout>
  )
}
