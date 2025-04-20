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
import type { ProductSizeGroupLinesApi } from './ProductSizeGroupLinesApi';
import { ProductSizes, ProductSizesType } from './ProductSizes';
import { ProductSizeGroups, ProductSizeGroupsType } from './ProductSizeGroups';
import {
  ProductSizeGroupLineTranslations,
  ProductSizeGroupLineTranslationsType
} from './ProductSizeGroupLineTranslations';

/**
 * This class represents the entity "ProductSizeGroupLines" of service "d365_metadata".
 */
export class ProductSizeGroupLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductSizeGroupLinesType<T>
{
  /**
   * Technical entity name for ProductSizeGroupLines.
   */
  static override _entityName = 'ProductSizeGroupLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductSizeGroupLines entity.
   */
  static _keys = ['ProductSizeGroupId', 'ProductSizeId'];
  /**
   * Product Size Group Id.
   */
  declare productSizeGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Size Id.
   */
  declare productSizeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Size Name.
   * @nullable
   */
  declare sizeName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Display Order.
   */
  declare displayOrder: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Size Description.
   * @nullable
   */
  declare sizeDescription?: DeserializedType<T, 'Edm.String'> | null;
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
   * One-to-one navigation property to the {@link ProductSizes} entity.
   */
  declare productSize?: ProductSizes<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductSizeGroups} entity.
   */
  declare productSizeGroup?: ProductSizeGroups<T> | null;
  /**
   * One-to-many navigation property to the {@link ProductSizeGroupLineTranslations} entity.
   */
  declare productSizeGroupLineTranslations: ProductSizeGroupLineTranslations<T>[];

  constructor(_entityApi: ProductSizeGroupLinesApi<T>) {
    super(_entityApi);
  }
}

export interface ProductSizeGroupLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  productSizeGroupId: DeserializedType<T, 'Edm.String'>;
  productSizeId: DeserializedType<T, 'Edm.String'>;
  sizeName?: DeserializedType<T, 'Edm.String'> | null;
  displayOrder: DeserializedType<T, 'Edm.Decimal'>;
  sizeDescription?: DeserializedType<T, 'Edm.String'> | null;
  replenishmentWeight: DeserializedType<T, 'Edm.Int32'>;
  barcodeNumber?: DeserializedType<T, 'Edm.String'> | null;
  productSize?: ProductSizesType<T> | null;
  productSizeGroup?: ProductSizeGroupsType<T> | null;
  productSizeGroupLineTranslations: ProductSizeGroupLineTranslationsType<T>[];
}
