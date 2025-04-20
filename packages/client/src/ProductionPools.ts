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
import type { ProductionPoolsApi } from './ProductionPoolsApi';
import {
  ProductionOrderHeaders,
  ProductionOrderHeadersType
} from './ProductionOrderHeaders';
import {
  ReleasedProductsV2,
  ReleasedProductsV2Type
} from './ReleasedProductsV2';

/**
 * This class represents the entity "ProductionPools" of service "d365_metadata".
 */
export class ProductionPools<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProductionPoolsType<T>
{
  /**
   * Technical entity name for ProductionPools.
   */
  static override _entityName = 'ProductionPools';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductionPools entity.
   */
  static _keys = ['dataAreaId', 'PoolId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Pool Id.
   */
  declare poolId: DeserializedType<T, 'Edm.String'>;
  /**
   * Pool Name.
   * @nullable
   */
  declare poolName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link ProductionOrderHeaders} entity.
   */
  declare productionOrderHeaders: ProductionOrderHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link ReleasedProductsV2} entity.
   */
  declare releasedProductsV2: ReleasedProductsV2<T>[];

  constructor(_entityApi: ProductionPoolsApi<T>) {
    super(_entityApi);
  }
}

export interface ProductionPoolsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  poolId: DeserializedType<T, 'Edm.String'>;
  poolName?: DeserializedType<T, 'Edm.String'> | null;
  productionOrderHeaders: ProductionOrderHeadersType<T>[];
  releasedProductsV2: ReleasedProductsV2Type<T>[];
}
