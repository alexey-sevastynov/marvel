class MarvelService {

    _apiBase = 'https://jsonplaceholder.typicode.com/';

    getResource = async (url) => {

        const res = await fetch(url);

        if (!res.ok) {

            throw new Error(`Could not fetch ${url}, status: ${res.status}`);

        }

        return await res.json();

    }

    _transformCharacter = (char) => {
        return {
            name: char.id,
            descriotion: char.title,
            thumbnail: char.thumbnailUrl,
            url: char.url,
        }
    }

    getAllPhoto = async () => {
        const itemsObj = await this.getResource(`${this._apiBase}photos`);
        return itemsObj.map(this._transformCharacter)
    }

    getPhoto = async (id) => {
        const itemObj = await this.getResource(`${this._apiBase}photos/${id}`);
        return this._transformCharacter(itemObj);
    }

}

export default MarvelService;

