const scaratek = new Proxy({"src":"/_astro/scaratek.BCW0ign0.jpg","width":650,"height":650,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/workspaces/Chronium-Network/src/assets/credits/scaratek.jpg";
							}
							
							return target[name];
						}
					});

export { scaratek as default };
