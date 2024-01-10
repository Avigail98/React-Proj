import { Grid, Paper } from "@mui/material";
import UserPosts from "./UserPosts";
import UsersTable from "./UsersTable";

const Dashboard= () => {
    return ( <Grid container spacing ={2}>
<Grid item xs={9} md={4}>
<Paper style={{ height: '100%', padding: 16 }}>
            <UsersTable/>
          </Paper>
        </Grid>

<Grid item xs={3} md={2}>
<Paper style={{ height: '100%', padding: 16 }}>

    <UserPosts/>
    </Paper>
</Grid>
</Grid>
);
};

export default Dashboard;
