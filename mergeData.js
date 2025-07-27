function mergeData(dataArr){

  const resObj = {}

  dataArr.forEach(el => {
    if(resObj[el.user]){
      let resEntry = resObj[el.user]
      resEntry.duration = resEntry.duration + el.duration
      resEntry.equipment = [...resEntry.equipment,...el.equipment]
    }else{
      resObj[el.user] = el
    }
  });

  return Object.values(resObj)
    
}

const data= [
  { user: 8, duration: 50, equipment: ['bench'] },
  { user: 7, duration: 150, equipment: ['dumbbell'] },
  { user: 1, duration: 10, equipment: ['barbell'] },
  { user: 7, duration: 100, equipment: ['bike', 'kettlebell'] },
  { user: 7, duration: 200, equipment: ['bike'] },
  { user: 2, duration: 200, equipment: ['treadmill'] },
  { user: 2, duration: 200, equipment: ['bike'] },
];

const x = mergeData(data)

console.log(x)