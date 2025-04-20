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
import type { FiscalIntegrationConnectorTablesApi } from './FiscalIntegrationConnectorTablesApi';

/**
 * This class represents the entity "FiscalIntegrationConnectorTables" of service "d365_metadata".
 */
export class FiscalIntegrationConnectorTables<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements FiscalIntegrationConnectorTablesType<T>
{
  /**
   * Technical entity name for FiscalIntegrationConnectorTables.
   */
  static override _entityName = 'FiscalIntegrationConnectorTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FiscalIntegrationConnectorTables entity.
   */
  static _keys = ['ConnectorName'];
  /**
   * Connector Name.
   */
  declare connectorName: DeserializedType<T, 'Edm.String'>;
  /**
   * Manifest.
   * @nullable
   */
  declare manifest?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: FiscalIntegrationConnectorTablesApi<T>) {
    super(_entityApi);
  }
}

export interface FiscalIntegrationConnectorTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  connectorName: DeserializedType<T, 'Edm.String'>;
  manifest?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
