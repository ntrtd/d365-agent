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
import type { ProductTypesApi } from './ProductTypesApi';

/**
 * This class represents the entity "ProductTypes" of service "d365_metadata".
 */
export class ProductTypes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProductTypesType<T>
{
  /**
   * Technical entity name for ProductTypes.
   */
  static override _entityName = 'ProductTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductTypes entity.
   */
  static _keys = ['dataAreaId', 'ProductType'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Type.
   */
  declare productType: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ProductTypesApi<T>) {
    super(_entityApi);
  }
}

export interface ProductTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  productType: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
}
