import React from 'react';
import HtmlComment from '../../particles/html-comment/HtmlComment';
import ImageExtension from '../image-extension/ImageExtension';

const CmpTable = props => {
    return (
        <div className='cmp-table section'>
            <div className='cmp-table__inner'>
                <HtmlComment text="* Start CmpTable component here" /> 

                <div className="cmp-table-row cmp-table-row--header">
                    <div className='cmp-table-column'>
                        <strong>Country</strong>
                    </div>
                    <div className='cmp-table-column'>
                        <strong>Location</strong>
                    </div>
                    <div className='cmp-table-column'>
                        <strong>Trial status </strong>
                    </div>
                </div>


                <div className="cmp-table-body-wrap">
                    <div className="cmp-table-row" data-result-type="recruite">
                        <div className='cmp-table-column'>
                            <div className="cmp-table-column--title">Country</div>
                            <div className="cmp-table-column--content">United States</div>
                        </div>

                        <div className='cmp-table-column'>
                            <div className="cmp-table-column--title">Location</div>
                            <div className="cmp-table-column--content"> Rhode Island Hospital,<br /> Providence, Rhode Island, United States, 02903</div>
                        </div>

                        <div className='cmp-table-column'>
                            <div className="cmp-table-column--title">Trial status</div>
                            <div className="cmp-table-column--content">
                                <span className="column-icon">Recruiting</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="cmp-table-row" data-result-type="enroll">
                        <div className='cmp-table-column'>
                            <div className="cmp-table-column--title">Country</div>
                            <div className="cmp-table-column--content">Belgium</div>
                        </div>

                        <div className='cmp-table-column'>
                            <div className="cmp-table-column--title">Location</div>
                            <div className="cmp-table-column--content">CHU UCL Namur asbl - Site Godinne, <br />Yvoir, Belgium, 5530</div>
                        </div>

                        <div className='cmp-table-column'>
                            <div className="cmp-table-column--title">Trial status</div>
                            <div className="cmp-table-column--content">
                            <span className="column-icon">Enrolling by invitation</span>    
                            </div>
                        </div>
                    </div>
                    
                    <div className="cmp-table-row" data-result-type="not-recruite">
                        <div className='cmp-table-column'>
                            <div className="cmp-table-column--title">Country</div>
                            <div className="cmp-table-column--content">Brazil</div>
                        </div>

                        <div className='cmp-table-column'>
                            <div className="cmp-table-column--title">Location</div>
                            <div className="cmp-table-column--content">
                                Irmandade Da Santa Casa de Misericordia de Porto Alegre, <br />
                                Porto Alegre, Brazil, 90035-074
                            </div>
                        </div>

                        <div className='cmp-table-column'>
                            <div className="cmp-table-column--title">Trial status</div>
                            <div className="cmp-table-column--content">
                                <span className="column-icon">Enrolling by invitation</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="cmp-table-row" data-result-type="active-not-recruite">
                        <div className='cmp-table-column'>
                            <div className="cmp-table-column--title">Country</div>
                            <div className="cmp-table-column--content">United Kingdom</div>
                        </div>

                        <div className='cmp-table-column'>
                            <div className="cmp-table-column--title">Location</div>
                            <div className="cmp-table-column--content">Birmingham Heartlands Hospital, Birmingham, United Kingdom, B9 5SS</div>
                        </div>

                        <div className='cmp-table-column'>
                            <div className="cmp-table-column--title">Trial status</div>
                            <div className="cmp-table-column--content">
                                <span className="column-icon">Not yet recruiting</span>
                            </div>
                        </div>
                    </div>

                    <div className="cmp-table-row" data-result-type="withdraw">
                        <div className='cmp-table-column'>
                            <div className="cmp-table-column--title">Country</div>
                            <div className="cmp-table-column--content">Australia</div>
                        </div>

                        <div className='cmp-table-column'>
                            <div className="cmp-table-column--title">Location</div>
                            <div className="cmp-table-column--content">Royal Adelaide Hospital, <br />Adelaide, Australia, 5000</div>
                        </div>

                        <div className='cmp-table-column'>
                            <div className="cmp-table-column--title">Trial status</div>
                            <div className="cmp-table-column--content">
                                <span className="column-icon">Not yet recruiting</span>
                            </div>
                        </div>
                    </div>
                    <div className="cmp-table-row" data-result-type="recruite">
                        <div className='cmp-table-column'>
                            <div className="cmp-table-column--title">Country</div>
                            <div className="cmp-table-column--content">United States</div>
                        </div>

                        <div className='cmp-table-column'>
                            <div className="cmp-table-column--title">Location</div>
                            <div className="cmp-table-column--content"> Rhode Island Hospital,<br /> Providence, Rhode Island, United States, 02903</div>
                        </div>

                        <div className='cmp-table-column'>
                            <div className="cmp-table-column--title">Trial status</div>
                            <div className="cmp-table-column--content">
                                <span className="column-icon">Not yet recruiting</span>
                            </div>
                        </div>
                    </div>

                </div>

                <HtmlComment text="# End CmpTable component here" /> 
            </div>
        </div>
    );
}

export default CmpTable;
