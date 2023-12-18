var review = [1, 2, 3, 4, 5];
for (var i = 0; i < review.length; i++) {
    console.log(review[i]);
    var total = 0;
    for (var i_1 = 0; i_1 < review.length; i_1++) {
        console.log(review[i_1]);
        total += review[i_1];
    }
    var average = total / review.length;
    console.log("review average = " + average);
}
