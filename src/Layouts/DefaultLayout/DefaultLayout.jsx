import PropTypes from 'prop-types'
import Header from "../../Components/Header/Header";

function DefaultLayout({ children }) {
     return (
          <>
               <Header />
               {children}
          </>
     );
}

export default DefaultLayout;

DefaultLayout.propTypes = {
     children: PropTypes.node
}