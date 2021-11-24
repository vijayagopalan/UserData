import React from 'react';
import { connect, useSelector } from 'react-redux';
import { adduserfunction, removeuserfunction } from '../Features/user';

function Container(props) {
    console.log(props);
    return (
        <div>
            <table>
                <tr>
                    <td>Name</td>
                    <input></input>
                </tr>
                <tr>
                    <td>Email</td>
                    <input></input>
                </tr>
                <tr>
                    <td>Address</td>
                    <input></input>
                </tr>
                <tr>
                    <td>phonenumber</td>
                    <input></input>
                </tr>
                <tr>
                    <td>
                        <button onClick={props.addUser} >Add user</button>
                    </td>
                    <td>
                        <button onClick={props.removeUser} >Add user</button>
                    </td>
                </tr>
            </table>
            <table>
            {props && props.user.map(res=>{
               return(
                    <tr>
                        <td>{res.name}</td>
                    </tr>
                
                )
            })
            }
            </table>
        </div>
    )
}

const mapStateToPropos = state => {
    return { user: [{ name: state.user[0].name, email: state.user[0].email, phonenumber: state.user[0].phonenumber, address: state.user[0].address }] }
}
const mapDispatchToPropos = dispatch => {
    return {
        addUser: () => dispatch(adduserfunction()),
        removeUser: () => dispatch(removeuserfunction())
    }
}

export default connect(mapStateToPropos, mapDispatchToPropos)(Container)
