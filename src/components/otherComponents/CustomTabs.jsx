import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { colors } from "../../theme/colors";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles({
  root: {
    paddingTop: 10,
    maxWidth: 500,
    paddingBottom: 30,
    "& button": {
      textTransform: "none",
      color: colors.secondary,
      fontFamily: "inherit",
      fontSize: 20,
    },
  },
  appBar: {
    boxShadow: "none",
  },
  indicator: {
    display: "none",
  },
  selected: {
    fontWeight: 600,
  },
  tabItem: {
    marginLeft: 10,
    "& p": {
      fontSize: 20,
      lineHeight: "30px",
      fontWeight: 300,
      fontFamily: "inherit",
    },
  },
});

export default function CustomTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const selectedTab = {
    selected: classes.selected,
  };

  return (
    <div className={classes.root}>
      <AppBar
        classes={{
          root: classes.appBar,
        }}
        position="static"
        color="transparent"
      >
        <Tabs
          value={value}
          onChange={handleChange}
          classes={{
            indicator: classes.indicator,
          }}
          textColor="inherit"
          fontWeight="600"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab classes={selectedTab} label="Доставка" {...a11yProps(0)} />
          <Tab classes={selectedTab} label="Оплата" {...a11yProps(1)} />
          <Tab classes={selectedTab} label="Гарантія" {...a11yProps(2)} />
        </Tabs>
      </AppBar>

      <TabPanel className={classes.tabItem} value={value} index={0}>
        - «Новою поштою» по Україні (згідно з тарифами оператора) <br /> -
        Самовивіз
      </TabPanel>
      <TabPanel className={classes.tabItem} value={value} index={1}>
        - Карта приватбанк (комісія 1%) <br /> - Наложений платіж
      </TabPanel>
      <TabPanel className={classes.tabItem} value={value} index={2}>
        - Хороша репутація (більше 2х років на ринку) <br /> - Сотні задоволених
        клієнтів
      </TabPanel>
    </div>
  );
}
