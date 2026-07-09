import { App, PluginSettingTab } from 'obsidian';
import type FakerObsidianPlugin from './plugin';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface FakerObsidianSettings {}

export const DEFAULT_SETTINGS: FakerObsidianSettings = {};

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
