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
import type { TmpBulkProductAttributeValuesApi } from './TmpBulkProductAttributeValuesApi';

/**
 * This class represents the entity "TmpBulkProductAttributeValues" of service "d365_metadata".
 */
export class TmpBulkProductAttributeValues<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TmpBulkProductAttributeValuesType<T>
{
  /**
   * Technical entity name for TmpBulkProductAttributeValues.
   */
  static override _entityName = 'TmpBulkProductAttributeValues';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TmpBulkProductAttributeValues entity.
   */
  static _keys = [
    'CatalogNumber',
    'AttributeName',
    'AttributeTypeName',
    'DisplayProductNumber',
    'InternalOrgNumber',
    'LanguageId'
  ];
  /**
   * Catalog Number.
   */
  declare catalogNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Attribute Name.
   */
  declare attributeName: DeserializedType<T, 'Edm.String'>;
  /**
   * Attribute Type Name.
   */
  declare attributeTypeName: DeserializedType<T, 'Edm.String'>;
  /**
   * Display Product Number.
   */
  declare displayProductNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Internal Org Number.
   */
  declare internalOrgNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Language Id.
   */
  declare languageId: DeserializedType<T, 'Edm.String'>;
  /**
   * Value As Text.
   * @nullable
   */
  declare valueAsText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Attribute Source Name.
   * @nullable
   */
  declare attributeSourceName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Required As Label.
   * @nullable
   */
  declare requiredAsLabel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Name.
   * @nullable
   */
  declare productName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Attribute Source Type As Label.
   * @nullable
   */
  declare attributeSourceTypeAsLabel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Attribute Property.
   * @nullable
   */
  declare attributeProperty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Catalog Name.
   * @nullable
   */
  declare catalogName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Data Type As Label.
   * @nullable
   */
  declare dataTypeAsLabel?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: TmpBulkProductAttributeValuesApi<T>) {
    super(_entityApi);
  }
}

export interface TmpBulkProductAttributeValuesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  catalogNumber: DeserializedType<T, 'Edm.String'>;
  attributeName: DeserializedType<T, 'Edm.String'>;
  attributeTypeName: DeserializedType<T, 'Edm.String'>;
  displayProductNumber: DeserializedType<T, 'Edm.String'>;
  internalOrgNumber: DeserializedType<T, 'Edm.String'>;
  languageId: DeserializedType<T, 'Edm.String'>;
  valueAsText?: DeserializedType<T, 'Edm.String'> | null;
  attributeSourceName?: DeserializedType<T, 'Edm.String'> | null;
  requiredAsLabel?: DeserializedType<T, 'Edm.String'> | null;
  productName?: DeserializedType<T, 'Edm.String'> | null;
  attributeSourceTypeAsLabel?: DeserializedType<T, 'Edm.String'> | null;
  attributeProperty?: DeserializedType<T, 'Edm.String'> | null;
  catalogName?: DeserializedType<T, 'Edm.String'> | null;
  dataTypeAsLabel?: DeserializedType<T, 'Edm.String'> | null;
}
