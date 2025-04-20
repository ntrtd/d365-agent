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
import type { SalesLineWBiEntitiesApi } from './SalesLineWBiEntitiesApi';

/**
 * This class represents the entity "SalesLineWBiEntities" of service "d365_metadata".
 */
export class SalesLineWBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SalesLineWBiEntitiesType<T>
{
  /**
   * Technical entity name for SalesLineWBiEntities.
   */
  static override _entityName = 'SalesLineWBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SalesLineWBiEntities entity.
   */
  static _keys = ['dataAreaId', 'SourceKey'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Ref Invoice Id My.
   * @nullable
   */
  declare refInvoiceIdMy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ref Invoice Date My.
   */
  declare refInvoiceDateMy: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: SalesLineWBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface SalesLineWBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  refInvoiceIdMy?: DeserializedType<T, 'Edm.String'> | null;
  refInvoiceDateMy: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
