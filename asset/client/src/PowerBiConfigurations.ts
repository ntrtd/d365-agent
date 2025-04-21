/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { PowerBiConfigurationsApi } from './PowerBiConfigurationsApi';

/**
 * This class represents the entity "PowerBIConfigurations" of service "d365_metadata".
 */
export class PowerBiConfigurations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PowerBiConfigurationsType<T>
{
  /**
   * Technical entity name for PowerBiConfigurations.
   */
  static override _entityName = 'PowerBIConfigurations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PowerBiConfigurations entity.
   */
  static _keys = ['ClientID'];
  /**
   * Client Id.
   */
  declare clientId: DeserializedType<T, 'Edm.String'>;
  /**
   * Tile Filter Column Name.
   * @nullable
   */
  declare tileFilterColumnName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Power Biapi Address.
   * @nullable
   */
  declare powerBiapiAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Redirect Url.
   * @nullable
   */
  declare redirectUrl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Application Key.
   * @nullable
   */
  declare applicationKey?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tenant Id.
   * @nullable
   */
  declare tenantId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Apply Tile Filter.
   */
  declare applyTileFilter: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Azure Ad Authority Uri.
   * @nullable
   */
  declare azureAdAuthorityUri?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tile Filter Table Name.
   * @nullable
   */
  declare tileFilterTableName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Enabled.
   */
  declare isEnabled: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Azure Ad Power Bi Api Resource Uri.
   * @nullable
   */
  declare azureAdPowerBiApiResourceUri?: DeserializedType<
    T,
    'Edm.String'
  > | null;

  constructor(_entityApi: PowerBiConfigurationsApi<T>) {
    super(_entityApi);
  }
}

export interface PowerBiConfigurationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  clientId: DeserializedType<T, 'Edm.String'>;
  tileFilterColumnName?: DeserializedType<T, 'Edm.String'> | null;
  powerBiapiAddress?: DeserializedType<T, 'Edm.String'> | null;
  redirectUrl?: DeserializedType<T, 'Edm.String'> | null;
  applicationKey?: DeserializedType<T, 'Edm.String'> | null;
  tenantId?: DeserializedType<T, 'Edm.String'> | null;
  applyTileFilter: DeserializedType<T, 'Edm.Boolean'>;
  azureAdAuthorityUri?: DeserializedType<T, 'Edm.String'> | null;
  tileFilterTableName?: DeserializedType<T, 'Edm.String'> | null;
  isEnabled: DeserializedType<T, 'Edm.Boolean'>;
  azureAdPowerBiApiResourceUri?: DeserializedType<T, 'Edm.String'> | null;
}
