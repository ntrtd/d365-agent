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
import type { ProductCategoriesApi } from './ProductCategoriesApi';
import { NoYes } from './NoYes';
import {
  RetailCatalogProductAttributeValues,
  RetailCatalogProductAttributeValuesType
} from './RetailCatalogProductAttributeValues';
import {
  RetailCatalogProductCategories,
  RetailCatalogProductCategoriesType
} from './RetailCatalogProductCategories';
import {
  ChannelCategoryAttributes,
  ChannelCategoryAttributesType
} from './ChannelCategoryAttributes';
import {
  ProductCategoryAssignments,
  ProductCategoryAssignmentsType
} from './ProductCategoryAssignments';
import {
  SpecialCategoryMembers,
  SpecialCategoryMembersType
} from './SpecialCategoryMembers';

/**
 * This class represents the entity "ProductCategories" of service "d365_metadata".
 */
export class ProductCategories<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProductCategoriesType<T>
{
  /**
   * Technical entity name for ProductCategories.
   */
  static override _entityName = 'ProductCategories';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductCategories entity.
   */
  static _keys = ['ProductCategoryHierarchyName', 'CategoryName'];
  /**
   * Product Category Hierarchy Name.
   */
  declare productCategoryHierarchyName: DeserializedType<T, 'Edm.String'>;
  /**
   * Category Name.
   */
  declare categoryName: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Category Inheriting Parent Product Attributes.
   * @nullable
   */
  declare isCategoryInheritingParentProductAttributes?: NoYes | null;
  /**
   * Parent Product Category Hierarchy Name.
   * @nullable
   */
  declare parentProductCategoryHierarchyName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Parent Product Category Code.
   * @nullable
   */
  declare parentProductCategoryCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Tangible Product.
   * @nullable
   */
  declare isTangibleProduct?: NoYes | null;
  /**
   * Category Keywords.
   * @nullable
   */
  declare categoryKeywords?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pk Wi U Code.
   * @nullable
   */
  declare pkWiUCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Category Description.
   * @nullable
   */
  declare categoryDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Category Inheriting Parent Category Attributes.
   * @nullable
   */
  declare isCategoryInheritingParentCategoryAttributes?: NoYes | null;
  /**
   * Category Code.
   * @nullable
   */
  declare categoryCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Id.
   */
  declare externalId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Default Project Global Category Id.
   * @nullable
   */
  declare defaultProjectGlobalCategoryId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Project Category Name.
   * @nullable
   */
  declare projectCategoryName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Parent Product Category Name.
   * @nullable
   */
  declare parentProductCategoryName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Friendly Category Name.
   * @nullable
   */
  declare friendlyCategoryName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Category Record Id.
   */
  declare categoryRecordId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * One-to-many navigation property to the {@link RetailCatalogProductAttributeValues} entity.
   */
  declare retailCatalogProductAttributeValue: RetailCatalogProductAttributeValues<T>[];
  /**
   * One-to-many navigation property to the {@link RetailCatalogProductCategories} entity.
   */
  declare retailCatalogProductCategory: RetailCatalogProductCategories<T>[];
  /**
   * One-to-many navigation property to the {@link ChannelCategoryAttributes} entity.
   */
  declare channelCategoryAttribute: ChannelCategoryAttributes<T>[];
  /**
   * One-to-many navigation property to the {@link ProductCategoryAssignments} entity.
   */
  declare productCategoryAssignments: ProductCategoryAssignments<T>[];
  /**
   * One-to-one navigation property to the {@link ProductCategories} entity.
   */
  declare parentProductCategory?: ProductCategories<T> | null;
  /**
   * One-to-many navigation property to the {@link ProductCategories} entity.
   */
  declare childProductCategories: ProductCategories<T>[];
  /**
   * One-to-many navigation property to the {@link SpecialCategoryMembers} entity.
   */
  declare specialCategoryMember: SpecialCategoryMembers<T>[];

  constructor(_entityApi: ProductCategoriesApi<T>) {
    super(_entityApi);
  }
}

export interface ProductCategoriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  productCategoryHierarchyName: DeserializedType<T, 'Edm.String'>;
  categoryName: DeserializedType<T, 'Edm.String'>;
  isCategoryInheritingParentProductAttributes?: NoYes | null;
  parentProductCategoryHierarchyName?: DeserializedType<T, 'Edm.String'> | null;
  parentProductCategoryCode?: DeserializedType<T, 'Edm.String'> | null;
  isTangibleProduct?: NoYes | null;
  categoryKeywords?: DeserializedType<T, 'Edm.String'> | null;
  pkWiUCode?: DeserializedType<T, 'Edm.String'> | null;
  categoryDescription?: DeserializedType<T, 'Edm.String'> | null;
  isCategoryInheritingParentCategoryAttributes?: NoYes | null;
  categoryCode?: DeserializedType<T, 'Edm.String'> | null;
  externalId: DeserializedType<T, 'Edm.Guid'>;
  defaultProjectGlobalCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  projectCategoryName?: DeserializedType<T, 'Edm.String'> | null;
  parentProductCategoryName?: DeserializedType<T, 'Edm.String'> | null;
  friendlyCategoryName?: DeserializedType<T, 'Edm.String'> | null;
  categoryRecordId: DeserializedType<T, 'Edm.Int64'>;
  retailCatalogProductAttributeValue: RetailCatalogProductAttributeValuesType<T>[];
  retailCatalogProductCategory: RetailCatalogProductCategoriesType<T>[];
  channelCategoryAttribute: ChannelCategoryAttributesType<T>[];
  productCategoryAssignments: ProductCategoryAssignmentsType<T>[];
  parentProductCategory?: ProductCategoriesType<T> | null;
  childProductCategories: ProductCategoriesType<T>[];
  specialCategoryMember: SpecialCategoryMembersType<T>[];
}
