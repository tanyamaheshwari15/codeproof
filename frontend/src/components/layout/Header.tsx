import { useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  const titles: Record<string, string> = {
    "/dashboard": "Dashboard",
    "/problems": "Problems",
    "/workspace": "Coding Workspace",
    "/progress": "Progress",
    "/submissions": "Submissions",
    "/settings": "Settings",
    "/account": "Account",
  };

  const title = titles[location.pathname] || "CodeProof";

  return (
    <header className="bg-[#28374f] text-white p-4 mb-4 shadow-md flex items-center justify-between">
      <h1 className="text-xl font-bold ml-5">{title}</h1>
      <div className="d-flex">
        <button className="mr-5" type="button">✨AI</button>
        <input className="form-control mr-2 border border-gray-600" type="search" placeholder=" Search" aria-label="Search"/>
        <button className="mr-6" type="button"><i className="bi-search"></i></button>
        <button className="mr-4" type="button"><i className="bi-bell"></i></button>
        <button className="mr-4" type="button"><i className="bi-person-circle"></i></button>
      </div>
    </header>
  );
}