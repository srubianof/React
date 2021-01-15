export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=5&api_key=vnNOsJHUan9Hhbz9W0apoS9xRBpPzyJ8`
    // await esperar a que se resuelva la promesa
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            //Signo de interrogacion permite verificar si viene el objeto y
            // de este modo utilizarlo o sino dejarlo UNDEFINED
            url: img.images?.downsized_medium.url
        }
    })
    console.log(gifs)
    return gifs
};
