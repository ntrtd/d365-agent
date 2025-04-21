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
import type { BudgetRegisterEntryHeadersApi } from './BudgetRegisterEntryHeadersApi';
import { BudgetTransactionWorkflowStatus } from './BudgetTransactionWorkflowStatus';
import { NoYes } from './NoYes';
import { BudgetTransactionType } from './BudgetTransactionType';
import { BudgetTransactionStatus } from './BudgetTransactionStatus';
import {
  BudgetRegisterEntryLines,
  BudgetRegisterEntryLinesType
} from './BudgetRegisterEntryLines';
import {
  BudgetRegisterEntries,
  BudgetRegisterEntriesType
} from './BudgetRegisterEntries';
import { BudgetModels, BudgetModelsType } from './BudgetModels';
import { Ledgers, LedgersType } from './Ledgers';
import { BudgetCodes, BudgetCodesType } from './BudgetCodes';

/**
 * This class represents the entity "BudgetRegisterEntryHeaders" of service "d365_metadata".
 */
export class BudgetRegisterEntryHeaders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BudgetRegisterEntryHeadersType<T>
{
  /**
   * Technical entity name for BudgetRegisterEntryHeaders.
   */
  static override _entityName = 'BudgetRegisterEntryHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BudgetRegisterEntryHeaders entity.
   */
  static _keys = ['dataAreaId', 'LegalEntityId', 'EntryNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Legal Entity Id.
   */
  declare legalEntityId: DeserializedType<T, 'Edm.String'>;
  /**
   * Entry Number.
   */
  declare entryNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Workflow Status.
   * @nullable
   */
  declare workflowStatus?: BudgetTransactionWorkflowStatus | null;
  /**
   * Default Date.
   */
  declare defaultDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One Time Revision.
   * @nullable
   */
  declare oneTimeRevision?: NoYes | null;
  /**
   * Reason Comment.
   * @nullable
   */
  declare reasonComment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reason Code.
   * @nullable
   */
  declare reasonCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Budget Type.
   * @nullable
   */
  declare budgetType?: BudgetTransactionType | null;
  /**
   * Source Document.
   * @nullable
   */
  declare sourceDocument?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Revenue Budget Total.
   */
  declare revenueBudgetTotal: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Budget Model Id.
   * @nullable
   */
  declare budgetModelId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Budget Code.
   * @nullable
   */
  declare budgetCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Status.
   * @nullable
   */
  declare status?: BudgetTransactionStatus | null;
  /**
   * Expense Budget Total.
   */
  declare expenseBudgetTotal: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link BudgetRegisterEntryLines} entity.
   */
  declare budgetRegisterEntryLineEntryHeader?: BudgetRegisterEntryLines<T> | null;
  /**
   * One-to-one navigation property to the {@link BudgetRegisterEntries} entity.
   */
  declare budgetRegisterEntryBudgetRegisterEntryHeader?: BudgetRegisterEntries<T> | null;
  /**
   * One-to-one navigation property to the {@link BudgetModels} entity.
   */
  declare budgetModels?: BudgetModels<T> | null;
  /**
   * One-to-one navigation property to the {@link Ledgers} entity.
   */
  declare primaryLedger?: Ledgers<T> | null;
  /**
   * One-to-one navigation property to the {@link BudgetCodes} entity.
   */
  declare budgetCodes?: BudgetCodes<T> | null;

  constructor(_entityApi: BudgetRegisterEntryHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface BudgetRegisterEntryHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  legalEntityId: DeserializedType<T, 'Edm.String'>;
  entryNumber: DeserializedType<T, 'Edm.String'>;
  workflowStatus?: BudgetTransactionWorkflowStatus | null;
  defaultDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  oneTimeRevision?: NoYes | null;
  reasonComment?: DeserializedType<T, 'Edm.String'> | null;
  reasonCode?: DeserializedType<T, 'Edm.String'> | null;
  budgetType?: BudgetTransactionType | null;
  sourceDocument?: DeserializedType<T, 'Edm.String'> | null;
  revenueBudgetTotal: DeserializedType<T, 'Edm.Decimal'>;
  budgetModelId?: DeserializedType<T, 'Edm.String'> | null;
  budgetCode?: DeserializedType<T, 'Edm.String'> | null;
  status?: BudgetTransactionStatus | null;
  expenseBudgetTotal: DeserializedType<T, 'Edm.Decimal'>;
  budgetRegisterEntryLineEntryHeader?: BudgetRegisterEntryLinesType<T> | null;
  budgetRegisterEntryBudgetRegisterEntryHeader?: BudgetRegisterEntriesType<T> | null;
  budgetModels?: BudgetModelsType<T> | null;
  primaryLedger?: LedgersType<T> | null;
  budgetCodes?: BudgetCodesType<T> | null;
}
