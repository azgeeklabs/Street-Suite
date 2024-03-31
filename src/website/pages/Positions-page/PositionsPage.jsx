
import LabelAndInput from '../../components/LabelAndInput';
import Button from '@mui/material/Button';
import FormLabel from '@mui/joy/FormLabel';
import AccordionGroup from '@mui/joy/AccordionGroup';
import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionSummary from '@mui/joy/AccordionSummary';
import './PositionsPage.css';
import { useState } from 'react';
import PositionCard from '../../components/PositionCard/PositionCard';

const PositionsPage = ()=>{


    const [index, setIndex] = useState(0);
    return(
        <div className='py-5 flex flex-col gap-16 bgImg'>
            <div className="md:w-1/2 headOfPage mx-auto flex flex-col align-items-center gap-3">
                <h1><span className='highlight'>Street Suite</span> Vacancies </h1>
               <div className='md:w-7/12 sm:w-3/4 text-center'>
               <p>Street Suite is expanding and we are looking for talented people to join our team!</p>
               </div>
            </div>
       
         <AccordionGroup disableDivider className=" w-10/12 mx-auto flex flex-col gap-6">

  
            <PositionCard positionTitle='Back End Developer' positionIdx={0}/>
            <PositionCard positionTitle='Back End Developer' positionIdx={1}/>
            <PositionCard positionTitle='Front End Developer' positionIdx={2}/>
          <PositionCard positionTitle='Marketing Specialist' positionIdx={3}/>
         
    



    </AccordionGroup>
        </div>
    )

}

export default PositionsPage