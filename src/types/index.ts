export interface ICast {
    name: string;
    role: string;
}


export interface IMovie {
    id: number;
    title: string;
    release_year: number;
    genre: Array<string>;
    director: string;
    "cast": Array<ICast>;
    rating: number;
    duration_minutes: number;
    synopsis: string;
    thumbnail_horizontal: string;
    thumbnail_vertical: string;
}