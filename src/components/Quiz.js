import React, {
    Component
} from 'react';
import Question from './Question';
import Answer from './Answer'
class Quiz extends Component {
    constructor(props) {
        super(props);
        this.checkAnswers = this.checkAnswers.bind(this)
        this.state = {
            questions : [{
                id : 1,
                content: "1+1 = 2?",
                answer: [
                    {
                        id:1,
                        text:'True',
                        value:true,
                    },
                    {
                        id: 2,
                        text: 'False',
                        value: false,
                    }
                ],
                realAnswer:true,
                },
                {
                    id:2,
                    content: "2+2 = 3?",
                    answer: [
                        {
                            id: 1,
                            text:'Yes',
                            value:true,
                        },
                        {
                            id:2,
                            text:'No',
                            value:false,
                        }

                    ],
                    realAnswer:false,
                }
            ],
            result:''
        }
    }
    render() {
        const questions = this.state.questions
        return (<div>
                    
                    {questions.map((question, questionIdx) => {
                        return (
                            <div key={question.id}>
                            <Question content= {question.content} />
                            <Answer choices ={question.answer} 
                                    onAnswerSelect= {(answerVal) => this.onSelectAnswers(questionIdx,answerVal)} 
                                    name={question.id}/>
                            </div>
                            )
                    })}
                    <button type='button' onClick={this.checkAnswers}> Check Answers </button>
                    <p> {this.state.result} </p>
                </div>)
    }

    onSelectAnswers(questionIdx, answerVal) {
        
        let questions = this.state.questions;
        questions[questionIdx].userAnswer = answerVal;
        this.setState({questions: questions})
        console.log(' questionIdx select value', this.state);
    }

    checkAnswers() {
        console.log(this)
        let questions = this.state.questions;
        var allRight = questions.map((question) => question.userAnswer === question.realAnswer)
                                .every(x => x === true)
        if (allRight) {
            this.setState({result:'all answer right!'})
        }else {
            this.setState({result:'some answer wrong!'})
        }
        
    }
}
export default Quiz