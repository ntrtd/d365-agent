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
import type { ProductCategoryHierarchiesApi } from './ProductCategoryHierarchiesApi';
import {
  RetailCatalogProductAttributeValues,
  RetailCatalogProductAttributeValuesType
} from './RetailCatalogProductAttributeValues';
import {
  RetailProductHierarchyCategories,
  RetailProductHierarchyCategoriesType
} from './RetailProductHierarchyCategories';
import {
  ProductCategoryHierarchyRoles,
  ProductCategoryHierarchyRolesType
} from './ProductCategoryHierarchyRoles';
import {
  ProcurementProductCategories,
  ProcurementProductCategoriesType
} from './ProcurementProductCategories';
import { RetailCallCenters, RetailCallCentersType } from './RetailCallCenters';
import { RetailStores, RetailStoresType } from './RetailStores';

/**
 * This class represents the entity "ProductCategoryHierarchies" of service "d365_metadata".
 */
export class ProductCategoryHierarchies<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductCategoryHierarchiesType<T>
{
  /**
   * Technical entity name for ProductCategoryHierarchies.
   */
  static override _entityName = 'ProductCategoryHierarchies';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductCategoryHierarchies entity.
   */
  static _keys = ['HierarchyName'];
  /**
   * Hierarchy Name.
   */
  declare hierarchyName: DeserializedType<T, 'Edm.String'>;
  /**
   * Hierarchy Description.
   * @nullable
   */
  declare hierarchyDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link RetailCatalogProductAttributeValues} entity.
   */
  declare retailCatalogProductAttributeValue: RetailCatalogProductAttributeValues<T>[];
  /**
   * One-to-one navigation property to the {@link RetailProductHierarchyCategories} entity.
   */
  declare retailProductHierarchyCategory?: RetailProductHierarchyCategories<T> | null;
  /**
   * One-to-many navigation property to the {@link ProductCategoryHierarchyRoles} entity.
   */
  declare productCategoryHierarchyRoles: ProductCategoryHierarchyRoles<T>[];
  /**
   * One-to-many navigation property to the {@link ProcurementProductCategories} entity.
   */
  declare productCategories: ProcurementProductCategories<T>[];
  /**
   * One-to-many navigation property to the {@link RetailCallCenters} entity.
   */
  declare retailCallCenter: RetailCallCenters<T>[];
  /**
   * One-to-many navigation property to the {@link RetailStores} entity.
   */
  declare retailStore: RetailStores<T>[];

  constructor(_entityApi: ProductCategoryHierarchiesApi<T>) {
    super(_entityApi);
  }
}

export interface ProductCategoryHierarchiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  hierarchyName: DeserializedType<T, 'Edm.String'>;
  hierarchyDescription?: DeserializedType<T, 'Edm.String'> | null;
  retailCatalogProductAttributeValue: RetailCatalogProductAttributeValuesType<T>[];
  retailProductHierarchyCategory?: RetailProductHierarchyCategoriesType<T> | null;
  productCategoryHierarchyRoles: ProductCategoryHierarchyRolesType<T>[];
  productCategories: ProcurementProductCategoriesType<T>[];
  retailCallCenter: RetailCallCentersType<T>[];
  retailStore: RetailStoresType<T>[];
}
