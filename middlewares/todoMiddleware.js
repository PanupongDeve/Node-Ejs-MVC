

exports.ShowHello = async (req, res, next) => {
    console.log("Hello, I am middleware.");
    next();
}

