import React from 'react'
import { Link } from 'react-router-dom'
import { getHeroImage } from '../../helpers/getHeroImage'


export const HeroCard = ( {
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
} ) => {

    const imgPath = getHeroImage( { id } )

    return (
        <div className='col animate__animated animate__fadeIn'>
            <div className='card'>

                <div className='row no-gutters'>
                    
                    <div className='col-4'>
                        <img src={ imgPath } className='card-img' alt={ superhero }></img>
                    </div>

                    <div className='col-8'>
                        <div className='card-body'>

                            <h5 className='card-title'>{ superhero }</h5>
                            <p className='card-title'>{ alter_ego }</p>

                            {
                                (alter_ego !== characters) && 
                                <p className='text-muted'>{ characters }</p>
                            }

                            <p className='card-text'>
                                <small className='text-muted'>{ first_appearance }</small>
                            </p>

                            <Link to={`/hero/${ id }`}> Mas... </Link>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    )

}
