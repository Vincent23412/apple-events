import { Paper, Stack, Typography, Box } from "@mui/material"

export default function BrowseByCategory() {
    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <BrowseTitle />
            </Box>
            <Box sx={{ height: '300px', overflow: 'auto' }}>
                <BrowseCardStrip />
            </Box>
        </>
    );
}

function BrowseCardStrip() {
    return (
        <>
            <Stack direction={'row'} sx={{ overflow: 'auto'}}>
                <BrowseCard />
                <BrowseCard />
                <BrowseCard />
                <BrowseCard />
                <BrowseCard />
                <BrowseCard />
                <BrowseCard />
                <BrowseCard />
                <BrowseCard />
                <BrowseCard />
                <BrowseCard />
            </Stack>
        </>
    );
}

function BrowseTitle({ title = "Browse by Category" }) {
    return <>
        <Typography variant="h4">
            {title}
        </Typography>
    </>
}
function BrowseCard({ category = "Kids & Family" }) {
    return <>
        <Paper sx={{
            position: "relative",
            width: "200px", height: "200px", margin: "10px"
        }}>
        
            <Typography variant="h6"
                sx={{ position: "absolute", bottom: "10px", left: "10px" }}>
                {category}
            </Typography>
        
        </Paper>

    </>
}