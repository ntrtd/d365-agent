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
import type { ProductAttributeEnumerationTextTypesV3Api } from './ProductAttributeEnumerationTextTypesV3Api';

/**
 * This class represents the entity "ProductAttributeEnumerationTextTypesV3" of service "d365_metadata".
 */
export class ProductAttributeEnumerationTextTypesV3<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductAttributeEnumerationTextTypesV3Type<T>
{
  /**
   * Technical entity name for ProductAttributeEnumerationTextTypesV3.
   */
  static override _entityName = 'ProductAttributeEnumerationTextTypesV3';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductAttributeEnumerationTextTypesV3 entity.
   */
  static _keys = ['EnumerationName', 'EnumerationNameUniqueID'];
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
   * @nullable
   */
  declare enumerationValue?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ProductAttributeEnumerationTextTypesV3Api<T>) {
    super(_entityApi);
  }
}

export interface ProductAttributeEnumerationTextTypesV3Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  enumerationName: DeserializedType<T, 'Edm.String'>;
  enumerationNameUniqueId: DeserializedType<T, 'Edm.Int32'>;
  enumerationValue?: DeserializedType<T, 'Edm.String'> | null;
}
