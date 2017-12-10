import { ipcMain, app } from 'electron';
import WindowManager from './window';

export default class IpcManager {

	windowManager: WindowManager;

	constructor(win: WindowManager) {
		this.windowManager = win;
	}

	activeAppEvents() {
		ipcMain.on('app-quit', () => {
			app.quit();
		});
	}

	activateWindowEvents() {
		ipcMain.on('window-minimize', () => {
			this.windowManager.hideWindow();
		});
	}
}