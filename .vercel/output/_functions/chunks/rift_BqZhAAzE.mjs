const rift = new Proxy({"src":"/_astro/rift.BifYrwIm.jpeg","width":460,"height":460,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/workspaces/Chronium-Network/src/assets/credits/rift.jpeg";
							}
							
							return target[name];
						}
					});

export { rift as default };
