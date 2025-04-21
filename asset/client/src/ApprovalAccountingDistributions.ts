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
import type { ApprovalAccountingDistributionsApi } from './ApprovalAccountingDistributionsApi';

/**
 * This class represents the entity "ApprovalAccountingDistributions" of service "d365_metadata".
 */
export class ApprovalAccountingDistributions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ApprovalAccountingDistributionsType<T>
{
  /**
   * Technical entity name for ApprovalAccountingDistributions.
   */
  static override _entityName = 'ApprovalAccountingDistributions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ApprovalAccountingDistributions entity.
   */
  static _keys = ['SourceDocumentLine', 'DistributionNumber', 'WorkItemRecId'];
  /**
   * Source Document Line.
   */
  declare sourceDocumentLine: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Distribution Number.
   */
  declare distributionNumber: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Work Item Rec Id.
   */
  declare workItemRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Transaction Currency.
   * @nullable
   */
  declare transactionCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Approval User.
   * @nullable
   */
  declare approvalUser?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Number.
   * @nullable
   */
  declare itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Legal Entity.
   * @nullable
   */
  declare legalEntity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ledger Account.
   * @nullable
   */
  declare ledgerAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Currency Amount.
   */
  declare transactionCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Purchase Order Number.
   * @nullable
   */
  declare purchaseOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Int64'>;

  constructor(_entityApi: ApprovalAccountingDistributionsApi<T>) {
    super(_entityApi);
  }
}

export interface ApprovalAccountingDistributionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  sourceDocumentLine: DeserializedType<T, 'Edm.Int64'>;
  distributionNumber: DeserializedType<T, 'Edm.Int64'>;
  workItemRecId: DeserializedType<T, 'Edm.Int64'>;
  transactionCurrency?: DeserializedType<T, 'Edm.String'> | null;
  approvalUser?: DeserializedType<T, 'Edm.String'> | null;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  legalEntity?: DeserializedType<T, 'Edm.String'> | null;
  ledgerAccount?: DeserializedType<T, 'Edm.String'> | null;
  transactionCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  purchaseOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  lineNumber: DeserializedType<T, 'Edm.Int64'>;
}
