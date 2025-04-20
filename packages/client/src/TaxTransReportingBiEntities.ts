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
import type { TaxTransReportingBiEntitiesApi } from './TaxTransReportingBiEntitiesApi';
import { UnknownNoYes } from './UnknownNoYes';
import { LedgerJournalType } from './LedgerJournalType';

/**
 * This class represents the entity "TaxTransReportingBiEntities" of service "d365_metadata".
 */
export class TaxTransReportingBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TaxTransReportingBiEntitiesType<T>
{
  /**
   * Technical entity name for TaxTransReportingBiEntities.
   */
  static override _entityName = 'TaxTransReportingBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TaxTransReportingBiEntities entity.
   */
  static _keys = ['dataAreaId', 'SourceKey'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Is Transaction Reversal.
   * @nullable
   */
  declare isTransactionReversal?: UnknownNoYes | null;
  /**
   * Is Original Document Credit Note.
   * @nullable
   */
  declare isOriginalDocumentCreditNote?: UnknownNoYes | null;
  /**
   * Tax Trans.
   */
  declare taxTrans: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Ledger Journal Type.
   * @nullable
   */
  declare ledgerJournalType?: LedgerJournalType | null;
  /**
   * Is Tax Trans Credit Note.
   * @nullable
   */
  declare isTaxTransCreditNote?: UnknownNoYes | null;
  /**
   * Vend Trans.
   */
  declare vendTrans: DeserializedType<T, 'Edm.Int64'>;

  constructor(_entityApi: TaxTransReportingBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface TaxTransReportingBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  isTransactionReversal?: UnknownNoYes | null;
  isOriginalDocumentCreditNote?: UnknownNoYes | null;
  taxTrans: DeserializedType<T, 'Edm.Int64'>;
  ledgerJournalType?: LedgerJournalType | null;
  isTaxTransCreditNote?: UnknownNoYes | null;
  vendTrans: DeserializedType<T, 'Edm.Int64'>;
}
