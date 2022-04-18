import React from 'react';
import ButtonLink from '../button-link/ButtonLink';
import Button from '../button-link/button';
import ImageExtension from '../image-extension/ImageExtension';
import ColumnControl from '../column-control/column-control';
import HeadlineText from '../headline-text/HeadlineText';

const CookiePopup = ()=>{
    return(
        <div className='cookie-popup'>
            <button type="button" className="inline-block px-6 py-2.5 bg-blue-600font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-toggle="modal" data-bs-target="#exampleModalCenteredScrollable">
            Vertically centered scrollable modal
            </button>
  
            <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalCenteredScrollable" tabindex="-1" aria-labelledby="exampleModalCenteredScrollable" aria-modal="true" role="dialog">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable relative w-auto pointer-events-none">
                    <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                       
                        <div className="modal-body ">
                            <div className="modal__header  bg-gray-60 p-10">
                                <div className='flex flex-shrink-0 items-center justify-between'>
                                    <ImageExtension image_src="https://media.hbkworld.com/transform/b98b1541-d4bb-4652-acea-808e81320eb6/HBK-secondary-logo-RGB" />
                                    <div>
                                        <span>powered by:</span>
                                        <ButtonLink 
                                        btn_text="Cookie Information"
                                        buttonlink_href="https://cookieinformation.com/"
                                        buttonlink_target="_blank"/>
                                    </div>
                                </div>
                                <HeadlineText>
                                    <h2 className='text-primary text-xl mb-5 mt-10 font-montserrat'>The website uses cookies</h2>
                                    <p className='font-montserrat'>Some are used for statistical purposes and others are set up by third party services. By clicking ‘Accept all’, you accept the use of cookies. <a className='font-bold underline text-primary hover:text-primary' href="">Read more</a></p>
                                </HeadlineText>
                                                    
                            </div>

                            <div className='modal__content py-10 px-8 text-center'>
                                <ColumnControl
                                gapX="gap-x-5"
                                >
                                    <div className='col-span-6'>
                                        <Button button_width="w-full" btn_text="save settings" button_type="cookie-btn__light"/>
                                    </div>
                                    <div className='col-span-6'>
                                        <Button button_width="w-full" btn_text="accept all" button_type="cookie-btn__dark"/>
                                    </div>
                                </ColumnControl>
                                <ButtonLink btn_text="Show details"/>
                            </div>

                            <div className="modal-footer bg-gray-60 px-10">
                                <div className=" py-5">
                                    <div className="form-check form-switch">
                                        <label className="form-check-label block text-gray-800" for="flexSwitchCheckChecked">Checked switch checkbox input</label>
                                        
                                        <br/>
                                        <input className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-white bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
                                    </div>
                                </div>
                                <div className="">
                                    <div className="form-check form-switch">
                                        <label className="form-check-label block text-gray-800" for="flexSwitchCheckDefault">Default switch checkbox input</label>
                                        
                                        <input 
                                        className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-white bg-no-repeat bg-contain bg-gray-200 focus:outline-none cursor-pointer shadow-sm inline-block" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                                    </div>
                                </div>
                            </div>
                            
                        </div>

                       
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CookiePopup;