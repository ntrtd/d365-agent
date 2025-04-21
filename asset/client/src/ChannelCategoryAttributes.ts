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
import type { ChannelCategoryAttributesApi } from './ChannelCategoryAttributesApi';
import { RetailChannels, RetailChannelsType } from './RetailChannels';
import { ProductCategories, ProductCategoriesType } from './ProductCategories';

/**
 * This class represents the entity "ChannelCategoryAttributes" of service "d365_metadata".
 */
export class ChannelCategoryAttributes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ChannelCategoryAttributesType<T>
{
  /**
   * Technical entity name for ChannelCategoryAttributes.
   */
  static override _entityName = 'ChannelCategoryAttributes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ChannelCategoryAttributes entity.
   */
  static _keys = [
    'RetailChannelId',
    'ProductCategoryHierarchyName',
    'ProductCategoryName',
    'AttributeName',
    'AttributeTypeName'
  ];
  /**
   * Retail Channel Id.
   */
  declare retailChannelId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Category Hierarchy Name.
   */
  declare productCategoryHierarchyName: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Category Name.
   */
  declare productCategoryName: DeserializedType<T, 'Edm.String'>;
  /**
   * Attribute Name.
   */
  declare attributeName: DeserializedType<T, 'Edm.String'>;
  /**
   * Attribute Type Name.
   */
  declare attributeTypeName: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-one navigation property to the {@link RetailChannels} entity.
   */
  declare retailChannel?: RetailChannels<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductCategories} entity.
   */
  declare productCategory?: ProductCategories<T> | null;

  constructor(_entityApi: ChannelCategoryAttributesApi<T>) {
    super(_entityApi);
  }
}

export interface ChannelCategoryAttributesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  retailChannelId: DeserializedType<T, 'Edm.String'>;
  productCategoryHierarchyName: DeserializedType<T, 'Edm.String'>;
  productCategoryName: DeserializedType<T, 'Edm.String'>;
  attributeName: DeserializedType<T, 'Edm.String'>;
  attributeTypeName: DeserializedType<T, 'Edm.String'>;
  retailChannel?: RetailChannelsType<T> | null;
  productCategory?: ProductCategoriesType<T> | null;
}
