import { CharacterService } from "../Services/character.service";
import { HouseService } from "../Services/house.service";

export class House {
    url: string;
    name: string;
    region: string;
    coatOfArms: string;
    words: string;
    titles: string[];
    seats: string[];
    currentLord: string;
    heir: string;
    overlord: string;
    founded: string;
    founder: string;
    diedOut: string;
    ancestralWeapons: string[];
    cadetBranches: string[];
    swornMembers: string[];

    constructor(house: any, houseService: HouseService, characterService: CharacterService) {
        this.url = house.url;
        this.name = house.name;
        this.region = house.region;
        this.coatOfArms = house.coatOfArms;
        this.words = house.words;
        this.titles = house.titles;
        this.seats = house.seats;

        this.currentLord = (house.currentLord == "") ? "" : "Loading...";
        if (house.currentLord.length != 0) {
            characterService.getCharacter(house.currentLord).subscribe((response: any) => this.currentLord = response.name);
        }

        this.heir = (house.heir == "") ? "" : "Loading...";
        if (house.heir.length != 0) {
            characterService.getCharacter(house.heir).subscribe((response: any) => this.heir = response.name);
        }

        this.overlord = (house.overlord == "") ? "" : "Loading";
        if(house.overlord.length != 0) {
            houseService.getHouse(house.overlord).subscribe((response: any) => this.overlord = response.name);
        }

        this.founded = house.founded;

        this.founder = (house.founder == "") ? "" : "Loading...";
        if (house.founder.length != 0) {
            characterService.getCharacter(house.founder).subscribe((response: any) => this.founder = response.name);
        }

        this.diedOut = house.diedOut;
        this.ancestralWeapons = house.ancestralWeapons;

        this.cadetBranches = (house.cadetBranches.length == 0) ? null : [];
        if (house.cadetBranches.length != 0) {
            const tempHouses: string[] = [];
            house.cadetBranches.forEach(cadetBranch => {
                houseService.getHouse(cadetBranch).subscribe((response: any) => tempHouses.push(response.name));
            })
            this.cadetBranches = tempHouses;
        }

        this.swornMembers = (house.swornMembers.length == 0) ? null : [];
        if (house.swornMembers.length != 0) {
            const tempMembers: string[] = [];
            house.swornMembers.forEach(swornMember => {
                characterService.getCharacter(swornMember).subscribe((response: any) => tempMembers.push(response.name))
            })
            this.swornMembers = tempMembers;
        }
    }
}