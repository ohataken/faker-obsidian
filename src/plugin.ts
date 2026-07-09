import { Plugin } from 'obsidian';
import {
  DEFAULT_SETTINGS,
  FakerObsidianSettings,
  FakerObsidianSettingTab,
} from './settings';

export default class FakerObsidianPlugin extends Plugin {
  settings!: FakerObsidianSettings;

  async onload() {
    await this.loadSettings();

    this.addSettingTab(new FakerObsidianSettingTab(this.app, this));
  }

  onunload() {}

  async loadSettings() {
    this.settings = Object.assign(
      {},
      DEFAULT_SETTINGS,
      (await this.loadData()) as Partial<FakerObsidianSettings>,
    );
  }

  async saveSettings() {
    await this.saveData(this.settings);
  }
}
