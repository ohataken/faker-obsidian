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

    this.addCommand({
      id: 'faker-finance-credit-card-cvv',
      name: 'faker.finance.creditCardCVV',
      editorCallback: (editor: Editor) => {
        editor.replaceSelection(faker.finance.creditCardCVV());
      },
    });

    this.addCommand({
      id: 'faker-finance-iban',
      name: 'faker.finance.iban',
      editorCallback: (editor: Editor) => {
        editor.replaceSelection(faker.finance.iban());
      },
    });

    this.addCommand({
      id: 'faker-finance-bic',
      name: 'faker.finance.bic',
      editorCallback: (editor: Editor) => {
        editor.replaceSelection(faker.finance.bic());
      },
    });

    this.addCommand({
      id: 'faker-finance-bitcoin-address',
      name: 'faker.finance.bitcoinAddress',
      editorCallback: (editor: Editor) => {
        editor.replaceSelection(faker.finance.bitcoinAddress());
      },
    });

    this.addCommand({
      id: 'faker-finance-ethereum-address',
      name: 'faker.finance.ethereumAddress',
      editorCallback: (editor: Editor) => {
        editor.replaceSelection(faker.finance.ethereumAddress());
      },
    });

    this.addCommand({
      id: 'faker-git-branch',
      name: 'faker.git.branch',
      editorCallback: (editor: Editor) => {
        editor.replaceSelection(faker.git.branch());
      },
    });

    this.addCommand({
      id: 'faker-git-commit-sha',
      name: 'faker.git.commitSha',
      editorCallback: (editor: Editor) => {
        editor.replaceSelection(faker.git.commitSha());
      },
    });

    this.addCommand({
      id: 'faker-git-commit-message',
      name: 'faker.git.commitMessage',
      editorCallback: (editor: Editor) => {
        editor.replaceSelection(faker.git.commitMessage());
      },
    });

    this.addCommand({
      id: 'faker-internet-username',
      name: 'faker.internet.username',
      editorCallback: (editor: Editor) => {
        editor.replaceSelection(faker.internet.username());
      },
    });

    this.addCommand({
      id: 'faker-internet-email',
      name: 'faker.internet.email',
      editorCallback: (editor: Editor) => {
        editor.replaceSelection(faker.internet.email());
      },
    });

    this.addCommand({
      id: 'faker-internet-example-email',
      name: 'faker.internet.exampleEmail',
      editorCallback: (editor: Editor) => {
        editor.replaceSelection(faker.internet.exampleEmail());
      },
    });

    this.addCommand({
      id: 'faker-internet-password',
      name: 'faker.internet.password',
      editorCallback: (editor: Editor) => {
        editor.replaceSelection(faker.internet.password());
      },
    });

    this.addCommand({
      id: 'faker-internet-url',
      name: 'faker.internet.url',
      editorCallback: (editor: Editor) => {
        editor.replaceSelection(faker.internet.url());
      },
    });

    this.addCommand({
      id: 'faker-internet-domain-name',
      name: 'faker.internet.domainName',
      editorCallback: (editor: Editor) => {
        editor.replaceSelection(faker.internet.domainName());
      },
    });

    this.addCommand({
      id: 'faker-internet-ip',
      name: 'faker.internet.ip',
      editorCallback: (editor: Editor) => {
        editor.replaceSelection(faker.internet.ip());
      },
    });

    this.addCommand({
      id: 'faker-internet-ipv4',
      name: 'faker.internet.ipv4',
      editorCallback: (editor: Editor) => {
        editor.replaceSelection(faker.internet.ipv4());
      },
    });

    this.addCommand({
      id: 'faker-internet-ipv6',
      name: 'faker.internet.ipv6',
      editorCallback: (editor: Editor) => {
        editor.replaceSelection(faker.internet.ipv6());
      },
    });

    this.addCommand({
      id: 'faker-internet-mac',
      name: 'faker.internet.mac',
      editorCallback: (editor: Editor) => {
        editor.replaceSelection(faker.internet.mac());
      },
    });

    this.addCommand({
      id: 'faker-internet-user-agent',
      name: 'faker.internet.userAgent',
      editorCallback: (editor: Editor) => {
        editor.replaceSelection(faker.internet.userAgent());
      },
    });

    this.addCommand({
      id: 'faker-internet-emoji',
      name: 'faker.internet.emoji',
      editorCallback: (editor: Editor) => {
        editor.replaceSelection(faker.internet.emoji());
      },
    });

    this.addCommand({
      id: 'faker-location-city',
      name: 'faker.location.city',
      editorCallback: (editor: Editor) => {
        editor.replaceSelection(faker.location.city());
      },
    });

    this.addCommand({
      id: 'faker-location-country',
      name: 'faker.location.country',
      editorCallback: (editor: Editor) => {
        editor.replaceSelection(faker.location.country());
      },
    });

    this.addCommand({
      id: 'faker-location-street-address',
      name: 'faker.location.streetAddress',
      editorCallback: (editor: Editor) => {
        editor.replaceSelection(faker.location.streetAddress());
      },
    });

    this.addCommand({
      id: 'faker-location-zip-code',
      name: 'faker.location.zipCode',
      editorCallback: (editor: Editor) => {
        editor.replaceSelection(faker.location.zipCode());
      },
    });

    this.addCommand({
      id: 'faker-location-latitude',
      name: 'faker.location.latitude',
      editorCallback: (editor: Editor) => {
        editor.replaceSelection(String(faker.location.latitude()));
      },
    });

    this.addCommand({
      id: 'faker-location-longitude',
      name: 'faker.location.longitude',
      editorCallback: (editor: Editor) => {
        editor.replaceSelection(String(faker.location.longitude()));
      },
    });

    this.addCommand({
      id: 'faker-lorem-word',
      name: 'faker.lorem.word',
      editorCallback: (editor: Editor) => {
        editor.replaceSelection(faker.lorem.word());
      },
    });

    this.addCommand({
      id: 'faker-lorem-words',
      name: 'faker.lorem.words',
      editorCallback: (editor: Editor) => {
        editor.replaceSelection(faker.lorem.words());
      },
    });

    this.addCommand({
      id: 'faker-lorem-sentence',
      name: 'faker.lorem.sentence',
      editorCallback: (editor: Editor) => {
        editor.replaceSelection(faker.lorem.sentence());
      },
    });

    this.addCommand({
      id: 'faker-lorem-paragraph',
      name: 'faker.lorem.paragraph',
      editorCallback: (editor: Editor) => {
        editor.replaceSelection(faker.lorem.paragraph());
      },
    });

    this.addCommand({
      id: 'faker-person-full-name',
      name: 'faker.person.fullName',
      editorCallback: (editor: Editor) => {
        editor.replaceSelection(faker.person.fullName());
      },
    });

    this.addCommand({
      id: 'faker-person-first-name',
      name: 'faker.person.firstName',
      editorCallback: (editor: Editor) => {
        editor.replaceSelection(faker.person.firstName());
      },
    });

    this.addCommand({
      id: 'faker-person-last-name',
      name: 'faker.person.lastName',
      editorCallback: (editor: Editor) => {
        editor.replaceSelection(faker.person.lastName());
      },
    });

    this.addCommand({
      id: 'faker-person-job-title',
      name: 'faker.person.jobTitle',
      editorCallback: (editor: Editor) => {
        editor.replaceSelection(faker.person.jobTitle());
      },
    });

    this.addCommand({
      id: 'faker-person-bio',
      name: 'faker.person.bio',
      editorCallback: (editor: Editor) => {
        editor.replaceSelection(faker.person.bio());
      },
    });

    this.addCommand({
      id: 'faker-phone-number',
      name: 'faker.phone.number',
      editorCallback: (editor: Editor) => {
        editor.replaceSelection(faker.phone.number());
      },
    });

    this.addCommand({
      id: 'faker-string-uuid',
      name: 'faker.string.uuid',
      editorCallback: (editor: Editor) => {
        editor.replaceSelection(faker.string.uuid());
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
