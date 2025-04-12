import TripleCarousel from "../components/homePageComponent/TripleCarousel";
import Carousel from "../components/homePageComponent/Carousel";
import IntranetDashboard from "../components/homePageComponent/IntranetDashboard";
import ArticalsSection from "../components/homePageComponent/ArticalsSection";
import UseFullLinks from "../components/homePageComponent/UseFullLinks";
import { Link } from "react-router-dom";

const HomePage = () => {
  const imagesLeft = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Walking_tiger_female.jpg/1200px-Walking_tiger_female.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxuvLdD0LJLsqyDSLWpl6VWNbB7e0TxzeTkQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUOUf1sYsNgoGsyfCi-fes4ujzMTSpGg0ROQ&s",
  ];
  return (
    <div>
      <header className="h-24 flex items-center justify-between px-4 sticky top-0 z-40 bg-white">
        <div className="flex items-center">
          <Link to={"/"}>
            <div className="text-3xl">Logo</div>
          </Link>
          <ul className="flex items-center  space-x-8 ml-12">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Group Hub</li>
            <Link to={"/dashboard"}>
              <li className="cursor-pointer">Use Full Links</li>
            </Link>
            <li className="cursor-pointer">Profile</li>
            {/* <Link to={"/team-accounts/manage-roles"}>
              <li className="cursor-pointer">Roles</li>
            </Link> */}
          </ul>
          {/* <ul className="flex items-center md:hidden space-x-8 ml-12">
            <Link to={"/team-accounts/manage-roles"}>
              <li className="cursor-pointer">Roles</li>
            </Link>
          </ul> */}
        </div>
        <div className="flex flex-col items-center space-x-3">
          <p>Welcome</p>
          <p>Krishna</p>
        </div>
      </header>
      <div className="px-2 md:px-4">
        <TripleCarousel />
        {/* <div className="h-40 mt-6 md:h-60 md:mt-4">
          <Carousel images={imagesLeft} />
        </div> */}
        <IntranetDashboard />
        <ArticalsSection />
        <UseFullLinks />
      </div>
      <footer className="mt-8">
        <div className="bg-gray-50 py-6">
          <div className="w-fit ml-2 md:ml-auto grid md:grid-cols-2 gap-6 md:gap-12 text-purple-950">
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
        <div className="bg-black text-white text-wrap py-4 pl-6 mt-4">
          Confiential and for internal use only. Copyright &copy;2025. All
          rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
