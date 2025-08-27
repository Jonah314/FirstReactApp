import productArray from './productArray.js'


export function productSorter(tag){
    const newArray = [];

    for(const prod in productArray){
        if (productArray[prod].Tags.includes(tag)){
            newArray.push(product);
        }
    }
    return newArray;
}

