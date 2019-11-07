module.exports = {
	siteMetadata: {
		title: `Swetha Udupa`,
		description: `Personal portfolio of Swetha Udupa`,
		author: `@swethaudupa`,
	},
	plugins: [
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/pages`,
			},
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: 'gatsby-plugin-typography',
			options: {
				pathToConfigModule: 'src/utils/typography',
			},
		},
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [
					`gatsby-remark-emoji`,
					'gatsby-remark-copy-linked-files',
					{
						resolve: 'gatsby-remark-images',
						options: {
							maxWidth: 590,
							linkImagesToOriginal: false,
							sizeByPixelDensity: true,
						},
					},
					'gatsby-remark-responsive-iframe',
					`gatsby-remark-prismjs`,
					`gatsby-remark-autolink-headers`,
					{
						resolve: `gatsby-remark-smartypants`,
						options: {
							dashes: 'oldschool',
						},
					},
				],
			},
		},
		`gatsby-plugin-catch-links`,
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
}
