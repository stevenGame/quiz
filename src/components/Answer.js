import React, {
    Component
} from 'react';
class Answer extends Component {
    
    render() {
        const choices = this.props.choices;
        const name = this.props.name;
        return (
           <div>
               {choices.map((ans) => (
                                    <div key={ans.id}>
                                        <input type="radio" name={name} value={ans.value} 
                                        onClick={() => this.onAnswerSelect(ans.value)}> 
                                        </input>
                                        <label > {ans.text}</label>
                                    </div> 
                                    ))}
            
            </div>) ;
    }
    onAnswerSelect(val) {
        this.props.onAnswerSelect(val)
    }
}
export default Answer