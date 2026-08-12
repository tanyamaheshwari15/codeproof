import SidebarItem from "./SidebarItem";

export default function Sidebar(){
	return (
		<nav className="bg-slate-950 text-white w-64 min-h-screen p-4">
            <h1 className="text-2xl font-bold mb-10 mt-2">CodeProof</h1>
             <ul>
                <SidebarItem to="/dashboard" label="Dashboard"  icon="bi-speedometer2" />
                <SidebarItem to="/problems" label="Problems" icon="bi-journal-code" />
                <SidebarItem to="/workspace" label="Coding Workspace" icon="bi-code-slash" />
                <SidebarItem to="/progress" label="Progress" icon="bi-graph-up" />
                <SidebarItem to="/submissions" label="Submissions" icon="bi-check2-square" />
                <hr className="my-4 mt-90 border-gray-600" />
                <SidebarItem to="/settings" label="Settings" icon="bi-gear" />
                <SidebarItem to="/account" label="Account" icon="bi-person-circle" />
            </ul>
        </nav>
	);
}