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
      editorCheckCallback: (checking: boolean, editor: Editor) => {
        if (!this.isCommandEnabled('faker-commerce-product-name')) {
          return false;
        }

        if (!checking) {
          editor.replaceSelection(faker.commerce.productName());
        }

        return true;
      },
    });

    this.addCommand({
      id: 'faker-commerce-product-description',
      name: 'faker.commerce.productDescription',
      editorCheckCallback: (checking: boolean, editor: Editor) => {
        if (!this.isCommandEnabled('faker-commerce-product-description')) {
          return false;
        }

        if (!checking) {
          editor.replaceSelection(faker.commerce.productDescription());
        }

        return true;
      },
    });

    this.addCommand({
      id: 'faker-commerce-price',
      name: 'faker.commerce.price',
      editorCheckCallback: (checking: boolean, editor: Editor) => {
        if (!this.isCommandEnabled('faker-commerce-price')) {
          return false;
        }

        if (!checking) {
          editor.replaceSelection(faker.commerce.price());
        }

        return true;
      },
    });

    this.addCommand({
      id: 'faker-commerce-isbn',
      name: 'faker.commerce.isbn',
      editorCheckCallback: (checking: boolean, editor: Editor) => {
        if (!this.isCommandEnabled('faker-commerce-isbn')) {
          return false;
        }

        if (!checking) {
          editor.replaceSelection(faker.commerce.isbn());
        }

        return true;
      },
    });

    this.addCommand({
      id: 'faker-commerce-upc',
      name: 'faker.commerce.upc',
      editorCheckCallback: (checking: boolean, editor: Editor) => {
        if (!this.isCommandEnabled('faker-commerce-upc')) {
          return false;
        }

        if (!checking) {
          editor.replaceSelection(faker.commerce.upc());
        }

        return true;
      },
    });

    this.addCommand({
      id: 'faker-company-name',
      name: 'faker.company.name',
      editorCheckCallback: (checking: boolean, editor: Editor) => {
        if (!this.isCommandEnabled('faker-company-name')) {
          return false;
        }

        if (!checking) {
          editor.replaceSelection(faker.company.name());
        }

        return true;
      },
    });

    this.addCommand({
      id: 'faker-company-catch-phrase',
      name: 'faker.company.catchPhrase',
      editorCheckCallback: (checking: boolean, editor: Editor) => {
        if (!this.isCommandEnabled('faker-company-catch-phrase')) {
          return false;
        }

        if (!checking) {
          editor.replaceSelection(faker.company.catchPhrase());
        }

        return true;
      },
    });

    this.addCommand({
      id: 'faker-company-buzz-phrase',
      name: 'faker.company.buzzPhrase',
      editorCheckCallback: (checking: boolean, editor: Editor) => {
        if (!this.isCommandEnabled('faker-company-buzz-phrase')) {
          return false;
        }

        if (!checking) {
          editor.replaceSelection(faker.company.buzzPhrase());
        }

        return true;
      },
    });

    this.addCommand({
      id: 'faker-date-recent',
      name: 'faker.date.recent',
      editorCheckCallback: (checking: boolean, editor: Editor) => {
        if (!this.isCommandEnabled('faker-date-recent')) {
          return false;
        }

        if (!checking) {
          editor.replaceSelection(faker.date.recent().toISOString());
        }

        return true;
      },
    });

    this.addCommand({
      id: 'faker-date-future',
      name: 'faker.date.future',
      editorCheckCallback: (checking: boolean, editor: Editor) => {
        if (!this.isCommandEnabled('faker-date-future')) {
          return false;
        }

        if (!checking) {
          editor.replaceSelection(faker.date.future().toISOString());
        }

        return true;
      },
    });

    this.addCommand({
      id: 'faker-date-past',
      name: 'faker.date.past',
      editorCheckCallback: (checking: boolean, editor: Editor) => {
        if (!this.isCommandEnabled('faker-date-past')) {
          return false;
        }

        if (!checking) {
          editor.replaceSelection(faker.date.past().toISOString());
        }

        return true;
      },
    });

    this.addCommand({
      id: 'faker-date-birthdate',
      name: 'faker.date.birthdate',
      editorCheckCallback: (checking: boolean, editor: Editor) => {
        if (!this.isCommandEnabled('faker-date-birthdate')) {
          return false;
        }

        if (!checking) {
          editor.replaceSelection(faker.date.birthdate().toISOString());
        }

        return true;
      },
    });

    this.addCommand({
      id: 'faker-finance-credit-card-number',
      name: 'faker.finance.creditCardNumber',
      editorCheckCallback: (checking: boolean, editor: Editor) => {
        if (!this.isCommandEnabled('faker-finance-credit-card-number')) {
          return false;
        }

        if (!checking) {
          editor.replaceSelection(faker.finance.creditCardNumber());
        }

        return true;
      },
    });

    this.addCommand({
      id: 'faker-finance-credit-card-cvv',
      name: 'faker.finance.creditCardCVV',
      editorCheckCallback: (checking: boolean, editor: Editor) => {
        if (!this.isCommandEnabled('faker-finance-credit-card-cvv')) {
          return false;
        }

        if (!checking) {
          editor.replaceSelection(faker.finance.creditCardCVV());
        }

        return true;
      },
    });

    this.addCommand({
      id: 'faker-finance-iban',
      name: 'faker.finance.iban',
      editorCheckCallback: (checking: boolean, editor: Editor) => {
        if (!this.isCommandEnabled('faker-finance-iban')) {
          return false;
        }

        if (!checking) {
          editor.replaceSelection(faker.finance.iban());
        }

        return true;
      },
    });

    this.addCommand({
      id: 'faker-finance-bic',
      name: 'faker.finance.bic',
      editorCheckCallback: (checking: boolean, editor: Editor) => {
        if (!this.isCommandEnabled('faker-finance-bic')) {
          return false;
        }

        if (!checking) {
          editor.replaceSelection(faker.finance.bic());
        }

        return true;
      },
    });

    this.addCommand({
      id: 'faker-finance-bitcoin-address',
      name: 'faker.finance.bitcoinAddress',
      editorCheckCallback: (checking: boolean, editor: Editor) => {
        if (!this.isCommandEnabled('faker-finance-bitcoin-address')) {
          return false;
        }

        if (!checking) {
          editor.replaceSelection(faker.finance.bitcoinAddress());
        }

        return true;
      },
    });

    this.addCommand({
      id: 'faker-finance-ethereum-address',
      name: 'faker.finance.ethereumAddress',
      editorCheckCallback: (checking: boolean, editor: Editor) => {
        if (!this.isCommandEnabled('faker-finance-ethereum-address')) {
          return false;
        }

        if (!checking) {
          editor.replaceSelection(faker.finance.ethereumAddress());
        }

        return true;
      },
    });

    this.addCommand({
      id: 'faker-git-branch',
      name: 'faker.git.branch',
      editorCheckCallback: (checking: boolean, editor: Editor) => {
        if (!this.isCommandEnabled('faker-git-branch')) {
          return false;
        }

        if (!checking) {
          editor.replaceSelection(faker.git.branch());
        }

        return true;
      },
    });

    this.addCommand({
      id: 'faker-git-commit-sha',
      name: 'faker.git.commitSha',
      editorCheckCallback: (checking: boolean, editor: Editor) => {
        if (!this.isCommandEnabled('faker-git-commit-sha')) {
          return false;
        }

        if (!checking) {
          editor.replaceSelection(faker.git.commitSha());
        }

        return true;
      },
    });

    this.addCommand({
      id: 'faker-git-commit-message',
      name: 'faker.git.commitMessage',
      editorCheckCallback: (checking: boolean, editor: Editor) => {
        if (!this.isCommandEnabled('faker-git-commit-message')) {
          return false;
        }

        if (!checking) {
          editor.replaceSelection(faker.git.commitMessage());
        }

        return true;
      },
    });

    this.addCommand({
      id: 'faker-internet-username',
      name: 'faker.internet.username',
      editorCheckCallback: (checking: boolean, editor: Editor) => {
        if (!this.isCommandEnabled('faker-internet-username')) {
          return false;
        }

        if (!checking) {
          editor.replaceSelection(faker.internet.username());
        }

        return true;
      },
    });

    this.addCommand({
      id: 'faker-internet-email',
      name: 'faker.internet.email',
      editorCheckCallback: (checking: boolean, editor: Editor) => {
        if (!this.isCommandEnabled('faker-internet-email')) {
          return false;
        }

        if (!checking) {
          editor.replaceSelection(faker.internet.email());
        }

        return true;
      },
    });

    this.addCommand({
      id: 'faker-internet-example-email',
      name: 'faker.internet.exampleEmail',
      editorCheckCallback: (checking: boolean, editor: Editor) => {
        if (!this.isCommandEnabled('faker-internet-example-email')) {
          return false;
        }

        if (!checking) {
          editor.replaceSelection(faker.internet.exampleEmail());
        }

        return true;
      },
    });

    this.addCommand({
      id: 'faker-internet-password',
      name: 'faker.internet.password',
      editorCheckCallback: (checking: boolean, editor: Editor) => {
        if (!this.isCommandEnabled('faker-internet-password')) {
          return false;
        }

        if (!checking) {
          editor.replaceSelection(faker.internet.password());
        }

        return true;
      },
    });

    this.addCommand({
      id: 'faker-internet-url',
      name: 'faker.internet.url',
      editorCheckCallback: (checking: boolean, editor: Editor) => {
        if (!this.isCommandEnabled('faker-internet-url')) {
          return false;
        }

        if (!checking) {
          editor.replaceSelection(faker.internet.url());
        }

        return true;
      },
    });

    this.addCommand({
      id: 'faker-internet-domain-name',
      name: 'faker.internet.domainName',
      editorCheckCallback: (checking: boolean, editor: Editor) => {
        if (!this.isCommandEnabled('faker-internet-domain-name')) {
          return false;
        }

        if (!checking) {
          editor.replaceSelection(faker.internet.domainName());
        }

        return true;
      },
    });

    this.addCommand({
      id: 'faker-internet-ip',
      name: 'faker.internet.ip',
      editorCheckCallback: (checking: boolean, editor: Editor) => {
        if (!this.isCommandEnabled('faker-internet-ip')) {
          return false;
        }

        if (!checking) {
          editor.replaceSelection(faker.internet.ip());
        }

        return true;
      },
    });

    this.addCommand({
      id: 'faker-internet-ipv4',
      name: 'faker.internet.ipv4',
      editorCheckCallback: (checking: boolean, editor: Editor) => {
        if (!this.isCommandEnabled('faker-internet-ipv4')) {
          return false;
        }

        if (!checking) {
          editor.replaceSelection(faker.internet.ipv4());
        }

        return true;
      },
    });

    this.addCommand({
      id: 'faker-internet-ipv6',
      name: 'faker.internet.ipv6',
      editorCheckCallback: (checking: boolean, editor: Editor) => {
        if (!this.isCommandEnabled('faker-internet-ipv6')) {
          return false;
        }

        if (!checking) {
          editor.replaceSelection(faker.internet.ipv6());
        }

        return true;
      },
    });

    this.addCommand({
      id: 'faker-internet-mac',
      name: 'faker.internet.mac',
      editorCheckCallback: (checking: boolean, editor: Editor) => {
        if (!this.isCommandEnabled('faker-internet-mac')) {
          return false;
        }

        if (!checking) {
          editor.replaceSelection(faker.internet.mac());
        }

        return true;
      },
    });

    this.addCommand({
      id: 'faker-internet-user-agent',
      name: 'faker.internet.userAgent',
      editorCheckCallback: (checking: boolean, editor: Editor) => {
        if (!this.isCommandEnabled('faker-internet-user-agent')) {
          return false;
        }

        if (!checking) {
          editor.replaceSelection(faker.internet.userAgent());
        }

        return true;
      },
    });

    this.addCommand({
      id: 'faker-internet-emoji',
      name: 'faker.internet.emoji',
      editorCheckCallback: (checking: boolean, editor: Editor) => {
        if (!this.isCommandEnabled('faker-internet-emoji')) {
          return false;
        }

        if (!checking) {
          editor.replaceSelection(faker.internet.emoji());
        }

        return true;
      },
    });

    this.addCommand({
      id: 'faker-location-city',
      name: 'faker.location.city',
      editorCheckCallback: (checking: boolean, editor: Editor) => {
        if (!this.isCommandEnabled('faker-location-city')) {
          return false;
        }

        if (!checking) {
          editor.replaceSelection(faker.location.city());
        }

        return true;
      },
    });

    this.addCommand({
      id: 'faker-location-country',
      name: 'faker.location.country',
      editorCheckCallback: (checking: boolean, editor: Editor) => {
        if (!this.isCommandEnabled('faker-location-country')) {
          return false;
        }

        if (!checking) {
          editor.replaceSelection(faker.location.country());
        }

        return true;
      },
    });

    this.addCommand({
      id: 'faker-location-street-address',
      name: 'faker.location.streetAddress',
      editorCheckCallback: (checking: boolean, editor: Editor) => {
        if (!this.isCommandEnabled('faker-location-street-address')) {
          return false;
        }

        if (!checking) {
          editor.replaceSelection(faker.location.streetAddress());
        }

        return true;
      },
    });

    this.addCommand({
      id: 'faker-location-zip-code',
      name: 'faker.location.zipCode',
      editorCheckCallback: (checking: boolean, editor: Editor) => {
        if (!this.isCommandEnabled('faker-location-zip-code')) {
          return false;
        }

        if (!checking) {
          editor.replaceSelection(faker.location.zipCode());
        }

        return true;
      },
    });

    this.addCommand({
      id: 'faker-location-latitude',
      name: 'faker.location.latitude',
      editorCheckCallback: (checking: boolean, editor: Editor) => {
        if (!this.isCommandEnabled('faker-location-latitude')) {
          return false;
        }

        if (!checking) {
          editor.replaceSelection(String(faker.location.latitude()));
        }

        return true;
      },
    });

    this.addCommand({
      id: 'faker-location-longitude',
      name: 'faker.location.longitude',
      editorCheckCallback: (checking: boolean, editor: Editor) => {
        if (!this.isCommandEnabled('faker-location-longitude')) {
          return false;
        }

        if (!checking) {
          editor.replaceSelection(String(faker.location.longitude()));
        }

        return true;
      },
    });

    this.addCommand({
      id: 'faker-lorem-word',
      name: 'faker.lorem.word',
      editorCheckCallback: (checking: boolean, editor: Editor) => {
        if (!this.isCommandEnabled('faker-lorem-word')) {
          return false;
        }

        if (!checking) {
          editor.replaceSelection(faker.lorem.word());
        }

        return true;
      },
    });

    this.addCommand({
      id: 'faker-lorem-words',
      name: 'faker.lorem.words',
      editorCheckCallback: (checking: boolean, editor: Editor) => {
        if (!this.isCommandEnabled('faker-lorem-words')) {
          return false;
        }

        if (!checking) {
          editor.replaceSelection(faker.lorem.words());
        }

        return true;
      },
    });

    this.addCommand({
      id: 'faker-lorem-sentence',
      name: 'faker.lorem.sentence',
      editorCheckCallback: (checking: boolean, editor: Editor) => {
        if (!this.isCommandEnabled('faker-lorem-sentence')) {
          return false;
        }

        if (!checking) {
          editor.replaceSelection(faker.lorem.sentence());
        }

        return true;
      },
    });

    this.addCommand({
      id: 'faker-lorem-paragraph',
      name: 'faker.lorem.paragraph',
      editorCheckCallback: (checking: boolean, editor: Editor) => {
        if (!this.isCommandEnabled('faker-lorem-paragraph')) {
          return false;
        }

        if (!checking) {
          editor.replaceSelection(faker.lorem.paragraph());
        }

        return true;
      },
    });

    this.addCommand({
      id: 'faker-person-full-name',
      name: 'faker.person.fullName',
      editorCheckCallback: (checking: boolean, editor: Editor) => {
        if (!this.isCommandEnabled('faker-person-full-name')) {
          return false;
        }

        if (!checking) {
          editor.replaceSelection(faker.person.fullName());
        }

        return true;
      },
    });

    this.addCommand({
      id: 'faker-person-first-name',
      name: 'faker.person.firstName',
      editorCheckCallback: (checking: boolean, editor: Editor) => {
        if (!this.isCommandEnabled('faker-person-first-name')) {
          return false;
        }

        if (!checking) {
          editor.replaceSelection(faker.person.firstName());
        }

        return true;
      },
    });

    this.addCommand({
      id: 'faker-person-last-name',
      name: 'faker.person.lastName',
      editorCheckCallback: (checking: boolean, editor: Editor) => {
        if (!this.isCommandEnabled('faker-person-last-name')) {
          return false;
        }

        if (!checking) {
          editor.replaceSelection(faker.person.lastName());
        }

        return true;
      },
    });

    this.addCommand({
      id: 'faker-person-job-title',
      name: 'faker.person.jobTitle',
      editorCheckCallback: (checking: boolean, editor: Editor) => {
        if (!this.isCommandEnabled('faker-person-job-title')) {
          return false;
        }

        if (!checking) {
          editor.replaceSelection(faker.person.jobTitle());
        }

        return true;
      },
    });

    this.addCommand({
      id: 'faker-person-bio',
      name: 'faker.person.bio',
      editorCheckCallback: (checking: boolean, editor: Editor) => {
        if (!this.isCommandEnabled('faker-person-bio')) {
          return false;
        }

        if (!checking) {
          editor.replaceSelection(faker.person.bio());
        }

        return true;
      },
    });

    this.addCommand({
      id: 'faker-phone-number',
      name: 'faker.phone.number',
      editorCheckCallback: (checking: boolean, editor: Editor) => {
        if (!this.isCommandEnabled('faker-phone-number')) {
          return false;
        }

        if (!checking) {
          editor.replaceSelection(faker.phone.number());
        }

        return true;
      },
    });

    this.addCommand({
      id: 'faker-string-uuid',
      name: 'faker.string.uuid',
      editorCheckCallback: (checking: boolean, editor: Editor) => {
        if (!this.isCommandEnabled('faker-string-uuid')) {
          return false;
        }

        if (!checking) {
          editor.replaceSelection(faker.string.uuid());
        }

        return true;
      },
    });

    this.addCommand({
      id: 'faker-string-ulid',
      name: 'faker.string.ulid',
      editorCheckCallback: (checking: boolean, editor: Editor) => {
        if (!this.isCommandEnabled('faker-string-ulid')) {
          return false;
        }

        if (!checking) {
          editor.replaceSelection(faker.string.ulid());
        }

        return true;
      },
    });

    this.addCommand({
      id: 'faker-string-nanoid',
      name: 'faker.string.nanoid',
      editorCheckCallback: (checking: boolean, editor: Editor) => {
        if (!this.isCommandEnabled('faker-string-nanoid')) {
          return false;
        }

        if (!checking) {
          editor.replaceSelection(faker.string.nanoid());
        }

        return true;
      },
    });

    this.addCommand({
      id: 'faker-string-alphanumeric',
      name: 'faker.string.alphanumeric',
      editorCheckCallback: (checking: boolean, editor: Editor) => {
        if (!this.isCommandEnabled('faker-string-alphanumeric')) {
          return false;
        }

        if (!checking) {
          editor.replaceSelection(faker.string.alphanumeric());
        }

        return true;
      },
    });

    this.addCommand({
      id: 'faker-string-numeric',
      name: 'faker.string.numeric',
      editorCheckCallback: (checking: boolean, editor: Editor) => {
        if (!this.isCommandEnabled('faker-string-numeric')) {
          return false;
        }

        if (!checking) {
          editor.replaceSelection(faker.string.numeric());
        }

        return true;
      },
    });

    this.addCommand({
      id: 'faker-string-hexadecimal',
      name: 'faker.string.hexadecimal',
      editorCheckCallback: (checking: boolean, editor: Editor) => {
        if (!this.isCommandEnabled('faker-string-hexadecimal')) {
          return false;
        }

        if (!checking) {
          editor.replaceSelection(faker.string.hexadecimal());
        }

        return true;
      },
    });

    this.addCommand({
      id: 'faker-system-file-name',
      name: 'faker.system.fileName',
      editorCheckCallback: (checking: boolean, editor: Editor) => {
        if (!this.isCommandEnabled('faker-system-file-name')) {
          return false;
        }

        if (!checking) {
          editor.replaceSelection(faker.system.fileName());
        }

        return true;
      },
    });

    this.addCommand({
      id: 'faker-system-file-path',
      name: 'faker.system.filePath',
      editorCheckCallback: (checking: boolean, editor: Editor) => {
        if (!this.isCommandEnabled('faker-system-file-path')) {
          return false;
        }

        if (!checking) {
          editor.replaceSelection(faker.system.filePath());
        }

        return true;
      },
    });

    this.addCommand({
      id: 'faker-system-mime-type',
      name: 'faker.system.mimeType',
      editorCheckCallback: (checking: boolean, editor: Editor) => {
        if (!this.isCommandEnabled('faker-system-mime-type')) {
          return false;
        }

        if (!checking) {
          editor.replaceSelection(faker.system.mimeType());
        }

        return true;
      },
    });

    this.addCommand({
      id: 'faker-system-semver',
      name: 'faker.system.semver',
      editorCheckCallback: (checking: boolean, editor: Editor) => {
        if (!this.isCommandEnabled('faker-system-semver')) {
          return false;
        }

        if (!checking) {
          editor.replaceSelection(faker.system.semver());
        }

        return true;
      },
    });

    this.addCommand({
      id: 'faker-vehicle-vehicle',
      name: 'faker.vehicle.vehicle',
      editorCheckCallback: (checking: boolean, editor: Editor) => {
        if (!this.isCommandEnabled('faker-vehicle-vehicle')) {
          return false;
        }

        if (!checking) {
          editor.replaceSelection(faker.vehicle.vehicle());
        }

        return true;
      },
    });

    this.addCommand({
      id: 'faker-vehicle-vin',
      name: 'faker.vehicle.vin',
      editorCheckCallback: (checking: boolean, editor: Editor) => {
        if (!this.isCommandEnabled('faker-vehicle-vin')) {
          return false;
        }

        if (!checking) {
          editor.replaceSelection(faker.vehicle.vin());
        }

        return true;
      },
    });

    this.addCommand({
      id: 'faker-vehicle-manufacturer',
      name: 'faker.vehicle.manufacturer',
      editorCheckCallback: (checking: boolean, editor: Editor) => {
        if (!this.isCommandEnabled('faker-vehicle-manufacturer')) {
          return false;
        }

        if (!checking) {
          editor.replaceSelection(faker.vehicle.manufacturer());
        }

        return true;
      },
    });

    this.addCommand({
      id: 'faker-vehicle-model',
      name: 'faker.vehicle.model',
      editorCheckCallback: (checking: boolean, editor: Editor) => {
        if (!this.isCommandEnabled('faker-vehicle-model')) {
          return false;
        }

        if (!checking) {
          editor.replaceSelection(faker.vehicle.model());
        }

        return true;
      },
    });

    this.addSettingTab(new FakerObsidianSettingTab(this.app, this));
  }

  onunload() {}

  isCommandEnabled(id: string): boolean {
    return this.settings.enabledCommands[id] ?? true;
  }

  async loadSettings() {
    const data = (await this.loadData()) as Partial<FakerObsidianSettings>;
    this.settings = Object.assign({}, DEFAULT_SETTINGS, data);
    this.settings.enabledCommands = Object.assign(
      {},
      DEFAULT_SETTINGS.enabledCommands,
      data?.enabledCommands,
    );
  }

  async saveSettings() {
    await this.saveData(this.settings);
  }
}
