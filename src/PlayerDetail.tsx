import React, {Component} from 'react';
import './PlayerDetail.scss';
import players from './players.json';
import Container from "react-bootstrap/Container";
import Image from 'react-bootstrap/Image';
import FormGroup from "react-bootstrap/esm/FormGroup";
import TopNavbar from "./TopNavbar";
import BottomNavbar from "./BottomNavbar";

export class PlayerDetail extends Component {
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
                        <Image roundedCircle src={player.imageUrl} alt={player.name}/>
                    </FormGroup>
                    <FormGroup>
                        {player.pumpUpSong &&
                            <div>
                                <div className="player-form-label">Pump-Up Song</div>
                                <div><q>{player.pumpUpSong}</q> by {player.pumpUpSongArtist}</div>
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
                                <div><q>{player.wordsOfWisdom}</q> - <i>{player.wordsOfWisdomAttribute}</i></div>
                            </div>
                        }
                        {player.wordsOfGratitude &&
                            <div>
                                <div className="player-form-label">Words of Gratitude</div>
                                <div>{player.wordsOfGratitude}</div>
                            </div>
                        }
                    </FormGroup>
                </Container>
                <BottomNavbar/>
            </>
        );
    }
}