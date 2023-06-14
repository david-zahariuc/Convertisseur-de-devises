exports.callApiConvert = async function(from,to,amount) {
    const params = {
        key: "7af9fd15ca-143ef69ca4-rt1ubo",
    }
    const url = `https://api.fastforex.io/convert?from=${from}&to=${to}&amount=${amount}&api_key=${params.key}`;
    console.log(url);

    try {
        let reponse = await fetch(url);
        let data = await reponse.json();
        let aaa = data.result;
        finalAmount = aaa[Object.keys(data.result)[0]];

        let resultPost = {
            from: from,
            to: to,
            amount: amount,
            newAmount: finalAmount,
        }

        return resultPost;
    } catch (error) {
        console.log(error);
    }
}
