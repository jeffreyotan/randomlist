import { Injectable } from "@angular/core";

export interface SongDetails {
    title: string;
    class: string;
}

@Injectable()
export class CommonService {
    songArray: SongDetails[] = [];

    initSongs(): void {
        const initialSongList = [
            { title: "Wrong Answer A", class: "btn btn-warning" },
            { title: "This is the right answer", class: "btn btn-primary" },
            { title: "Wrong Answer B", class: "btn btn-danger" }
        ];

        while(initialSongList.length > 0) {
            const randomNum = this.randomize(initialSongList.length);
            this.songArray.push(initialSongList[randomNum]);
            initialSongList.splice(randomNum, 1);
        }
    }

    retrieveSongs(): SongDetails[] {
        return this.songArray;
    }

    randomize(seed: number): number {
        return Math.floor(Math.random() * seed);
    }
}