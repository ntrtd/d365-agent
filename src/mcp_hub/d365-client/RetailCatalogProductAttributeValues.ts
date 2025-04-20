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
import type { RetailCatalogProductAttributeValuesApi } from './RetailCatalogProductAttributeValuesApi';
import { NoYes } from './NoYes';
import { ProductCategories, ProductCategoriesType } from './ProductCategories';
import {
  ProductCategoryHierarchies,
  ProductCategoryHierarchiesType
} from './ProductCategoryHierarchies';
import { RetailCatalogs, RetailCatalogsType } from './RetailCatalogs';
import {
  RetailCatalogProducts,
  RetailCatalogProductsType
} from './RetailCatalogProducts';

/**
 * This class represents the entity "RetailCatalogProductAttributeValues" of service "d365_metadata".
 */
export class RetailCatalogProductAttributeValues<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailCatalogProductAttributeValuesType<T>
{
  /**
   * Technical entity name for RetailCatalogProductAttributeValues.
   */
  static override _entityName = 'RetailCatalogProductAttributeValues';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailCatalogProductAttributeValues entity.
   */
  static _keys = [
    'CatalogNumber',
    'CategoryHierarchyName',
    'CategoryName',
    'DisplayProductNumber',
    'AttributeGroupName',
    'AttributeName',
    'AttributeTypeName'
  ];
  /**
   * Catalog Number.
   */
  declare catalogNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Category Hierarchy Name.
   */
  declare categoryHierarchyName: DeserializedType<T, 'Edm.String'>;
  /**
   * Category Name.
   */
  declare categoryName: DeserializedType<T, 'Edm.String'>;
  /**
   * Display Product Number.
   */
  declare displayProductNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Attribute Group Name.
   */
  declare attributeGroupName: DeserializedType<T, 'Edm.String'>;
  /**
   * Attribute Name.
   */
  declare attributeName: DeserializedType<T, 'Edm.String'>;
  /**
   * Attribute Type Name.
   */
  declare attributeTypeName: DeserializedType<T, 'Edm.String'>;
  /**
   * Integer Value.
   */
  declare integerValue: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date Time Value.
   */
  declare dateTimeValue: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Decimal Value.
   */
  declare decimalValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Boolean Value.
   * @nullable
   */
  declare booleanValue?: NoYes | null;
  /**
   * Currency Value.
   */
  declare currencyValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Text Value.
   * @nullable
   */
  declare textValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link ProductCategories} entity.
   */
  declare productCategory?: ProductCategories<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductCategoryHierarchies} entity.
   */
  declare productCategoryHierarchy?: ProductCategoryHierarchies<T> | null;
  /**
   * One-to-one navigation property to the {@link RetailCatalogs} entity.
   */
  declare retailCatalog?: RetailCatalogs<T> | null;
  /**
   * One-to-one navigation property to the {@link RetailCatalogProducts} entity.
   */
  declare retailCatalogProduct?: RetailCatalogProducts<T> | null;

  constructor(_entityApi: RetailCatalogProductAttributeValuesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailCatalogProductAttributeValuesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  catalogNumber: DeserializedType<T, 'Edm.String'>;
  categoryHierarchyName: DeserializedType<T, 'Edm.String'>;
  categoryName: DeserializedType<T, 'Edm.String'>;
  displayProductNumber: DeserializedType<T, 'Edm.String'>;
  attributeGroupName: DeserializedType<T, 'Edm.String'>;
  attributeName: DeserializedType<T, 'Edm.String'>;
  attributeTypeName: DeserializedType<T, 'Edm.String'>;
  integerValue: DeserializedType<T, 'Edm.Int32'>;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  dateTimeValue: DeserializedType<T, 'Edm.DateTimeOffset'>;
  decimalValue: DeserializedType<T, 'Edm.Decimal'>;
  booleanValue?: NoYes | null;
  currencyValue: DeserializedType<T, 'Edm.Decimal'>;
  textValue?: DeserializedType<T, 'Edm.String'> | null;
  productCategory?: ProductCategoriesType<T> | null;
  productCategoryHierarchy?: ProductCategoryHierarchiesType<T> | null;
  retailCatalog?: RetailCatalogsType<T> | null;
  retailCatalogProduct?: RetailCatalogProductsType<T> | null;
}
