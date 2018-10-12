import React from 'react';
import Card from './Card'; // We need always to import, in order to have access to the information inside, in this case the array robots

const CardList = ({ robots }) => {   //The reason that we have robots in { robots } is because we want to access...
                                    //...the array robots from Card.js that we just imported
    return (
        <div>
            {
                robots.map((user, i) => {
                    return (
                        <Card
                            key={i}                 // When we do a loop we should add a key, we can always add - key={i} - 
                            id={robots[i].id}
                            name={robots[i].name}
                            email={robots[i].email}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;  // We need always to export