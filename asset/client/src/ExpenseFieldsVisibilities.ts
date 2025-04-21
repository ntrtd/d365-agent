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
import type { ExpenseFieldsVisibilitiesApi } from './ExpenseFieldsVisibilitiesApi';
import { ExpenseFieldVisibilityType } from './ExpenseFieldVisibilityType';
import { ExpenseVisibilityGroup } from './ExpenseVisibilityGroup';

/**
 * This class represents the entity "ExpenseFieldsVisibilities" of service "d365_metadata".
 */
export class ExpenseFieldsVisibilities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ExpenseFieldsVisibilitiesType<T>
{
  /**
   * Technical entity name for ExpenseFieldsVisibilities.
   */
  static override _entityName = 'ExpenseFieldsVisibilities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ExpenseFieldsVisibilities entity.
   */
  static _keys = ['dataAreaId', 'LegalEntityId', 'TableName', 'FieldName'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
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
   * Visibility Type.
   * @nullable
   */
  declare visibilityType?: ExpenseFieldVisibilityType | null;
  /**
   * Area.
   * @nullable
   */
  declare area?: ExpenseVisibilityGroup | null;

  constructor(_entityApi: ExpenseFieldsVisibilitiesApi<T>) {
    super(_entityApi);
  }
}

export interface ExpenseFieldsVisibilitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  legalEntityId: DeserializedType<T, 'Edm.String'>;
  tableName: DeserializedType<T, 'Edm.String'>;
  fieldName: DeserializedType<T, 'Edm.String'>;
  visibilityType?: ExpenseFieldVisibilityType | null;
  area?: ExpenseVisibilityGroup | null;
}
