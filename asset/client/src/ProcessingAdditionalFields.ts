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
import type { ProcessingAdditionalFieldsApi } from './ProcessingAdditionalFieldsApi';

/**
 * This class represents the entity "ProcessingAdditionalFields" of service "d365_metadata".
 */
export class ProcessingAdditionalFields<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProcessingAdditionalFieldsType<T>
{
  /**
   * Technical entity name for ProcessingAdditionalFields.
   */
  static override _entityName = 'ProcessingAdditionalFields';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProcessingAdditionalFields entity.
   */
  static _keys = ['dataAreaId', 'Processing', 'MessgeItemType', 'FieldName'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Processing.
   */
  declare processing: DeserializedType<T, 'Edm.String'>;
  /**
   * Messge Item Type.
   */
  declare messgeItemType: DeserializedType<T, 'Edm.String'>;
  /**
   * Field Name.
   */
  declare fieldName: DeserializedType<T, 'Edm.String'>;
  /**
   * Default Value.
   * @nullable
   */
  declare defaultValue?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ProcessingAdditionalFieldsApi<T>) {
    super(_entityApi);
  }
}

export interface ProcessingAdditionalFieldsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  processing: DeserializedType<T, 'Edm.String'>;
  messgeItemType: DeserializedType<T, 'Edm.String'>;
  fieldName: DeserializedType<T, 'Edm.String'>;
  defaultValue?: DeserializedType<T, 'Edm.String'> | null;
}
