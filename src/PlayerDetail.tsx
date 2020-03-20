import React, {Component} from 'react';
import './PlayerDetail.scss';
import players from './players.json';
import Container from "react-bootstrap/Container";
import Image from 'react-bootstrap/Image';
import FormGroup from "react-bootstrap/esm/FormGroup";
import TopNavbar from "./TopNavbar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMusic} from "@fortawesome/free-solid-svg-icons/faMusic";

export class PlayerDetail extends Component {
    private YearMap = new Map([
        ['2020', 'Senior'],
        ['2021', 'Junior'],
        ['2022', 'Sophomore'],
        ['2023', 'Freshman']
    ]);

    private PositionMap = new Map([
        ['G', 'Goalie'],
        ['D', 'Defenseman'],
        ['F', 'Forward'],
        ['F/D', 'Forward/Defenseman']
    ]);

    private readonly uniformNumber: number;

    constructor(props: any) {
        super(props);
        this.uniformNumber = parseInt(props.match.params.number);
    }

    render() {
        const player: any = players.find(p => p.uniformNumber === this.uniformNumber);
        const title = `#${player.uniformNumber}  ${player.name}`;

        return (
            <>
                <TopNavbar title={title} showBackNav={true}/>
                <Container className="page container container-player-detail">
                    <div className="player-detail-image-container">
                        {player.detailImageUrl &&
                        <Image className="player-detail" src={player.detailImageUrl} alt={player.name + "-detail"}/>
                        }
                        {!player.detailImageUrl &&
                        <div className="spacer"/>
                        }
                        <Image className="player-head-shot" roundedCircle src={player.imageUrl} alt={player.name}/>
                    </div>
                    <FormGroup>
                        <div className="text-center">
                            <span>{this.YearMap.get(player.year)} | {this.PositionMap.get(player.position)} </span>
                        </div>
                        {player.nickname &&
                        <div>
                            <div className="player-form-label">A.K.A.</div>
                            <div>"{player.nickname}"</div>
                        </div>
                        }
                        {player.pumpUpSong &&
                        <div>
                            <div className="player-form-label">Pump-Up Song</div>
                            <div><q>{player.pumpUpSong}</q> by {player.pumpUpSongArtist}
                                <a href={player.pumpUpSongUrl}>
                                    <Image className="image-music" src="/spotify-icon.png"/>
                                </a>
                                <a href={player.pumpUpSongItunesUrl}>
                                    <FontAwesomeIcon className="image-music" icon={faMusic}/>
                                </a>
                                </div>
                            </div>
                        }
                        {player.favoriteFood &&
                            <div>
                                <div className="player-form-label">Favorite Food</div>
                                <div>{player.favoriteFood}</div>
                            </div>
                        }
                        { player.favoriteTVShow &&
                            <div>
                                <div className="player-form-label">Favorite TV Show/Movie</div>
                                <div>{player.favoriteTVShow}</div>
                            </div>
                        }
                        {player.spiritAnimal &&
                            <div>
                                <div className="player-form-label">Spirit Animal</div>
                                <div>{player.spiritAnimal}</div>
                            </div>
                        }
                        {player.wordsOfWisdom &&
                            <div>
                                <div className="player-form-label">Words of Wisdom</div>
                                <div><q>{player.wordsOfWisdom}</q> -<i>{player.wordsOfWisdomAttribute}</i></div>
                            </div>
                        }
                        {player.wordsOfGratitude &&
                            <div>
                                <div className="player-form-label">Words of Gratitude</div>
                                <div>{player.wordsOfGratitude}</div>
                            </div>
                        }
                        {player.parents &&
                        <div className="mb-2">
                            <div className="player-form-label">Parents' Names</div>
                            <div>{player.parents}</div>
                        </div>
                        }
                        { player.detailImageCredit &&
                            <span className="small">Photo credit: {player.detailImageCredit}</span>
                        }
                        { player.detailImageCreditUrl && player.detailImageCreditUrlTag &&
                            <span className="small">Photo credit: <a className="btn-link" href={player.detailImageCreditUrl}>{player.detailImageCreditUrlTag}</a></span>
                        }
                    </FormGroup>
                </Container>
                <div className="spacer"/>
            </>
        );
    }
}