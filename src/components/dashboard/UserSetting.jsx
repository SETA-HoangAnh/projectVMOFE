import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { ArrowDropDown, Language, Logout, ManageAccounts } from '@mui/icons-material';
import ChangeLang from '../common/ChangeLangButton';


const ITEM_HEIGHT = 48;

function BasicMenu() {

  return (
    <div className='user-setting'>
      <div className='img-user'>
        <img src="https://danviet.mediacdn.vn/zoom/700_438//upload/4-2014/images/2014-12-16/1434415007-avatar_zmqy.jpg" />
      </div>
      <div className='username'>
        <ul>
            <li>Username
            </li>
        </ul>
      </div>
      <div className='icon-dropdown'>
        <ArrowDropDown></ArrowDropDown>
      </div>
    </div>
  );
}


export default function MenuListSetting() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorE2, setAnchorE2] = React.useState(null);
  const open = Boolean(anchorEl);
  const open2 = Boolean(anchorE2);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClick2 = (event) => {
    setAnchorE2(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClose2 = () => {
    setAnchorE2(null);
  };


  return (
    <div className='user-setting2'>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <BasicMenu />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClick2}><Language></Language> Language</MenuItem>
        <MenuItem onClick={handleClick2}><ManageAccounts></ManageAccounts> Setting accout</MenuItem>
        <MenuItem onClick={handleClick2}><Logout></Logout>Logout</MenuItem>
      </Menu>
      <Menu
        id="basic-menu2"
        anchorEl={anchorE2}
        open={open2}
        onClose={handleClose2}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose2}><ChangeLang></ChangeLang></MenuItem>
      </Menu>
    </div>
  );
}