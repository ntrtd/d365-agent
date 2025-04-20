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
import type { ProductStyleGroupsApi } from './ProductStyleGroupsApi';
import {
  ProductStyleGroupLines,
  ProductStyleGroupLinesType
} from './ProductStyleGroupLines';
import { ProductsV2, ProductsV2Type } from './ProductsV2';

/**
 * This class represents the entity "ProductStyleGroups" of service "d365_metadata".
 */
export class ProductStyleGroups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProductStyleGroupsType<T>
{
  /**
   * Technical entity name for ProductStyleGroups.
   */
  static override _entityName = 'ProductStyleGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductStyleGroups entity.
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
   * One-to-many navigation property to the {@link ProductStyleGroupLines} entity.
   */
  declare productStyleGroupLines: ProductStyleGroupLines<T>[];
  /**
   * One-to-many navigation property to the {@link ProductsV2} entity.
   */
  declare products: ProductsV2<T>[];

  constructor(_entityApi: ProductStyleGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface ProductStyleGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  groupId: DeserializedType<T, 'Edm.String'>;
  groupDescription?: DeserializedType<T, 'Edm.String'> | null;
  productStyleGroupLines: ProductStyleGroupLinesType<T>[];
  products: ProductsV2Type<T>[];
}
