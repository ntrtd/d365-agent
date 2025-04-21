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
import type { BudgetCodesApi } from './BudgetCodesApi';
import { BudgetTransactionType } from './BudgetTransactionType';
import { NoYes } from './NoYes';
import {
  LedgerFinancialReasons,
  LedgerFinancialReasonsType
} from './LedgerFinancialReasons';
import {
  BudgetRegisterEntries,
  BudgetRegisterEntriesType
} from './BudgetRegisterEntries';
import {
  BudgetRegisterEntryHeaders,
  BudgetRegisterEntryHeadersType
} from './BudgetRegisterEntryHeaders';

/**
 * This class represents the entity "BudgetCodes" of service "d365_metadata".
 */
export class BudgetCodes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BudgetCodesType<T>
{
  /**
   * Technical entity name for BudgetCodes.
   */
  static override _entityName = 'BudgetCodes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BudgetCodes entity.
   */
  static _keys = ['dataAreaId', 'BudgetCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Budget Code.
   */
  declare budgetCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Workflow Id.
   * @nullable
   */
  declare workflowId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Budget Type.
   * @nullable
   */
  declare budgetType?: BudgetTransactionType | null;
  /**
   * Is Default Code.
   * @nullable
   */
  declare isDefaultCode?: NoYes | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reason Code.
   * @nullable
   */
  declare reasonCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link LedgerFinancialReasons} entity.
   */
  declare ledgerFinancialReason?: LedgerFinancialReasons<T> | null;
  /**
   * One-to-one navigation property to the {@link BudgetRegisterEntries} entity.
   */
  declare budgetRegisterEntryBudgetCode?: BudgetRegisterEntries<T> | null;
  /**
   * One-to-one navigation property to the {@link BudgetRegisterEntryHeaders} entity.
   */
  declare budgetRegisterEntryHeaderBudgetCode?: BudgetRegisterEntryHeaders<T> | null;

  constructor(_entityApi: BudgetCodesApi<T>) {
    super(_entityApi);
  }
}

export interface BudgetCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  budgetCode: DeserializedType<T, 'Edm.String'>;
  workflowId?: DeserializedType<T, 'Edm.String'> | null;
  budgetType?: BudgetTransactionType | null;
  isDefaultCode?: NoYes | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  reasonCode?: DeserializedType<T, 'Edm.String'> | null;
  ledgerFinancialReason?: LedgerFinancialReasonsType<T> | null;
  budgetRegisterEntryBudgetCode?: BudgetRegisterEntriesType<T> | null;
  budgetRegisterEntryHeaderBudgetCode?: BudgetRegisterEntryHeadersType<T> | null;
}
