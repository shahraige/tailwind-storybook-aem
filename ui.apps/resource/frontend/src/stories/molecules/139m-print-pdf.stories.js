import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf("Molecules | Print PDF", module)

.add("Print PDF 1", () =>{
    const root_path = '/etc.clientlibs/glpg-clinical-trials/clientlibs/assets/resources/';
    return (
        <>
            <div dangerouslySetInnerHTML={{__html:`
            <html lang="en">
                <head>
                    <meta name="viewport" content="width=device-width, initialscale=1.0"/>
                    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap" rel="stylesheet">
                    <title>Document</title>
                    <style>
                        @font-face {
                            font-family: 'Verveine Trial';
                            src: url('${root_path}fonts/Verveine/VerveineTrial-Regular.woff2') format('woff2'),
                                url('${root_path}fonts/Verveine/VerveineTrial-Regular.woff') format('woff');
                            font-weight: normal;
                            font-style: normal;
                            font-display: swap;
                        }
                
                        *{
                            margin: 0;
                            padding: 0;
                            box-sizing: border-box;
                        }        
                        .print-one .hero-box {
                            background-color: #F3F5F8 !important;
                        }
                        .print-one h1::after {
                            content: "";
                            box-sizing: border-box;
                            height: 3px;
                            width: 263.88px;
                            border-radius: 3px;
                            background-color: #ED8B00;
                            position: absolute;
                            left: 50%;
                            top: 87px;
                            transform: translate(-50%, 0);
                        }
                        .print-one .logo {
                            width: 119px;
                            height: 36px;
                            margin: auto;                
                        }
                        .print-one .search-icon {
                            width: 24px;
                            height: 23px;
                            margin-right: 7px;                
                        }
                        .print-one .icon-notes {
                            width: 38px;
                            height: 46px;
                            float: left;                        
                        }
                    </style>
                </head>
                <body>
                    <div class="print-one">
                        <div style="width: 595px;margin:auto;font-family: 'Open Sans', sans-serif;color: #2F3332;-webkit-print-color-adjust: exact; ">
                            <div class="hero-box" style="padding: 61px 59px 40px;text-align: center;">   
                                <div class="logo"><img src="images/print_pdf/Logo-positive_DT.png" style="max-width: 100%;" alt="header logo"></div>                    
                                <h1 style="font-family: 'Verveine Trial';color: #ED8B00;font-size: 40px;letter-spacing: 0;line-height: 54px;font-weight: normal;padding-top: 35px;padding-bottom: 13px;position: relative;">Trial result page for</h1>
                                <h2 style="height: 49px;color: #2F3332;font-family: 'Open Sans';font-size: 22px;letter-spacing: 0;line-height: 30px;font-weight: normal;margin: 0;">[Idiopathic Pulmonary Fibrosis (IPF)]</h2>
                                <p style="font-size: 12px;margin: 0;padding-top: 7px;">A clinical study to test how effective and safe GLPG1690 is for subjects with Idiopathic Pulmonary Fibrosis (IPF) when used together with standard of care (ISABELA1)</p>
                                <button style="cursor: pointer;margin-left: auto; margin-right: auto;margin-top: 30px; border: 0; background-color: #ffffff;min-height: 38px; padding-left: 32px; padding-right: 32px;display: flex;justify-content: center;align-items: center;"><span class="search-icon"><img src="images/print_pdf/icon-search.svg" alt="search icon"></span> Recruiting</button>
                            </div>
                            <div style="padding:51px 45px 113px;">
                                <div style="background-color: #f3f5f8;padding:20px 28px;overflow: hidden;">
                                    <div class="icon-notes"><img src="images/print_pdf/icon_notes.png" alt="notes icon"></div>
                                    <p style="font-size: 12px; line-height: 16px;margin-top: 7px;margin-left: 27px;float: left;width: calc(100% - 65px);">This trial is run by Gilead, a Galapagos partner company. Gilead are responsible for the information provided on this clinical trial. You can find more information on Gilead trials and <a style="color: #ED8B00;font-weight: bold;" href="#">clinical trials policy</a>. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed hendrerit neque. Etiam hendrerit metus leo, vitae tincidunt, ipsum sed quantum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed hendrerit neque.</p>
                                </div>
                                <h3 style="font-size: 16px;font-weight: 600;letter-spacing: 0;line-height: 22px;padding-top: 45px;">Trial purpose</h3>
                                <p style="font-size: 12px; line-height: 16px;padding-top: 14px;">The main purpose of this study is to see how GLPG1690 works together with your current standard treatment on your lung function and IPF disease in general. The study will also investigate how well GLPG1690 is tolerated (for example if you get any side effects while on study drug).</p>
                            </div>        
                        </div>
                    </div>
                
                </body>
            </html>
            `}}>

            </div>
        </>
    )
})

