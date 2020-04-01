import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Collapse from '@material-ui/core/Collapse';

function App() {
  const hiddenBannersLocalStorageKey = 'hiddenBanners';
  const hiddenBanners = localStorage.getItem(hiddenBannersLocalStorageKey);
  const [open, setOpen] = React.useState(true);
  const [openDetails, setOpenDetails] = React.useState(false);

  const bannerIdIndex = hiddenBanners?.indexOf('abc');  
  //console.log(hiddenBanners?.indexOf('abc'));
  if(bannerIdIndex != null && bannerIdIndex > -1){
    console.log("hide banner");
    return (<div>the banner is now hidden</div>);
  }


  let bgColor = "#fee429";
  let color = "#332526";

  const collapseStyle = {
    width: '100%',
    alignItems: 'center',
    color: color,
    backgroundColor: bgColor,
    textAlign: 'center' as 'center'
  };

  const bannerDivStyle = {
    display: 'inline',
    //alignItems: 'center',
    //width: "85%"
  };
  const closeButtonStyle = {
    float: "right" as "right",
    //minWidth: "48px"
  };

  return (
    <div id="banner">
        <Collapse in={open} style={collapseStyle}>
        <div style={closeButtonStyle}>
          <IconButton
              aria-label="close"
              color="inherit"
              size="medium"
              onClick={() => {
                  setOpen(false);
                  // store the fact that user dismissed the banner so it won't be shown again
                  localStorage.setItem(hiddenBannersLocalStorageKey, "abc,");
              }}
              >
              <CloseIcon fontSize="inherit" />
            </IconButton>  
          </div>
          <div style={bannerDivStyle}>
              this is a title   
              <Collapse in={openDetails}>
                  this is body. Two Universal Module Definition (UMD) files are provided: one for development: https://unpkg.com/@material-ui/core@latest/umd/material-ui.development.js one for production: https://unpkg.com/@material-ui/core@latest/umd/material-ui.production.min.js ou can follow this CDN example to quickly get started. Using this approach in production is discouraged though - the client has to download the entire library, regardless of which components are actually used, affecting performance and bandwidth utilization. The UMD links are using the latest tag to point to the latest version of the library. This pointer is unstable, it shifts as we release new versions. You should consider pointing to a specific version, such as v4.4.0.                                        this is body             You can start using Material-UI with minimal Front-end infrastructure, which is great for prototyping.
              </Collapse>
              <IconButton
                  aria-label={ openDetails ? "collapse" : "expand" }
                  color="inherit"
                  size="small"
                  onClick={() => {
                      setOpenDetails(!openDetails);
                  }}
                  >
                  {openDetails ? <ExpandLessIcon aria-label="collapse"/> : <ExpandMoreIcon aria-label="expand" />}
              </IconButton>
            </div>
        </Collapse>
    </div>
  );
}

export default App;
