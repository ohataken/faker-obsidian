import { App, PluginSettingTab } from 'obsidian';
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
  }
}
