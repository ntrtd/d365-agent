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
import type { SpecialCategoryMembersApi } from './SpecialCategoryMembersApi';
import { ProductCategories, ProductCategoriesType } from './ProductCategories';
import { ProductVariants, ProductVariantsType } from './ProductVariants';

/**
 * This class represents the entity "SpecialCategoryMembers" of service "d365_metadata".
 */
export class SpecialCategoryMembers<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SpecialCategoryMembersType<T>
{
  /**
   * Technical entity name for SpecialCategoryMembers.
   */
  static override _entityName = 'SpecialCategoryMembers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SpecialCategoryMembers entity.
   */
  static _keys = [
    'HeaderProductCategoryHierarchyName',
    'HeaderProductCategoryName',
    'LineProductCategoryHierarchyName',
    'LineProductCategoryName',
    'ProductNumber',
    'ProductVariantNumber'
  ];
  /**
   * Header Product Category Hierarchy Name.
   */
  declare headerProductCategoryHierarchyName: DeserializedType<T, 'Edm.String'>;
  /**
   * Header Product Category Name.
   */
  declare headerProductCategoryName: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Product Category Hierarchy Name.
   */
  declare lineProductCategoryHierarchyName: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Product Category Name.
   */
  declare lineProductCategoryName: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Number.
   */
  declare productNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Variant Number.
   */
  declare productVariantNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Name.
   * @nullable
   */
  declare productName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link ProductCategories} entity.
   */
  declare productCategory?: ProductCategories<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductVariants} entity.
   */
  declare productVariant?: ProductVariants<T> | null;

  constructor(_entityApi: SpecialCategoryMembersApi<T>) {
    super(_entityApi);
  }
}

export interface SpecialCategoryMembersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  headerProductCategoryHierarchyName: DeserializedType<T, 'Edm.String'>;
  headerProductCategoryName: DeserializedType<T, 'Edm.String'>;
  lineProductCategoryHierarchyName: DeserializedType<T, 'Edm.String'>;
  lineProductCategoryName: DeserializedType<T, 'Edm.String'>;
  productNumber: DeserializedType<T, 'Edm.String'>;
  productVariantNumber: DeserializedType<T, 'Edm.String'>;
  productName?: DeserializedType<T, 'Edm.String'> | null;
  productCategory?: ProductCategoriesType<T> | null;
  productVariant?: ProductVariantsType<T> | null;
}
