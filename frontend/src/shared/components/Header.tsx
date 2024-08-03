import {
	AppBar,
	Avatar,
	Box,
	Button,
	IconButton,
	Toolbar,
	Typography,
} from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

export const Header = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
					>
						<Avatar>C</Avatar>
					</IconButton>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						Caio Adriano
					</Typography>

					<Button color="inherit" startIcon={<ExitToAppIcon />}>
						Sair
					</Button>
				</Toolbar>
			</AppBar>
		</Box>
	);
};
