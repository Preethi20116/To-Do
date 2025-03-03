import React from "react";
import { Button } from 'react-bootstrap';

function Footer(){
    return(
        <div className="footer">
            <p>&copy; 2025 . All rights reserved.</p>
            <Button as="a" variant="primary">
    Button as link
  </Button>
  <Button as="a" variant="success">
    Button as link
  </Button>

        </div>
    );
}
export default Footer;