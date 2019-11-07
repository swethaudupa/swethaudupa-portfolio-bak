const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
	const { createNodeField } = boundActionCreators;
	if (node.internal.type === 'MarkdownRemark') {
		// I put the index.js with index.md. Therefore, I have to give it specific path
		const slug = createFilePath({ node, getNode, basePath: 'pages' });
		// const slug = createFilePath({ node, getNode, basePath: 'pages' }).concat('index.md');
		// console.log(`slug for ${node.id} : ${slug}`);
		createNodeField({
			node,
			name: 'slug',
			value: slug,
		});
	}
};