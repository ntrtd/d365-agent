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
import type { ProductCategoryHierarchyRolesApi } from './ProductCategoryHierarchyRolesApi';
import { EcoResCategoryNamedHierarchyRole } from './EcoResCategoryNamedHierarchyRole';
import {
  ProductCategoryHierarchies,
  ProductCategoryHierarchiesType
} from './ProductCategoryHierarchies';

/**
 * This class represents the entity "ProductCategoryHierarchyRoles" of service "d365_metadata".
 */
export class ProductCategoryHierarchyRoles<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductCategoryHierarchyRolesType<T>
{
  /**
   * Technical entity name for ProductCategoryHierarchyRoles.
   */
  static override _entityName = 'ProductCategoryHierarchyRoles';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductCategoryHierarchyRoles entity.
   */
  static _keys = ['HierarchyRole', 'ProductCategoryHierarchyName'];
  /**
   * Hierarchy Role.
   * @nullable
   */
  declare hierarchyRole?: EcoResCategoryNamedHierarchyRole | null;
  /**
   * Product Category Hierarchy Name.
   */
  declare productCategoryHierarchyName: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-one navigation property to the {@link ProductCategoryHierarchies} entity.
   */
  declare productCategoryHierarchy?: ProductCategoryHierarchies<T> | null;

  constructor(_entityApi: ProductCategoryHierarchyRolesApi<T>) {
    super(_entityApi);
  }
}

export interface ProductCategoryHierarchyRolesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  hierarchyRole?: EcoResCategoryNamedHierarchyRole | null;
  productCategoryHierarchyName: DeserializedType<T, 'Edm.String'>;
  productCategoryHierarchy?: ProductCategoryHierarchiesType<T> | null;
}
