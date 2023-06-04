module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.jsx",
    "../src/**/*.stories.js",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
		'@etchteam/storybook-addon-status',
		'@whitespace/storybook-addon-html',
		'@storybook/addon-a11y',
		'storybook-mobile',
		'storybook-addon-html-validator',
		{
			name: 'storybook-addon-sass-postcss',
			options: {
				rule: {
					test: /\.(scss|sass)$/i,
				},
			},
		},
  ],
  core: {
    disableTelemetry: true,
    enableCrashReports: false,
  },
  babel: async (options) => ({
		...options,
		presets: [
			"@babel/preset-react",
		],
  }),
  framework: "@storybook/html",
  staticDirs: [
		"./public",
  ],
  resolve: {
		extensions: ['.js', '.jsx', '.json', '.css', '.scss'],
		modules: ['src', 'node_modules']
  }
}
