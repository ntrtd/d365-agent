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
import type { CustomFieldsApi } from './CustomFieldsApi';
import { NoYesCombo } from './NoYesCombo';
import { CustomFieldDataType } from './CustomFieldDataType';

/**
 * This class represents the entity "CustomFields" of service "d365_metadata".
 */
export class CustomFields<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CustomFieldsType<T>
{
  /**
   * Technical entity name for CustomFields.
   */
  static override _entityName = 'CustomFields';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CustomFields entity.
   */
  static _keys = ['dataAreaId', 'CustomField'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Custom Field.
   */
  declare customField: DeserializedType<T, 'Edm.String'>;
  /**
   * Default Boolean.
   * @nullable
   */
  declare defaultBoolean?: NoYesCombo | null;
  /**
   * Max Value.
   */
  declare maxValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Default Real.
   */
  declare defaultReal: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Max Length.
   */
  declare maxLength: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Default Int.
   */
  declare defaultInt: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Validate Minimum.
   */
  declare validateMinimum: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Min Value.
   */
  declare minValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Data Type.
   * @nullable
   */
  declare dataType?: CustomFieldDataType | null;
  /**
   * Default Date.
   */
  declare defaultDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Validate Maximum.
   */
  declare validateMaximum: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Default Text.
   * @nullable
   */
  declare defaultText?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: CustomFieldsApi<T>) {
    super(_entityApi);
  }
}

export interface CustomFieldsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  customField: DeserializedType<T, 'Edm.String'>;
  defaultBoolean?: NoYesCombo | null;
  maxValue: DeserializedType<T, 'Edm.Decimal'>;
  defaultReal: DeserializedType<T, 'Edm.Decimal'>;
  maxLength: DeserializedType<T, 'Edm.Int32'>;
  defaultInt: DeserializedType<T, 'Edm.Int32'>;
  validateMinimum: DeserializedType<T, 'Edm.Boolean'>;
  minValue: DeserializedType<T, 'Edm.Decimal'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  dataType?: CustomFieldDataType | null;
  defaultDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validateMaximum: DeserializedType<T, 'Edm.Boolean'>;
  defaultText?: DeserializedType<T, 'Edm.String'> | null;
}
