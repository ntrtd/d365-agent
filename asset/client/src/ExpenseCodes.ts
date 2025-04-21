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
import type { ExpenseCodesApi } from './ExpenseCodesApi';
import { NoYes } from './NoYes';
import { RTax25ProfitType } from './RTax25ProfitType';

/**
 * This class represents the entity "ExpenseCodes" of service "d365_metadata".
 */
export class ExpenseCodes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ExpenseCodesType<T>
{
  /**
   * Technical entity name for ExpenseCodes.
   */
  static override _entityName = 'ExpenseCodes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ExpenseCodes entity.
   */
  static _keys = ['dataAreaId', 'ExpenseCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Expense Code.
   */
  declare expenseCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Locked.
   * @nullable
   */
  declare locked?: NoYes | null;
  /**
   * Short Description.
   * @nullable
   */
  declare shortDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Direct.
   * @nullable
   */
  declare direct?: NoYes | null;
  /**
   * Sales Tax Code.
   * @nullable
   */
  declare salesTaxCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Code Type.
   * @nullable
   */
  declare codeType?: RTax25ProfitType | null;
  /**
   * Parent Code.
   * @nullable
   */
  declare parentCode?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ExpenseCodesApi<T>) {
    super(_entityApi);
  }
}

export interface ExpenseCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  expenseCode: DeserializedType<T, 'Edm.String'>;
  locked?: NoYes | null;
  shortDescription?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  direct?: NoYes | null;
  salesTaxCode?: DeserializedType<T, 'Edm.String'> | null;
  codeType?: RTax25ProfitType | null;
  parentCode?: DeserializedType<T, 'Edm.String'> | null;
}
