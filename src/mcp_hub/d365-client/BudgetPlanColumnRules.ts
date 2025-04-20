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
import type { BudgetPlanColumnRulesApi } from './BudgetPlanColumnRulesApi';
import { BudgetPlanExpressionOperator } from './BudgetPlanExpressionOperator';

/**
 * This class represents the entity "BudgetPlanColumnRules" of service "d365_metadata".
 */
export class BudgetPlanColumnRules<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BudgetPlanColumnRulesType<T>
{
  /**
   * Technical entity name for BudgetPlanColumnRules.
   */
  static override _entityName = 'BudgetPlanColumnRules';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BudgetPlanColumnRules entity.
   */
  static _keys = ['ColumnName', 'TableName', 'FieldName', 'RightSideValueOne'];
  /**
   * Column Name.
   */
  declare columnName: DeserializedType<T, 'Edm.String'>;
  /**
   * Table Name.
   */
  declare tableName: DeserializedType<T, 'Edm.String'>;
  /**
   * Field Name.
   */
  declare fieldName: DeserializedType<T, 'Edm.String'>;
  /**
   * Right Side Value One.
   */
  declare rightSideValueOne: DeserializedType<T, 'Edm.String'>;
  /**
   * Right Side Value Two.
   * @nullable
   */
  declare rightSideValueTwo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Operator.
   * @nullable
   */
  declare operator?: BudgetPlanExpressionOperator | null;

  constructor(_entityApi: BudgetPlanColumnRulesApi<T>) {
    super(_entityApi);
  }
}

export interface BudgetPlanColumnRulesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  columnName: DeserializedType<T, 'Edm.String'>;
  tableName: DeserializedType<T, 'Edm.String'>;
  fieldName: DeserializedType<T, 'Edm.String'>;
  rightSideValueOne: DeserializedType<T, 'Edm.String'>;
  rightSideValueTwo?: DeserializedType<T, 'Edm.String'> | null;
  operator?: BudgetPlanExpressionOperator | null;
}
