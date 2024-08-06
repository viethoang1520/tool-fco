import { createContext, useState } from "react";
import PropTypes from 'prop-types';

export const AppContext = createContext({});

export const AppProvider = ({ children }) => {

     const [showLogin, setShowLogin] = useState(false);
     const [showSignUp, setShowSignUp] = useState(false);
     const [userLogin, setUserLogin] = useState();


     return <AppContext.Provider
          value={
               {
                    showLogin,
                    setShowLogin,
                    showSignUp,
                    setShowSignUp,
                    userLogin,
                    setUserLogin
               }}>
          {children}
     </AppContext.Provider>
}

AppProvider.propTypes = {
     children: PropTypes.node
}