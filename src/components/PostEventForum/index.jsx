import { Stack, Typography } from "@mui/material"
import {Box} from "@mui/material"
import Paper from '@mui/material/Paper';

export default function PostEventForum(){
    return (
    <>
        <Stack direction="column"spacing={2} sx={{ width: '100%', height: '100%', margin: '5px' }} >
        {/* <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' , height: '300px'}}> */}
            <Title/>
            <Box  className="hide-scroll"  sx={{ width: '100%', height: '100%' ,margin:'5px', overflow:'auto'}}>    
                <Stack direction="row" spacing={2}>
                    <Picture imgsrc='src\assets\react.svg'/>
                    <Picture imgsrc='src\assets\react.svg'/>
                    <Picture imgsrc='src\assets\react.svg'/>
                    <Picture imgsrc='src\assets\react.svg'/>
                    <Picture imgsrc='src\assets\react.svg'/>
                    <Picture imgsrc='src\assets\react.svg'/>
                    <Picture imgsrc='src\assets\react.svg'/>
                    <Picture imgsrc='src\assets\react.svg'/>
                    <Picture imgsrc='src\assets\react.svg'/>
                    <Picture imgsrc='src\assets\react.svg'/>
                    <Picture imgsrc='src\assets\react.svg'/>
                    <Picture imgsrc='src\assets\react.svg'/>

                </Stack>
            </Box>
        {/* </Box> */}
        </Stack>
    </>
    )
}


function Title(){
    return (
    <>
        <Typography variant="h5" component="h1" gutterBottom >
            Watch, discuss, repeat
        </Typography>
        <Typography variant="h6" component="h1" gutterBottom >
            Fire up your group
        </Typography>
    </>
    )

}

function Picture({imgsrc}){
    return (
        <> 
            <Paper sx={{ width: '100%', height: '100%', backgroundColor:'white', borderRadius:"15%"}}>
                    <img src={imgsrc} height={'150px'}/>
            </Paper>
        </>
    )
}
