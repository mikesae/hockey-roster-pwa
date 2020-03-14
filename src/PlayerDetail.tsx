import React, {Component} from 'react';
import './PlayerDetail.scss';
import players from './players.json';
import Container from "react-bootstrap/Container";
import Image from 'react-bootstrap/Image';
import FormGroup from "react-bootstrap/esm/FormGroup";
import TopNavbar from "./TopNavbar";
import BottomNavbar from "./BottomNavbar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMusic} from "@fortawesome/free-solid-svg-icons/faMusic";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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

        return (
            <>
                <TopNavbar title={`#${player.uniformNumber}  ${player.name}`} showBackNav={true}/>
                <Container className="container container-player-detail">
                    <FormGroup>
                        <div className="player-detail-image-container">
                            {player.detailImageUrl &&
                            <Image className="player-detail" src={player.detailImageUrl} alt={player.name + "-detail"}/>
                            }
                            {!player.detailImageUrl &&
                            <div className="spacer"/>
                            }
                        </div>
                        <Row>
                            <Col className="col-3 my-auto">
                                <Image className="player-head-shot" roundedCircle src={player.imageUrl} alt={player.name}/>
                            </Col>
                            <Col className="col-9 my-auto px-1">
                                <div>{this.YearMap.get(player.year)} {this.PositionMap.get(player.position)}</div>
                                    { player.heightFt && player.heightIn && player.weight &&
                                        <div>{player.heightFt}' {player.heightIn}" {player.weight} lb.</div>
                                    }
                                {player.nickname &&
                                <div>
                                    <span><i>{player.nickname}</i></span>
                                </div>
                                }
                            </Col>
                        </Row>
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
                        { player.favorteTVShow &&
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
                        { player.detailImageCredit &&
                            <div className="mt-2 small">Photo by: {player.detailImageCredit}</div>
                        }
                    </FormGroup>
                </Container>
                <BottomNavbar/>
            </>
        );
    }
}