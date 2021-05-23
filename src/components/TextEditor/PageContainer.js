import React from "react";
import { Editor, EditorState, RichUtils } from "draft-js";

import './PageContainer.css'

class PageContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			editorState: EditorState.createEmpty()
		};
	}

	onChange = editorState => {
		this.setState({
			editorState
		});
	};

	handleKeyCommand = command => {
		const newState = RichUtils.handleKeyCommand(
			this.state.editorState,
			command
		);
		if (newState) {
			this.onChange(newState);
			return "handled";
		}
		return "not-handled";
	};

	onUnderlineClick = () => {
		this.onChange(
			RichUtils.toggleInlineStyle(this.state.editorState, "UNDERLINE")
		);
	};

	onBoldClick = () => {
		this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, "BOLD"));
	};

	onItalicClick = () => {
		this.onChange(
			RichUtils.toggleInlineStyle(this.state.editorState, "ITALIC")
		);
	};

	render() {
		return (
      <div className="wrapper">
			<div className="editorContainer">
      <div className="buttonContainer">
				<button className="editButtons" onClick={this.onUnderlineClick}>U</button>
				<button className="editButtons" onClick={this.onBoldClick}>
					<b>B</b>
				</button>
				<button className="editButtons" onClick={this.onItalicClick}>
					<em>I</em>
				</button>
        </div>
				<div className="editors">
					<Editor
						editorState={this.state.editorState}
						handleKeyCommand={this.handleKeyCommand}
						onChange={this.onChange}
					/>
				</div>
			</div>
      </div>
		);
	}
}

export default PageContainer;
