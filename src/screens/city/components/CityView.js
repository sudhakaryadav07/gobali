import { Checkbox } from '../../../components/common/Checkbox.js';
import React from 'react'
import { Media, Table, Label as DisplayLabel } from "reactstrap";
// import { Button, DisplayLabel } from '../../../components/common/index';
// import moment from 'moment';

const CityView = ({ loading, authAccess, data, handleForm }) => {
    try {
        return (
            <>
                {data && data.length > 0 ?
                    <Table className="align-items-center table-flush" responsive>
                        <thead className="thead-light">
                            <tr>
                                <th scope="col" className="col-1"><Checkbox /> </th>
                                <th scope="col" className="col-2">Full Name</th>
                                <th scope="col" className="col-2">Email Address</th>
                                <th scope="col" className="col-2">Location</th>
                                <th scope="col" className="col-2">Joined</th>
                                <th scope="col" className="col-2" style={{ color: 'orange' }}>Permissions</th>
                                <th scope="col" className="col-1"><i class="fa fa-calendar" aria-hidden="true"></i></th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((data, i) => {
                                return (
                                    <tr key={i}>
                                        <td className="col-1"><Checkbox /></td>
                                        <td className="col-2">
                                            <Media className="align-items-center">
                                                <i class="fa fa-user-circle" style={{ fontSize: 40, marginRight: 10 }} aria-hidden="true"></i>
                                                <Media>
                                                    <span className="mb-0 text-sm">
                                                        {data.name}
                                                    </span>
                                                </Media>
                                            </Media>
                                        </td>
                                        <td className="col-2">{data.email}</td>
                                        <td className="col-2">{data.location}</td>
                                        <td className="col-2">{data.joined}</td>
                                        <td className="col-2">{data.permission}</td>
                                        <td className="col-1">
                                            ...
                                        </td>
                                    </tr>);
                            })}
                        </tbody>
                    </Table>
                    :
                    data && data.length === 0 && loading
                        ? <DisplayLabel message="Loading..." />
                        : <DisplayLabel message="Records not found !!!" />
                }
            </>
        )
    } catch (e) {
        console.log(">>>>>>", e)
    }

}

export default CityView;
