import React from 'react';
import ColumnControl from '../../components/molecules/column-control/column-control';
import Separator from '../molecules/separator/separator';

const Grid = () =>{
    return(
        <div className='grid'>
            <ColumnControl
            gapX="md:gap-x-6 "
            gapY="gap-y-6 md:gap-y-0"
            container="true"
            >
                <div className='col-span-full md:col-span-6'>
                  <div className='bg-primary p-16 text-lg text-white text-center'>6</div>
                </div>
                <div className='col-span-full md:col-span-6'>
                    <div className='bg-primary p-16 text-lg text-white text-center'>6</div>
                </div>
            </ColumnControl>

            <Separator border_color="border-transparent"  marginY="my-3"/>

            <ColumnControl
            gapX="md:gap-x-6 "
            gapY="gap-y-6 md:gap-y-0"
            container="true"
            >
                <div className='col-span-full md:col-span-4'>
                  <div className='bg-secondary p-16 text-lg text-white text-center'>4</div>
                </div>
                <div className='col-span-full md:col-span-4'>
                    <div className='bg-secondary p-16 text-lg text-white text-center'>4</div>
                </div>
                <div className='col-span-full md:col-span-4'>
                    <div className='bg-secondary p-16 text-lg text-white text-center'>4</div>
                </div>
            </ColumnControl>

            <Separator border_color="border-transparent"  marginY="my-3"/>

            <ColumnControl
            gapX="md:gap-x-6 "
            gapY="gap-y-6 md:gap-y-0"
            container="true"
            >
                <div className='col-span-full md:col-span-3'>
                  <div className='bg-primary p-16 text-lg text-white text-center'>3</div>
                </div>
                <div className='col-span-full md:col-span-3'>
                    <div className='bg-primary p-16 text-lg text-white text-center'>3</div>
                </div>
                <div className='col-span-full md:col-span-3'>
                    <div className='bg-primary p-16 text-lg text-white text-center'>3</div>
                </div>
                <div className='col-span-full md:col-span-3'>
                    <div className='bg-primary p-16 text-lg text-white text-center'>3</div>
                </div>
            </ColumnControl>

            <Separator border_color="border-transparent"  marginY="my-3"/>

            <ColumnControl
            gapX="md:gap-x-6 "
            gapY="gap-y-6 md:gap-y-0"
            container="true"
            >
                <div className='col-span-full md:col-span-8'>
                  <div className='bg-secondary p-16 text-lg text-white text-center'>8</div>
                </div>
                <div className='col-span-full md:col-span-4'>
                    <div className='bg-secondary p-16 text-lg text-white text-center'>4</div>
                </div>
            </ColumnControl>

            <Separator border_color="border-transparent"  marginY="my-3"/>

            <ColumnControl
            gapX="md:gap-x-6 "
            gapY="gap-y-6 md:gap-y-0"
            container="true"
            >
                <div className='col-span-full md:col-span-12'>
                <div className='bg-primary p-16 text-lg text-white text-center'>12</div>
                </div>
            </ColumnControl>
        </div>
    )
}

export default Grid;