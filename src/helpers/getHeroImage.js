
const heroImages = require.context('../assets', true)

export const getHeroImage = ( {id} ) => {

    return heroImages( `./${ id }.jpg` )

}
