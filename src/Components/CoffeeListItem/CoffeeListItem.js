import React from 'react';
import { CONSTANTS } from '../../Utils/Constants';

const CoffeeListItem = ({ coffee }) => (
    <div>
        <img 
            src={ CONSTANTS['IMAGE-ENDPOINT'] + coffee.info.image }
            alt=""
        />
        <div>
            { coffee.name }
        </div>
        <div>
            { coffee.info['aromatic-profile'] }
        </div>
        <div>
            Intensity: { coffee.info.intensity }
        </div>
    </div>
);

export default CoffeeListItem;
