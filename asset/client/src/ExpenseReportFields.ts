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
import type { ExpenseReportFieldsApi } from './ExpenseReportFieldsApi';
import { TrvFieldVisibility } from './TrvFieldVisibility';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "ExpenseReportFields" of service "d365_metadata".
 */
export class ExpenseReportFields<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ExpenseReportFieldsType<T>
{
  /**
   * Technical entity name for ExpenseReportFields.
   */
  static override _entityName = 'ExpenseReportFields';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ExpenseReportFields entity.
   */
  static _keys = ['LegalEntityId', 'TableName', 'FieldName', 'MethodName'];
  /**
   * Legal Entity Id.
   */
  declare legalEntityId: DeserializedType<T, 'Edm.String'>;
  /**
   * Table Name.
   */
  declare tableName: DeserializedType<T, 'Edm.String'>;
  /**
   * Field Name.
   */
  declare fieldName: DeserializedType<T, 'Edm.String'>;
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
   * Show In Form.
   * @nullable
   */
  declare showInForm?: NoYes | null;

  constructor(_entityApi: ExpenseReportFieldsApi<T>) {
    super(_entityApi);
  }
}

export interface ExpenseReportFieldsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  legalEntityId: DeserializedType<T, 'Edm.String'>;
  tableName: DeserializedType<T, 'Edm.String'>;
  fieldName: DeserializedType<T, 'Edm.String'>;
  methodName: DeserializedType<T, 'Edm.String'>;
  visibility?: TrvFieldVisibility | null;
  showInForm?: NoYes | null;
}
