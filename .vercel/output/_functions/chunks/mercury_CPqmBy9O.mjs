const mercury = new Proxy({"src":"/_astro/mercury.C0f6z247.png","width":200,"height":200,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/workspaces/Chronium-Network/src/assets/credits/mercury.png";
							}
							
							return target[name];
						}
					});

export { mercury as default };
