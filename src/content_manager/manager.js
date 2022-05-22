export class ContentManager {
  #assets = new Map();

  async load_asset(asset_name, asset_url) {
    // TODO: load asset and add it to the saved map
  }

  is_loaded(asset_name) {
    return this.#assets.has(asset_name);
  }

  get_asset(asset_name) {
    return this.#assets.get(asset_name);
  }
}