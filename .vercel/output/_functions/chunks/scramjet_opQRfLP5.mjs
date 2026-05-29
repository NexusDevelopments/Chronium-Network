const scramjet = new Proxy({"src":"/_astro/scramjet.zkkO1Zcw.webp","width":96,"height":96,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/workspaces/Chronium-Network/src/assets/credits/scramjet.webp";
							}
							
							return target[name];
						}
					});

export { scramjet as default };
