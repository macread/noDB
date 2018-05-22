// var dogs = [
//     {id: 0,
//         url: 'https://images.dog.ceo/breeds/dane-great/n02109047_23852.jpg',
//         name: 'Dane',
//         caption: 'If I must'
//     },
//     {id: 1,
//         url: 'https://images.dog.ceo/breeds/schnauzer-miniature/n02097047_3074.jpg',
//         name: 'Chip',
//         caption: 'May I please'
//     },
//     {id: 2,
//         url: 'https://images.dog.ceo/breeds/appenzeller/n02107908_795.jpg',
//         name: 'Frosty',
//         caption: 'I love the snow'
//     },
//     {id: 3,
//         url: 'https://images.dog.ceo/breeds/bulldog-boston/n02096585_1583.jpg',
//         name: 'Fisher',
//         caption: 'Enee meene minie moe'
//     }
// ]

// var id = 3;

var dogs= [];

let id = 0;

module.exports = {
    create: (req, res)=> {
        const { url, name, caption } = req.body;
        dogs.push({id, url, name, caption});
        res.status(200).send(dogs);
        id++;
    },

    read: (req, res)=> {
        res.status(200).send(dogs);
    },

    update: (req, res)=> {
        const idx = dogs.findIndex( function (dog) { 
            return dog.id === parseInt(req.params.id,10)
        })
        dogs[idx] = {
            id: dogs[idx].id,
            url: req.body.url || dogs[idx].url,
            name: req.body.name || dogs[idx].name,
            caption: req.body.caption || dogs[idx].caption
        }
        res.status(200).send(dogs);
    },

    delete: (req, res)=> {
        const idx = dogs.findIndex( function (dog) { 
            return dog.id === parseInt(req.params.id,10)
        })
        dogs.splice(idx,1);
        res.status(200).send(dogs)
    },

    filter: (req, res)=> {
        const filteredDogs = dogs.filter( function (dog) { 
            return (
                dog.name.search(req.query.name) >=0
            )
        })
        res.status(200).send(filteredDogs);
    },
}