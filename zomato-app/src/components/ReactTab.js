import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styles from '../styleSheet/ReactTab.module.css'

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function ReactTab({items}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="OverView" {...a11yProps(0)} />
          <Tab label="Contact" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
      <div className={styles.overview}>
        <h4>About this Place</h4>
        
            <h5>Cuisine</h5>
            <p>{items.cuisines[0].cuisine_name}, {items.cuisines[1].cuisine_name}</p>

            <h5>Average cost</h5>
            <p>&#x20B9; {items.cost} for two people. (approx)</p>

      </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div className={styles.contact}>
            <h4>Phone Number</h4>
            <p className={styles.number}>{items.contact_number}</p>

            <h4>{items.restaurant_name}</h4>
            <p>{items.address}</p>
        </div>
      </CustomTabPanel>
    </Box>
  );
}
