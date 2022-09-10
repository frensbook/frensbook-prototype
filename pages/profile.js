import * as React from "react";
import styles from "../styles/Home.module.css";
import profilestyles from "../styles/Profile.module.css";
import Image from "next/image";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import buttonstyles from "../styles/Button.module.css";

function Profile() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [scan, setScan] = React.useState(false);

  return (
    <div className={styles.profile}>
      <div className={styles.bgimgdiv}>
        <Image
          className={styles.bgimg}
          src="/background.png"
          alt="bg"
          width="400"
          height="400"
        />
      </div>
      <div className={profilestyles.profilebody}>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TabList onChange={handleChange} aria-label="Tabs">
                <Tab label="Profile" value="1" className={profilestyles.tab} />
                <Tab label="NFT" value="2" className={profilestyles.tab} />
                <Tab label="Scan" value="3" className={profilestyles.tab} />
              </TabList>
            </Box>
            <TabPanel value="1">Profile</TabPanel>
            <TabPanel value="2">NFT</TabPanel>
            <TabPanel value="3">
              <Image
                alt="qr"
                src={scan ? `/scan.png` : `/qr.png`}
                width="200"
                height="200"
              />
              <br />
              <br />
              <button
                className={buttonstyles.filledbutton}
                onClick={() => setScan(!scan)}
              >
                {scan ? "QR" : "Scan"}
              </button>
            </TabPanel>
          </TabContext>
        </Box>
      </div>
    </div>
  );
}

export default Profile;
