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
import type { ProductOwnersApi } from './ProductOwnersApi';
import {
  EngineeringChangeOrderProductsV3,
  EngineeringChangeOrderProductsV3Type
} from './EngineeringChangeOrderProductsV3';
import {
  EngineeringChangeOrderProductsV2,
  EngineeringChangeOrderProductsV2Type
} from './EngineeringChangeOrderProductsV2';
import {
  ProductOwnerWorkers,
  ProductOwnerWorkersType
} from './ProductOwnerWorkers';
import {
  EngineeringChangeOrderProducts,
  EngineeringChangeOrderProductsType
} from './EngineeringChangeOrderProducts';

/**
 * This class represents the entity "ProductOwners" of service "d365_metadata".
 */
export class ProductOwners<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProductOwnersType<T>
{
  /**
   * Technical entity name for ProductOwners.
   */
  static override _entityName = 'ProductOwners';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductOwners entity.
   */
  static _keys = ['ProductOwnerId'];
  /**
   * Product Owner Id.
   */
  declare productOwnerId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Owner Name.
   * @nullable
   */
  declare productOwnerName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link EngineeringChangeOrderProductsV3} entity.
   */
  declare engineeringChangeOrderProductsV3: EngineeringChangeOrderProductsV3<T>[];
  /**
   * One-to-many navigation property to the {@link EngineeringChangeOrderProductsV2} entity.
   */
  declare engineeringChangeOrderProductsV2: EngineeringChangeOrderProductsV2<T>[];
  /**
   * One-to-many navigation property to the {@link ProductOwnerWorkers} entity.
   */
  declare productOwnerWorkerAssignments: ProductOwnerWorkers<T>[];
  /**
   * One-to-many navigation property to the {@link EngineeringChangeOrderProducts} entity.
   */
  declare engineeringChangeOrderProducts: EngineeringChangeOrderProducts<T>[];

  constructor(_entityApi: ProductOwnersApi<T>) {
    super(_entityApi);
  }
}

export interface ProductOwnersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  productOwnerId: DeserializedType<T, 'Edm.String'>;
  productOwnerName?: DeserializedType<T, 'Edm.String'> | null;
  engineeringChangeOrderProductsV3: EngineeringChangeOrderProductsV3Type<T>[];
  engineeringChangeOrderProductsV2: EngineeringChangeOrderProductsV2Type<T>[];
  productOwnerWorkerAssignments: ProductOwnerWorkersType<T>[];
  engineeringChangeOrderProducts: EngineeringChangeOrderProductsType<T>[];
}
