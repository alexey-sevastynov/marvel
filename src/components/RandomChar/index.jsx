import React from 'react';

import './randomChar.scss';

import mjolnir from '../../resources/img/mjolnir.png';
import MarvelService from '../../services/MarvelService';

export default class RandomChar extends React.Component {
    
    marvelService = new MarvelService();

    constructor(props) {

        super(props);

        this.updateChar();

    }

    state = {
        char: {},
    }

    onChatLoaded = (char) => {

        this.setState({ char })

    }

    updateChar = () => {

        const id = Math.floor(Math.random() * (5000 - 1) + 1);

        return this.marvelService
            .getPhoto(id).then(result => {
                this.setState(this.onChatLoaded(result))
            })

    }

    render() {

        const { char: { name, descriotion, thumbnail, url } } = this.state;

        return (
            <div className="randomchar">
                <div className="randomchar__block">
                    <img src={thumbnail} alt="Random character" className="randomchar__img" />
                    <div className="randomchar__info">
                        <p className="randomchar__name">{name}</p>
                        <p className="randomchar__descr">
                            {descriotion}
                        </p>
                        <div className="randomchar__btns">
                            <a href={url} className="button button__main">
                                <div className="inner">homepage</div>
                            </a>
                            <a href={url} className="button button__secondary">
                                <div className="inner">Wiki</div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="randomchar__static">
                    <p className="randomchar__title">
                        Random character for today!<br />
                        Do you want to get to know him better?
                    </p>
                    <p className="randomchar__title">
                        Or choose another one
                    </p>
                    <button className="button button__main">
                        <div className="inner">try it</div>
                    </button>
                    <img src={mjolnir} alt="mjolnir" className="randomchar__decoration" />
                </div>
            </div>
        )
    }
}




