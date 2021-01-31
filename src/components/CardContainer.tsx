import React  from 'react';
import data from '../data/discovery_page.json';
import RestaurantCard from './RestaurantCard';

const CardContainer = () => {

    return (
        <>
            <div className="card_list_wrapper">
                { data.sections.map((item) => (
                    <div key={ item.title }>
                        <div className="section_header">
                            { item.title }
                        </div>
                        <div className="card_list_container">
                            <RestaurantCard
                                key={ item.title }
                                { ...item }
                            />
                        </div>
                    </div>
                ))}

            </div>
        </>
    )
}

export default CardContainer;