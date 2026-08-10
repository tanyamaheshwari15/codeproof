import { NavLink } from "react-router-dom";
import type { NavLinkRenderProps } from "react-router-dom";

const navLinkStyles = ({ isActive }: NavLinkRenderProps) => ({
  color: isActive ? '#84baf0' : '#e9eef3',
  fontWeight: isActive ? 'bold' : 'normal',
  padding: '20px 20px'
});

type SidebarItemProps = {
    to: string;
    label: string;
    icon: string;
};

export default function SidebarItem({ to, label, icon }: SidebarItemProps) {
    return(
        <li className="mb-3">
            <NavLink to={to} style={navLinkStyles}>
                <i className={`bi ${icon} mr-4`}></i>
                <span>{label}</span>
            </NavLink>
        </li>
    )
}