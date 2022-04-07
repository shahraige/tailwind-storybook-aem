import React, { useState } from 'react';
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
            children : []
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

    const [showMenu , setshowMenu] = useState(false);
    const [active , setActive] = useState(undefined);

    const expandMenu = (index)=>{
       setshowMenu(!showMenu);
       setActive(index);
    }
    const goBack = ()=>{
       setshowMenu(!showMenu);
       setActive(false);
    }

    return(
        <div className='main-navigation section'>
            <HtmlComment text="* main-navigation cmp markup starts here *" />
            <div className='main-navigation__inner'>
                <ul className={`flex flex-col lg:flex-row navbar-nav ${showMenu ? 'slide-menu':''}`}>
                    {navigation_items && navigation_items.length>0 && navigation_items.map((value, key)=>{
                        return(
                            <li 
                            key={key} 
                            onClick={()=>expandMenu(key)}
                            className={`${active == key ? 'active': ''} nav-item flex items-center justify-between py-3 pl-7 pr-8 lg:py-6 lg:px-0 lg:relative lg:mr-11 lg:last:mr-0 dropdown dropdown-hover position-static`}>
                                <a 
                                className="nav-link active text-ternary text-base font-medium dropdown-toggle" 
                                data-mdb-toggle="dropdown" 
                                role="button"
                                id="navbarDropdown"
                                aria-expanded="false"
                                aria-current="page" 
                                href={value.link_url}
                                >{value.title}</a>

                                {(value.children && value.children.length > 0 ? 
                                    <span 
                                    className='lg:hidden ml-auto'>
                                       <svg xmlns="http://www.w3.org/2000/svg" fill='#3f3f3f' viewBox="0 0 320 512" className='w-2'>
                                           <path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"/>
                                       </svg>
                                   </span>
                                : '')}
                          
                                <ul 
                                className='hidden dropdown-menu lg:-left-1/2  bg-white lg:shadow-md lg:w-205 lg:top-full'
                                aria-labelledby="navbarDropdown">
                                     {(showMenu ? 
                                            <span 
                                            className='lg:hidden ml-auto absolute left-8'
                                            onClick={goBack}>
                                                <svg className="w-2 transform rotate-180" xmlns="http://www.w3.org/2000/svg" fill='#3f3f3f' viewBox="0 0 320 512">
                                                    <path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"/>
                                                </svg>
                                            </span>
                                    : '')}
                                    {value.children && value.children.length>0 && value.children.map((child,index)=>{
                                        return(
                                            <li key={index} className='py-3 pr-5 pl-12 lg:px-5 cursor-pointer text-gray-200 text-base hover:text-primary hover:underline hover:bg-gray-100'>
                                                <a href={child.link_url}>{child.title}</a>
                                            </li>
                                        );
                                    })}

                                <ul className={`md:hidden`}>
                                {top_nav_items && top_nav_items.length>0 && top_nav_items.map((value)=>{
                                    return(
                                        <li className='py-3 px-7 bg-gray-50'>
                                            <a className='text-base text-gray-200 hover:underline' href={value.link_url}>{value.title}</a>
                                        </li>
                                    );
                                })}
                </ul>
                                </ul>
                            </li>
                        );
                    })}
                </ul>
                <ul className={`md:hidden mob-topnav-menu ${showMenu ? 'slide-menu':''}`}>
                    {top_nav_items && top_nav_items.length>0 && top_nav_items.map((value)=>{
                        return(
                            <li className='py-3 px-7 bg-gray-50'>
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