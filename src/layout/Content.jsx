import { Button } from "react-bootstrap";

const Content = ({ title, iconAdd, handleOnClick}) => {
    return ( 
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="mb-0 text-gray-800">{title}</h1>
            <Button 
                variant="success"  
                className="d-none d-sm-inline-block btn btn-sm btn-success shadow-sm"
                onClick={handleOnClick}
            >
                <i>
                    {iconAdd}
                </i>
            </Button>
        </div>
     );
}
 
export default Content;