import React from "react";

const UseFullLinks = () => {
  return (
    <div className="mt-8 lg:w-1/2">
      <div>
        <nav className="flex bg-gray-200 font-semibold text-sm">
          <p className="bg-white border-l-[2px] border-gray-300 px-3 py-1 uppercase">
            Access All
          </p>
          <p className="px-3 py-1">Global links</p>
          <p className="px-3 py-1">My links</p>
          <p className="px-3 py-1">DAILY.connect</p>
        </nav>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 mt-2 text-sm">
          <div className="">
            <h3 className="font-semibold underline">Human Resources</h3>
            <ul className="bg-white space-y-0.5 text-sm text-purple-950 font-semibold tracking-tight">
              <li className="py-3 px-2 bg-gray-50">
                Pxcell India Transformation
              </li>
              <li className="py-3 px-2 bg-gray-50">Workzone</li>
              <li className="py-3 px-2 bg-gray-50">SuccessFactors</li>
              <li className="py-3 px-2 bg-gray-50">GetSUCCESS</li>
              <li className="py-3 px-2 bg-gray-50">
                India Continuous Assimilation Program
              </li>
              <li className="py-3 px-2 bg-gray-50">WorkAbrod</li>
              <li className="py-3 px-2 bg-gray-50">Medi Assist</li>
              <li className="py-3 px-2 bg-gray-50">
                Employee Assistance program
              </li>
              <li className="py-3 px-2 bg-gray-50">Medi Assist</li>
              <li className="py-3 px-2 bg-gray-50">R2D2 (RMG Tool)</li>
              <li className="py-3 px-2 bg-gray-50">CommunityConnect</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold underline">Helpdesk and support</h3>
            <ul className="bg-white space-y-0.5 text-sm text-purple-950 font-semibold tracking-tight">
              <li className="py-3 px-2 bg-gray-50">Ask Adam</li>
              <li className="py-3 px-2 bg-gray-50">ServiceCentral</li>
              <li className="py-3 px-2 bg-gray-50">India Application Portal</li>
              <li className="py-3 px-2 bg-gray-50">Payroll (HGS)</li>
              <li className="py-3 px-2 bg-gray-50">
                Procurement Helpdesk / Ticketing Tool
              </li>
              <li className="py-3 px-2 bg-gray-50">WorkAbrod</li>
              <li className="py-3 px-2 bg-gray-50">Medi Assist</li>
              <li className="py-3 px-2 bg-gray-50">ICRES</li>
              <li className="py-3 px-2 bg-gray-50">
                Emergency Contact Details
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold underline">Usefull Tools</h3>
            <ul className="bg-white space-y-0.5 text-sm text-purple-950 font-semibold tracking-tight">
              <li className="py-3 px-2 bg-gray-50">SkillPath</li>
              <li className="py-3 px-2 bg-gray-50">NEXT</li>
              <li className="py-3 px-2 bg-gray-50">OfficePass</li>
              <li className="py-3 px-2 bg-gray-50">SmartOffice</li>
              <li className="py-3 px-2 bg-gray-50">Egencia</li>
              <li className="py-3 px-2 bg-gray-50">Replicon</li>
              <li className="py-3 px-2 bg-gray-50">
                PRISM-Global Knowledge Management Platform
              </li>
              <li className="py-3 px-2 bg-gray-50">Employee Directory</li>
              <li className="py-3 px-2 bg-gray-50">
                Visitor management System
              </li>
              <li className="py-3 px-2 bg-gray-50">MyExpencses</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseFullLinks;
