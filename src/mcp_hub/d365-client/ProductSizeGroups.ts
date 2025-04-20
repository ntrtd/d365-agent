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
import type { ProductSizeGroupsApi } from './ProductSizeGroupsApi';
import {
  ProductSizeGroupLines,
  ProductSizeGroupLinesType
} from './ProductSizeGroupLines';
import { ProductsV2, ProductsV2Type } from './ProductsV2';

/**
 * This class represents the entity "ProductSizeGroups" of service "d365_metadata".
 */
export class ProductSizeGroups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProductSizeGroupsType<T>
{
  /**
   * Technical entity name for ProductSizeGroups.
   */
  static override _entityName = 'ProductSizeGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductSizeGroups entity.
   */
  static _keys = ['GroupId'];
  /**
   * Group Id.
   */
  declare groupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Group Description.
   * @nullable
   */
  declare groupDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link ProductSizeGroupLines} entity.
   */
  declare productSizeGroupLines: ProductSizeGroupLines<T>[];
  /**
   * One-to-many navigation property to the {@link ProductsV2} entity.
   */
  declare products: ProductsV2<T>[];

  constructor(_entityApi: ProductSizeGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface ProductSizeGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  groupId: DeserializedType<T, 'Edm.String'>;
  groupDescription?: DeserializedType<T, 'Edm.String'> | null;
  productSizeGroupLines: ProductSizeGroupLinesType<T>[];
  products: ProductsV2Type<T>[];
}
