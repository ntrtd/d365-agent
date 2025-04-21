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
import type { RetailCatalogProductsApi } from './RetailCatalogProductsApi';
import { NoYes } from './NoYes';
import {
  RetailCatalogProductAttributeValues,
  RetailCatalogProductAttributeValuesType
} from './RetailCatalogProductAttributeValues';
import { RetailCatalogs, RetailCatalogsType } from './RetailCatalogs';
import {
  RetailCatalogInternalOrganizationProductAttributeValues,
  RetailCatalogInternalOrganizationProductAttributeValuesType
} from './RetailCatalogInternalOrganizationProductAttributeValues';
import {
  RetailCatalogProductCategories,
  RetailCatalogProductCategoriesType
} from './RetailCatalogProductCategories';
import {
  RetailCatalogInternalOrganizationProductAttributeValues2,
  RetailCatalogInternalOrganizationProductAttributeValues2Type
} from './RetailCatalogInternalOrganizationProductAttributeValues2';

/**
 * This class represents the entity "RetailCatalogProducts" of service "d365_metadata".
 */
export class RetailCatalogProducts<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailCatalogProductsType<T>
{
  /**
   * Technical entity name for RetailCatalogProducts.
   */
  static override _entityName = 'RetailCatalogProducts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailCatalogProducts entity.
   */
  static _keys = ['CatalogNumber', 'DisplayProductNumber'];
  /**
   * Catalog Number.
   */
  declare catalogNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Display Product Number.
   */
  declare displayProductNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Display Order.
   */
  declare displayOrder: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Use Hierarchy.
   * @nullable
   */
  declare useHierarchy?: NoYes | null;
  /**
   * One-to-one navigation property to the {@link RetailCatalogProductAttributeValues} entity.
   */
  declare retailCatalogProductAttributeValue?: RetailCatalogProductAttributeValues<T> | null;
  /**
   * One-to-one navigation property to the {@link RetailCatalogs} entity.
   */
  declare retailCatalog?: RetailCatalogs<T> | null;
  /**
   * One-to-many navigation property to the {@link RetailCatalogInternalOrganizationProductAttributeValues} entity.
   */
  declare retailCatalogInternalOrganizationProductAttributeValue: RetailCatalogInternalOrganizationProductAttributeValues<T>[];
  /**
   * One-to-many navigation property to the {@link RetailCatalogProductCategories} entity.
   */
  declare retailCatalogProductCategory: RetailCatalogProductCategories<T>[];
  /**
   * One-to-many navigation property to the {@link RetailCatalogInternalOrganizationProductAttributeValues2} entity.
   */
  declare retailCatalogInternalOrganizationProductAttributeValue2: RetailCatalogInternalOrganizationProductAttributeValues2<T>[];

  constructor(_entityApi: RetailCatalogProductsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailCatalogProductsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  catalogNumber: DeserializedType<T, 'Edm.String'>;
  displayProductNumber: DeserializedType<T, 'Edm.String'>;
  displayOrder: DeserializedType<T, 'Edm.Decimal'>;
  useHierarchy?: NoYes | null;
  retailCatalogProductAttributeValue?: RetailCatalogProductAttributeValuesType<T> | null;
  retailCatalog?: RetailCatalogsType<T> | null;
  retailCatalogInternalOrganizationProductAttributeValue: RetailCatalogInternalOrganizationProductAttributeValuesType<T>[];
  retailCatalogProductCategory: RetailCatalogProductCategoriesType<T>[];
  retailCatalogInternalOrganizationProductAttributeValue2: RetailCatalogInternalOrganizationProductAttributeValues2Type<T>[];
}
