import React , {useState} from 'react'
import HtmlComment from '../../particles/html-comment/HtmlComment'
import MainNavigation from '../main-navigation/main-navigation';
import ImageExtension from '../image-extension/ImageExtension';

const Header = (props) => {

    const top_nav_items = [
        {
            title: "Careers",
            link_url: "#careers"
        },
        {
            title: "Academy",
            link_url: "#academy"
        },
        {
            title: "Blog",
            link_url: "#blog"
        },
    ];

    const [ toggle , setToggle] = useState(false);

    return (
        <div className="header section">
            <HtmlComment text="* Header cmp markup starts here *" />
            <div className='header__inner'>
                <div className='header__top bg-gray-50 py-2 hidden md:block'>
                    <div className='container'>
                        <ul className='flex justify-end p-0'>
                            {top_nav_items && top_nav_items.length>0 && top_nav_items.map((value)=>{
                                return(
                                <li className='mr-5 last:mr-0'>
                                    <a className='text-base text-gray-200 hover:underline' href={value.link_url}>{value.title}</a>
                                </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
                <nav className={`w-full lg:flex items-center justify-between navbar navbar-expand-lg bg-white ${toggle ? '':'shadow-md' } `}>
                    <div className='lg:container w-full flex items-center justify-between relative'>
                        <div className={`w-full flex flex-wrap items-center justify-between px-5 lg:px-0 py-7 lg:py-0 ${toggle ? 'border-b border-gray-55':'' }`}>
                                <ImageExtension 
                                image_position="items-center"
                                image_src="https://media.hbkworld.com/transform/b98b1541-d4bb-4652-acea-808e81320eb6/HBK-secondary-logo-RGB?io=transform:crop,width:877,height:120"/>
                            <div 
                            className={`${toggle ? 'animate-icon':'' } relative navbar-toggler w-6 h-5 `}
                            data-bs-toggle="collapse" 
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" 
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                            onClick={()=> setToggle(!toggle)}>
                                <span className='w-6 h-0.5 bg-ternary block absolute top-0.5 transition ease-in-out duration-500'></span>
                                <span className='w-6 h-0.5 bg-ternary block absolute top-1/2 -translate-y-1/2 transition ease-in-out duration-500'></span>
                                <span className='w-6 h-0.5 bg-ternary block absolute bottom-0 transition ease-in-out duration-500'></span>
                            </div>
                        
                        </div>
                        <div 
                        className={`collapse navbar-collapse transition-none delay-0 duration-0 ${toggle ? 'fixed w-full overflow-y-auto':'' }`} 
                        id="navbarSupportedContent">
                            <MainNavigation top_nav_items={top_nav_items}/>
                        </div>
                    </div>
                </nav>
            </div>

            <HtmlComment text="* Header cmp markup ends here *" />
        </div>
    )
}


export default Header;