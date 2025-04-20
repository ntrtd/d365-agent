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
import type { SalesListsApi } from './SalesListsApi';
import { ListStatus } from './ListStatus';
import { ModuleSalesPurch } from './ModuleSalesPurch';
import { TaxReport349DeliveryCode } from './TaxReport349DeliveryCode';
import { NoYes } from './NoYes';
import { Quarter } from './Quarter';
import { Listcode } from './Listcode';
import { TaxRep349Sign } from './TaxRep349Sign';
import { EuSalesListCorrectionPeriodEs } from './EuSalesListCorrectionPeriodEs';
import { MonthQuarter } from './MonthQuarter';

/**
 * This class represents the entity "SalesLists" of service "d365_metadata".
 */
export class SalesLists<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SalesListsType<T>
{
  /**
   * Technical entity name for SalesLists.
   */
  static override _entityName = 'SalesLists';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SalesLists entity.
   */
  static _keys = ['dataAreaId', 'Status', 'DispatchId', 'Number'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Status.
   * @nullable
   */
  declare status?: ListStatus | null;
  /**
   * Dispatch Id.
   */
  declare dispatchId: DeserializedType<T, 'Edm.String'>;
  /**
   * Number.
   */
  declare number: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Correction Amount.
   */
  declare correctionAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Direction.
   * @nullable
   */
  declare direction?: ModuleSalesPurch | null;
  /**
   * Delivery Code.
   * @nullable
   */
  declare deliveryCode?: TaxReport349DeliveryCode | null;
  /**
   * Company Tax Id.
   * @nullable
   */
  declare companyTaxId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Reporting Currency Code.
   * @nullable
   */
  declare taxReportingCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Correction Reason Wrong Reg Num.
   * @nullable
   */
  declare correctionReasonWrongRegNum?: NoYes | null;
  /**
   * Services Value.
   */
  declare servicesValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Correction Reason Wrong Amount.
   * @nullable
   */
  declare correctionReasonWrongAmount?: NoYes | null;
  /**
   * Correction Fiscal Year Services.
   */
  declare correctionFiscalYearServices: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Quarter.
   * @nullable
   */
  declare quarter?: Quarter | null;
  /**
   * List Code.
   * @nullable
   */
  declare listCode?: Listcode | null;
  /**
   * Original Sales List Number.
   */
  declare originalSalesListNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Correction Fiscal Year.
   */
  declare correctionFiscalYear: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Error Log.
   * @nullable
   */
  declare errorLog?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Correction Month Or Quarter.
   */
  declare correctionMonthOrQuarter: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Original Sales List Dispatch Id.
   * @nullable
   */
  declare originalSalesListDispatchId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Corrected Services.
   * @nullable
   */
  declare correctedServices?: NoYes | null;
  /**
   * Year.
   */
  declare year: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Corrected.
   * @nullable
   */
  declare corrected?: NoYes | null;
  /**
   * Correction Sign.
   * @nullable
   */
  declare correctionSign?: TaxRep349Sign | null;
  /**
   * Invoice.
   * @nullable
   */
  declare invoice?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Not Assigned Value.
   */
  declare notAssignedValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Items Value.
   */
  declare itemsValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Original Sales List Status.
   * @nullable
   */
  declare originalSalesListStatus?: ListStatus | null;
  /**
   * Investment Value.
   */
  declare investmentValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Correction Month Or Quarter Services.
   */
  declare correctionMonthOrQuarterServices: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Account Number.
   * @nullable
   */
  declare accountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Settlement.
   * @nullable
   */
  declare isSettlement?: NoYes | null;
  /**
   * Correction Period.
   * @nullable
   */
  declare correctionPeriod?: EuSalesListCorrectionPeriodEs | null;
  /**
   * Correction Reason Wrong Period.
   * @nullable
   */
  declare correctionReasonWrongPeriod?: NoYes | null;
  /**
   * Closing Date.
   */
  declare closingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Correction Declaration Type.
   * @nullable
   */
  declare correctionDeclarationType?: MonthQuarter | null;
  /**
   * Country Region Id.
   * @nullable
   */
  declare countryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Date.
   */
  declare invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Tax Exempt Number.
   * @nullable
   */
  declare taxExemptNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Correction Amount Services.
   */
  declare correctionAmountServices: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Correction Sign Services.
   * @nullable
   */
  declare correctionSignServices?: TaxRep349Sign | null;
  /**
   * Correction Period Services.
   * @nullable
   */
  declare correctionPeriodServices?: EuSalesListCorrectionPeriodEs | null;

  constructor(_entityApi: SalesListsApi<T>) {
    super(_entityApi);
  }
}

export interface SalesListsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  status?: ListStatus | null;
  dispatchId: DeserializedType<T, 'Edm.String'>;
  number: DeserializedType<T, 'Edm.Int32'>;
  correctionAmount: DeserializedType<T, 'Edm.Decimal'>;
  direction?: ModuleSalesPurch | null;
  deliveryCode?: TaxReport349DeliveryCode | null;
  companyTaxId?: DeserializedType<T, 'Edm.String'> | null;
  taxReportingCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  correctionReasonWrongRegNum?: NoYes | null;
  servicesValue: DeserializedType<T, 'Edm.Decimal'>;
  correctionReasonWrongAmount?: NoYes | null;
  correctionFiscalYearServices: DeserializedType<T, 'Edm.Int32'>;
  quarter?: Quarter | null;
  listCode?: Listcode | null;
  originalSalesListNumber: DeserializedType<T, 'Edm.Int32'>;
  correctionFiscalYear: DeserializedType<T, 'Edm.Int32'>;
  errorLog?: DeserializedType<T, 'Edm.String'> | null;
  correctionMonthOrQuarter: DeserializedType<T, 'Edm.Int32'>;
  originalSalesListDispatchId?: DeserializedType<T, 'Edm.String'> | null;
  correctedServices?: NoYes | null;
  year: DeserializedType<T, 'Edm.Int32'>;
  corrected?: NoYes | null;
  correctionSign?: TaxRep349Sign | null;
  invoice?: DeserializedType<T, 'Edm.String'> | null;
  notAssignedValue: DeserializedType<T, 'Edm.Decimal'>;
  itemsValue: DeserializedType<T, 'Edm.Decimal'>;
  originalSalesListStatus?: ListStatus | null;
  investmentValue: DeserializedType<T, 'Edm.Decimal'>;
  correctionMonthOrQuarterServices: DeserializedType<T, 'Edm.Int32'>;
  accountNumber?: DeserializedType<T, 'Edm.String'> | null;
  isSettlement?: NoYes | null;
  correctionPeriod?: EuSalesListCorrectionPeriodEs | null;
  correctionReasonWrongPeriod?: NoYes | null;
  closingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  correctionDeclarationType?: MonthQuarter | null;
  countryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  taxExemptNumber?: DeserializedType<T, 'Edm.String'> | null;
  correctionAmountServices: DeserializedType<T, 'Edm.Decimal'>;
  correctionSignServices?: TaxRep349Sign | null;
  correctionPeriodServices?: EuSalesListCorrectionPeriodEs | null;
}
