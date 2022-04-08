import React from 'react';
import ButtonLink from '../button-link/ButtonLink';

const Footer = () => {
    const footer_items = [ 
        {
            title : 'About',
            link_url: '#',
            menu_list : [
                {
                    title: 'History',
                    link_url : '#'
                },
                {
                    title: 'Management',
                    link_url : '#'
                },
                {
                    title: 'Careers',
                    link_url : '#'
                },
                {
                    title: 'Organisations and Memberships',
                    link_url : '#'
                },
                {
                    title: 'Business Ethics',
                    link_url : '#'
                },
                {
                    title: 'Export Control',
                    link_url : '#'
                },
                {
                    title: 'Quality Management',
                    link_url : '#'
                },
                {
                    title: 'Terms and conditions',
                    link_url : '#'
                },
            ]
        },
        {
            title : 'Solutions',
            link_url: '#',
            menu_list : [
                {
                    title: 'Acoustics',
                    link_url : '#'
                },
                {
                    title: 'Durability',
                    link_url : '#'
                },
                {
                    title: 'Electric Power',
                    link_url : '#'
                },
                {
                    title: 'NVH',
                    link_url : '#'
                },
                {
                    title: 'Reliability',
                    link_url : '#'
                },
                {
                    title: 'Vibration',
                    link_url : '#'
                },
                {
                    title: 'Virtual Testing',
                    link_url : '#'
                },
                {
                    title: 'Weighing',
                    link_url : '#'
                },
            ]
        },
        {
            title : 'Industries',
            link_url: '#',
            menu_list : [
                {
                    title: 'Automative and Ground Transportation',
                    link_url : '#'
                },
                {
                    title: 'Aerospace & Defence',
                    link_url : '#'
                },
                {
                    title: 'Energy',
                    link_url : '#'
                },
            ]
        },
    ]
    return(
        <footer className='footer section'>
            <div className='footer__inner bg-primary lg:pt-28 lg:pb-8 text-white'>
                <div className='container'>
                    <div className='footer__top pb-12 grid grid-cols-3 gap-x-6'>
                        {footer_items && footer_items.length>0 && footer_items.map( (value,key) => {
                           return(
                            <ul>
                                <a
                                 className='pb-4 border-b-3 font-bold text-base border-secondary w-full block'
                                 href={value.link_url}>{value.title}</a>
                                {value.menu_list && value.menu_list.length>0 && value.menu_list.map((item) => {
                                    return(
                                        <li className='my-4'>
                                            <a className='hover:underline' href={item.link_url}>{item.title}</a>
                                        </li>
                                    );
                                })}
                            </ul>
                           );
                        })}
                    </div>
                    <div className='footer__bottom'>
                        <ButtonLink
                        customClass="text-white mb-5"
                        btn_text="Modern Slavery Statement"
                        buttonlink_href="#"
                        />
                        <div className='flex mb-11'>
                            <ButtonLink
                            customClass="text-white"
                            btn_text="Imprint"
                            buttonlink_href="#"
                            />
                            <ButtonLink
                            customClass="text-white"
                            btn_text="Cookie Policy"
                            buttonlink_href="#"
                            />
                            <ButtonLink
                            customClass="text-white"
                            btn_text="Privacy Policy"
                            buttonlink_href="#"
                            />
                        </div>
                        <div class="copyright">
                            <small>© 2022 Hottinger Brüel &amp; Kjær</small>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;