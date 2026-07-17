import { App, PluginSettingTab, Setting } from 'obsidian';
import type FakerObsidianPlugin from './plugin';

export interface FakerObsidianSettings {
  enabledCommands: Record<string, boolean>;
}

export const DEFAULT_SETTINGS: FakerObsidianSettings = {
  enabledCommands: {},
};

export class FakerObsidianSettingTab extends PluginSettingTab {
  plugin: FakerObsidianPlugin;

  constructor(app: App, plugin: FakerObsidianPlugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display(): void {
    const { containerEl } = this;

    containerEl.empty();

    new Setting(containerEl).setName('commerce').setHeading();

    new Setting(containerEl)
      .setName('faker.commerce.productName')
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.isCommandEnabled('faker-commerce-product-name'))
          .onChange(async (value) => {
            this.plugin.settings.enabledCommands['faker-commerce-product-name'] = value;
            await this.plugin.saveSettings();
          }),
      );

    new Setting(containerEl)
      .setName('faker.commerce.productDescription')
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.isCommandEnabled('faker-commerce-product-description'))
          .onChange(async (value) => {
            this.plugin.settings.enabledCommands['faker-commerce-product-description'] = value;
            await this.plugin.saveSettings();
          }),
      );

    new Setting(containerEl)
      .setName('faker.commerce.price')
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.isCommandEnabled('faker-commerce-price'))
          .onChange(async (value) => {
            this.plugin.settings.enabledCommands['faker-commerce-price'] = value;
            await this.plugin.saveSettings();
          }),
      );

    new Setting(containerEl)
      .setName('faker.commerce.isbn')
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.isCommandEnabled('faker-commerce-isbn'))
          .onChange(async (value) => {
            this.plugin.settings.enabledCommands['faker-commerce-isbn'] = value;
            await this.plugin.saveSettings();
          }),
      );

    new Setting(containerEl)
      .setName('faker.commerce.upc')
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.isCommandEnabled('faker-commerce-upc'))
          .onChange(async (value) => {
            this.plugin.settings.enabledCommands['faker-commerce-upc'] = value;
            await this.plugin.saveSettings();
          }),
      );

    new Setting(containerEl).setName('company').setHeading();

    new Setting(containerEl)
      .setName('faker.company.name')
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.isCommandEnabled('faker-company-name'))
          .onChange(async (value) => {
            this.plugin.settings.enabledCommands['faker-company-name'] = value;
            await this.plugin.saveSettings();
          }),
      );

    new Setting(containerEl)
      .setName('faker.company.catchPhrase')
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.isCommandEnabled('faker-company-catch-phrase'))
          .onChange(async (value) => {
            this.plugin.settings.enabledCommands['faker-company-catch-phrase'] = value;
            await this.plugin.saveSettings();
          }),
      );

    new Setting(containerEl)
      .setName('faker.company.buzzPhrase')
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.isCommandEnabled('faker-company-buzz-phrase'))
          .onChange(async (value) => {
            this.plugin.settings.enabledCommands['faker-company-buzz-phrase'] = value;
            await this.plugin.saveSettings();
          }),
      );

    new Setting(containerEl).setName('date').setHeading();

    new Setting(containerEl)
      .setName('faker.date.recent')
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.isCommandEnabled('faker-date-recent'))
          .onChange(async (value) => {
            this.plugin.settings.enabledCommands['faker-date-recent'] = value;
            await this.plugin.saveSettings();
          }),
      );

    new Setting(containerEl)
      .setName('faker.date.future')
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.isCommandEnabled('faker-date-future'))
          .onChange(async (value) => {
            this.plugin.settings.enabledCommands['faker-date-future'] = value;
            await this.plugin.saveSettings();
          }),
      );

    new Setting(containerEl)
      .setName('faker.date.past')
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.isCommandEnabled('faker-date-past'))
          .onChange(async (value) => {
            this.plugin.settings.enabledCommands['faker-date-past'] = value;
            await this.plugin.saveSettings();
          }),
      );

    new Setting(containerEl)
      .setName('faker.date.birthdate')
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.isCommandEnabled('faker-date-birthdate'))
          .onChange(async (value) => {
            this.plugin.settings.enabledCommands['faker-date-birthdate'] = value;
            await this.plugin.saveSettings();
          }),
      );

    new Setting(containerEl).setName('finance').setHeading();

    new Setting(containerEl)
      .setName('faker.finance.creditCardNumber')
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.isCommandEnabled('faker-finance-credit-card-number'))
          .onChange(async (value) => {
            this.plugin.settings.enabledCommands['faker-finance-credit-card-number'] = value;
            await this.plugin.saveSettings();
          }),
      );

    new Setting(containerEl)
      .setName('faker.finance.creditCardCVV')
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.isCommandEnabled('faker-finance-credit-card-cvv'))
          .onChange(async (value) => {
            this.plugin.settings.enabledCommands['faker-finance-credit-card-cvv'] = value;
            await this.plugin.saveSettings();
          }),
      );

    new Setting(containerEl)
      .setName('faker.finance.iban')
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.isCommandEnabled('faker-finance-iban'))
          .onChange(async (value) => {
            this.plugin.settings.enabledCommands['faker-finance-iban'] = value;
            await this.plugin.saveSettings();
          }),
      );

    new Setting(containerEl)
      .setName('faker.finance.bic')
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.isCommandEnabled('faker-finance-bic'))
          .onChange(async (value) => {
            this.plugin.settings.enabledCommands['faker-finance-bic'] = value;
            await this.plugin.saveSettings();
          }),
      );

    new Setting(containerEl)
      .setName('faker.finance.bitcoinAddress')
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.isCommandEnabled('faker-finance-bitcoin-address'))
          .onChange(async (value) => {
            this.plugin.settings.enabledCommands['faker-finance-bitcoin-address'] = value;
            await this.plugin.saveSettings();
          }),
      );

    new Setting(containerEl)
      .setName('faker.finance.ethereumAddress')
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.isCommandEnabled('faker-finance-ethereum-address'))
          .onChange(async (value) => {
            this.plugin.settings.enabledCommands['faker-finance-ethereum-address'] = value;
            await this.plugin.saveSettings();
          }),
      );

    new Setting(containerEl).setName('git').setHeading();

    new Setting(containerEl)
      .setName('faker.git.branch')
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.isCommandEnabled('faker-git-branch'))
          .onChange(async (value) => {
            this.plugin.settings.enabledCommands['faker-git-branch'] = value;
            await this.plugin.saveSettings();
          }),
      );

    new Setting(containerEl)
      .setName('faker.git.commitSha')
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.isCommandEnabled('faker-git-commit-sha'))
          .onChange(async (value) => {
            this.plugin.settings.enabledCommands['faker-git-commit-sha'] = value;
            await this.plugin.saveSettings();
          }),
      );

    new Setting(containerEl)
      .setName('faker.git.commitMessage')
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.isCommandEnabled('faker-git-commit-message'))
          .onChange(async (value) => {
            this.plugin.settings.enabledCommands['faker-git-commit-message'] = value;
            await this.plugin.saveSettings();
          }),
      );

    new Setting(containerEl).setName('internet').setHeading();

    new Setting(containerEl)
      .setName('faker.internet.username')
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.isCommandEnabled('faker-internet-username'))
          .onChange(async (value) => {
            this.plugin.settings.enabledCommands['faker-internet-username'] = value;
            await this.plugin.saveSettings();
          }),
      );

    new Setting(containerEl)
      .setName('faker.internet.email')
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.isCommandEnabled('faker-internet-email'))
          .onChange(async (value) => {
            this.plugin.settings.enabledCommands['faker-internet-email'] = value;
            await this.plugin.saveSettings();
          }),
      );

    new Setting(containerEl)
      .setName('faker.internet.exampleEmail')
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.isCommandEnabled('faker-internet-example-email'))
          .onChange(async (value) => {
            this.plugin.settings.enabledCommands['faker-internet-example-email'] = value;
            await this.plugin.saveSettings();
          }),
      );

    new Setting(containerEl)
      .setName('faker.internet.password')
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.isCommandEnabled('faker-internet-password'))
          .onChange(async (value) => {
            this.plugin.settings.enabledCommands['faker-internet-password'] = value;
            await this.plugin.saveSettings();
          }),
      );

    new Setting(containerEl)
      .setName('faker.internet.url')
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.isCommandEnabled('faker-internet-url'))
          .onChange(async (value) => {
            this.plugin.settings.enabledCommands['faker-internet-url'] = value;
            await this.plugin.saveSettings();
          }),
      );

    new Setting(containerEl)
      .setName('faker.internet.domainName')
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.isCommandEnabled('faker-internet-domain-name'))
          .onChange(async (value) => {
            this.plugin.settings.enabledCommands['faker-internet-domain-name'] = value;
            await this.plugin.saveSettings();
          }),
      );

    new Setting(containerEl)
      .setName('faker.internet.ip')
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.isCommandEnabled('faker-internet-ip'))
          .onChange(async (value) => {
            this.plugin.settings.enabledCommands['faker-internet-ip'] = value;
            await this.plugin.saveSettings();
          }),
      );

    new Setting(containerEl)
      .setName('faker.internet.ipv4')
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.isCommandEnabled('faker-internet-ipv4'))
          .onChange(async (value) => {
            this.plugin.settings.enabledCommands['faker-internet-ipv4'] = value;
            await this.plugin.saveSettings();
          }),
      );

    new Setting(containerEl)
      .setName('faker.internet.ipv6')
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.isCommandEnabled('faker-internet-ipv6'))
          .onChange(async (value) => {
            this.plugin.settings.enabledCommands['faker-internet-ipv6'] = value;
            await this.plugin.saveSettings();
          }),
      );

    new Setting(containerEl)
      .setName('faker.internet.mac')
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.isCommandEnabled('faker-internet-mac'))
          .onChange(async (value) => {
            this.plugin.settings.enabledCommands['faker-internet-mac'] = value;
            await this.plugin.saveSettings();
          }),
      );

    new Setting(containerEl)
      .setName('faker.internet.userAgent')
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.isCommandEnabled('faker-internet-user-agent'))
          .onChange(async (value) => {
            this.plugin.settings.enabledCommands['faker-internet-user-agent'] = value;
            await this.plugin.saveSettings();
          }),
      );

    new Setting(containerEl)
      .setName('faker.internet.emoji')
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.isCommandEnabled('faker-internet-emoji'))
          .onChange(async (value) => {
            this.plugin.settings.enabledCommands['faker-internet-emoji'] = value;
            await this.plugin.saveSettings();
          }),
      );

    new Setting(containerEl).setName('location').setHeading();

    new Setting(containerEl)
      .setName('faker.location.city')
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.isCommandEnabled('faker-location-city'))
          .onChange(async (value) => {
            this.plugin.settings.enabledCommands['faker-location-city'] = value;
            await this.plugin.saveSettings();
          }),
      );

    new Setting(containerEl)
      .setName('faker.location.country')
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.isCommandEnabled('faker-location-country'))
          .onChange(async (value) => {
            this.plugin.settings.enabledCommands['faker-location-country'] = value;
            await this.plugin.saveSettings();
          }),
      );

    new Setting(containerEl)
      .setName('faker.location.streetAddress')
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.isCommandEnabled('faker-location-street-address'))
          .onChange(async (value) => {
            this.plugin.settings.enabledCommands['faker-location-street-address'] = value;
            await this.plugin.saveSettings();
          }),
      );

    new Setting(containerEl)
      .setName('faker.location.zipCode')
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.isCommandEnabled('faker-location-zip-code'))
          .onChange(async (value) => {
            this.plugin.settings.enabledCommands['faker-location-zip-code'] = value;
            await this.plugin.saveSettings();
          }),
      );

    new Setting(containerEl)
      .setName('faker.location.latitude')
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.isCommandEnabled('faker-location-latitude'))
          .onChange(async (value) => {
            this.plugin.settings.enabledCommands['faker-location-latitude'] = value;
            await this.plugin.saveSettings();
          }),
      );

    new Setting(containerEl)
      .setName('faker.location.longitude')
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.isCommandEnabled('faker-location-longitude'))
          .onChange(async (value) => {
            this.plugin.settings.enabledCommands['faker-location-longitude'] = value;
            await this.plugin.saveSettings();
          }),
      );

    new Setting(containerEl).setName('lorem').setHeading();

    new Setting(containerEl)
      .setName('faker.lorem.word')
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.isCommandEnabled('faker-lorem-word'))
          .onChange(async (value) => {
            this.plugin.settings.enabledCommands['faker-lorem-word'] = value;
            await this.plugin.saveSettings();
          }),
      );

    new Setting(containerEl)
      .setName('faker.lorem.words')
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.isCommandEnabled('faker-lorem-words'))
          .onChange(async (value) => {
            this.plugin.settings.enabledCommands['faker-lorem-words'] = value;
            await this.plugin.saveSettings();
          }),
      );

    new Setting(containerEl)
      .setName('faker.lorem.sentence')
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.isCommandEnabled('faker-lorem-sentence'))
          .onChange(async (value) => {
            this.plugin.settings.enabledCommands['faker-lorem-sentence'] = value;
            await this.plugin.saveSettings();
          }),
      );

    new Setting(containerEl)
      .setName('faker.lorem.paragraph')
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.isCommandEnabled('faker-lorem-paragraph'))
          .onChange(async (value) => {
            this.plugin.settings.enabledCommands['faker-lorem-paragraph'] = value;
            await this.plugin.saveSettings();
          }),
      );

    new Setting(containerEl).setName('person').setHeading();

    new Setting(containerEl)
      .setName('faker.person.fullName')
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.isCommandEnabled('faker-person-full-name'))
          .onChange(async (value) => {
            this.plugin.settings.enabledCommands['faker-person-full-name'] = value;
            await this.plugin.saveSettings();
          }),
      );

    new Setting(containerEl)
      .setName('faker.person.firstName')
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.isCommandEnabled('faker-person-first-name'))
          .onChange(async (value) => {
            this.plugin.settings.enabledCommands['faker-person-first-name'] = value;
            await this.plugin.saveSettings();
          }),
      );

    new Setting(containerEl)
      .setName('faker.person.lastName')
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.isCommandEnabled('faker-person-last-name'))
          .onChange(async (value) => {
            this.plugin.settings.enabledCommands['faker-person-last-name'] = value;
            await this.plugin.saveSettings();
          }),
      );

    new Setting(containerEl)
      .setName('faker.person.jobTitle')
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.isCommandEnabled('faker-person-job-title'))
          .onChange(async (value) => {
            this.plugin.settings.enabledCommands['faker-person-job-title'] = value;
            await this.plugin.saveSettings();
          }),
      );

    new Setting(containerEl)
      .setName('faker.person.bio')
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.isCommandEnabled('faker-person-bio'))
          .onChange(async (value) => {
            this.plugin.settings.enabledCommands['faker-person-bio'] = value;
            await this.plugin.saveSettings();
          }),
      );

    new Setting(containerEl).setName('phone').setHeading();

    new Setting(containerEl)
      .setName('faker.phone.number')
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.isCommandEnabled('faker-phone-number'))
          .onChange(async (value) => {
            this.plugin.settings.enabledCommands['faker-phone-number'] = value;
            await this.plugin.saveSettings();
          }),
      );

    new Setting(containerEl).setName('string').setHeading();

    new Setting(containerEl)
      .setName('faker.string.uuid')
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.isCommandEnabled('faker-string-uuid'))
          .onChange(async (value) => {
            this.plugin.settings.enabledCommands['faker-string-uuid'] = value;
            await this.plugin.saveSettings();
          }),
      );

    new Setting(containerEl)
      .setName('faker.string.ulid')
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.isCommandEnabled('faker-string-ulid'))
          .onChange(async (value) => {
            this.plugin.settings.enabledCommands['faker-string-ulid'] = value;
            await this.plugin.saveSettings();
          }),
      );

    new Setting(containerEl)
      .setName('faker.string.nanoid')
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.isCommandEnabled('faker-string-nanoid'))
          .onChange(async (value) => {
            this.plugin.settings.enabledCommands['faker-string-nanoid'] = value;
            await this.plugin.saveSettings();
          }),
      );

    new Setting(containerEl)
      .setName('faker.string.alphanumeric')
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.isCommandEnabled('faker-string-alphanumeric'))
          .onChange(async (value) => {
            this.plugin.settings.enabledCommands['faker-string-alphanumeric'] = value;
            await this.plugin.saveSettings();
          }),
      );

    new Setting(containerEl)
      .setName('faker.string.numeric')
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.isCommandEnabled('faker-string-numeric'))
          .onChange(async (value) => {
            this.plugin.settings.enabledCommands['faker-string-numeric'] = value;
            await this.plugin.saveSettings();
          }),
      );

    new Setting(containerEl)
      .setName('faker.string.hexadecimal')
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.isCommandEnabled('faker-string-hexadecimal'))
          .onChange(async (value) => {
            this.plugin.settings.enabledCommands['faker-string-hexadecimal'] = value;
            await this.plugin.saveSettings();
          }),
      );

    new Setting(containerEl).setName('system').setHeading();

    new Setting(containerEl)
      .setName('faker.system.fileName')
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.isCommandEnabled('faker-system-file-name'))
          .onChange(async (value) => {
            this.plugin.settings.enabledCommands['faker-system-file-name'] = value;
            await this.plugin.saveSettings();
          }),
      );

    new Setting(containerEl)
      .setName('faker.system.filePath')
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.isCommandEnabled('faker-system-file-path'))
          .onChange(async (value) => {
            this.plugin.settings.enabledCommands['faker-system-file-path'] = value;
            await this.plugin.saveSettings();
          }),
      );

    new Setting(containerEl)
      .setName('faker.system.mimeType')
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.isCommandEnabled('faker-system-mime-type'))
          .onChange(async (value) => {
            this.plugin.settings.enabledCommands['faker-system-mime-type'] = value;
            await this.plugin.saveSettings();
          }),
      );

    new Setting(containerEl)
      .setName('faker.system.semver')
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.isCommandEnabled('faker-system-semver'))
          .onChange(async (value) => {
            this.plugin.settings.enabledCommands['faker-system-semver'] = value;
            await this.plugin.saveSettings();
          }),
      );

    new Setting(containerEl).setName('vehicle').setHeading();

    new Setting(containerEl)
      .setName('faker.vehicle.vehicle')
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.isCommandEnabled('faker-vehicle-vehicle'))
          .onChange(async (value) => {
            this.plugin.settings.enabledCommands['faker-vehicle-vehicle'] = value;
            await this.plugin.saveSettings();
          }),
      );

    new Setting(containerEl)
      .setName('faker.vehicle.vin')
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.isCommandEnabled('faker-vehicle-vin'))
          .onChange(async (value) => {
            this.plugin.settings.enabledCommands['faker-vehicle-vin'] = value;
            await this.plugin.saveSettings();
          }),
      );

    new Setting(containerEl)
      .setName('faker.vehicle.manufacturer')
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.isCommandEnabled('faker-vehicle-manufacturer'))
          .onChange(async (value) => {
            this.plugin.settings.enabledCommands['faker-vehicle-manufacturer'] = value;
            await this.plugin.saveSettings();
          }),
      );

    new Setting(containerEl)
      .setName('faker.vehicle.model')
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.isCommandEnabled('faker-vehicle-model'))
          .onChange(async (value) => {
            this.plugin.settings.enabledCommands['faker-vehicle-model'] = value;
            await this.plugin.saveSettings();
          }),
      );
  }
}
