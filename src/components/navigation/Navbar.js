import { connect } from 'react-redux';
import { NavLink , Link } from 'react-router-dom';
import { DotLoader } from 'react-spinners';
import logo from 'assets/img/logo.png'
import { useState } from 'react';



function Navbar() {

    const [loading] =useState(true);

    return (
        <nav className='w-full top-0 fixed'>
            <div className="bg-black px-4 py-5 sm:px-6">
                <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px-2">
                    <div className="mt-2">
                        <Link to={"/"}>
                        <img 
                        src={logo}
                        width={50}
                        height={70} 
                        className='inline-flex'
                        alt='LogoNav'
                        />
                        
                        <h3 className='ml-4 inline-flex font-black text-xl'>
                            <span className='text-blue-600' >Adapt</span> 
                            <span className='text-white'>Leap</span>
                        </h3>
                        </Link>
                    </div>
                    <div className="ml-4 mt-2 flex-shrink-0">
                        <NavLink to="/casos" className="text-lg inline-flex font-medium leading-6 text-white hover:text-blue-500 hover:underline-offset-2  duration-300    mx-4">Casos</NavLink>
                        <NavLink to="/servicios" className="text-lg inline-flex font-medium leading-6 text-white hover:text-blue-500 hover:underline-offset-2 duration-300    mx-4">Servicios</NavLink>
                        <NavLink to="/nosotros" className="text-lg inline-flex font-medium leading-6 text-white hover:text-blue-500 hover:underline-offset-2  duration-300  mx-4">Nosotros</NavLink>
                        <NavLink to="/carreras" className="text-lg inline-flex font-medium leading-6 text-white hover:text-blue-500 hover:underline-offset-2 duration-300   mx-4">Carreras</NavLink>
                        <NavLink to="/blog" className="text-lg inline-flex font-medium leading-6 text-white hover:text-blue-500 hover:underline-offset-2  duration-300   mx-4">Blog</NavLink>
                        <NavLink to="/contacto" className="text-lg inline-flex font-medium leading-6 text-white hover:text-blue-500 hover:underline-offset-2 duration-300    mx-4">Contacto</NavLink>
                        <button
                            type="button"
                            className="ml-12 relative inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-md font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 hover:bg-blue-dark duration-300"
                        >
                            Create new job
                            <DotLoader className='ml-3' loading={loading} size={25} color="#ffffff" />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {

}


export default connect(mapStateToProps, {

})(Navbar);

