const confirmHealth = (snack) => {
    const {fiber, protein, added_sugar} = snack

    if (fiber >= 5 && added_sugar < 5) {
        return true
    } else if (protein > 5 && added_sugar < 5) {
        return true
    } else if (fiber > 5 && added_sugar > 5 ) {
        return false
    } else if (protein > 5 && added_sugar > 5) {
        return false
    } else if (protein >= 5 && fiber >= 5 && added_sugar >= 5) {
        return false
    // should be less than for test on line 311 - 317
    } else if (protein < 5 && fiber < 5 && added_sugar > 5) {
        return false
    // should be less than for test on line 319 - 325
    } else if (protein < 5 && fiber < 5 && added_sugar < 5) {
        return false
    } else if ( typeof protein !== "number" && typeof fiber !== "number" && typeof added_sugar !== "number") {
        return null
    }
};

console.log(confirmHealth({ protein: 4, fiber: 5, added_sugar: 1 }))
console.log(confirmHealth({ protein: 6, fiber: 2, added_sugar: 0 }))
console.log(confirmHealth({ protein: 8, fiber: 9, added_sugar: 3 }))
console.log(confirmHealth({ protein: 2, fiber: 8, added_sugar: 10 }))
console.log(confirmHealth({ protein: 22, fiber: 3, added_sugar: 11 }))
console.log(confirmHealth({ protein: 5, fiber: 5, added_sugar: 13 }))
console.log(confirmHealth({ protein: 1, fiber: 0, added_sugar: 6 }))
console.log(confirmHealth({ protein: 1, fiber: 0, added_sugar: 2 }))
console.log(confirmHealth({ protein: "", fiber: "c", added_sugar: null }))

module.exports = confirmHealth;
