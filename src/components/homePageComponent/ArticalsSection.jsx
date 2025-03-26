import React from "react";
import { Leaf } from "lucide-react";

const ArticalsSection = () => {
  return (
    <div className="bg-gray-100 px-6 py-4 mt-8">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Wins & Partnerships</h2>
        <p className="text-blue-600  cursor-pointer">See all</p>
      </div>
      <div className="md:flex md:space-x-4 mt-8">
        <div className="md:w-[45%]">
          <img
            className="h-[227px] w-full object-cover"
            src="https://media.istockphoto.com/id/453033511/photo/business-district-in-london.jpg?s=612x612&w=0&k=20&c=Pf9vso-tu1m_QA8GHtEyW4SmyNC904EwS7qoW8Y0GSM="
            alt=""
          />
          <h2 className="font-semibold mt-2 mb-1">
            Fast-tracking innovation with Bosch
          </h2>
          <p className="text-sm text-justify text-gray-500">
            The future of technology is wireless, and speed and connectivity
            rule the game. In...
          </p>
          <div className="flex items-center space-x-2 text-xs mt-6 mb-2 md:mb-0 md:mt-10">
            {/* <img src="" alt="" /> */}
            <div className="bg-blue-500 h-10 w-10 flex items-center justify-center rounded-full">
              <Leaf strokeWidth={1.5} className="w-6 h-6 text-white" />
            </div>
            <div className="text-gray-500">
              <span className="text-black font-semibold">Group Newsdesk</span>{" "}
              <span>March 3</span>
              <p>853 views</p>
            </div>
          </div>
        </div>
        <div className="md:w-[55%] text-justify">
          <div className="sm:flex space-x-2 md:space-x-4">
            <img
              className="w-44 h-24"
              src="https://motionarray.imgix.net/motion-array-1436147-E0vHXvCMRU-high_0004.jpg?w=660&q=60&fit=max&auto=format"
              alt=""
            />
            <div className="text-sm">
              <h3 className="font-semibold sm:-mt-1.5">
                Powering up safety and sustainability with Arguus
              </h3>
              <p className="text-gray-500">
                I n line with our capabilities to reimagine the way our...
              </p>
              <div className="text-gray-800 mt-2 sm:mt-6">
                <span className="text-black font-semibold">Group Newsdesk</span>{" "}
                February 4<p>268 views</p>
              </div>
            </div>
          </div>
          <div className="border border-b border-gray-200 my-4 w-full"></div>
          <div className="sm:flex space-x-2 sm:space-x-4">
            <img
              className="w-44 h-24"
              src="https://media.istockphoto.com/id/96502262/photo/dominoes-falling-in-a-row.jpg?s=612x612&w=0&k=20&c=jXhg38wjrmtyZ-9tbKP4gdy3pJOVV2IRyv7qK71npqU="
              alt=""
            />
            <div className="text-sm">
              <h3 className="font-semibold sm:-mt-1.5">
                From challanges to cheers
              </h3>
              <p className="text-gray-500">
                As we step into 2025, let's look back on a year of significan...
              </p>
              <div className="text-gray-800 mt-2 sm:mt-6">
                <span className="text-black font-semibold">Group Newsdesk</span>{" "}
                January 9<p>708 views</p>
              </div>
            </div>
          </div>
          <div className="border border-b border-gray-200 my-4 w-full"></div>
          <div className="sm:flex space-x-2 sm:space-x-4">
            <img
              className="w-44 h-24"
              src="https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/49EwKH5deijotr386/videoblocks-hand-launches-paper-airplane-against-sunset-background-slow-motion_hnh_uckpf_thumbnail-1080_08.png"
              alt=""
            />
            <div className="text-sm">
              <h3 className="font-semibold sm:-mt-1.5">
                Securing Global operations for a next-gen defence
              </h3>
              <p className="text-gray-500">
                As cybersecurity threats continue to grow, businesses need...
              </p>
              <div className="text-gray-800 mt-2 sm:mt-6">
                <span className="text-black font-semibold">Group Newsdesk</span>{" "}
                December 20, 2024<p>194 views</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticalsSection;
