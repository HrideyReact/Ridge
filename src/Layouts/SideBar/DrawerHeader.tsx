
import { styled} from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import {Images} from '../../Assets'
import Image from 'mui-image'


const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

  type DrawerHeaderProps={
    open:boolean;
    toggleDrawer:()=>void;
  }

const Header=({open,toggleDrawer}:DrawerHeaderProps)=>{
    return (
        <DrawerHeader sx={{display:'flex',justifyContent:'center'}} >
          <IconButton onClick={toggleDrawer}>
            {
                open ?
                <Image src={Images.LogoExpand} height='40px' width={'150px'} />
                :
                <Image src={Images.LogoCollapse} height='40px' width={'40px'} />

            }
          </IconButton>
        </DrawerHeader>
    )
}

export default Header;