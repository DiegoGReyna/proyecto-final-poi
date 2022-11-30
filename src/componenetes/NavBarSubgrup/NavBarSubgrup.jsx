import React from 'react'
import './NavBarSubgrup.css'
import { NavLink } from 'react-router-dom'
import { useRef } from 'react'
const NavBarSubgrup = (props) => {
    const navRef =useRef();
    const showNavBar =()=>{
        navRef.current.classList.toggle("NavbarResposive");
        
    }
    return (
    //      <div className='BoxNavBarTeam'>

    //          <NavLink className='TeamNavLinkNombreEquipo' state={{ groupId: props.groupId }} to='Posts'>
    //            <div className='ImgTeam'></div> <p>{props.nombreSubGrupo}</p></NavLink>
    //       <NavLink className='TeamNavLink' to='Assignments/DashBoard' state={{ groupId: props.groupId }} >Tareas</NavLink>
    //        <NavLink className='TeamNavLink' to='SubGrupoChat' state={{ groupId: props.groupId }}>Chat</NavLink>
    //     <NavLink className='TeamNavLink' to='GroupMembers' state={{ groupId: props.groupId }}>Integrantes</NavLink>


    //    </div>
        <header className='BoxNavBarTeam'>
             <NavLink className='TeamNavLinkNombreEquipo' state={{ groupId: props.groupId }} to='Posts'>
                <div className='ImgTeam'><img src={props.groupPhoto} alt="UserImage" width="60" height="60px"/></div> <p>{props.nombreSubGrupo}</p></NavLink>
        <nav ref={navRef}>
                   

                {/* <NavLink className='TeamNavLink' to='Assignments/DashBoard' state={{ groupId: props.groupId }} >Tareas</NavLink> */}
                <NavLink className='TeamNavLink' to='SubGrupoChat' state={{ groupId: props.groupId }}>Chat</NavLink>
                <NavLink className='TeamNavLink' to='GroupMembers' state={{ groupId: props.groupId }}>Integrantes</NavLink>
                <div className='nav-btn' >
                    <button   onClick={showNavBar}>
                        <span className="material-symbols-outlined">
                        close
                        </span>
                    </button>
                </div>
         </nav>
         <button className='nav-Open' onClick={showNavBar}  >
                <span className="material-symbols-outlined">
                    menu
                    </span>
         </button>
        </header>
    )
}

export default NavBarSubgrup