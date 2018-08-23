import Realm from 'realm'

const favesSchema = {
    name: 'Faves',
    primaryKey: 'id',
    properties: {
        id: 'string',
        favedOn: 'date'
    }
}

const realm = new Realm({ schema: [favesSchema] })

export const addFave = id => {
    realm.write(() => {
        const favedOn = new Date()
        realm.create('Faves', {id, favedOn})
    })
}

export const getFave = () => {
    const faves = realm.objects('Faves')
    return faves
}

export const removeFave = id => {
    realm.write(() => {
        const faveToDelete = realm.objects('Faves').filtered(`id == $0`, id)
        realm.delete(faveToDelete)
    })
}

export default realm