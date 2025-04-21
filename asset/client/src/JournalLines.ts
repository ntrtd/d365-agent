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
import type { JournalLinesApi } from './JournalLinesApi';
import { LedgerJournalAcType } from './LedgerJournalAcType';

/**
 * This class represents the entity "JournalLines" of service "d365_metadata".
 */
export class JournalLines<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements JournalLinesType<T>
{
  /**
   * Technical entity name for JournalLines.
   */
  static override _entityName = 'JournalLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the JournalLines entity.
   */
  static _keys = ['dataAreaId', 'JournalBatchNumber', 'LineNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Journal Batch Number.
   */
  declare journalBatchNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transaction Date.
   */
  declare transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Voucher.
   * @nullable
   */
  declare voucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Deferrals Id.
   * @nullable
   */
  declare deferralsId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account Type.
   * @nullable
   */
  declare accountType?: LedgerJournalAcType | null;
  /**
   * Offset Company.
   * @nullable
   */
  declare offsetCompany?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Sales Tax Group.
   * @nullable
   */
  declare itemSalesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Offset Account Display Value.
   * @nullable
   */
  declare offsetAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Tax Code.
   * @nullable
   */
  declare salesTaxCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency.
   * @nullable
   */
  declare currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Offset Account Type.
   * @nullable
   */
  declare offsetAccountType?: LedgerJournalAcType | null;
  /**
   * Main Account Type Cache.
   * @nullable
   */
  declare mainAccountTypeCache?: DeserializedType<T, 'Edm.Binary'> | null;
  /**
   * Date.
   */
  declare date: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Company.
   * @nullable
   */
  declare company?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Period.
   */
  declare period: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Debit.
   */
  declare debit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Model Number.
   * @nullable
   */
  declare modelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Tax Group.
   * @nullable
   */
  declare salesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account Display Value.
   * @nullable
   */
  declare accountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Credit.
   */
  declare credit: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: JournalLinesApi<T>) {
    super(_entityApi);
  }
}

export interface JournalLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  journalBatchNumber: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  voucher?: DeserializedType<T, 'Edm.String'> | null;
  deferralsId?: DeserializedType<T, 'Edm.String'> | null;
  accountType?: LedgerJournalAcType | null;
  offsetCompany?: DeserializedType<T, 'Edm.String'> | null;
  itemSalesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  offsetAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxCode?: DeserializedType<T, 'Edm.String'> | null;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  offsetAccountType?: LedgerJournalAcType | null;
  mainAccountTypeCache?: DeserializedType<T, 'Edm.Binary'> | null;
  date: DeserializedType<T, 'Edm.DateTimeOffset'>;
  company?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  period: DeserializedType<T, 'Edm.DateTimeOffset'>;
  debit: DeserializedType<T, 'Edm.Decimal'>;
  modelNumber?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  accountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  credit: DeserializedType<T, 'Edm.Decimal'>;
}
