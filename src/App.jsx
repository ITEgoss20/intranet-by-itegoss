import ArticalsSection from "./components/ArticalsSection";
import Carousel from "./components/Carousel";
import Dashboard from "./components/Dashboard";
import FlipCardSection from "./components/FlipCardSection";
import TripleCarousel from "./components/TripalCarousel";
import UseFullLinks from "./components/UseFullLinks";

function App() {
  const imagesLeft = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Walking_tiger_female.jpg/1200px-Walking_tiger_female.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxuvLdD0LJLsqyDSLWpl6VWNbB7e0TxzeTkQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUOUf1sYsNgoGsyfCi-fes4ujzMTSpGg0ROQ&s",
  ];
  return (
    <>
      <header className="h-24 flex items-center justify-between px-4">
        <div className="flex items-center">
          <div className="text-3xl">Logo</div>
          <ul className="flex items-center space-x-8 ml-12">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Group Hub</li>
            <li className="cursor-pointer">Use Full Links</li>
            <li className="cursor-pointer">Profile</li>
          </ul>
        </div>
        <div className="flex flex-col items-center space-x-3">
          <p>Welcome</p>
          <p>Krishna</p>
        </div>
      </header>
      <div className="px-4">
        <TripleCarousel />
        <div className="h-60 mt-4">
          <Carousel images={imagesLeft} />
        </div>
        <Dashboard />
        {/* <FlipCardSection /> */}
        <ArticalsSection />
        <UseFullLinks />
        {/* <Dashboard /> */}
        <footer className="mt-8">
          <div className="bg-gray-50 py-6">
            <div className="w-fit ml-auto grid grid-cols-2 gap-12 text-purple-950">
              <ul>
                <li>Data Protection Notice</li>
                <li>Group Social Media Guidelines</li>
                <li>Contact</li>
              </ul>
              <ul>
                <li>Terms of Use</li>
                <li>RSS Feed</li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
      <div className="bg-black text-white py-4 pl-6 mt-4">
        Confiential and for internal use only. Copyright &copy;2025. All rights
        reserved.
      </div>
    </>
  );
}
export default App;
