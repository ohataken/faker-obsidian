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

    this.addCommand({
      id: 'faker-commerce-price',
      name: 'faker.commerce.price',
      editorCallback: (editor: Editor) => {
        editor.replaceSelection(faker.commerce.price());
      },
    });

    this.addCommand({
      id: 'faker-commerce-isbn',
      name: 'faker.commerce.isbn',
      editorCallback: (editor: Editor) => {
        editor.replaceSelection(faker.commerce.isbn());
      },
    });

    this.addCommand({
      id: 'faker-commerce-upc',
      name: 'faker.commerce.upc',
      editorCallback: (editor: Editor) => {
        editor.replaceSelection(faker.commerce.upc());
      },
    });

    this.addCommand({
      id: 'faker-company-name',
      name: 'faker.company.name',
      editorCallback: (editor: Editor) => {
        editor.replaceSelection(faker.company.name());
      },
    });

    this.addCommand({
      id: 'faker-company-catch-phrase',
      name: 'faker.company.catchPhrase',
      editorCallback: (editor: Editor) => {
        editor.replaceSelection(faker.company.catchPhrase());
      },
    });

    this.addCommand({
      id: 'faker-company-buzz-phrase',
      name: 'faker.company.buzzPhrase',
      editorCallback: (editor: Editor) => {
        editor.replaceSelection(faker.company.buzzPhrase());
      },
    });

    this.addCommand({
      id: 'faker-date-recent',
      name: 'faker.date.recent',
      editorCallback: (editor: Editor) => {
        editor.replaceSelection(faker.date.recent().toISOString());
      },
    });

    this.addCommand({
      id: 'faker-date-future',
      name: 'faker.date.future',
      editorCallback: (editor: Editor) => {
        editor.replaceSelection(faker.date.future().toISOString());
      },
    });

    this.addCommand({
      id: 'faker-date-past',
      name: 'faker.date.past',
      editorCallback: (editor: Editor) => {
        editor.replaceSelection(faker.date.past().toISOString());
      },
    });

    this.addCommand({
      id: 'faker-date-birthdate',
      name: 'faker.date.birthdate',
      editorCallback: (editor: Editor) => {
        editor.replaceSelection(faker.date.birthdate().toISOString());
      },
    });

    this.addCommand({
      id: 'faker-finance-credit-card-number',
      name: 'faker.finance.creditCardNumber',
      editorCallback: (editor: Editor) => {
        editor.replaceSelection(faker.finance.creditCardNumber());
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
