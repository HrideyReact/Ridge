import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import './sidebar.scss'
import {Images} from '../../Assets'
import Image from 'mui-image'


type OptionProps={
    open:boolean
}


const SideBarOptions=({open}:OptionProps)=>{

    const sideBarOptions :  {icon:string,label:string}[]=[
        {
            icon:Images.Home,
            label:'Home'
        },
        {
            icon:Images.ProductsIcon,
            label:'Products'
        },
        {
            icon:Images.SeoIcon,
            label:'SEO Analysis'
        }
    ]
    return (
        <List>
          {sideBarOptions.map((item, index) => (
            <ListItem key={index} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                    <Image height={'24px'} width={'24px'} src={item.icon} />
                </ListItemIcon>
                <ListItemText primary={item.label} sx={{ opacity: open ? 1 : 0,color:'white' }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
    )
}
export default SideBarOptions