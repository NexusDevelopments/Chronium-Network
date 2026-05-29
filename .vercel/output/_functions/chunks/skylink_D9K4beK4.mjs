const skylink = new Proxy({"src":"/_astro/skylink.q-vs06AA.png","width":2100,"height":1500,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/workspaces/Chronium-Network/src/assets/credits/skylink.png";
							}
							
							return target[name];
						}
					});

export { skylink as default };
