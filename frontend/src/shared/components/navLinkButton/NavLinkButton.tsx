import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React, { ReactNode } from "react";
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";

interface INavLinkButtonProps {
    to?: string;
    icon: ReactNode;
    label: string;
    onClick?: () => void;
    isMatch?: boolean;
}

export const NavLinkButton: React.FC<INavLinkButtonProps> = ({
    to,
    icon,
    label,
    onClick,
}) => {
    const navigate = useNavigate();
    const path = useResolvedPath(to ? to : "");

    const match = useMatch(path.pathname);

    const handleClick = () => {
        navigate(to ? to : "");
        onClick?.();
    };

    return (
        <>
            <ListItemButton selected={!!match} onClick={handleClick}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={label} />
            </ListItemButton>
        </>
    );
};
