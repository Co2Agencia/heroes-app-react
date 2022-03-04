import React, { useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'

import { useForm } from '../../customHooks/useForm'
import { getHeroesByName } from '../../helpers/getHeroesByName'
import { HeroCard } from '../hero/HeroCard'

export const SearchScreen = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const { q = '' } = queryString.parse( location.search )

    const [values, handleInputChange ] = useForm( {
        searchText : q
    } )

    const { searchText } = values
    const heroesFiltered = useMemo(() => getHeroesByName( q ), [ q ])
    

    const handleSearch = ( event ) => {
        event.preventDefault()
        
        navigate(`?q=${ searchText }`)
    }

    return (
        <div>
            <h1>Búsquedas</h1>
            <hr/>

            <div className='row'>

                {/* Formulario de busqueda */}
                <div className='col-5'>

                    <h4>Buscar</h4>
                    <hr/>

                    <form onSubmit={ handleSearch }>
                        <input
                            type="text"
                            placeholder='Buscar un héroe'
                            className='form-control'
                            name='searchText'
                            autoComplete='off'
                            value={ searchText }
                            onChange={ handleInputChange }
                        />

                        <button
                            type='submit'
                            className='btn btn-outline-primary mt-2'
                        >
                            Buscar..
                        </button>
                    </form>

                </div>

                {/* Lista de heroes */}
                <div className='col-7'>
                    <h4>Resultados</h4>
                    <hr/>
                    {
                        ( q === '' )
                            ? <div className="alert alert-info">Buscar un héroe</div>
                            : ( heroesFiltered.length === 0 )
                                && <div className="alert alert-danger">No hay resultados: { q }</div>
                    }
                    {
                        heroesFiltered.map( heroe => (
                            <HeroCard {...heroe} key={ heroe.id }/>
                        ) )
                    }
                </div>

            </div>

        </div>  
    )
}

