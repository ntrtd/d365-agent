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
import type { ProductAttributeEnumerationTextTypesApi } from './ProductAttributeEnumerationTextTypesApi';

/**
 * This class represents the entity "ProductAttributeEnumerationTextTypes" of service "d365_metadata".
 */
export class ProductAttributeEnumerationTextTypes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductAttributeEnumerationTextTypesType<T>
{
  /**
   * Technical entity name for ProductAttributeEnumerationTextTypes.
   */
  static override _entityName = 'ProductAttributeEnumerationTextTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductAttributeEnumerationTextTypes entity.
   */
  static _keys = [
    'EnumerationName',
    'EnumerationNameUniqueID',
    'EnumerationValue'
  ];
  /**
   * Enumeration Name.
   */
  declare enumerationName: DeserializedType<T, 'Edm.String'>;
  /**
   * Enumeration Name Unique Id.
   */
  declare enumerationNameUniqueId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Enumeration Value.
   */
  declare enumerationValue: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: ProductAttributeEnumerationTextTypesApi<T>) {
    super(_entityApi);
  }
}

export interface ProductAttributeEnumerationTextTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  enumerationName: DeserializedType<T, 'Edm.String'>;
  enumerationNameUniqueId: DeserializedType<T, 'Edm.Int32'>;
  enumerationValue: DeserializedType<T, 'Edm.String'>;
}
