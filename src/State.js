import {useState} from 'react';
import {Card, Stack, Avatar, Chip, Typography, Switch, getTouchRippleUtilityClass} from '@mui/material';


function ProfileCard(){
    const [active, setActive] = useState(false);
    return(
        <Card sx={{ p: 2.5 }}>
            <Stack direction="row" alignItems="center" spacing={2} useFlexGap>
              <Avatar variant="rounded" src="avatar.jpg" />
              <div>
                <Stack direction="row" alignItems="center" spacing={1} useFlexGap>
                  <Typography fontWeight="semiBold">Lucas Smith</Typography>
                  <Chip
                    size="large"
                    color={active ? 'success' : 'default'}
                    label={active ? 'Active' : 'Inactive'}
                  />
                </Stack>
                <Typography variant="body2" color="text.secondary">
                  Dasmarinas City, Cavite, Philippines
                </Typography>
              </div>

              <Switch sx={{ ml: 'auto' }} checked = {active} onChange={
                (e) => {
                    setActive(e.target.checked);
                }
              }/>
          </Stack>
         </Card>
    );
}

export default ProfileCard;