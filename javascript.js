
var input1 = 10;

function calculate(input1, input2){
    return input1 + input2;
}

console.log(calculate(5, 5));

const car1 = {
    type: "audi",
    year: 2000
}

const car2 = {
    type: "toyota",
    year: 2015
}

cars = [
    car1,
    car2
]

cars.forEach(post => {
    // pm.expect(post).to.have.property("id");
    // pm.expect(post).to.have.property("name");
    // pm.expect(post).to.have.property("isActive");

    console.log(post)
});

