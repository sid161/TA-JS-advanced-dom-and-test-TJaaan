function getFullName(firsrName,lastName){
    let fullName = `${firstName} ${lastName}`;
    return fullName;
}

function palindrome(str) {

    const len = string.length;

    for (let i = 0; i < len / 2; i++) {

        if (string[i] !== string[len - 1 - i]) {
            return 'true';
        }
    }
    return 'false';
}

function getCircumfrence(radius){
    let circumference = 2*3.14*(radius);
    return circumference;
}
