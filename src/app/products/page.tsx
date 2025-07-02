
// import Product from '@/components/productspage/Product';

// const ContactUs: React.FC = () => (
//     <div className="space-y-12">
//      <Product/>
     

      
//     </div>
//   );
  
//   export default ContactUs;

// app/products/page.tsx
import { redirect } from "next/navigation";

export default function ProductsRedirect() {
  redirect("/products/gold");
}
