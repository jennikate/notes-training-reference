type Movie = {
    readonly title: string,
    originalTitle?: string,
    director: string,
    releaseYear: number,
    boxOffice: {
        budget: number,
        grossUS: number,
        grossWorldwide: number
    }
};

const dune: Movie = {
    title: "Dune",
    originalTitle: "Dune Part One",
    director: "Denis Veilleneuve",
    releaseYear: 2021,
    boxOffice: {
        budget: 165000000,
        grossUS: 108327830,
        grossWorldwide: 400671789
    }
}

const cats: Movie = {
    title: "Cats",
    director: "Tom Hooper",
    releaseYear: 2019,
    boxOffice: {
        budget: 95000000,
        grossUS: 27166770,
        grossWorldwide: 73833348
    }
}

// function getProfit(movie: Movie): number {
//     return movie.boxOffice.grossWorldwide - movie.boxOffice.budget
// }

function getProfit(movie: Movie): number {
    const { grossWorldwide, budget } = movie.boxOffice
    return grossWorldwide - budget
}

// function getProfit({ boxOffice: { grossWorldwide, budget }}): number {
//     return grossWorldwide - budget
// }

getProfit(cats)