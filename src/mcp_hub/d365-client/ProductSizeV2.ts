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
import type { ProductSizeV2Api } from './ProductSizeV2Api';

/**
 * This class represents the entity "ProductSizeV2" of service "d365_metadata".
 */
export class ProductSizeV2<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProductSizeV2Type<T>
{
  /**
   * Technical entity name for ProductSizeV2.
   */
  static override _entityName = 'ProductSizeV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductSizeV2 entity.
   */
  static _keys = ['SizeId'];
  /**
   * Size Id.
   */
  declare sizeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Hexcode.
   * @nullable
   */
  declare hexcode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Refiner Group.
   * @nullable
   */
  declare refinerGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Url.
   * @nullable
   */
  declare url?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ProductSizeV2Api<T>) {
    super(_entityApi);
  }
}

export interface ProductSizeV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  sizeId: DeserializedType<T, 'Edm.String'>;
  hexcode?: DeserializedType<T, 'Edm.String'> | null;
  refinerGroup?: DeserializedType<T, 'Edm.String'> | null;
  url?: DeserializedType<T, 'Edm.String'> | null;
}
