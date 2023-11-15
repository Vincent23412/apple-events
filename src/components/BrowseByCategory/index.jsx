import { Paper, Stack, Typography, Box } from "@mui/material"

export default function BrowseByCategory() {
    return <>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', height: '300px' }}>

            <BrowseTitle />
            <Box sx={{ width: '100%', height: '100%', margin: '5px', overflow: 'auto' }}>
                <Stack direction="row" spacing={2}>

                    <BrowseCardStrip />

                </Stack>
            </Box>
        </Box>
    </>
}

function BrowseCardStrip() {
    return <>
        
            <BrowseCard />
            <BrowseCard />
            <BrowseCard />
            <BrowseCard />
            <BrowseCard />
        
    </>
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