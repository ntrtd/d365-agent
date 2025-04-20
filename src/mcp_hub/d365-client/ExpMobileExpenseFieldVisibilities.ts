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
import type { ExpMobileExpenseFieldVisibilitiesApi } from './ExpMobileExpenseFieldVisibilitiesApi';
import { ExpenseVisibilityGroup } from './ExpenseVisibilityGroup';
import { ExpenseFieldVisibilityType } from './ExpenseFieldVisibilityType';

/**
 * This class represents the entity "ExpMobileExpenseFieldVisibilities" of service "d365_metadata".
 */
export class ExpMobileExpenseFieldVisibilities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ExpMobileExpenseFieldVisibilitiesType<T>
{
  /**
   * Technical entity name for ExpMobileExpenseFieldVisibilities.
   */
  static override _entityName = 'ExpMobileExpenseFieldVisibilities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ExpMobileExpenseFieldVisibilities entity.
   */
  static _keys = ['LegalEntityId', 'ReferenceTableID', 'ExpenseFieldName'];
  /**
   * Legal Entity Id.
   */
  declare legalEntityId: DeserializedType<T, 'Edm.String'>;
  /**
   * Reference Table Id.
   */
  declare referenceTableId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Expense Field Name.
   */
  declare expenseFieldName: DeserializedType<T, 'Edm.String'>;
  /**
   * Area.
   * @nullable
   */
  declare area?: ExpenseVisibilityGroup | null;
  /**
   * Field Name.
   * @nullable
   */
  declare fieldName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Visibility Type.
   * @nullable
   */
  declare visibilityType?: ExpenseFieldVisibilityType | null;
  /**
   * Label Name.
   * @nullable
   */
  declare labelName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Localised Label Name.
   * @nullable
   */
  declare localisedLabelName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ExpMobileExpenseFieldVisibilitiesApi<T>) {
    super(_entityApi);
  }
}

export interface ExpMobileExpenseFieldVisibilitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  legalEntityId: DeserializedType<T, 'Edm.String'>;
  referenceTableId: DeserializedType<T, 'Edm.Int32'>;
  expenseFieldName: DeserializedType<T, 'Edm.String'>;
  area?: ExpenseVisibilityGroup | null;
  fieldName?: DeserializedType<T, 'Edm.String'> | null;
  visibilityType?: ExpenseFieldVisibilityType | null;
  labelName?: DeserializedType<T, 'Edm.String'> | null;
  localisedLabelName?: DeserializedType<T, 'Edm.String'> | null;
}
