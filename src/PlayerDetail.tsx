import React, {Component} from 'react';
import './PlayerDetail.scss';
import players from './data/players.json';
import Container from "react-bootstrap/Container";
import Image from 'react-bootstrap/Image';
import FormGroup from "react-bootstrap/esm/FormGroup";
import TopNavbar from "./TopNavbar";

export class PlayerDetail extends Component {
    private YearMap = new Map([
        ['2021', 'Senior'],
        ['2022', 'Junior'],
        ['2023', 'Sophomore'],
        ['2024', 'Freshman']
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
            <div className="page">
                <TopNavbar title={title} showBackNav={true}/>
                <Container className="container container-player-detail">
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
                        {player.favoriteSnack &&
                        <div className="mb-2">
                            <div className="player-form-label">Favorite Snack</div>
                            <div>{player.favoriteSnack}</div>
                        </div>
                        }
                        {player.favoriteCartoonCharacter &&
                            <div className="mb-2">
                                <div className="player-form-label">Favorite Cartoon Character</div>
                                <div>{player.favoriteCartoonCharacter}</div>
                            </div>
                        }
                        {player.favoriteMusicalArtist &&
                            <div className="mb-2">
                                <div className="player-form-label">Favorite Musical Artist</div>
                                <div>{player.favoriteMusicalArtist}</div>
                            </div>
                        }
                        {player.hobbyOutsideHockey &&
                            <div className="mb-2">
                                <div className="player-form-label">Hobby Outside Hockey</div>
                                <div>{player.hobbyOutsideHockey}</div>
                            </div>
                        }
                        {player.bestThingYouCanCook &&
                            <div className="mb-2">
                                <div className="player-form-label">Best Thing You Can Cook</div>
                                <div>{player.bestThingYouCanCook}</div>
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
            </div>
        );
    }
}