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
import type { Tax1099FieldsApi } from './Tax1099FieldsApi';
import { Tax1099Type } from './Tax1099Type';

/**
 * This class represents the entity "Tax1099Fields" of service "d365_metadata".
 */
export class Tax1099Fields<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements Tax1099FieldsType<T>
{
  /**
   * Technical entity name for Tax1099Fields.
   */
  static override _entityName = 'Tax1099Fields';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Tax1099Fields entity.
   */
  static _keys = ['dataAreaId', 'TypeOfTax1099Form', 'Tax1099Box'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Type Of Tax 1099 Form.
   * @nullable
   */
  declare typeOfTax1099Form?: Tax1099Type | null;
  /**
   * Tax 1099 Box.
   */
  declare tax1099Box: DeserializedType<T, 'Edm.String'>;
  /**
   * Box Number.
   */
  declare boxNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Minimum Amount.
   */
  declare minimumAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Form.
   * @nullable
   */
  declare form?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: Tax1099FieldsApi<T>) {
    super(_entityApi);
  }
}

export interface Tax1099FieldsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  typeOfTax1099Form?: Tax1099Type | null;
  tax1099Box: DeserializedType<T, 'Edm.String'>;
  boxNumber: DeserializedType<T, 'Edm.Int32'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  minimumAmount: DeserializedType<T, 'Edm.Decimal'>;
  form?: DeserializedType<T, 'Edm.String'> | null;
}
