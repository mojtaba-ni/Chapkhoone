import MailIcon from "@material-ui/icons/Mail";
import PaymentIcon from '@material-ui/icons/Payment';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import AccountBalanceOutlinedIcon from '@material-ui/icons/AccountBalanceOutlined';
import PhoneEnabledRoundedIcon from '@material-ui/icons/PhoneEnabledRounded';

export const sidebar = [
    {   
        id:0,
        name:'صفحه اصلی',
        icon: <MailIcon />,
    },
    {   
        id:1,
        name:'محصولات',
        icon: <StorefrontOutlinedIcon />,
    },
    {   
        id:2,
        name:'لیست قیمت',
        icon: <PaymentIcon/>,
    },
    {   
        id:3,
        name:'قالب ها',
        icon: <AccountBalanceOutlinedIcon/>,
    },
    {   
        id:4,
        name:'تماس با ما',
        icon: <PhoneEnabledRoundedIcon />,
    },
]