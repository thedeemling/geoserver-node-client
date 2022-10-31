export { GeoServerResponseError } from "./src/util/geoserver.js";
/**
 * Client for GeoServer REST API.
 * Has minimal basic functionality and offers REST client instances for
 * sub-entities, like workspaces or datastores as member variables.
 *
 * @module GeoServerRestClient
 */
export class GeoServerRestClient {
    /**
     * Creates a GeoServerRestClient instance.
     *
     * @param {String} url The URL of the GeoServer REST API endpoint
     * @param {String} user The user for the GeoServer REST API
     * @param {String} password The password for the GeoServer REST API
     */
    constructor(url: string, user: string, password: string);
    url: string;
    auth: string;
    /** @member {LayerClient} layers GeoServer REST client instance for layers */
    layers: LayerClient;
    /** @member {StyleClient} styles GeoServer REST client instance for styles */
    styles: StyleClient;
    /** @member {WorkspaceClient} workspaces GeoServer REST client instance for workspaces */
    workspaces: WorkspaceClient;
    /** @member {NamespaceClient} namespaces GeoServer REST client instance for namespaces */
    namespaces: NamespaceClient;
    /** @member {DatastoreClient} datastores GeoServer REST client instance for data stores */
    datastores: DatastoreClient;
    /** @member {ImageMosaicClient} imagemosaics GeoServer REST client instance for image mosaics */
    imagemosaics: ImageMosaicClient;
    /** @member {SecurityClient} security GeoServer REST client instance for security related modifications */
    security: SecurityClient;
    /** @member {SettingsClient} settings GeoServer REST client instance for settings */
    settings: SettingsClient;
    /** @member {AboutClient} about GeoServer REST client instance for about endpoint */
    about: AboutClient;
    /** @member {ResetReloadClient} about GeoServer REST client instance for reset/reload endpoints */
    resetReload: ResetReloadClient;
}
import LayerClient from "geoserver-node-client/src/layer.js";
import StyleClient from "geoserver-node-client/src/style.js";
import WorkspaceClient from "geoserver-node-client/src/workspace.js";
import NamespaceClient from "geoserver-node-client/src/namespace.js";
import DatastoreClient from "geoserver-node-client/src/datastore.js";
import ImageMosaicClient from "geoserver-node-client/src/imagemosaic.js";
import SecurityClient from "geoserver-node-client/src/security.js";
import SettingsClient from "geoserver-node-client/src/settings.js";
import AboutClient from "geoserver-node-client/src/about.js";
import ResetReloadClient from "geoserver-node-client/src/reset-reload.js";
//# sourceMappingURL=geoserver-rest-client.d.ts.map