import React from 'react'
import { Media, Table, Label as DisplayLabel } from "reactstrap";
// import { Button, DisplayLabel } from '../../../components/common/index';
// import moment from 'moment';

const CityView = ({ loading, authAccess, data, handleForm }) => {

    let Arr
    try {
        return (
            <>
                {/* {data && data.length > 0 ?  */}
                <Table className="align-items-center table-flush" responsive>
                    <thead className="thead-light">
                        <tr>
                            <th scope="col" className="col-7">Name</th>
                            <th scope="col" className="col-1">Seq</th>
                            <th scope="col" className="col-3">Created At</th>
                            <th scope="col" className="col-1">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[{ name: "sudhakar", sequence: "3" },
                        { name: "sudhakar", sequence: "3" },
                        { name: "sudhakar", sequence: "3" },
                        { name: "sudhakar", sequence: "3" },
                        { name: "sudhakar", sequence: "3" }].map((data, i) => {
                            return (<tr key={i}>
                                <td className="col-7">
                                    <Media className="align-items-center">
                                        {/* <img alt="..."
                                            className="avatar rounded-circle mr-3"
                                            src={data.image ? data.image : require("../../../assets/img/theme/imagenotfound.jpg")
                                                .default} /> */}
                                        <Media>
                                            <span className="mb-0 text-sm">
                                                {data.name}
                                            </span>
                                        </Media>
                                    </Media>
                                </td>
                                <td className="col-1">{data.sequence !== null ? data.sequence : " - "}</td>
                                {/* <td className="col-3">{moment(data.created_at).format('YYYY-DD-MM hh:mm a')}</td> */}
                                <td className="col-1">
                                    {/* <Button size="sm" variant={authAccess ? "primary" : "secondary"} onClick={() => handleForm("view", data)}>View</Button> */}
                                </td>
                            </tr>);
                        })}
                    </tbody>
                </Table>
                {/* :
                data && data.length === 0 && loading
                ? <DisplayLabel message="Loading..." />
                : <DisplayLabel message="Records not found !!!" /> */}
                {/* } */}
            </>
        )
    } catch (e) {
        console.log(">>>>>>", e)
    }

}

export default CityView;
