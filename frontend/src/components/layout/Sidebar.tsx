import SidebarItem from "./SidebarItem";
import LogoutButton from "./LogoutButton";

export default function Sidebar(){
	return (
		<nav className="fixed left-0 top-0 h-screen bg-slate-950 text-white w-64 p-4 flex flex-col">
            <h1 className="text-2xl font-bold mb-10 mt-2">CodeProof</h1>

            {/*  upper Navigation */}
             <ul>
                <SidebarItem to="/dashboard" label="Dashboard"  icon="bi-speedometer2" />
                <SidebarItem to="/problems" label="Problems" icon="bi-journal-code" />
                <SidebarItem to="/workspace" label="Coding Workspace" icon="bi-code-slash" />
                <SidebarItem to="/progress" label="Progress" icon="bi-graph-up" />
                <SidebarItem to="/submissions" label="Submissions" icon="bi-check2-square" />
            </ul>
            
            {/*  lower Navigation */}
            <ul className="mt-auto">
                <hr className="mb-4 border-gray-700" />

                <SidebarItem to="/settings" label="Settings" icon="bi-gear" />
                <SidebarItem to="/account" label="Account" icon="bi-person-circle" />

                <LogoutButton />
            </ul>
        </nav>
	);
}