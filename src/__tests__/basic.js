import { makeUsers }  from "../js/users.js";

test('makeUsers health up to 15', () => {
    const obj = { name: 'мечник', health: 10 };
    
    const result = makeUsers(obj);
    expect(result).toBe("critical");
});

test('makeUsers health from 15 to 50', () => {
    const obj = { name: 'фея', health: 30 };

    const result = makeUsers(obj);
    expect(result).toBe("wounded");
});

test('makeUsers health more 50', () => {
    const obj = { name: 'лучник', health: 80 };
    
    const result = makeUsers(obj);
    expect(result).toBe("healthy");
});