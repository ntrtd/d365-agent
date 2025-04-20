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
import type { FiscalIntegrationDocumentProviderTablesApi } from './FiscalIntegrationDocumentProviderTablesApi';

/**
 * This class represents the entity "FiscalIntegrationDocumentProviderTables" of service "d365_metadata".
 */
export class FiscalIntegrationDocumentProviderTables<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements FiscalIntegrationDocumentProviderTablesType<T>
{
  /**
   * Technical entity name for FiscalIntegrationDocumentProviderTables.
   */
  static override _entityName = 'FiscalIntegrationDocumentProviderTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FiscalIntegrationDocumentProviderTables entity.
   */
  static _keys = ['DocumentProviderName'];
  /**
   * Document Provider Name.
   */
  declare documentProviderName: DeserializedType<T, 'Edm.String'>;
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

  constructor(_entityApi: FiscalIntegrationDocumentProviderTablesApi<T>) {
    super(_entityApi);
  }
}

export interface FiscalIntegrationDocumentProviderTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  documentProviderName: DeserializedType<T, 'Edm.String'>;
  manifest?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