.add("Print PDF 2", () => (
        <>
            <div dangerouslySetInnerHTML={{__html:`
            <html lang="en">
                <head>
                    <meta name="viewport" content="width=device-width, initialscale=1.0"/>
                    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap" rel="stylesheet">
                    <title>Document</title>
                    <style>
                        *{
                            margin: 0;
                            padding: 0;
                            box-sizing: border-box;
                        } 
                        .print-two .main-wrapper {
                            width: 596px;margin:auto;font-family: 'Open Sans', sans-serif;color: #2F3332;font-size: 12px; line-height: 16px;padding: 54px 46px;-webkit-print-color-adjust: exact;
                        }
                        .print-two .hero-box {
                            background-color: #F3F5F8 !important;
                        }
                        .print-two .hands-icon {
                            width: 28px;
                            height: 27px;
                            float: left;            
                        }         
                        .print-two .card-wrapper {
                            padding: 0 67px 21px;display: flex;flex-wrap: wrap;justify-content: space-between;
                        }
                        .print-two .card {
                            padding-bottom: 20px;
                        }
                        .print-two .card-icon {
                            margin-right: 12px;
                        }
                        .print-two .card-top {
                            width: 174px;height: 80px;background-color: #f3f5f8;display: flex;align-items: center;padding-left: 25px;
                        }
                        .print-two .card-bottom {
                            font-size: 15.19px;line-height: 20px;width: 174px;height: 55px;background-color: #004c45;display: flex;align-items: center;justify-content: center;color: #ffffff
                        }
                        .print-two .card-top-title {
                            font-size: 15.19px;line-height: 20px;font-weight: bold;
                        }
                        .print-two .icon-gender {
                            width: 45px;
                            height: 40px;            
                        }
                        .print-two .age-icon {
                            width: 39px;
                            height: 39px;    
                            margin-left: 1px;        
                        }
                        .print-two .phace-icon {
                            width: 36px;
                            height: 41px;            
                        }
                        .print-two .study-icon {
                            width: 39px;
                            height: 39px;            
                        }        
                    </style>
                </head>
                <body>
                    <div class="print-two">
                        <div class="main-wrapper">
                            <div class="card-wrapper">
                                <div class="card">
                                    <div class="card-top">
                                        <span class="icon-gender card-icon"><img src="images/print_pdf/icon_gender.svg" alt="gender icon"/></span>
                                        <span class="card-top-title">Gender</span>
                                    </div>
                                    <div class="card-bottom">Male and female</div>
                                </div>
                                <div class="card">
                                    <div class="card-top">
                                        <span class="age-icon card-icon"><img src="images/print_pdf/icon_age.svg" alt="age icon"/></span>
                                        <span class="card-top-title">Age range</span>
                                    </div>
                                    <div class="card-bottom">40 years and older</div>
                                </div>
                                <div class="card">
                                    <div class="card-top">
                                        <span class="phace-icon card-icon"><img src="images/print_pdf/icon_phase.svg" alt="phase icon"/></span>
                                        <span class="card-top-title">Phase</span>
                                    </div>
                                    <div class="card-bottom">Phase 3</div>
                                </div>
                                <div class="card">
                                    <div class="card-top">
                                        <span class="study-icon card-icon"><img src="images/print_pdf/icon_study-dates.svg" alt="study icon"/></span>
                                        <span class="card-top-title">Study dates</span>
                                    </div>
                                    <div class="card-bottom">November18-Dec2020</div>
                                </div>
                            </div>
                            <p style="font-size: 16px;line-height: 22px;font-weight: bold;">Eligibility criteria</p>
                            <div style="background-color: #f3f5f8;padding:20px 28px;margin-top: 19px;">
                                <div style="display: flex;justify-content: flex-start;">       
                                    <span class="hands-icon"><img src="images/print_pdf/icon_inclusion.svg" alt=""/></span>                
                                    <p style="font-size: 14px;font-weight: bold;letter-spacing: 0;line-height: 19px;padding-top: 5px;padding-left: 18px;">Exclusion criteria</p><br>
                                </div>
                                <p style="padding-top: 20px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in laoreet quam. Donec egestas augue augue, ac iaculis urna tristique at. Fusce egestas metus ut felis porta, sit amet suscipit purus molestie. Nulla ut neque a libero venenatis hendrerit id mattis turpis. Nunc at malesuada mauris, sit amet finibus libero. Mauris pulvinar, tortor placerat lacinia sagittis, quam sem gravida neque, vel venenatis arcu nisi sed dolor. Donec euismod porttitor tempor. Suspendisse dolor urna, gravida non aliquam eget, tristique eu dui. Proin tempus finibus pharetra. Fusce placerat justo a metus fermentum iaculis. Aenean ornare, felis at ullamcorper maximus, urna nisl interdum mi, non scelerisque odio tortor a ante. Nam lobortis volutpat urna ut vestibulum. Vestibulum rutrum nibh a placerat tincidunt. Etiam gravida lectus nisl, id pellentesque nibh tincidunt eu. Quisque dapibus porta maximus. Mauris sit amet tortor id orci porttitor interdum sit amet et dolor.
                    
                                <br><br>Vivamus fermentum semper diam, in finibus dui ultricies vitae. Mauris vehicula vel ante eu commodo. Morbi ut tellus ut ligula aliquet tincidunt. Aenean fermentum ipsum ac ex mattis dictum. In sed arcu condimentum leo mollis.</p>
                            </div>            
                        </div>
                    </div>
                </body>
            </html>                
            `}}></div>
        </>
    )
)

