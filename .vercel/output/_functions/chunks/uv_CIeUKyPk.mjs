const uv = new Proxy({"src":"/_astro/uv.DWukuK5o.png","width":600,"height":600,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/workspaces/Chronium-Network/src/assets/credits/uv.png";
							}
							
							return target[name];
						}
					});

export { uv as default };
