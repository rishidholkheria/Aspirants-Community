export const locationNameFromType = (type)=>{
    var fullName = ''
    switch (type){
        case "kb":
            fullName = "Karol Bagh"
            break;
        case "pn":
            fullName = "Patel Nagar"
            break;
        case "rj":
            fullName = "Rajinder Nagar"
    }
    return fullName
}