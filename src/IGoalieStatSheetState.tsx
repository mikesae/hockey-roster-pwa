import {IGoalieStatProps} from "./IGoalieStatProps";

export interface IGoalieStatSheetState {
    stats: IGoalieStatProps[];
    sortColumn: string;
    sortDescending: boolean;
    loading: boolean;
}