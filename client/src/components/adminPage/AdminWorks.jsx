import React, {useState} from "react";
import PropTypes from "prop-types";
import { Box, AppBar, Tabs, Tab } from "@material-ui/core";

import AddTab from "./AddTab";
import RemoveTab from "./RemoveTab";
import UpdateTab from "./UpdateTab";

//panel on the tab
const TabPanel = ({ children, index, value }) => {
    return (
        <div role='tabpanel' hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`}>
            {value === index && (<Box>
                <h2>{children}</h2>
            </Box>)}
        </div>
    );
};
//typechecking with the probs of tabpanel
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
};
//setting a11y props
const a11yProps = (ind) => {
    return {
        id: `simple-tab-${ind}`,
        "aria-controls": `simple-tabpanel-${ind}`
    };
};
const AdminWorks = () => {
    const [value, setValue] = useState(0);
    const handleChange = (e, targetValue) => {
        setValue(targetValue)
    };
    return (
      <div>
        <AppBar position='static'>
          <Tabs value={value} onChange={handleChange} aria-label='simple-tabs'>
            <Tab label='Add' {...a11yProps(0)}></Tab>
            <Tab label='Remove' {...a11yProps(1)}></Tab>
            <Tab label='Update' {...a11yProps(2)}></Tab>
          </Tabs>
        </AppBar>
        <TabPanel index={0} value={value}>
          <AddTab />
        </TabPanel>
        <TabPanel index={1} value={value}>
          <RemoveTab />
        </TabPanel>
        <TabPanel index={2} value={value}>
          <UpdateTab />
        </TabPanel>
      </div>
    );
};
export default AdminWorks;