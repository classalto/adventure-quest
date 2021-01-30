export function calcWillpower(willpower) {
    if (willpower > 7) {
        return 'eager';
    } else if (willpower > 4) {
        return 'unsure';
    } else {
        return 'depressed';
    }
}