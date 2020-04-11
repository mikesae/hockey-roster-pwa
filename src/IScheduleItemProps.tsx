export interface IScheduleItemProps {
    day: string,
    date: string,
    time: string,
    opponent: string,
    logoUrl?: string,
    type: string,
    home: boolean,
    section: string,
    result: string,
    location: string,
    locationUrl?: string
}