.add("Print PDF 3", () => {
    return (
    <>
        <div dangerouslySetInnerHTML={{__html:`
        <html lang="en">
            <head>
                <meta name="viewport" content="width=device-width, initialscale=1.0"/>
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap" rel="stylesheet">
                <title>Document</title>
                <style>
                    *{
                        margin: 0;
                        padding: 0;
                        box-sizing: border-box;
                    }        
                    .print-three img {
                        max-width: 100%;
                    }
                    .print-three .hands-icon {
                        width: 24px;
                        height: 33px;
                        float: left;
                        margin-left: 12px;            
                    }         
                </style>
            </head>
            <body>
                <div class="print-three">
                    <div style="width: 596px;margin:auto;font-family: 'Open Sans', sans-serif;color: #2F3332;font-size: 12px; line-height: 16px;padding: 54px 46px;-webkit-print-color-adjust: exact;">
                        <div class="hero-box" style="background-color: #f3f5f8;padding: 21px;">
                            fermentum semper diam, in finibus dui ultricies vitae. Mauris vehicula vel ante eu commodo. Morbi ut tellus ut ligula aliquet tincidunt. Aenean fermentum ipsum ac ex mattis dictum. In sed arcu condimentum leo mollis consequat sit amet nec erat. Quisque sit amet lobortis lectus. Aliquam aliquam justo in neque vestibulum, eget vulputate nulla sagittis. Phasellus ut orci ullamcorper, lobortis dolor nec, consectetur elit.<br><br>
                
                            Vestibulum in mauris neque. Suspendisse sollicitudin sodales justo, ac dictum elit mattis in. Aliquam porta risus non elit mattis, eu suscipit tellus consectetur. Suspendisse pulvinar massa nec mollis fermentum. Vivamus tincidunt blandit libero, in iaculis augue tempus in. Suspendisse consequat mauris id arcu fermentum, quis vulputate nunc convallis. Donec tincidunt vestibulum justo ut lacinia. Curabitur facilisis ipsum elit, ornare placerat justo ornare vitae. 
                
                        </div>
                        
                        <div style="background-color: #f3f5f8;padding:20px 26px 20px 21px;margin-top: 37px;">
                            <div style="display: flex;justify-content: flex-start;">
                                <span class="hands-icon"><img src="images/icon_exclusion1.svg" alt=""/></span> 
                                <p style="font-size: 14px;font-weight: bold;letter-spacing: 0;line-height: 19px;padding-top: 8px;padding-left: 18px;">Exclusion criteria</p><br>
                            </div>
                            <p style="padding-top: 20px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in laoreet quam. Donec egestas augue augue, ac iaculis urna tristique at. Fusce egestas metus ut felis porta, sit amet suscipit purus molestie. Nulla ut neque a libero venenatis hendrerit id mattis turpis. Nunc at malesuada mauris, sit amet finibus libero. Mauris pulvinar, tortor placerat lacinia sagittis, quam sem gravida neque, vel venenatis arcu nisi sed dolor. Donec euismod porttitor tempor. Suspendisse dolor urna, gravida non aliquam eget, tristique eu dui. Proin tempus finibus pharetra. Fusce placerat justo a metus fermentum iaculis. Aenean ornare, felis at ullamcorper maximus, urna nisl interdum mi, non scelerisque odio tortor a ante. Nam lobortis volutpat urna ut vestibulum. Vestibulum rutrum nibh a placerat tincidunt. Etiam gravida lectus nisl, id pellentesque nibh tincidunt eu. Quisque dapibus porta maximus. Mauris sit amet tortor id orci porttitor interdum sit amet et dolor.<br><br>Vivamus fermentum semper diam, in finibus dui ultricies vitae. Mauris vehicula vel ante eu commodo. Morbi ut tellus ut ligula aliquet tincidunt. Aenean fermentum ipsum ac ex mattis dictum. In sed arcu condimentum leo mollis consequat sit amet nec erat. Quisque sit amet lobortis lectus. Aliquam aliquam justo in neque vestibulum, eget vulputate nulla sagittis. Phasellus ut orci ullamcorper, lobortis dolor nec, consectetur elit.
                                <br><br>Vestibulum in mauris neque. Suspendisse sollicitudin sodales justo, ac dictum elit mattis in. Aliquam porta risus non elit mattis, eu suscipit tellus consectetur</p>
                        </div>            
                    </div>
                </div>
            </body>
        </html>            
        `}}></div>
    </>
    )
})

