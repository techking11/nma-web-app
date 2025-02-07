import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function Setting() {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorElUser(event.currentTarget);

  const handleCloseUserMenu = () => setAnchorElUser(null);

  return (
    <Box sx={{ flexGrow: 0, ml: 1 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} className="p-0">
          <Avatar
            alt="Remy Sharp"
            src="https://randomuser.me/api/portraits/men/1.jpg"
          />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting) => (
          <MenuItem key={setting} onClick={handleCloseUserMenu}>
            <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
