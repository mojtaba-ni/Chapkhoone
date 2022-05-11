import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { sidebar } from "../../utils/sidebarInfo";
import styles from '../../styles/components/drawer.module.scss'

const Height = window.outerHeight
const useStyles = makeStyles({
  list: {
    width: 250,
    height:Height,
    backgroundColor: "#EFEFEF"
    
  },
  fullList: {
    width: "auto",
    backgroundColor: "#EFEFEF"
  },
 
});

export default function TemporaryDrawer({menu}) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const Height = window.outerHeight;
  console.log(Height)

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom"
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className={styles.drawerList}>
        {sidebar.map((text, index) => (
          <ListItem button key={text.id} className={styles.drawerListItem}>
            <ListItemIcon className={styles.drawerListIcon}>
              {text.icon}
            </ListItemIcon>
            <ListItemText primary={text.name} className={styles.drawerListText}/>
          </ListItem>
        ))}
      </List>
     
     
    </div>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><img src={menu} /></Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            className={styles.drawer}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
