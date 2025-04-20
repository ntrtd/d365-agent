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
import type { ProcessingMessageAdditionalFieldsApi } from './ProcessingMessageAdditionalFieldsApi';

/**
 * This class represents the entity "ProcessingMessageAdditionalFields" of service "d365_metadata".
 */
export class ProcessingMessageAdditionalFields<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProcessingMessageAdditionalFieldsType<T>
{
  /**
   * Technical entity name for ProcessingMessageAdditionalFields.
   */
  static override _entityName = 'ProcessingMessageAdditionalFields';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProcessingMessageAdditionalFields entity.
   */
  static _keys = ['dataAreaId', 'Processing', 'FieldName'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Processing.
   */
  declare processing: DeserializedType<T, 'Edm.String'>;
  /**
   * Field Name.
   */
  declare fieldName: DeserializedType<T, 'Edm.String'>;
  /**
   * Default Value.
   * @nullable
   */
  declare defaultValue?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ProcessingMessageAdditionalFieldsApi<T>) {
    super(_entityApi);
  }
}

export interface ProcessingMessageAdditionalFieldsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  processing: DeserializedType<T, 'Edm.String'>;
  fieldName: DeserializedType<T, 'Edm.String'>;
  defaultValue?: DeserializedType<T, 'Edm.String'> | null;
}
