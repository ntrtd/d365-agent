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
import type { ProductStyleGroupLinesApi } from './ProductStyleGroupLinesApi';
import {
  ProductStyleGroupLineTranslations,
  ProductStyleGroupLineTranslationsType
} from './ProductStyleGroupLineTranslations';
import { ProductStyles, ProductStylesType } from './ProductStyles';
import {
  ProductStyleGroups,
  ProductStyleGroupsType
} from './ProductStyleGroups';

/**
 * This class represents the entity "ProductStyleGroupLines" of service "d365_metadata".
 */
export class ProductStyleGroupLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductStyleGroupLinesType<T>
{
  /**
   * Technical entity name for ProductStyleGroupLines.
   */
  static override _entityName = 'ProductStyleGroupLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductStyleGroupLines entity.
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
   * Display Order.
   */
  declare displayOrder: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Barcode Number.
   * @nullable
   */
  declare barcodeNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link ProductStyleGroupLineTranslations} entity.
   */
  declare productStyleGroupLineTranslations: ProductStyleGroupLineTranslations<T>[];
  /**
   * One-to-one navigation property to the {@link ProductStyles} entity.
   */
  declare productStyle?: ProductStyles<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductStyleGroups} entity.
   */
  declare productStyleGroup?: ProductStyleGroups<T> | null;

  constructor(_entityApi: ProductStyleGroupLinesApi<T>) {
    super(_entityApi);
  }
}

export interface ProductStyleGroupLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  productStyleGroupId: DeserializedType<T, 'Edm.String'>;
  productStyleId: DeserializedType<T, 'Edm.String'>;
  replenishmentWeight: DeserializedType<T, 'Edm.Int32'>;
  styleName?: DeserializedType<T, 'Edm.String'> | null;
  styleDescription?: DeserializedType<T, 'Edm.String'> | null;
  displayOrder: DeserializedType<T, 'Edm.Decimal'>;
  barcodeNumber?: DeserializedType<T, 'Edm.String'> | null;
  productStyleGroupLineTranslations: ProductStyleGroupLineTranslationsType<T>[];
  productStyle?: ProductStylesType<T> | null;
  productStyleGroup?: ProductStyleGroupsType<T> | null;
}
