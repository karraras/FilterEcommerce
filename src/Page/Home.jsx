import NavBar from "../component/NavBar";
import Side from "../component/Side";
import Products from "../component/Products";
function Home() {
  return (
    <div>
      <NavBar />
      <div className="flex">
        <Side />
        <Products />
      </div>
    </div>
  );
}

export default Home;
