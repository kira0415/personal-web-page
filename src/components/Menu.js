import React, { Component } from 'react'
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import HomeIcon from '@material-ui/icons/Home';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import { Link } from 'react-router-dom';

export default class Menu extends Component {
    constructor() {
        super();
        this.state = {
            open: false
        }
    }

    handleClick = () => {
        this.setState({
            open: !this.state.open
        });
    }

    render() {
        const {open} = this.state;
        return (
            <List component="nav" aria-labelledby="nested-list-subheader" className="root">
                <ListItem button component={Link} to="/home">
                    <ListItemIcon>
                    <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItem>
                <ListItem button component={Link} to="/work">
                    <ListItemIcon>
                    <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Work Experience" />
                </ListItem>
                <ListItem button onClick={this.handleClick}>
                    <ListItemIcon>
                    <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Projects" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit className="nest">
                    <List component="div" disablePadding>
                        <ListItem button component={Link} to="/jobplus">
                            <ListItemIcon>
                            <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary="JobPlus" />
                        </ListItem>
                        <ListItem button component={Link} to="/delivery4you">
                            <ListItemIcon>
                            <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary="Delivery4You" />
                        </ListItem>
                        <ListItem button component={Link} to="/around">
                            <ListItemIcon>
                            <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary="Around" />
                        </ListItem>
                        <ListItem button component={Link} to="/starlink">
                            <ListItemIcon>
                            <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary="Starlink" />
                        </ListItem>
                        <ListItem button component={Link} to="/tinnews">
                            <ListItemIcon>
                            <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary="Tinnews" />
                        </ListItem>
                    </List>
                </Collapse>
            </List>
        )
    }
}
