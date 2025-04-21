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
import type { WarehouseIntegrationSourceSystemProductsApi } from './WarehouseIntegrationSourceSystemProductsApi';

/**
 * This class represents the entity "WarehouseIntegrationSourceSystemProducts" of service "d365_metadata".
 */
export class WarehouseIntegrationSourceSystemProducts<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WarehouseIntegrationSourceSystemProductsType<T>
{
  /**
   * Technical entity name for WarehouseIntegrationSourceSystemProducts.
   */
  static override _entityName = 'WarehouseIntegrationSourceSystemProducts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WarehouseIntegrationSourceSystemProducts entity.
   */
  static _keys = ['dataAreaId', 'SourceSystemId', 'SourceSystemProductNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Source System Id.
   */
  declare sourceSystemId: DeserializedType<T, 'Edm.String'>;
  /**
   * Source System Product Number.
   */
  declare sourceSystemProductNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Display Product Number.
   * @nullable
   */
  declare displayProductNumber?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: WarehouseIntegrationSourceSystemProductsApi<T>) {
    super(_entityApi);
  }
}

export interface WarehouseIntegrationSourceSystemProductsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sourceSystemId: DeserializedType<T, 'Edm.String'>;
  sourceSystemProductNumber: DeserializedType<T, 'Edm.String'>;
  displayProductNumber?: DeserializedType<T, 'Edm.String'> | null;
}
