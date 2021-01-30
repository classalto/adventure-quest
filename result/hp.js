export function calcHp(hp) {
    if (hp >= 80) {
        return 'healthy';
    } else if (hp < 80 && hp > 30) {
        return 'wounded';
    } else {
        return 'lifeless';
    }
}