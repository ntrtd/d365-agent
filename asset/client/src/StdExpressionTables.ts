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
import type { StdExpressionTablesApi } from './StdExpressionTablesApi';
import { RTax25StdModuleType } from './RTax25StdModuleType';

/**
 * This class represents the entity "StdExpressionTables" of service "d365_metadata".
 */
export class StdExpressionTables<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements StdExpressionTablesType<T>
{
  /**
   * Technical entity name for StdExpressionTables.
   */
  static override _entityName = 'StdExpressionTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the StdExpressionTables entity.
   */
  static _keys = ['dataAreaId', 'Sequence', 'ExpenseCode', 'ModuleType'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sequence.
   */
  declare sequence: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Expense Code.
   */
  declare expenseCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Module Type.
   * @nullable
   */
  declare moduleType?: RTax25StdModuleType | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: StdExpressionTablesApi<T>) {
    super(_entityApi);
  }
}

export interface StdExpressionTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sequence: DeserializedType<T, 'Edm.Int32'>;
  expenseCode: DeserializedType<T, 'Edm.String'>;
  moduleType?: RTax25StdModuleType | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
