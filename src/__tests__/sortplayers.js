import { playersSort } from "../js/sort.js";

test('sorts players by health', () => {
    const players = [
        { name: 'мечник', health: 10 },
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
    ];

    let nameSortedKey = [
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
        { name: 'мечник', health: 10 },
    ];
    
    const result = playersSort(players);
    expect(result).toEqual(nameSortedKey);
});