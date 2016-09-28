var mdText = `Heading
=======

Sub-heading
-----------
 
### Another deeper heading
 
Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a  
line break

Text attributes *italic*, **bold**, 
\`monospace\`, ~~strikethrough~~ .

Shopping list:

  * apples
  * oranges
  * pears

Numbered list:

  1. apples
  2. oranges
  3. pears

The rain---not the reign---in
Spain.

 *[Richard Wheatley](https://freecodecamp.com/dickyw71)*`;


var MarkdownPreviewer = React.createClass({

  render: function() {
    return (
      <div className="markdown-previewer">
        <MarkdownForm />
      </div>
    );
  }
});

var MarkdownForm = React.createClass({
  getInitialState: function() {
    return {
      value: mdText
    }
  },
  handleMarkdownTextChange(e) {
    this.setState({value: e.target.value});
  },
  render: function() {
    return (
      <div className="markdown-form">
        <form>
          <textarea 
            col="60" 
            rows="30" 
            className="md-textarea" 
            value={this.state.value} 
            onChange = {this.handleMarkdownTextChange}
          />        
          </form>
          <MarkdownPreview previewText={this.state.value}/>
        </div>
    );
  }
})

var MarkdownPreview = React.createClass({ 
  rawMarkup: function() { 
    var rawMarkup = marked(this.props.previewText);
    return {
      __html: rawMarkup
    };
  },
  render: function() {
    return (
      <div className="markdown-preview">
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    );
  }
})

ReactDOM.render(
  <MarkdownPreviewer />,
  document.getElementById('content')
);