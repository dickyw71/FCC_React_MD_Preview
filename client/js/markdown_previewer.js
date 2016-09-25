var mdText = "*Hello world*! I am a **Markdown** Previewer."

var MarkdownPreviewer = React.createClass({
  getInitialState: function() {
    return {
      value: mdText
    }
  },
  render: function() {
    return (
      <div className="markdown-previewer">
        <MarkdownForm mdText={this.state.value}  />
        <MarkdownPreview previewText={this.state.value}/>
      </div>
    );
  }
});

var MarkdownForm = React.createClass({
  render: function() {
    return (
      <div className="markdown-form">
        <form>
          <textarea className="md-textarea" value={this.props.mdText} />        
        </form>
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

