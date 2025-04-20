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
import type { ProductColorV2Api } from './ProductColorV2Api';

/**
 * This class represents the entity "ProductColorV2" of service "d365_metadata".
 */
export class ProductColorV2<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProductColorV2Type<T>
{
  /**
   * Technical entity name for ProductColorV2.
   */
  static override _entityName = 'ProductColorV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductColorV2 entity.
   */
  static _keys = ['ColorId'];
  /**
   * Color Id.
   */
  declare colorId: DeserializedType<T, 'Edm.String'>;
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

  constructor(_entityApi: ProductColorV2Api<T>) {
    super(_entityApi);
  }
}

export interface ProductColorV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  colorId: DeserializedType<T, 'Edm.String'>;
  hexcode?: DeserializedType<T, 'Edm.String'> | null;
  refinerGroup?: DeserializedType<T, 'Edm.String'> | null;
  url?: DeserializedType<T, 'Edm.String'> | null;
}
