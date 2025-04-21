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
import type { RetailCatalogProductCategoriesApi } from './RetailCatalogProductCategoriesApi';
import { CatalogProductExcludeIncludeType } from './CatalogProductExcludeIncludeType';
import {
  RetailCatalogProducts,
  RetailCatalogProductsType
} from './RetailCatalogProducts';
import { ProductCategories, ProductCategoriesType } from './ProductCategories';

/**
 * This class represents the entity "RetailCatalogProductCategories" of service "d365_metadata".
 */
export class RetailCatalogProductCategories<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailCatalogProductCategoriesType<T>
{
  /**
   * Technical entity name for RetailCatalogProductCategories.
   */
  static override _entityName = 'RetailCatalogProductCategories';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailCatalogProductCategories entity.
   */
  static _keys = [
    'CatalogNumber',
    'DisplayProductNumber',
    'CategoryName',
    'CategoryHierarchyName'
  ];
  /**
   * Catalog Number.
   */
  declare catalogNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Display Product Number.
   */
  declare displayProductNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Category Name.
   */
  declare categoryName: DeserializedType<T, 'Edm.String'>;
  /**
   * Category Hierarchy Name.
   */
  declare categoryHierarchyName: DeserializedType<T, 'Edm.String'>;
  /**
   * Include Exclude Type.
   * @nullable
   */
  declare includeExcludeType?: CatalogProductExcludeIncludeType | null;
  /**
   * One-to-one navigation property to the {@link RetailCatalogProducts} entity.
   */
  declare retailCatalogProduct?: RetailCatalogProducts<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductCategories} entity.
   */
  declare productCategory?: ProductCategories<T> | null;

  constructor(_entityApi: RetailCatalogProductCategoriesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailCatalogProductCategoriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  catalogNumber: DeserializedType<T, 'Edm.String'>;
  displayProductNumber: DeserializedType<T, 'Edm.String'>;
  categoryName: DeserializedType<T, 'Edm.String'>;
  categoryHierarchyName: DeserializedType<T, 'Edm.String'>;
  includeExcludeType?: CatalogProductExcludeIncludeType | null;
  retailCatalogProduct?: RetailCatalogProductsType<T> | null;
  productCategory?: ProductCategoriesType<T> | null;
}
