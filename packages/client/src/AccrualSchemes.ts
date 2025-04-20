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
import type { AccrualSchemesApi } from './AccrualSchemesApi';
import { DayWeekMonth } from './DayWeekMonth';
import { AssetAccrualFiscal } from './AssetAccrualFiscal';
import { LedgerAccrualPeriod } from './LedgerAccrualPeriod';
import { LedgerAccrualEvenScale } from './LedgerAccrualEvenScale';
import { OmOperatingUnitType } from './OmOperatingUnitType';
import { LedgerAccrualVoucher } from './LedgerAccrualVoucher';
import { PrimoMedioUltimo } from './PrimoMedioUltimo';
import { AssetAccrualCalendar } from './AssetAccrualCalendar';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';

/**
 * This class represents the entity "AccrualSchemes" of service "d365_metadata".
 */
export class AccrualSchemes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements AccrualSchemesType<T>
{
  /**
   * Technical entity name for AccrualSchemes.
   */
  static override _entityName = 'AccrualSchemes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AccrualSchemes entity.
   */
  static _keys = ['dataAreaId', 'AccrualIdentification'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Accrual Identification.
   */
  declare accrualIdentification: DeserializedType<T, 'Edm.String'>;
  /**
   * Number Sequence Table Number Sequence.
   * @nullable
   */
  declare numberSequenceTableNumberSequence?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Accrual Scheme Description.
   * @nullable
   */
  declare accrualSchemeDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Post Transactions.
   * @nullable
   */
  declare postTransactions?: DayWeekMonth | null;
  /**
   * Transaction Description.
   * @nullable
   */
  declare transactionDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fiscal Period Frequency.
   * @nullable
   */
  declare fiscalPeriodFrequency?: AssetAccrualFiscal | null;
  /**
   * Fiscal Calendar Calendar Id.
   * @nullable
   */
  declare fiscalCalendarCalendarId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Legal Entity Data Area.
   * @nullable
   */
  declare legalEntityDataArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Operating Unit Party Number.
   * @nullable
   */
  declare operatingUnitPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Accrual Basis.
   * @nullable
   */
  declare accrualBasis?: LedgerAccrualPeriod | null;
  /**
   * Period Key.
   * @nullable
   */
  declare periodKey?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Number Of Occurrences Per Period.
   */
  declare numberOfOccurrencesPerPeriod: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Spread Month And Quarter Values.
   * @nullable
   */
  declare spreadMonthAndQuarterValues?: LedgerAccrualEvenScale | null;
  /**
   * Number Sequence Scope Operating Unit Type.
   * @nullable
   */
  declare numberSequenceScopeOperatingUnitType?: OmOperatingUnitType | null;
  /**
   * Credit Ledger Dimension Display Value.
   * @nullable
   */
  declare creditLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Fiscal Calendar Year Name.
   * @nullable
   */
  declare fiscalCalendarYearName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Voucher.
   * @nullable
   */
  declare voucher?: LedgerAccrualVoucher | null;
  /**
   * Debit Ledger Dimension Display Value.
   * @nullable
   */
  declare debitLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Post In Week Month Or Quarter.
   * @nullable
   */
  declare postInWeekMonthOrQuarter?: PrimoMedioUltimo | null;
  /**
   * Number Sequence Scope Data Area.
   * @nullable
   */
  declare numberSequenceScopeDataArea?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Legal Entity Party Number.
   * @nullable
   */
  declare legalEntityPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Calendar Period Frequency.
   * @nullable
   */
  declare calendarPeriodFrequency?: AssetAccrualCalendar | null;
  /**
   * Fiscal Calendar Period Name.
   * @nullable
   */
  declare fiscalCalendarPeriodName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;

  constructor(_entityApi: AccrualSchemesApi<T>) {
    super(_entityApi);
  }
}

export interface AccrualSchemesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  accrualIdentification: DeserializedType<T, 'Edm.String'>;
  numberSequenceTableNumberSequence?: DeserializedType<T, 'Edm.String'> | null;
  accrualSchemeDescription?: DeserializedType<T, 'Edm.String'> | null;
  postTransactions?: DayWeekMonth | null;
  transactionDescription?: DeserializedType<T, 'Edm.String'> | null;
  fiscalPeriodFrequency?: AssetAccrualFiscal | null;
  fiscalCalendarCalendarId?: DeserializedType<T, 'Edm.String'> | null;
  legalEntityDataArea?: DeserializedType<T, 'Edm.String'> | null;
  operatingUnitPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  accrualBasis?: LedgerAccrualPeriod | null;
  periodKey?: DeserializedType<T, 'Edm.String'> | null;
  numberOfOccurrencesPerPeriod: DeserializedType<T, 'Edm.Int32'>;
  spreadMonthAndQuarterValues?: LedgerAccrualEvenScale | null;
  numberSequenceScopeOperatingUnitType?: OmOperatingUnitType | null;
  creditLedgerDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  fiscalCalendarYearName?: DeserializedType<T, 'Edm.String'> | null;
  voucher?: LedgerAccrualVoucher | null;
  debitLedgerDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  postInWeekMonthOrQuarter?: PrimoMedioUltimo | null;
  numberSequenceScopeDataArea?: DeserializedType<T, 'Edm.String'> | null;
  legalEntityPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  calendarPeriodFrequency?: AssetAccrualCalendar | null;
  fiscalCalendarPeriodName?: DeserializedType<T, 'Edm.String'> | null;
  dimensionCombination?: DimensionCombinationsType<T> | null;
}
