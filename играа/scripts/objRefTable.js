const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Tilemap,
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.solid,
		C3.Behaviors.Bullet,
		C3.Plugins.Keyboard,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.Sprite.Acts.Destroy
	];
};
self.C3_JsPropNameTable = [
	{КартаТайлов: 0},
	{КартаТайлов2: 0},
	{Спрайт: 0},
	{Платформер: 0},
	{Спрайт2: 0},
	{Твёрдый: 0},
	{Спрайт3: 0},
	{Спрайт4: 0},
	{Пуля: 0},
	{Спрайт5: 0},
	{Спрайт6: 0},
	{Клавиатура: 0},
	{faza: 0},
	{hp: 0},
	{hp2: 0}
];

self.InstanceType = {
	КартаТайлов: class extends self.ITilemapInstance {},
	КартаТайлов2: class extends self.ITilemapInstance {},
	Спрайт: class extends self.ISpriteInstance {},
	Спрайт2: class extends self.ISpriteInstance {},
	Спрайт3: class extends self.ISpriteInstance {},
	Спрайт4: class extends self.ISpriteInstance {},
	Спрайт5: class extends self.ISpriteInstance {},
	Спрайт6: class extends self.ISpriteInstance {},
	Клавиатура: class extends self.IInstance {}
}