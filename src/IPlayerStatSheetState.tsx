import {IPlayerStatProps} from "./IPlayerStatProps";

export interface IPlayerStatSheetState {
    stats: IPlayerStatProps[];
    sortColumn: string;
    sortDescending: boolean;
}