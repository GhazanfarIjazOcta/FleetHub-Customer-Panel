export const ChatStyles = {
   
    mainChatStyles : {

        height: { lg: "83%", xs: "90%" },
        borderRadius: "4px",

        position: "fixed",
        mt: { xs: 11, sm: 12, md: 12, lg: 12 },
        // Adjust padding based on the screen size
        px: { xs: 2, sm: 2, md: 2, lg: 0 }, // Remove padding at larger screens where sidebar becomes toggle
        ml: { xs: 0, sm: 0, md: 0, lg: 0, xl: 0 }, // Leave space for the sidebar on larger screens
        overflow: "none", // Prevent overflowing horizontally and vertically
        width: "99%", // Ensure it takes full width
        width: { lg: "81.5%", xs: "90%" }, // Ensure it takes full width
        // maxWidth: "1200px", // Set a max width as needed>
        //             background: "#F8DE7E",
        //   background: "#F8F8FF",
        background: "#ffffff",
        overflow: "none",

        boxShadow: 2,

    },

    iconbox: {
        ml: {
          xs: 33,  // For mobile width around 320px
          sm: 44,  // For mobile width around 375px
          md: 46   // For mobile width around 425px and larger
        }
      },



    header: { height: "100%", width: "100%" ,  overflowY: "auto", },
    
    profilePaper: {
      boxShadow: "none",
      height: "88%",
      width: { lg: "100%", xs: "100%" },// Prevent overflowing horizontally and vertically
      overflowY: "auto",
      mb: 2
    },
    profileContainer: {
  
      height: "95%",
      width: "95%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      
      width: { lg: "95%", xs: "100%" },// Prevent overflowing horizontally and vertically
      
      
    },
    profileTextField: { width: {lg:"35%" , xs:"100%"} , marginLeft: "5px" },
    profileLabel: { fontWeight: {lg:500 , xs:200} },
    addPhoto: {
      width: "110px",
      height: "44px",
      backgroundColor: "#F4F4F4",
      borderRadius: "40%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    profileButtonContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
      gap: "24px",
     
            
        paddingLeft:  {
          xs: '40px', // Padding for extra-small devices
          lg: '40px', // Padding for large devices
         }
    
    },
    resetButtomn: {
      marginRight: "opx",
      marginLeft: "0px",
      width: "185px",
      height: "53px",
      backgroundColor: "white",
      color: "#F38712",
      textTransform: "none",
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
      "&:hover": {
        backgroundColor: "white",
        border: "1px solid #F38712",
      },
      border: "1px solid #F38712",
    },
    updateButton: {
      marginRight: "opx",
      marginLeft: "0px",
      width: "247px",
      height: "53px",
      backgroundColor: "#F38712",
      color: "white",
      textTransform: "none",
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
      "&:hover": {
        backgroundColor: "#F38712",
        border: "1px solid #F38712",
      },
      border: "1px solid #F38712",
    },
    changePasswordPaper: {
      boxShadow: "none",
      height: "88%",
      width: { lg: "100%", xs: "100%" },// Prevent overflowing horizontally and vertically
      overflowY: "auto",
      mb: 2
      
    },
    changePasswordContainer: {
      height: "95%",
      width: "95%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      
      width: { lg: "95%", xs: "100%" },// Prevent overflowing horizontally and vertically
    },
    textFieldBox: { width: {lg:"35%" , xs:"100%"} },
    contactUsPaper: {
      boxShadow: "none",
      height: "100%",
      width: "100%",
  
   
      height: "88%",
     
      mb: 2
    },
    contactUsBox: {
      height: "95%",
      width: "95%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
  
   
      
      width: { lg: "95%", xs: "100%" },// Prevent overflowing horizontally and vertically
    },
    contactUsContainer: { 
      width: "100%", 
      height: "90%", 
      display: "flex",
      flexDirection: {
        xs: "column", // Stack vertically for mobile view
        lg: "row", // Side by side for large screens
      }, 
      gap: { xs: 0, lg: 0 } // Add spacing between elements in mobile view
    },
    contactUsBoxWidth: { 
      width: { 
        xs: "70%", // Full width in mobile view
        lg: "50%" // Half width in large screens
      },
  
      
      
      direction: "row"
    },
    conatactUsLeftLabel: {
      fontSize: "36px",
      color: "#383C3E",
      fontWeight: 700,
      fontFamily: "Inter, sans-serif",
    },
    conatactUsLeftbottomLabel: {
      fontSize: "14px",
      color: "#737B7D",
      fontWeight: 400,
      fontFamily: "Inter, sans-serif",
    },
    conatactUsTextField: {
      width: {lg:"80%" , xs:"120%"},
       marginLeft: "5px", 
       marginTop: "4px" },
    conatactUsTextFieldMessage: {
      width: {lg:"80%" , xs:"120%"},
      marginLeft: "5px",
      height: "100%",
      marginTop: "4px",
    },
    contactUsContactBox: {
      width: {lg:"196px" , xs: "320%"},
      height: "126px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "5px",
      boxShadow: "none",
      border: "1px solid #F2F2F2",
    },
    contactUsCallLabel: {
      fontWeight: 500,
      color: "#F38712",
      fontSize: "16px",
    },
    contactUsPhone: {
      fontWeight: 400,
      color: "#717171",
      fontSize: "14px",
    },
    contactUsButtonContainer: {
      // display: "flex",
      // flexDirection: "row",
      // justifyContent: "flex-start",
     
      ml: {lg:120 , xs:2}
    },
    contactUsButton: {
      // marginRight: "opx",
      // marginLeft: "70%",
      // paddingleft: "200px",
      marginBottom: "20px",
      width: {lg:"247px", xs:"500%"},
      height: "53px",
      backgroundColor: "#F38712",
      color: "white",
      textTransform: "none",
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
      "&:hover": {
        backgroundColor: "#F38712",
        border: "1px solid #F38712",
      },
      border: "1px solid #F38712",
    },
    policyPaper: {
      boxShadow: "none",
      height: "88%",
      width: { lg: "100%", xs: "100%" },// Prevent overflowing horizontally and vertically
      overflowY: "auto",
      mb: 2
    
    },
    policyBox: {
      height: "95%",
      width: "95%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      
      width: { lg: "95%", xs: "100%" },// Prevent overflowing horizontally and vertically
  
   
    
    },
    policyEdit: { display: "flex", justifyContent: "flex-end" },
    policyButtonContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
      gap: "24px",
      paddingLeft:  {
        xs: '40px', // Padding for extra-small devices
        lg: '40px', // Padding for large devices
       }
    },
    policyDisagree: {
      marginRight: "opx",
      marginLeft: "0px",
      width: "185px",
      height: "53px",
      backgroundColor: "white",
      color: "#F38712",
      textTransform: "none",
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
      "&:hover": {
        backgroundColor: "white",
        border: "1px solid #F38712",
      },
      border: "1px solid #F38712",
    },
    policyAcceptAll: {
      marginRight: "opx",
      marginLeft: "0px",
      width: "247px",
      height: "53px",
      backgroundColor: "#F38712",
      color: "white",
      textTransform: "none",
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
      "&:hover": {
        backgroundColor: "#F38712",
        border: "1px solid #F38712",
      },
      border: "1px solid #F38712",
    },
    termsPaper: {
      boxShadow: "none",
      height: "88%",
      width: "100%",
    },
    termsBox: {
      height: "95%",
      width: "95%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
  };