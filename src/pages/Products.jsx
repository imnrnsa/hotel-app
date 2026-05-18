import { useState } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import productsData from "../data/productsData.json";

export default function Products() {
  const [products] = useState(productsData);

  const getStatusColor = (status) => {
    switch (status) {
      case "Available":
        return "bg-green-100 text-green-800";

      case "Low Stock":
        return "bg-yellow-100 text-yellow-800";

      case "Out of Stock":
        return "bg-red-100 text-red-800";

      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="animate-fadeIn">
      {/* Header */}
      <PageHeader
        title="Rooms"
        breadcrumb={[{ name: "Dashboard", path: "/" }, { name: "Rooms" }]}>
          
        <button className="bg-hijau text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
          Add Room
        </button>
      </PageHeader>

      {/* Table */}
      <div className="p-5 bg-white rounded-xl shadow-lg overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-4 rounded-tl-lg">Room ID</th>
              <th className="p-4">Room Name</th>
              <th className="p-4">Type</th>
              <th className="p-4">Price</th>
              <th className="p-4">Available</th>
              <th className="p-4 rounded-tr-lg">Availability</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product, index) => (
              <tr
                key={product.id}
                className={`
                border-b hover:bg-gray-50 transition ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                <td className="p-4 font-mono text-sm"> {product.id} </td>
                <td className="p-4 font-medium">
                  <Link to={`/products/${product.id}`} className="text-emerald-400 hover:text-emerald-500">
                    {product.name}
                  </Link>
                </td>
                <td className="p-4"> {product.category} </td>
                <td className="p-4"> {" "}
                  Rp {product.price.toLocaleString("id-ID")} </td>

                <td className="p-4">{product.stock}</td>
                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(product.status)}`}>
                    {product.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
