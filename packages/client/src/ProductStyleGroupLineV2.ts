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
import type { ProductStyleGroupLineV2Api } from './ProductStyleGroupLineV2Api';

/**
 * This class represents the entity "ProductStyleGroupLineV2" of service "d365_metadata".
 */
export class ProductStyleGroupLineV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductStyleGroupLineV2Type<T>
{
  /**
   * Technical entity name for ProductStyleGroupLineV2.
   */
  static override _entityName = 'ProductStyleGroupLineV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductStyleGroupLineV2 entity.
   */
  static _keys = ['ProductStyleGroupId', 'ProductStyleId'];
  /**
   * Product Style Group Id.
   */
  declare productStyleGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Style Id.
   */
  declare productStyleId: DeserializedType<T, 'Edm.String'>;
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
   * Style Name.
   * @nullable
   */
  declare styleName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Style Description.
   * @nullable
   */
  declare styleDescription?: DeserializedType<T, 'Edm.String'> | null;
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

  constructor(_entityApi: ProductStyleGroupLineV2Api<T>) {
    super(_entityApi);
  }
}

export interface ProductStyleGroupLineV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  productStyleGroupId: DeserializedType<T, 'Edm.String'>;
  productStyleId: DeserializedType<T, 'Edm.String'>;
  refinerGroup?: DeserializedType<T, 'Edm.String'> | null;
  replenishmentWeight: DeserializedType<T, 'Edm.Int32'>;
  styleName?: DeserializedType<T, 'Edm.String'> | null;
  styleDescription?: DeserializedType<T, 'Edm.String'> | null;
  hexcode?: DeserializedType<T, 'Edm.String'> | null;
  displayOrder: DeserializedType<T, 'Edm.Decimal'>;
  barcodeNumber?: DeserializedType<T, 'Edm.String'> | null;
  url?: DeserializedType<T, 'Edm.String'> | null;
}
