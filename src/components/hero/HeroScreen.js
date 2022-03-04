import React, { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../../helpers/getHeroById'
import { getHeroImage } from '../../helpers/getHeroImage'


export const HeroScreen = () => {
    
    // Toma el parámetro del Route
    const { heroeId } = useParams()
    // Evitamos llamar de más al getHeroById
    const hero = useMemo(() => getHeroById( heroeId ), [ heroeId ])
    const navigate = useNavigate()

    const handleReturn = () => {
        navigate( -1 )
    }

    if(!hero){
        return <Navigate to='/' />
    }

    const {
        id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero

    const imgPath = getHeroImage( { id } )

    return (
        <div className='row mt-5'>
            <div className='col-4'>
                <img 
                    src={ imgPath }
                    alt={ superhero }
                    className='animate__animated animate__fadeInLeft img-thumbnail'
                />
            </div>

            <div className='col-8 animate__animated animate__fadeIn'>
                <h3>{ superhero }</h3>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'><b>Alter Ego: </b>{ alter_ego }</li>
                    <li className='list-group-item'><b>Publisher: </b>{ publisher }</li>
                    <li className='list-group-item'><b>First Appearance: </b>{ first_appearance }</li>
                </ul>

                <h5 className='mt-5'>Characters</h5>
                <p>{ characters }</p>

                <button className='btn btn-outline-info' onClick={ handleReturn }>
                    Regresar
                </button>

            </div>

        </div>
    )
}
