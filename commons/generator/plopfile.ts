import { NodePlopAPI } from 'plop';
import path from "path";

const ROOT_MONOREPO = path.resolve("..", "..");

export default function (plop: NodePlopAPI) {
	plop.setGenerator('basics', {
		description: 'this is a skeleton plopfile',
		prompts: [],
		actions: []
	});

	commonPackage(plop);
}

function commonPackage(plop: NodePlopAPI) {
	plop.setGenerator('common-package', {
		description: 'Create a new common package inside `./commons` folder',
		prompts: [{
			type: "input",
			name: "packageName",
			message: "What is package name?"
		}],
		actions: [
			{
				type: "add",
				path: path.resolve(ROOT_MONOREPO, "commons", "{{ lowerCase packageName}}", "package.json"),
				templateFile: "templates/common-package/package.json.hbs"
			},
			{
				type: "add",
				path: path.resolve(ROOT_MONOREPO, "commons", "{{ lowerCase packageName}}", "eslint.config.mjs"),
				templateFile: "templates/common-package/eslint.config.mjs.hbs"
			},
			{
				type: "add",
				path: path.resolve(ROOT_MONOREPO, "commons", "{{ lowerCase packageName}}", "jest.config.ts"),
				templateFile: "templates/common-package/jest.config.ts.hbs"
			}
		]
	});
}
