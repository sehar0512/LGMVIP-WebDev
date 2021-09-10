import React from 'react';
import Card from './Card';
import '../styles.css';


const CardList = ({robots})=>{
    return(
        <>
        <div className="container">
            <div className="row row-cols-1 row-cols-md-3 g-5">
                {
                  //displays all the card by calling the card component and passing all the values
                    robots.map((user, i) => {
                        return(
                                    <Card
                                    key={i}
                                    id={robots[i].id}
                                    name={robots[i].first_name}
                                    lname={robots[i].last_name}
                                    email={robots[i].email}
                                    />
                            );
                    })
                }
            </div>
            </div>
                <footer className="footer">
     <p className='copy' >Copyright &copy; SeharFatima 2021</p>
     </footer>
     </>
        );
}

export default CardList;
