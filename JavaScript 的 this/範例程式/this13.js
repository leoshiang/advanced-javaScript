function run() {
    console.log(this);
}

var car = {
    maker: 'nissan',
    model: 'tiida'
}

run.bind(car)();