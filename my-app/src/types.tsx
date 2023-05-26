export interface Welcome10 {
    cod:     string;
    message: number;
    cnt:     number;
    list:    List[];
    city:    City;
}

export interface City {
    id:         number;
    name:       string;
    coord:      Coord;
    country:    string;
    population: number;
    timezone:   number;
    sunrise:    number;
    sunset:     number;
}

export interface Coord {
    lat: number;
    lon: number;
}

export interface List {
    dt:         number;
    main:       MainClass;
    weather:    Weather[];
    clouds:     Clouds;
    wind:       Wind;
    visibility: number;
    pop:        number;
    sys:        Sys;
    dt_txt:     Date;
    rain?:      Rain;
}

export interface Clouds {
    all: number;
}

export interface MainClass {
    temp:       number;
    feels_like: number;
    temp_min:   number;
    temp_max:   number;
    pressure:   number;
    sea_level:  number;
    grnd_level: number;
    humidity:   number;
    temp_kf:    number;
}



export interface Rain {
    "3h": number;
}

export interface Sys {
    pod: Pod;
}

export enum Pod {
    D = "d",
    N = "n",
}

export type Weather = {
    id:          number;
    main:        DescriptionMain;
    description: string;
    icon:        string;
}

export type Description = {
    BrokenClouds: string,
    ClearSky: string,
    FewClouds: string,
    LightRain: string,
    OvercastClouds: string,
    ScatteredClouds: string,
}

export type DescriptionMain = {
    Clear: string,
    Clouds: string,
    Rain: string,
}

export interface Wind {
    speed: number;
    deg:   number;
    gust:  number;
}
