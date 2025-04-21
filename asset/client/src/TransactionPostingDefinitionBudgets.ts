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
import type { TransactionPostingDefinitionBudgetsApi } from './TransactionPostingDefinitionBudgetsApi';
import { BudgetTransactionType } from './BudgetTransactionType';
import { TableAll } from './TableAll';

/**
 * This class represents the entity "TransactionPostingDefinitionBudgets" of service "d365_metadata".
 */
export class TransactionPostingDefinitionBudgets<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TransactionPostingDefinitionBudgetsType<T>
{
  /**
   * Technical entity name for TransactionPostingDefinitionBudgets.
   */
  static override _entityName = 'TransactionPostingDefinitionBudgets';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TransactionPostingDefinitionBudgets entity.
   */
  static _keys = ['dataAreaId', 'BudgetCodeRelationName', 'BudgetType'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Budget Code Relation Name.
   */
  declare budgetCodeRelationName: DeserializedType<T, 'Edm.String'>;
  /**
   * Budget Type.
   * @nullable
   */
  declare budgetType?: BudgetTransactionType | null;
  /**
   * Budget Code Table All.
   * @nullable
   */
  declare budgetCodeTableAll?: TableAll | null;
  /**
   * Posting Definition Id.
   * @nullable
   */
  declare postingDefinitionId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: TransactionPostingDefinitionBudgetsApi<T>) {
    super(_entityApi);
  }
}

export interface TransactionPostingDefinitionBudgetsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  budgetCodeRelationName: DeserializedType<T, 'Edm.String'>;
  budgetType?: BudgetTransactionType | null;
  budgetCodeTableAll?: TableAll | null;
  postingDefinitionId?: DeserializedType<T, 'Edm.String'> | null;
}
