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
import type { ProductAttributeEnumerationTextTypesV2Api } from './ProductAttributeEnumerationTextTypesV2Api';

/**
 * This class represents the entity "ProductAttributeEnumerationTextTypesV2" of service "d365_metadata".
 */
export class ProductAttributeEnumerationTextTypesV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductAttributeEnumerationTextTypesV2Type<T>
{
  /**
   * Technical entity name for ProductAttributeEnumerationTextTypesV2.
   */
  static override _entityName = 'ProductAttributeEnumerationTextTypesV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductAttributeEnumerationTextTypesV2 entity.
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

  constructor(_entityApi: ProductAttributeEnumerationTextTypesV2Api<T>) {
    super(_entityApi);
  }
}

export interface ProductAttributeEnumerationTextTypesV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  enumerationName: DeserializedType<T, 'Edm.String'>;
  enumerationNameUniqueId: DeserializedType<T, 'Edm.Int32'>;
  enumerationValue?: DeserializedType<T, 'Edm.String'> | null;
}
