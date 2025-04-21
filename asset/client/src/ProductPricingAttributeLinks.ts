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
import type { ProductPricingAttributeLinksApi } from './ProductPricingAttributeLinksApi';
import { GupPricingAttributeSourceType } from './GupPricingAttributeSourceType';
import { GupPricingAttributeSource } from './GupPricingAttributeSource';

/**
 * This class represents the entity "ProductPricingAttributeLinks" of service "d365_metadata".
 */
export class ProductPricingAttributeLinks<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductPricingAttributeLinksType<T>
{
  /**
   * Technical entity name for ProductPricingAttributeLinks.
   */
  static override _entityName = 'ProductPricingAttributeLinks';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductPricingAttributeLinks entity.
   */
  static _keys = [
    'PricingAttributeGroup',
    'AttributeName',
    'TypeName',
    'SourceName',
    'FieldName'
  ];
  /**
   * Pricing Attribute Group.
   */
  declare pricingAttributeGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Attribute Name.
   */
  declare attributeName: DeserializedType<T, 'Edm.String'>;
  /**
   * Type Name.
   */
  declare typeName: DeserializedType<T, 'Edm.String'>;
  /**
   * Source Name.
   */
  declare sourceName: DeserializedType<T, 'Edm.String'>;
  /**
   * Field Name.
   */
  declare fieldName: DeserializedType<T, 'Edm.String'>;
  /**
   * Default Value.
   * @nullable
   */
  declare defaultValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Attribute Source Type.
   * @nullable
   */
  declare attributeSourceType?: GupPricingAttributeSourceType | null;
  /**
   * Source.
   * @nullable
   */
  declare source?: GupPricingAttributeSource | null;
  /**
   * Priority.
   */
  declare priority: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Table Name.
   * @nullable
   */
  declare tableName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ProductPricingAttributeLinksApi<T>) {
    super(_entityApi);
  }
}

export interface ProductPricingAttributeLinksType<
  T extends DeSerializers = DefaultDeSerializers
> {
  pricingAttributeGroup: DeserializedType<T, 'Edm.String'>;
  attributeName: DeserializedType<T, 'Edm.String'>;
  typeName: DeserializedType<T, 'Edm.String'>;
  sourceName: DeserializedType<T, 'Edm.String'>;
  fieldName: DeserializedType<T, 'Edm.String'>;
  defaultValue?: DeserializedType<T, 'Edm.String'> | null;
  attributeSourceType?: GupPricingAttributeSourceType | null;
  source?: GupPricingAttributeSource | null;
  priority: DeserializedType<T, 'Edm.Int32'>;
  tableName?: DeserializedType<T, 'Edm.String'> | null;
}
