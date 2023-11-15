import { Paper, Stack, Typography, Box } from "@mui/material"
import "./index.css"

export default function BrowseByCategory() {
    return <>
        <Stack direction="column" spacing={2} sx={{ width: '100%', height: '100%', margin: '5px' }}>
            <BrowseTitle />
            <Box className="hide-scroll" sx={{ width: '100%', height: '100%', margin: '5px', overflow: 'auto' }}> 
                <Stack direction="row" spacing={2}
                    sx={{ 
                        width: "fit-content" }}>

                    <BrowseCardStrip />

                </Stack>
            </Box>
        </Stack>


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
        <Typography variant="h5">
            {title}
        </Typography>
    </>
}
function BrowseCard({ category = "Kids & Family" }) {
    return <>
        <Paper sx={{
            position: "relative",
            width: "365px", height: "120px", margin: "10px"
        }}>

            <Typography variant="h6"
                sx={{ position: "absolute", bottom: "10px", left: "10px" }}>
                {category}
            </Typography>

        </Paper>

    </>
}