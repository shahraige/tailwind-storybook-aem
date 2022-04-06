import React from 'react';
import HtmlComment from '../../particles/html-comment/HtmlComment';

const MainNavigation =(props)=>{

    const {top_nav_items } = props ;
    const navigation_items = [
        {
            title: "Industries",
            link_url : "#industries",
            children : [
                {
                    title: "Aerospace and defense",
                    link_url : "#",
                },
                {
                    title: "Automotive & Ground Transportation",
                    link_url : "#",
                },
                {
                    title: "Energy",
                    link_url : "#",
                }
            ]
        },
        {
            title: "Solutions",
            link_url : "#Solutions",
            children : [
                {
                    title: "Aerospace and defense",
                    link_url : "#",
                },
                {
                    title: "Automotive & Ground Transportation",
                    link_url : "#",
                },
                {
                    title: "Energy",
                    link_url : "#",
                }
            ]
        },
        {
            title: "Services",
            link_url : "#Services",
            children : [
                {
                    title: "Aerospace and defense",
                    link_url : "#",
                },
                {
                    title: "Automotive & Ground Transportation",
                    link_url : "#",
                },
                {
                    title: "Energy",
                    link_url : "#",
                }
            ]
        },
        {
            title: "About",
            link_url : "#About",
            children : [
                {
                    title: "Aerospace and defense",
                    link_url : "#",
                },
                {
                    title: "Automotive & Ground Transportation",
                    link_url : "#",
                },
                {
                    title: "Energy",
                    link_url : "#",
                }
            ]
        },
        {
            title: "Contact",
            link_url : "#Contact",
            children : []
        },
    ];

    return(
        <div className='main-navigation section'>
            <HtmlComment text="* main-navigation cmp markup starts here *" />
            <div className='main-navigation__inner'>
                <ul className='flex flex-col lg:flex-row navbar-nav'>
                    {navigation_items && navigation_items.length>0 && navigation_items.map((value, key)=>{
                        return(
                            <li key={key} className="nav-item py-3 px-7 lg:py-6 lg:px-0 relative lg:mr-11 lg:last:mr-0 dropdown dropdown-hover position-static">
                                <a 
                                className="nav-link active text-ternary text-base font-medium dropdown-toggle" 
                                data-mdb-toggle="dropdown" 
                                role="button"
                                id="navbarDropdown"
                                aria-expanded="false"
                                aria-current="page" 
                                href={value.link_url}
                                >{value.title}</a>
                          
                                <ul 
                                className='dropdown-menu -left-1/2 hidden bg-white shadow-md shadow-full w-205 top-full'
                                aria-labelledby="navbarDropdown">
                                    {value.children && value.children.length>0 && value.children.map((child,index)=>{
                                        return(
                                            <li key={index} className='py-3 px-5 cursor-pointer text-gray-200 text-base hover:text-primary hover:underline hover:bg-gray-100'>
                                                <a href={child.link_url}>{child.title}</a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </li>
                        );
                    })}
                </ul>
                <ul className='md:hidden'>
                    {top_nav_items && top_nav_items.length>0 && top_nav_items.map((value)=>{
                        return(
                            <li className=' py-3 px-7 bg-gray-50'>
                                <a className='text-base text-gray-200 hover:underline' href={value.link_url}>{value.title}</a>
                            </li>
                        );
                    })}
                </ul>
      
            </div>
            <HtmlComment text="* main-navigation cmp markup ends here *" />
        </div>
    );
}

export default MainNavigation;