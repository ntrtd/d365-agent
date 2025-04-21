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
import type { AdminCustomFieldsApi } from './AdminCustomFieldsApi';
import { TrvFieldVisibility } from './TrvFieldVisibility';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "AdminCustomFields" of service "d365_metadata".
 */
export class AdminCustomFields<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements AdminCustomFieldsType<T>
{
  /**
   * Technical entity name for AdminCustomFields.
   */
  static override _entityName = 'AdminCustomFields';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AdminCustomFields entity.
   */
  static _keys = [
    'dataAreaId',
    'LegalEntityId',
    'RefTableId',
    'RefFieldId',
    'MethodName'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Legal Entity Id.
   */
  declare legalEntityId: DeserializedType<T, 'Edm.String'>;
  /**
   * Ref Table Id.
   */
  declare refTableId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Ref Field Id.
   */
  declare refFieldId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Method Name.
   */
  declare methodName: DeserializedType<T, 'Edm.String'>;
  /**
   * Visibility.
   * @nullable
   */
  declare visibility?: TrvFieldVisibility | null;
  /**
   * Table Name.
   * @nullable
   */
  declare tableName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Show In Form.
   * @nullable
   */
  declare showInForm?: NoYes | null;
  /**
   * Localised Label Name.
   * @nullable
   */
  declare localisedLabelName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Label Name.
   * @nullable
   */
  declare labelName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Field Name.
   * @nullable
   */
  declare fieldName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: AdminCustomFieldsApi<T>) {
    super(_entityApi);
  }
}

export interface AdminCustomFieldsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  legalEntityId: DeserializedType<T, 'Edm.String'>;
  refTableId: DeserializedType<T, 'Edm.Int32'>;
  refFieldId: DeserializedType<T, 'Edm.Int32'>;
  methodName: DeserializedType<T, 'Edm.String'>;
  visibility?: TrvFieldVisibility | null;
  tableName?: DeserializedType<T, 'Edm.String'> | null;
  showInForm?: NoYes | null;
  localisedLabelName?: DeserializedType<T, 'Edm.String'> | null;
  labelName?: DeserializedType<T, 'Edm.String'> | null;
  fieldName?: DeserializedType<T, 'Edm.String'> | null;
}
