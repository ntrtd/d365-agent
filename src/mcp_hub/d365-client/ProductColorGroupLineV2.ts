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
import type { ProductColorGroupLineV2Api } from './ProductColorGroupLineV2Api';

/**
 * This class represents the entity "ProductColorGroupLineV2" of service "d365_metadata".
 */
export class ProductColorGroupLineV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductColorGroupLineV2Type<T>
{
  /**
   * Technical entity name for ProductColorGroupLineV2.
   */
  static override _entityName = 'ProductColorGroupLineV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductColorGroupLineV2 entity.
   */
  static _keys = ['ProductColorGroupId', 'ColorName'];
  /**
   * Product Color Group Id.
   */
  declare productColorGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Color Name.
   */
  declare colorName: DeserializedType<T, 'Edm.String'>;
  /**
   * Refiner Group.
   * @nullable
   */
  declare refinerGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Color Description.
   * @nullable
   */
  declare colorDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Replenishment Weight.
   */
  declare replenishmentWeight: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Product Color Id.
   * @nullable
   */
  declare productColorId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Barcode Number.
   * @nullable
   */
  declare barcodeNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Url.
   * @nullable
   */
  declare url?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ProductColorGroupLineV2Api<T>) {
    super(_entityApi);
  }
}

export interface ProductColorGroupLineV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  productColorGroupId: DeserializedType<T, 'Edm.String'>;
  colorName: DeserializedType<T, 'Edm.String'>;
  refinerGroup?: DeserializedType<T, 'Edm.String'> | null;
  colorDescription?: DeserializedType<T, 'Edm.String'> | null;
  replenishmentWeight: DeserializedType<T, 'Edm.Int32'>;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  hexcode?: DeserializedType<T, 'Edm.String'> | null;
  displayOrder: DeserializedType<T, 'Edm.Decimal'>;
  barcodeNumber?: DeserializedType<T, 'Edm.String'> | null;
  url?: DeserializedType<T, 'Edm.String'> | null;
}
