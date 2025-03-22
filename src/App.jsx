import Carousel from "./components/Carousel";
import FlipCardSection from "./components/FlipCardSection";
import TripleCarousel from "./components/TripalCarousel";

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
        <FlipCardSection />
        <div className="bg-gray-100 px-6 py-4 mt-8">
          <div className="flex items-center justify-between">
            <h2>Wins & Partnerships</h2>
            <p className="text-blue-600 text-lg cursor-pointer">See all</p>
          </div>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <img
                className="h-40 w-full object-cover"
                src="https://media.istockphoto.com/id/453033511/photo/business-district-in-london.jpg?s=612x612&w=0&k=20&c=Pf9vso-tu1m_QA8GHtEyW4SmyNC904EwS7qoW8Y0GSM="
                alt=""
              />
              <h2>Fast-tracking innovation with Bosch</h2>
              <p>
                The future of technology is wireless, and speed and connectivity
                rule the game. In...
              </p>
              <div>
                <img src="" alt="" />
                <div>
                  <h3 className="font-semibold text-lg">Group Newsdesk</h3>
                  <span className="text-gray-800">March 3</span>
                  <p className="text-gray-800 text-sm">853 views</p>
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <div className="flex">
                <img src="" alt="" />
                <div>
                  <h3>Powering up safety and sustainability with Arguus</h3>
                  <p>
                    I n line with our capabilities to reimagine the way our...
                  </p>
                  <div className="text-gray-800">
                    <span className="text-black font-semibold">
                      Group Newsdesk
                    </span>{" "}
                    February 4<p>268 views</p>
                  </div>
                </div>
              </div>
              <div className="border border-b border-gray-200 my-4 w-full"></div>
              <div className="flex">
                <img src="" alt="" />
                <div>
                  <h3>Powering up safety and sustainability with Arguus</h3>
                  <p>
                    I n line with our capabilities to reimagine the way our...
                  </p>
                  <div className="text-gray-800">
                    <span className="text-black font-semibold">
                      Group Newsdesk
                    </span>{" "}
                    February 4<p>268 views</p>
                  </div>
                </div>
              </div>
              <div className="border border-b border-gray-200 my-4 w-full"></div>
              <div className="flex">
                <img src="" alt="" />
                <div>
                  <h3>Powering up safety and sustainability with Arguus</h3>
                  <p>
                    I n line with our capabilities to reimagine the way our...
                  </p>
                  <div className="text-gray-800">
                    <span className="text-black font-semibold">
                      Group Newsdesk
                    </span>{" "}
                    February 4<p>268 views</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
