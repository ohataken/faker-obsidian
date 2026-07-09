import { faker } from '@faker-js/faker';
import { Editor, Plugin } from 'obsidian';
import {
  DEFAULT_SETTINGS,
  FakerObsidianSettings,
  FakerObsidianSettingTab,
} from './settings';

export default class FakerObsidianPlugin extends Plugin {
  settings!: FakerObsidianSettings;

  async onload() {
    await this.loadSettings();

    this.addCommand({
      id: 'faker-commerce-product-name',
      name: 'faker.commerce.productName',
      editorCallback: (editor: Editor) => {
        editor.replaceSelection(faker.commerce.productName());
      },
    });

    this.addCommand({
      id: 'faker-commerce-product-description',
      name: 'faker.commerce.productDescription',
      editorCallback: (editor: Editor) => {
        editor.replaceSelection(faker.commerce.productDescription());
      },
    });

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
