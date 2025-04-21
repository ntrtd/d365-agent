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
import type { BudgetTransactionHeaderBiEntitiesApi } from './BudgetTransactionHeaderBiEntitiesApi';
import { BudgetTransactionWorkflowStatus } from './BudgetTransactionWorkflowStatus';
import { BudgetTransactionStatus } from './BudgetTransactionStatus';
import { BudgetTransactionType } from './BudgetTransactionType';
import { NoYes } from './NoYes';
import { HeadingSub } from './HeadingSub';

/**
 * This class represents the entity "BudgetTransactionHeaderBiEntities" of service "d365_metadata".
 */
export class BudgetTransactionHeaderBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BudgetTransactionHeaderBiEntitiesType<T>
{
  /**
   * Technical entity name for BudgetTransactionHeaderBiEntities.
   */
  static override _entityName = 'BudgetTransactionHeaderBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BudgetTransactionHeaderBiEntities entity.
   */
  static _keys = ['TransactionNumber', 'PrimaryLedger'];
  /**
   * Transaction Number.
   */
  declare transactionNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Primary Ledger.
   */
  declare primaryLedger: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Workflow Status.
   * @nullable
   */
  declare workflowStatus?: BudgetTransactionWorkflowStatus | null;
  /**
   * Transaction Status.
   * @nullable
   */
  declare transactionStatus?: BudgetTransactionStatus | null;
  /**
   * Sys Created By.
   * @nullable
   */
  declare sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document Date.
   */
  declare documentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sys Modified By.
   * @nullable
   */
  declare sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transfer Source Number.
   * @nullable
   */
  declare transferSourceNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Budget Transaction Type.
   * @nullable
   */
  declare budgetTransactionType?: BudgetTransactionType | null;
  /**
   * In Use By.
   * @nullable
   */
  declare inUseBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Budget Model Id.
   * @nullable
   */
  declare budgetModelId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is One Time Amendment.
   * @nullable
   */
  declare isOneTimeAmendment?: NoYes | null;
  /**
   * Budget Transaction Code.
   */
  declare budgetTransactionCode: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Budget Sub Model Id.
   * @nullable
   */
  declare budgetSubModelId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Budget Model Type.
   * @nullable
   */
  declare budgetModelType?: HeadingSub | null;
  /**
   * Reason Table Ref.
   */
  declare reasonTableRef: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Budget Model Data Area Id.
   * @nullable
   */
  declare budgetModelDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Modified Date Time.
   */
  declare sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Created On.
   */
  declare createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: BudgetTransactionHeaderBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface BudgetTransactionHeaderBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  transactionNumber: DeserializedType<T, 'Edm.String'>;
  primaryLedger: DeserializedType<T, 'Edm.Int64'>;
  workflowStatus?: BudgetTransactionWorkflowStatus | null;
  transactionStatus?: BudgetTransactionStatus | null;
  sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  documentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  transferSourceNumber?: DeserializedType<T, 'Edm.String'> | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  budgetTransactionType?: BudgetTransactionType | null;
  inUseBy?: DeserializedType<T, 'Edm.String'> | null;
  budgetModelId?: DeserializedType<T, 'Edm.String'> | null;
  isOneTimeAmendment?: NoYes | null;
  budgetTransactionCode: DeserializedType<T, 'Edm.Int64'>;
  budgetSubModelId?: DeserializedType<T, 'Edm.String'> | null;
  budgetModelType?: HeadingSub | null;
  reasonTableRef: DeserializedType<T, 'Edm.Int64'>;
  budgetModelDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
