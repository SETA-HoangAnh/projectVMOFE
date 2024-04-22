import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export default function CopyrightApp(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            <Link color="inherit" href="https://icetea.io/">
                Icetea-Software
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}