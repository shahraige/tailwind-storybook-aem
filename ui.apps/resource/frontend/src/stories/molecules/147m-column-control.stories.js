import React from 'react'
import { storiesOf } from '@storybook/react'
import { select, text, object, boolean, optionsKnob as options } from '@storybook/addon-knobs';
import ColumnControl from '../../components/molecules/column-control/column-control'

const numberOfColumns = 'Number Of columns';
const verticalRow = 'Vertical column options';
const gaps = 'Gaps';
const alignment = 'Alignment of items';

const horizontalAlign = 'Horizontal Alignment';
const horizontalAlignOptions = {
   default: '',
   center: 'justify-items-center',
   start: 'justify-items-start',
   end: 'justify-items-end',
   stretch: 'justify-items-stretch'
};

const verticalAlign = 'Vertical Alignment';
const verticalAlignOptions = {
   default: '',
   center: 'items-center',
   start: 'items-start',
   end: 'items-end',
   baseline: 'items-baseline',
   stretch: 'items-stretch'
};

const gapY = 'Gap (Y axis)';
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

const gapX = 'Gap (X axis)';
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

const Gap = 'Gap (X & Y axis)';
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

const numberRows = 'Number of rows';
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

storiesOf("Molecules | Column Control", module)

.add("Column Control Default", () =>{
    const horizontalAlignment = select(horizontalAlign, horizontalAlignOptions,'', alignment);
    const verticalAlignment = select(verticalAlign, verticalAlignOptions,'', alignment);
    const gap = select(Gap, GapOptions,'', gaps);
    const gap_X = select(gapX, gapXOptions,'', gaps);
    const gap_Y = select(gapY, gapYOptions,'', gaps);
    const cols = text('All device: ', '', numberOfColumns);
    const lg_cols = text('Large device: ', '', numberOfColumns);
    const md_cols = text('Medium device: ', '', numberOfColumns);
    const container = boolean('Container', false);

    return (
            <ColumnControl
            cols={cols}
            lg_cols={lg_cols}
            md_cols={md_cols}
            gap={gap}
            gapX={gap_X}
            gapY={gap_Y}
            horizontalAlignment={horizontalAlignment}
            verticalAlignment={verticalAlignment}
            container={container}
            />
    );
})

.add("Column Control (vertical-flow)", () =>{
    const horizontalAlignment = select(horizontalAlign, horizontalAlignOptions,'', alignment);
    const verticalAlignment = select(verticalAlign, verticalAlignOptions,'', alignment);
    const gap = select(Gap, GapOptions,'', gaps);
    const gap_X = select(gapX, gapXOptions,'', gaps);
    const gap_Y = select(gapY, gapYOptions,'', gaps);
    const flowDirection = select("Flow direction", {horizontal: "" , vertical: "grid-flow-col"},"grid-flow-col",verticalRow);
    const cols = text('All device: ', '', numberOfColumns);
    const lg_cols = text('Large device: ', '', numberOfColumns);
    const md_cols = text('Medium device: ', '', numberOfColumns);
    const n_rows = select(numberRows, numberRowsOptions,'',verticalRow);
    const container = boolean('Container', false);

    return (
            <ColumnControl
            cols={cols}
            lg_cols={lg_cols}
            md_cols={md_cols}
            gap={gap}
            gapX={gap_X}
            gapY={gap_Y}
            horizontalAlignment={horizontalAlignment}
            verticalAlignment={verticalAlignment}
            n_rows={n_rows}
            flowDirection={flowDirection}
            container={container}
            />
    );
})