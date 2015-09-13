'use strict'
var React = require('react')
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var tools = require('./stores/toolStore')
var questions = require('./stores/questionStore')
var selections = require('./stores/selectionStore')

module.exports = React.createClass({
    displayName: 'Survey',

    componentWillMount: function () {
    	selections.addChangeListener(this._onChange)
    },

    _onChange: function () {
    	this.forceUpdate()
    },

    render: function () {
    	return <div className="wrapper">
	    	<div className="survey">
	    	<h2>Answer some simple questions about your project:</h2>
	    	{questions.map(function (q, i) {
	    		return <Question data = {q} count = {i + 1}/>
	    	})}
	    	</div>
	    	<div className="tools">
	    	<h2>These are the relevant tools:</h2>
	    	{
	    	tools.filter(function(tool) {
	    		return true
	    	}).map(function (tool, i) {
	    		var active = Object.keys(selections.getAllSelections()).map(function (q) {
	    			return (!(q in tool) || (tool[q] === selections.getSelection(q)))
	    		}).reduce(function (a,b) {return a && b}, true)
	    		
	    		return <span key={tool.id} className={"tool " + (active ? tool.phase : "grayed")}>{tool.name}</span>
	    	}).sort(function(a, b) {
	    		return a.name > b.name
	    	})
	    	}
	    	</div>
    	</div>
    }
})

var Question = React.createClass({
	getInitialState: function () {
		return {choice: null}
	},

	onChoice: function (e) {
		var q = this.props.data
		selections.setSelection(q.id, e.currentTarget.name)
		this.forceUpdate()
	},

	render: function() {
		var _this = this
		var q = this.props.data
		var id = q.id
    	var question = q.text
    	var choices = q.choices
    	var count = this.props.count

        return 	<div key={"q-" + q.id} className="question">
        	<div> <span className="num-circle">{count}. </span>{question} </div>
        	{
        		choices.map(function (choice) {
        			var value = selections[q.id]
        			var active = (selections.getSelection(q.id) === choice.id)
        			return <div className = "choice">
        			<label>
        			<span><input 	type="radio" 
        							onChange = {_this.onChoice}
        							checked = {active}
        							name={choice.id}/>
        			</span>
        			<span className={active ? 'selected' : ''}>
        				{choice.text}
        			</span>
        			</label>
        			</div>
        		})
        	}
        </div>
    }
})