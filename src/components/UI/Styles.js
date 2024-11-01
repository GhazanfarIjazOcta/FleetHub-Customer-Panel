
export const RegistrationStyles = {
    textField: {
        '& .MuiInputBase-root.MuiOutlinedInput-root': {
            borderRadius: "0.2rem",
            border: '1px solid #DCE0E5',
            backgroundColor: "white",
            fontSize: "0.8rem",
            color: "#14181F",
            fontFamily: 'Inter',
            margin: { xl: "0rem 0rem 1rem 0rem" ,lg: "0rem 0rem 0.5rem 0rem" , md: "0rem 0rem 0rem 0rem", xs: "0.5rem 0rem 0.5rem 0rem" },
            '& input::placeholder': {
                color: '#6F7C8E',
                opacity: 1,
                fontSize: "0.8rem",
                paddingLeft: "1rem"
            },
        },

    },

    passwordEyeBox: {
        position: 'absolute',
        color: "#000",
        top: 50,
        right: '5%',
        transform: 'translateY(-50%)',
        cursor: 'pointer',
        opacity: '50%',
        display: 'flex',
        alignItems: 'center',
    },

}

