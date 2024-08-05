import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import {
    Avatar,
    Box,
    Divider,
    Drawer,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import React, { ReactNode, useEffect, useState } from "react";

import { useAppThemeContext } from "../../contexts";
import { NavLinkButton } from "../navLinkButton/NavLinkButton";

interface IDrawerOption {
    path: string;
    icon: ReactNode;
    label: string;
}

export const SideBar: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const { toggleTheme } = useAppThemeContext();

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [options, setOptions] = useState<IDrawerOption[]>([]);

    useEffect(() => {
        setOptions([
            {
                path: "/",
                icon: <></>,
                label: "Página inicial",
            },
        ]);
    }, []);

    const toggleDrawer = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                variant={isMobile ? "temporary" : "permanent"}
            >
                <Box
                    width={theme.spacing(28)}
                    height={"100%"}
                    display={"flex"}
                    flexDirection={"column"}
                >
                    <Box
                        display={"flex"}
                        width={"100%"}
                        height={theme.spacing(15)}
                        sx={{ alignItems: "center", justifyContent: "center" }}
                    >
                        <Avatar
                            sx={{
                                height: theme.spacing(12),
                                width: theme.spacing(12),
                            }}
                        >
                            N
                        </Avatar>
                    </Box>
                    <Divider />
                    <Box flex={1}>
                        <List>
                            {options.map((option) => {
                                return (
                                    <NavLinkButton
                                        key={option.path}
                                        to={option.path}
                                        label={option.label}
                                        icon={option.icon}
                                        onClick={
                                            isMobile ? toggleDrawer : undefined
                                        }
                                    />
                                );
                            })}
                        </List>
                    </Box>
                    <Divider />
                    <Box
                        width={"100%"}
                        display={"flex"}
                        sx={{ alignItems: "center", justifyContent: "center" }}
                    >
                        <ListItemButton onClick={toggleTheme}>
                            <ListItemIcon>
                                {theme.palette.mode === "dark" ? (
                                    <WbSunnyIcon fontSize={"small"} />
                                ) : (
                                    <NightlightRoundIcon fontSize={"small"} />
                                )}
                            </ListItemIcon>
                            <ListItemText primary={"Alterar Tema"} />
                        </ListItemButton>
                    </Box>
                </Box>
            </Drawer>
        </>
    );
};
