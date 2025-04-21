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
import type { AdvancedLedgerEntriesApi } from './AdvancedLedgerEntriesApi';
import { AdvancedLedgerEntryTransactionStatus } from './AdvancedLedgerEntryTransactionStatus';
import { NoYes } from './NoYes';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';

/**
 * This class represents the entity "AdvancedLedgerEntries" of service "d365_metadata".
 */
export class AdvancedLedgerEntries<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AdvancedLedgerEntriesType<T>
{
  /**
   * Technical entity name for AdvancedLedgerEntries.
   */
  static override _entityName = 'AdvancedLedgerEntries';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AdvancedLedgerEntries entity.
   */
  static _keys = ['dataAreaId', 'HeaderTransactionNumber', 'LineNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Header Transaction Number.
   */
  declare headerTransactionNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Header Transaction Text.
   * @nullable
   */
  declare headerTransactionText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Proj Funding Source Contract.
   * @nullable
   */
  declare projFundingSourceContract?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Id.
   * @nullable
   */
  declare projectId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Text Line.
   * @nullable
   */
  declare transactionTextLine?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Proj Funding Source.
   * @nullable
   */
  declare projFundingSource?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Header Transaction Status.
   * @nullable
   */
  declare headerTransactionStatus?: AdvancedLedgerEntryTransactionStatus | null;
  /**
   * Fiscal Calendar Period Name.
   * @nullable
   */
  declare fiscalCalendarPeriodName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Line Property.
   * @nullable
   */
  declare projectLineProperty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Transaction Id.
   * @nullable
   */
  declare projectTransactionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Item Sales Tax Group.
   * @nullable
   */
  declare projectItemSalesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reversing Entry.
   * @nullable
   */
  declare reversingEntry?: NoYes | null;
  /**
   * Header Accounting Date.
   */
  declare headerAccountingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Project Sales Currency.
   * @nullable
   */
  declare projectSalesCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Header Currency.
   * @nullable
   */
  declare headerCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fiscal Calendar.
   * @nullable
   */
  declare fiscalCalendar?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reversing Date.
   */
  declare reversingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Ledger Account Display Value.
   * @nullable
   */
  declare ledgerAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fiscal Calendar Year Name.
   * @nullable
   */
  declare fiscalCalendarYearName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Credit.
   */
  declare credit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Debit.
   */
  declare debit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Price.
   */
  declare salesPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Header Posting Definition.
   * @nullable
   */
  declare headerPostingDefinition?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Posting Definition.
   * @nullable
   */
  declare linePostingDefinition?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Activity Number.
   * @nullable
   */
  declare projectActivityNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Currency.
   * @nullable
   */
  declare lineCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cost Price.
   */
  declare costPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Project Category.
   * @nullable
   */
  declare projectCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Sales Tax Group.
   * @nullable
   */
  declare projectSalesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Quantity.
   */
  declare quantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Psn Do Update Bank.
   * @nullable
   */
  declare psnDoUpdateBank?: NoYes | null;
  /**
   * Psn Bank Transaction Type.
   * @nullable
   */
  declare psnBankTransactionType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Psn Is Correction.
   * @nullable
   */
  declare psnIsCorrection?: NoYes | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;

  constructor(_entityApi: AdvancedLedgerEntriesApi<T>) {
    super(_entityApi);
  }
}

export interface AdvancedLedgerEntriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  headerTransactionNumber: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  headerTransactionText?: DeserializedType<T, 'Edm.String'> | null;
  projFundingSourceContract?: DeserializedType<T, 'Edm.String'> | null;
  projectId?: DeserializedType<T, 'Edm.String'> | null;
  transactionTextLine?: DeserializedType<T, 'Edm.String'> | null;
  projFundingSource?: DeserializedType<T, 'Edm.String'> | null;
  headerTransactionStatus?: AdvancedLedgerEntryTransactionStatus | null;
  fiscalCalendarPeriodName?: DeserializedType<T, 'Edm.String'> | null;
  projectLineProperty?: DeserializedType<T, 'Edm.String'> | null;
  projectTransactionId?: DeserializedType<T, 'Edm.String'> | null;
  projectItemSalesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  reversingEntry?: NoYes | null;
  headerAccountingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  projectSalesCurrency?: DeserializedType<T, 'Edm.String'> | null;
  headerCurrency?: DeserializedType<T, 'Edm.String'> | null;
  fiscalCalendar?: DeserializedType<T, 'Edm.String'> | null;
  reversingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  ledgerAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  fiscalCalendarYearName?: DeserializedType<T, 'Edm.String'> | null;
  credit: DeserializedType<T, 'Edm.Decimal'>;
  debit: DeserializedType<T, 'Edm.Decimal'>;
  salesPrice: DeserializedType<T, 'Edm.Decimal'>;
  headerPostingDefinition?: DeserializedType<T, 'Edm.String'> | null;
  linePostingDefinition?: DeserializedType<T, 'Edm.String'> | null;
  projectActivityNumber?: DeserializedType<T, 'Edm.String'> | null;
  lineCurrency?: DeserializedType<T, 'Edm.String'> | null;
  costPrice: DeserializedType<T, 'Edm.Decimal'>;
  projectCategory?: DeserializedType<T, 'Edm.String'> | null;
  projectSalesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  quantity: DeserializedType<T, 'Edm.Decimal'>;
  psnDoUpdateBank?: NoYes | null;
  psnBankTransactionType?: DeserializedType<T, 'Edm.String'> | null;
  psnIsCorrection?: NoYes | null;
  dimensionCombination?: DimensionCombinationsType<T> | null;
}
