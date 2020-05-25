import React from 'react';
import './header.scss';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../Assets/original.svg'
import { auth } from '../../Firebase/firebase';
import {connect} from 'react-redux'

const Header=({user})=>(
    <div className='header'>
        <Link className="logo-container" to='/'>
            <Logo className="logo" />
        </Link>


        <div className="options">
            <Link className="option" to='/shop'>
                SHOP
            </Link>
            <Link className="option" to='/shop'>
                CONTACT
            </Link>
            {
                user?
                <div>
                <div className="option" onClick={()=>auth.signOut()}>SIGN OUT</div>

                </div>
                :
                <Link className="option" to="/signin" >SIGN IN</Link>
            }
        </div>
    </div>
)

const mapStateToProps=(state)=>({
    user:state.user.currentUser
})

export default connect(mapStateToProps)(Header);
