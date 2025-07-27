function appendKey(obj,prefix){

    let res = {}
    
    for (const key in obj) {
        res[`${prefix}.${key}`] = obj[key]
    }

    return res
}

function flattenObj(obj) {

    let res = {}

    for (const key in obj) {
        const val = obj[key]

        if(typeof(val) === 'object'){
            const preRes= appendKey(flattenObj(val),key)
            res = {...res,...preRes}
        }else{
            res[key]=obj[key] 
        }
    }

            return res


}

const obj = {
    key1: {
        key2: 'value2',
        key3: ['value3', 'value4', { key5: 'value5' }, 6],
    },
    key4: 'value4',
    key6: [1, 2, 3, 4],
    key7: {
        key8: 'value8',
        key9: false,
    },
};

// console.log(flattenObj(obj))
const x = flattenObj(obj)
console.log(x)