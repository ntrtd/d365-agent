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
import type { ProductAttributeEnumerationIntegerTypesApi } from './ProductAttributeEnumerationIntegerTypesApi';

/**
 * This class represents the entity "ProductAttributeEnumerationIntegerTypes" of service "d365_metadata".
 */
export class ProductAttributeEnumerationIntegerTypes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductAttributeEnumerationIntegerTypesType<T>
{
  /**
   * Technical entity name for ProductAttributeEnumerationIntegerTypes.
   */
  static override _entityName = 'ProductAttributeEnumerationIntegerTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductAttributeEnumerationIntegerTypes entity.
   */
  static _keys = [
    'EnumerationName',
    'EnumerationNameUniqueID',
    'EnumerationIntegerValue'
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
   * Enumeration Integer Value.
   */
  declare enumerationIntegerValue: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: ProductAttributeEnumerationIntegerTypesApi<T>) {
    super(_entityApi);
  }
}

export interface ProductAttributeEnumerationIntegerTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  enumerationName: DeserializedType<T, 'Edm.String'>;
  enumerationNameUniqueId: DeserializedType<T, 'Edm.Int32'>;
  enumerationIntegerValue: DeserializedType<T, 'Edm.Int32'>;
}
