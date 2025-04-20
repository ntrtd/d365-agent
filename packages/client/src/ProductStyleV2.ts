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
import type { ProductStyleV2Api } from './ProductStyleV2Api';

/**
 * This class represents the entity "ProductStyleV2" of service "d365_metadata".
 */
export class ProductStyleV2<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProductStyleV2Type<T>
{
  /**
   * Technical entity name for ProductStyleV2.
   */
  static override _entityName = 'ProductStyleV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductStyleV2 entity.
   */
  static _keys = ['StyleId'];
  /**
   * Style Id.
   */
  declare styleId: DeserializedType<T, 'Edm.String'>;
  /**
   * Hexcode.
   * @nullable
   */
  declare hexcode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Display Order.
   */
  declare displayOrder: DeserializedType<T, 'Edm.Decimal'>;
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

  constructor(_entityApi: ProductStyleV2Api<T>) {
    super(_entityApi);
  }
}

export interface ProductStyleV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  styleId: DeserializedType<T, 'Edm.String'>;
  hexcode?: DeserializedType<T, 'Edm.String'> | null;
  displayOrder: DeserializedType<T, 'Edm.Decimal'>;
  refinerGroup?: DeserializedType<T, 'Edm.String'> | null;
  url?: DeserializedType<T, 'Edm.String'> | null;
}
