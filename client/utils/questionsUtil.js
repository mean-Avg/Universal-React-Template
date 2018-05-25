  export const makeQuestionArray=(questions=[], optionsLength, makeOptionsArray)=>{
    const index = questions.length;
    const qid=`q${index}`;
    const newQuestion = {
        qid: qid,
        question: 'newques',
        answer: -1,
        options: makeOptionsArray(optionsLength, qid),
    }

    questions.push(newQuestion);
    return questions;
  }

  export const makeOptionsArray=(optionsLength, qid)=>{
    let options=[];
      for(var i=0;i<optionsLength;i++){
        const newOption =  {value: '', oid: `${qid}o${i}`};
        options.push(newOption);
      }
      return options;
  }

