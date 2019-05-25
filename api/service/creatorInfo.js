
const getCreator = (id) => {
    return new Promise((resolve, reject) => {
        User.find({id: id})
            .then((data) => resolve(data))
    })
};

const getAllCreators = async (events) => {
    return new Promise((resolve, reject) => {
        const eventsWithCreator = events.map(async (e) => e.creatos = await getCreator(e.creatorId) );
        resolve(eventsWithCreator);
    })
}
