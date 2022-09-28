module.exports = {
	outExtension: { ".js": ".js" }, // override bundles-plugin default
	loader: {
		".png": "dataurl",
		".woff": "dataurl",
		".woff2": "dataurl",
		".eot": "dataurl",
		".ttf": "dataurl",
		".svg": "dataurl",
	},
};
