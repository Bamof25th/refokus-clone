import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Stripes from "./components/Stripes";
import Products from "./components/Products";

function App() {
  return (
    <div className=" w-full h-full font-[satoshi_variable] bg-zinc-900 text-white">
      <Navbar />
      <Work />
      <Stripes />
      <Products />
    </div>
  );
}

export default App;
