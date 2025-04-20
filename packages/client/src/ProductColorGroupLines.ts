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
import type { ProductColorGroupLinesApi } from './ProductColorGroupLinesApi';
import {
  ProductColorGroupLineTranslations,
  ProductColorGroupLineTranslationsType
} from './ProductColorGroupLineTranslations';
import { ProductColors, ProductColorsType } from './ProductColors';
import {
  ProductColorGroups,
  ProductColorGroupsType
} from './ProductColorGroups';

/**
 * This class represents the entity "ProductColorGroupLines" of service "d365_metadata".
 */
export class ProductColorGroupLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductColorGroupLinesType<T>
{
  /**
   * Technical entity name for ProductColorGroupLines.
   */
  static override _entityName = 'ProductColorGroupLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductColorGroupLines entity.
   */
  static _keys = ['ProductColorGroupId', 'ProductColorId'];
  /**
   * Product Color Group Id.
   */
  declare productColorGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Color Id.
   */
  declare productColorId: DeserializedType<T, 'Edm.String'>;
  /**
   * Color Name.
   * @nullable
   */
  declare colorName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Display Order.
   */
  declare displayOrder: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Replenishment Weight.
   */
  declare replenishmentWeight: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Barcode Number.
   * @nullable
   */
  declare barcodeNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Color Description.
   * @nullable
   */
  declare colorDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link ProductColorGroupLineTranslations} entity.
   */
  declare productColorGroupLineTranslations: ProductColorGroupLineTranslations<T>[];
  /**
   * One-to-one navigation property to the {@link ProductColors} entity.
   */
  declare productColor?: ProductColors<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductColorGroups} entity.
   */
  declare productColorGroup?: ProductColorGroups<T> | null;

  constructor(_entityApi: ProductColorGroupLinesApi<T>) {
    super(_entityApi);
  }
}

export interface ProductColorGroupLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  productColorGroupId: DeserializedType<T, 'Edm.String'>;
  productColorId: DeserializedType<T, 'Edm.String'>;
  colorName?: DeserializedType<T, 'Edm.String'> | null;
  displayOrder: DeserializedType<T, 'Edm.Decimal'>;
  replenishmentWeight: DeserializedType<T, 'Edm.Int32'>;
  barcodeNumber?: DeserializedType<T, 'Edm.String'> | null;
  colorDescription?: DeserializedType<T, 'Edm.String'> | null;
  productColorGroupLineTranslations: ProductColorGroupLineTranslationsType<T>[];
  productColor?: ProductColorsType<T> | null;
  productColorGroup?: ProductColorGroupsType<T> | null;
}
