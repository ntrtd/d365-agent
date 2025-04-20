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
import type { ProductSizeGroupLineV2Api } from './ProductSizeGroupLineV2Api';

/**
 * This class represents the entity "ProductSizeGroupLineV2" of service "d365_metadata".
 */
export class ProductSizeGroupLineV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductSizeGroupLineV2Type<T>
{
  /**
   * Technical entity name for ProductSizeGroupLineV2.
   */
  static override _entityName = 'ProductSizeGroupLineV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductSizeGroupLineV2 entity.
   */
  static _keys = ['ProductSizeGroupId', 'SizeName'];
  /**
   * Product Size Group Id.
   */
  declare productSizeGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Size Name.
   */
  declare sizeName: DeserializedType<T, 'Edm.String'>;
  /**
   * Size Description.
   * @nullable
   */
  declare sizeDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Size Id.
   * @nullable
   */
  declare productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Refiner Group.
   * @nullable
   */
  declare refinerGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Replenishment Weight.
   */
  declare replenishmentWeight: DeserializedType<T, 'Edm.Int32'>;
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

  constructor(_entityApi: ProductSizeGroupLineV2Api<T>) {
    super(_entityApi);
  }
}

export interface ProductSizeGroupLineV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  productSizeGroupId: DeserializedType<T, 'Edm.String'>;
  sizeName: DeserializedType<T, 'Edm.String'>;
  sizeDescription?: DeserializedType<T, 'Edm.String'> | null;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  refinerGroup?: DeserializedType<T, 'Edm.String'> | null;
  replenishmentWeight: DeserializedType<T, 'Edm.Int32'>;
  hexcode?: DeserializedType<T, 'Edm.String'> | null;
  displayOrder: DeserializedType<T, 'Edm.Decimal'>;
  barcodeNumber?: DeserializedType<T, 'Edm.String'> | null;
  url?: DeserializedType<T, 'Edm.String'> | null;
}
