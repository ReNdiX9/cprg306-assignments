export default function Item({ name, quantity, category }) {
  return (
    <li className="p-3 bg-white  rounded-lg my-3 w-80 border-3 border-amber-500 ">
      <h2 className="text-lg font-semibold text-gray-800 text-shadow-lg">Name: {name}</h2>
      <p className="text-gray-500">Quantity: {quantity}</p>
      <p className="text-gray-500">Category: {category}</p>
    </li>
  );
}
