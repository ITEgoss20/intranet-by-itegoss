import React from "react";

const Footer = () => {
  return (
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
      <div className="bg-black text-white py-4 pl-6 mt-4">
        Confiential and for internal use only. Copyright &copy;2025. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
