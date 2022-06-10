import React from 'react';
import ColumnControl from '../../components/molecules/column-control/column-control';

const horizontalAlignOptions = {
    default: '',
    center: 'justify-items-center',
    start: 'justify-items-start',
    end: 'justify-items-end',
    stretch: 'justify-items-stretch'
};

const verticalAlignOptions = {
    default: '',
    center: 'items-center',
    start: 'items-start',
    end: 'items-end',
    baseline: 'items-baseline',
    stretch: 'items-stretch'
 };

 const gapYOptions = {
    default: '',
    gap0: 'gap-y-0',
    gap1: 'gap-y-px',
    gap2: 'gap-y-0.5',
    gap4: 'gap-y-1',
    gap6: 'gap-y-1.5',
    gap8: 'gap-y-2',
    gap10: 'gap-y-2.5',
    gap12: 'gap-y-3',
    gap14: 'gap-y-3.5',
    gap14: 'gap-y-4'
 };

 const gapXOptions = {
    default: '',
    gap0: 'gap-x-0',
    gap1: 'gap-x-px',
    gap2: 'gap-x-0.5',
    gap4: 'gap-x-1',
    gap6: 'gap-x-1.5',
    gap8: 'gap-x-2',
    gap10: 'gap-x-2.5',
    gap12: 'gap-x-3',
    gap14: 'gap-x-3.5',
    gap14: 'gap-x-4'
 };

 const GapOptions = {
    default: '',
    gap0: 'gap-0',
    gap1: 'gap-px',
    gap2: 'gap-0.5',
    gap4: 'gap-1',
    gap6: 'gap-1.5',
    gap8: 'gap-2',
    gap10: 'gap-2.5',
    gap12: 'gap-3',
    gap14: 'gap-3.5',
    gap14: 'gap-4'
 };

 const numberRowsOptions = {
    default: '',
    row1: 'grid-rows-1',
    row2: 'grid-rows-2',
    row3: 'grid-rows-3',
    row4: 'grid-rows-4',
    row5: 'grid-rows-5',
    row6: 'grid-rows-6',
    rowNone: 'grid-rows-none',
 };

export default {
    title: 'Molecules/ColumnControl',
    component: ColumnControl,
    argTypes: {
        horizontalAlignment: {
            name: "Horizontal Alignment",
            defaultValue: "",
            control: { type: "select", options: horizontalAlignOptions },
            table: {
                category: 'Alignment'
            }
        },
        verticalAlignment: {
            name: "Vertical Alignment",
            defaultValue: "",
            control: { type: "select", options: verticalAlignOptions },
            table: {
                category: 'Alignment'
            }
        },
        gapY: {
            name: "Gap (Y axis)",
            defaultValue: "",
            control: { type: "select", options: gapYOptions },
            table: {
                category: 'Gaps'
            }
        },
        gapX: {
            name: "Gap (X axis)",
            defaultValue: "",
            control: { type: "select", options: gapXOptions },
            table: {
                category: 'Gaps'
            }
        },
        gap: {
            name: "Gap (X & Y axis)",
            defaultValue: "",
            control: { type: "select", options: GapOptions },
            table: {
                category: 'Gaps'
            }
        },
        cols: {
            name: "All device:",
            control: { type: "text" },
            table: {
                category: 'Number of columns'
            }
        },
        lg_cols: {
            name: "Large device:",
            control: { type: "text" },
            table: {
                category: 'Number of columns'
            }
        },
        md_cols: {
            name: "Medium device:",
            control: { type: "text" },
            table: {
                category: 'Number of columns'
            }
        },
        container: {
            name: "Container",
            defaultValue: true,
            control: { type: "boolean" },
        },
        fullHeight: {
            name: "Wrapper take full height ?",
            defaultValue: false,
            control: { type: "boolean" },
        },
        bgImg: {
            name: "Background Image ?",
            control: { type: "radio" , options : { yes:"yes", no:"no" } },
        },
        minHeight : {
            name: "Min-height",
            control: { type: "text" },
        },

        n_rows: {
            name: "Number of rows",
            defaultValue: "",
            control: { type: "select", options: numberRowsOptions },
            table: {
                category: 'Vertical flow'
            }
        },
        flowDirection:{
            name: "Flow direction",
            control : {
                type : "select",
                options : { horizontal: "" , vertical: "grid-flow-col"},
                table: {
                    category: 'Vertical flow'
                }
            }
        }
    }
};
 
const Template = (args) => 
<ColumnControl {...args}>
    <div class="bg-primary col-span-full md:col-span-8 flex items-center p-4">
        <div class="">
            <h2>COMPONENT</h2>
            <p>Box 1</p>
            <p>Box 2</p>
        </div>
    </div>

    <div class="bg-gray-55 col-span-full md:col-span-4 flex items-center p-4">
        <div class="">
            <h2>COMPONENT</h2>
            <p>Box 2</p>
        </div>
    </div>  

    <div class="bg-secondary col-span-full md:col-auto">
        <div class="p-4">
            <h2>COMPONENT</h2>
            <p>Box 3</p>
        </div>
    </div>  
    <div class="bg-gray-50 col-span-full md:col-auto">
        <div class="p-4">
            <h2>COMPONENT</h2>
            <p>Box 4</p>
        </div>
    </div>  
</ColumnControl>;

const Template2 = (args) => 
<ColumnControl {...args}>
    <div class="bg-white bg-opacity-25 p-4 col-span-full md:col-span-6">
        <h1>COLUMN CONTROL WITH BG</h1>
    </div>

    <div class="bg-primary bg-opacity-25 p-4 col-span-full md:col-span-6">
        <h1 class="text-white">COLUMN CONTROL WITH BG</h1>
    </div>
</ColumnControl>;

export const ColumnControl_default = Template.bind({});
ColumnControl_default.args = {
}


export const ColumnControlVertical = Template.bind({});
ColumnControlVertical.args = {
    flowDirection: "grid-flow-col",
    n_rows : "grid-rows-4",
}

export const ColumnControlBgImg = Template2.bind({});
ColumnControlBgImg.args = {
    bgImg: 'yes',
    bgImg_url : 'https://images.unsplash.com/photo-1647476699575-a25db189e3b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    minHeight: '400px',
    fullHeight : true
}

