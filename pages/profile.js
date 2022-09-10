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
            <TabPanel value="1">
              <div className={profilestyles.profilepage}>
                <Image
                  alt="profile"
                  src={`/profilepic.png`}
                  width="100"
                  height="100"
                />
                <h3>Priyanshu Ratnakar</h3>
                <div className={buttonstyles.tag}>Developer</div>
                <p
                  style={{
                    textAlign: "center",

                    color: "rgba(255, 255, 255, 0.61)",
                  }}
                >
                  gm! priyanshu this side, trying to solve this problem of
                  sharing socials &amp; connecting with people.
                </p>

                <div className={profilestyles.input}>
                  <Image
                    src="/twitter.png"
                    alt="twitter"
                    width="20"
                    height="20"
                  />
                  &nbsp; &nbsp;
                  <input type="url" name="twitter" placeholder={`Twitter`} />
                </div>

                <div className={profilestyles.input}>
                  <Image
                    src="/instagram.png"
                    alt="instagram"
                    width="20"
                    height="20"
                  />
                  &nbsp; &nbsp;
                  <input
                    type="url"
                    name="instagram"
                    placeholder={`Instagram`}
                  />
                </div>

                <div className={profilestyles.input}>
                  <Image
                    src="/linkedin.png"
                    alt="linkedin"
                    width="20"
                    height="20"
                  />{" "}
                  &nbsp; &nbsp;
                  <input type="url" name="linkedin" placeholder={`LinkedIn`} />
                </div>

                <div className={profilestyles.input}>
                  <Image
                    src="/github.png"
                    alt="github"
                    width="20"
                    height="20"
                  />
                  &nbsp; &nbsp;
                  <input type="url" name="github" placeholder={`Github`} />
                </div>

                <br />

                <button
                  className={buttonstyles.filledbutton}
                  style={{ background: "#9556FF" }}
                >
                  Buy me a crypto coffee
                </button>
                <br />
                <button className={buttonstyles.outlinebutton}>
                  {" "}
                  <Image
                    alt="notion"
                    src="/notion.png"
                    width="20"
                    height="20"
                  />{" "}
                  &nbsp; add this person to your notion
                </button>
              </div>
            </TabPanel>
            <TabPanel value="2">
              <div className={profilestyles.gallery}>
                <div className={profilestyles.box}></div>
                <div className={profilestyles.box}></div>
                <div className={profilestyles.box}></div>
                <div className={profilestyles.box}></div>
                <div className={profilestyles.box}></div>
                <div className={profilestyles.box}></div>
              </div>
            </TabPanel>
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
