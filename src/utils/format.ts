export const formatGameDate = (value: string): string => {
    if (value && value.startsWith('Winter')) {
        return 'Totals:';
    }
    return value;
};

export const formatPercentage = (value: number): string => {
    const str = value >= 1 ? value.toPrecision(4) : value.toPrecision(3);
    if (str.startsWith('0.')) {
        return str.slice(1);
    }
    return str;
};

export const formatPlusMinus = (data: number): string => {
    if (data > 0) {
        return `+${data}`;
    }
    if (data === 0) {
        return '0';
    }
    return ` ${data}`;
};

export const formatOpponent = (opponent: string): string => {
    if (opponent.indexOf('(Sec. I)') > 0) {
        return opponent.replace('(Sec. I)', '');
    }
    if (opponent.indexOf('(Sec. III)') > 0) {
        return opponent.replace('(Sec. III)', '');
    }
    if (opponent.indexOf('(Sec. IV)') > 0) {
        return opponent.replace('(Sec. IV)', '');
    }
    if (opponent.indexOf('(Sec. VI)') > 0) {
        return opponent.replace('(Sec. VI)', '');
    }
    if (opponent.indexOf('(D2)') > 0) {
        return opponent.replace('(D2)', '');
    }

    return opponent;
};