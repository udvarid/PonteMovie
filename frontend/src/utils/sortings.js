export function compareByTitle(a, b) {

    const titleA = a.title;
    const titleB = b.title;

    if (titleA < titleB)
        return -1;
    if (titleA > titleB)
        return 1;
    return 0;
}


export function compareByDate(a, b) {

    const dateA = a.releaseDate;
    const dateB = b.releaseDate;

    if (dateA < dateB)
        return 1;
    if (dateA > dateB)
        return -1;
    return 0;
}


export function compareByScore(a, b) {

    const scoreA = a.voteAverage;
    const scoreB = b.voteAverage;

    if (scoreA < scoreB)
        return 1;
    if (scoreA > scoreB)
        return -1;
    return 0;
}

