import { DEFAULT_LAYOUT_PRESET } from "./siteDefaults";
import { LAYOUT_PRESET_IDS, type LayoutPresetId } from "./layoutPresets";

const VALID = new Set<string>(LAYOUT_PRESET_IDS);

/**
 * Sets `document.documentElement.dataset.layout` for structural CSS in `layoutPresets.css`.
 * Preset id comes from `VITE_LAYOUT_PRESET` or {@link DEFAULT_LAYOUT_PRESET}.
 */
export function applyLayoutPresetFromEnv(): void {
  const raw = import.meta.env.VITE_LAYOUT_PRESET?.trim() || DEFAULT_LAYOUT_PRESET;
  const name: LayoutPresetId = VALID.has(raw) ? (raw as LayoutPresetId) : DEFAULT_LAYOUT_PRESET;
  document.documentElement.dataset.layout = name;
}