.add("Print PDF 4", () => {
    return (
    <>
        <div dangerouslySetInnerHTML={{__html:`
        <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta name="viewport" content="width=device-width, initialscale=1.0"/>
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap" rel="stylesheet">
                <title>Document</title>
                <style>
                    *{
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                    } 
                    .print-four .main-wrapper {width: 596px;margin:auto;font-family: 'Open Sans', sans-serif;color: #2F3332;font-size: 12px; line-height: 16px;padding: 48px 46px;-webkit-print-color-adjust: exact;}
                    .print-four table {width: 515px;border: 0;border-collapse: collapse;font-size: 10.6px;letter-spacing: 0;line-height: 14px;}
                    .print-four tr:nth-child(even) {background-color: #f3f5f8;}
                    .print-four th {background-color: #333F48;font-size: 10.6px;font-weight: bold;letter-spacing: 0;line-height: 14px;color: #ffffff;height: 33px;padding-left: 22px;text-align: left;}
                    .print-four td {font-weight: 600;padding-top: 6px;padding-bottom: 6px;padding-left: 22px;height: 41px;color: #2F3332;}
                    .print-four td:nth-child(2) {font-size: 10.5px;font-weight: normal;}
                    .print-four .search-icon {           
                        margin-right: 7px; float:left;
                    }
                    .print-four .search-icon img {           
                        width: 16px;
                    }
                    .print-four .icon-number-content {padding-right: 51px;float: left;padding-bottom: 30px;}        
                    .print-four .footer-inner {width: 596px;background-color: #f3f5f8;display: flex;justify-content: space-between;align-items: center;height: 72px;clear: both;padding: 0 46px;}
                    .print-four .footer-inner .footer-logo {
                        width: 121px;
                        height: 22px;            
                    }
                    .print-four a {color: #004C45;font-weight: bold;}
                </style>
                
            </head>
            <body>
                <div class="print-four">
                    <div class="main-wrapper">                       
                        <p style="font-size: 16px;font-weight: 700;letter-spacing: 0;line-height: 22px;">Where to participate</p><br>        
                        <table>
                            <tr style="text-transform: uppercase;">
                                <th style="width: 88px;">Country</th>
                                <th style="width: 233px;">Location</th>
                                <th style="width: 130px;">Trial Status</th>
                            </tr>
                            <tr>
                                <td>United States</td>
                                <td>Rhode Island Hospital,<br>Providence, Rhode Island, United States, 02903
                                </td>
                                <td><a href="#"><span class="search-icon"><img src="images/print_pdf/icon-search.svg" alt="search icon"/></span></a> Not yet recruiting</td>
                            </tr>
                            <tr>
                                <td>Belgium</td>
                                <td>CHU UCL Namur asbl - Site Godinne,<br>Yvoir, Belgium, 5530</td>
                                <td><a href="#"><span class="search-icon"><img src="images/print_pdf/icon-search.svg" alt="search icon"/></span></a> Recruiting</td>
                            </tr>
                            <tr>
                                <td>Brazil</td>
                                <td>Irmandade Da Santa Casa de Misericordia de Porto Alegre, Porto Alegre, Brazil, 90035-074</td>
                                <td><a href="#"><span class="search-icon"><img src="images/print_pdf/icon-search.svg" alt="search icon"/></span></a> Recruiting</td>
                            </tr>
                            <tr>
                                <td>United Kingdom</td>
                                <td>Birmingham Heartlands Hospital,
                                    Birmingham, United Kingdom, B9 5SS</td>
                                <td><a href="#"><span class="search-icon"><img src="images/print_pdf/icon-search.svg" alt="search icon"/></span></a> Recruiting</td>
                            </tr>
                            <tr>
                                <td>Australia</td>
                                <td>Royal Adelaide Hospital,
                                    Adelaide, Australia, 5000</td>
                                <td><a href="#"><span class="search-icon"><img src="images/print_pdf/icon-search.svg" alt="search icon"/></span></a> Recruiting</td>
                            </tr>
                            <tr>
                                <td>Belgium</td>
                                <td>CHU UCL Namur asbl - Site Godinne,
                                    Yvoir, Belgium, 5530</td>
                                <td><a href="#"><span class="search-icon"><img src="images/print_pdf/icon-search.svg" alt="search icon"/></span></a> Recruiting</td>
                            </tr>
                            <tr>
                                <td>Brazil</td>
                                <td>Irmandade Da Santa Casa de Misericordia de Porto Alegre,
                                    Porto Alegre, Brazil, 90035-074</td>
                                <td><a href="#"><span class="search-icon"><img src="images/print_pdf/icon-search.svg" alt="search icon"/></span></a> Recruiting</td>
                            </tr>
                        </table>                   
                        <p style="padding-top: 50px;"><b>Official title:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed hendrerit neque. Etiam hendrerit metus leo, vitae tincidunt lectus sollicitudin ut. Aliquam cursus, ex et imperdiet dignissim, enim ipsum blandit nulla, non sodales nunc leo non lacus. Nunc nec eros fringilla, venenatis mauris ut, tincidunt nunc.</p>
                        <div style="padding-top: 45px;">            
                            <div class="icon-number-content">
                                <p class="icon-number-title"><b>Protocol Number:</b></p>
                                <p class="icon-number-number">GLPG1690-CL-303</p>
                            </div>
                            <div class="icon-number-content">
                                <p class="icon-number-title"><b>Clinicaltrials.gov identifier:</b></p>
                                <p class="icon-number-number"><a href="#">NCT03711162</a></p>
                            </div>
                            <!-- <div style="clear: both;"></div> -->
                            <div class="icon-number-content">
                                <p class="icon-number-title"><b>EudraCT Number:</b></p>
                                <p class="icon-number-number">
                                    <a href="#">2018-001405-87</a>
                                </p>
                            </div>
                            <div class="icon-number-content">
                                <p class="icon-number-title"><b>Product/drug type:</b></p>
                                <p class="icon-number-number">GLPG1690</p>
                            </div>
                        </div>
                    </div>
                    <div class="main-wrapper footer-inner">
                        <p>© Copyright 2021 Galapagos </p>
                        <div class="footer-logo"><img src="images/print_pdf/galapagos.png" alt="footer logo"></div>
                    </div>
                </div>
            
            </body>
        </html>           
        `}}></div>
    </>
    )
})