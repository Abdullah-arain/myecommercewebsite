// import { Products } from "@/utils/mock";
// import ProductCard from "../../components/ProductCart";
// import { StaticImageData } from "next/image";

// const getProductsByCategory = (category: string) => {
//   return Products.filter((product) => product.category === category);
// };

// export default function Page({ params }: { params: { slug: string } }) {
//   const result = getProductsByCategory(params.slug);

//   const categ = result.map((product:any) => (
//     <ProductCard
//       key={product._id}
//       item={product.name}
//       price={product.price}
//       img={product.image as StaticImageData}
//       category={product.category}
//       id={product.id}
//     />
//   ))
//   return (
//     <div className="flex justify-evenly mt-16 py-10 flex-wrap">
//       {result.length > 0 ? (
//         categ
//       ) : (
//         <p>No Products Found</p>
//       )}
//     </div>
//   );
// }