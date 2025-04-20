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
import type { ProductColorGroupsApi } from './ProductColorGroupsApi';
import { ProductsV2, ProductsV2Type } from './ProductsV2';
import {
  ProductColorGroupLines,
  ProductColorGroupLinesType
} from './ProductColorGroupLines';

/**
 * This class represents the entity "ProductColorGroups" of service "d365_metadata".
 */
export class ProductColorGroups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProductColorGroupsType<T>
{
  /**
   * Technical entity name for ProductColorGroups.
   */
  static override _entityName = 'ProductColorGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductColorGroups entity.
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
   * One-to-many navigation property to the {@link ProductsV2} entity.
   */
  declare products: ProductsV2<T>[];
  /**
   * One-to-many navigation property to the {@link ProductColorGroupLines} entity.
   */
  declare productColorGroupLines: ProductColorGroupLines<T>[];

  constructor(_entityApi: ProductColorGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface ProductColorGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  groupId: DeserializedType<T, 'Edm.String'>;
  groupDescription?: DeserializedType<T, 'Edm.String'> | null;
  products: ProductsV2Type<T>[];
  productColorGroupLines: ProductColorGroupLinesType<T>[];
}
