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
import type { CustomFieldPicklistValuesApi } from './CustomFieldPicklistValuesApi';

/**
 * This class represents the entity "CustomFieldPicklistValues" of service "d365_metadata".
 */
export class CustomFieldPicklistValues<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CustomFieldPicklistValuesType<T>
{
  /**
   * Technical entity name for CustomFieldPicklistValues.
   */
  static override _entityName = 'CustomFieldPicklistValues';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CustomFieldPicklistValues entity.
   */
  static _keys = ['PicklistId', 'Value'];
  /**
   * Picklist Id.
   */
  declare picklistId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Value.
   */
  declare value: DeserializedType<T, 'Edm.String'>;
  /**
   * Sequence.
   */
  declare sequence: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: CustomFieldPicklistValuesApi<T>) {
    super(_entityApi);
  }
}

export interface CustomFieldPicklistValuesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  picklistId: DeserializedType<T, 'Edm.Int32'>;
  value: DeserializedType<T, 'Edm.String'>;
  sequence: DeserializedType<T, 'Edm.Decimal'>;
}
