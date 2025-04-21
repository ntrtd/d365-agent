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
import type { ReportExtraFieldsApi } from './ReportExtraFieldsApi';

/**
 * This class represents the entity "ReportExtraFields" of service "d365_metadata".
 */
export class ReportExtraFields<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ReportExtraFieldsType<T>
{
  /**
   * Technical entity name for ReportExtraFields.
   */
  static override _entityName = 'ReportExtraFields';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ReportExtraFields entity.
   */
  static _keys = ['dataAreaId', 'SettlementPeriod', 'FromDate', 'ToDate'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Settlement Period.
   */
  declare settlementPeriod: DeserializedType<T, 'Edm.String'>;
  /**
   * From Date.
   */
  declare fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * To Date.
   */
  declare toDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Wholesale Credit.
   */
  declare wholesaleCredit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Fuel Tax Credit Over Claim.
   */
  declare fuelTaxCreditOverClaim: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Varied Fringe Benefits Tax.
   */
  declare variedFringeBenefitsTax: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Ato Fringe Benefit.
   */
  declare atoFringeBenefit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Fringe Credit.
   */
  declare fringeCredit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Payg Credit.
   */
  declare paygCredit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Deferred Instalment.
   */
  declare deferredInstalment: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Total Payroll.
   */
  declare totalPayroll: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Withheld From Invoices Where No Abn.
   */
  declare withheldFromInvoicesWhereNoAbn: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * New Varied Installment Rate.
   */
  declare newVariedInstallmentRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Document Identification Number.
   * @nullable
   */
  declare documentIdentificationNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Deferred Gst On Import.
   */
  declare deferredGstOnImport: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Fuel Tax Credit.
   */
  declare fuelTaxCredit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Installment Income.
   */
  declare installmentIncome: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Payg Withheld Salary.
   */
  declare paygWithheldSalary: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Payg Reason For Variation.
   * @nullable
   */
  declare paygReasonForVariation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Withheld From Investment Where No Tfn.
   */
  declare withheldFromInvestmentWhereNoTfn: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Installment Rate.
   */
  declare installmentRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Estimated Total Fringe Benefits.
   */
  declare estimatedTotalFringeBenefits: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Fringe Reason For Variation.
   * @nullable
   */
  declare fringeReasonForVariation?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ReportExtraFieldsApi<T>) {
    super(_entityApi);
  }
}

export interface ReportExtraFieldsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  settlementPeriod: DeserializedType<T, 'Edm.String'>;
  fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  toDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  wholesaleCredit: DeserializedType<T, 'Edm.Decimal'>;
  fuelTaxCreditOverClaim: DeserializedType<T, 'Edm.Decimal'>;
  variedFringeBenefitsTax: DeserializedType<T, 'Edm.Decimal'>;
  atoFringeBenefit: DeserializedType<T, 'Edm.Decimal'>;
  fringeCredit: DeserializedType<T, 'Edm.Decimal'>;
  paygCredit: DeserializedType<T, 'Edm.Decimal'>;
  deferredInstalment: DeserializedType<T, 'Edm.Decimal'>;
  totalPayroll: DeserializedType<T, 'Edm.Decimal'>;
  withheldFromInvoicesWhereNoAbn: DeserializedType<T, 'Edm.Decimal'>;
  newVariedInstallmentRate: DeserializedType<T, 'Edm.Decimal'>;
  documentIdentificationNumber?: DeserializedType<T, 'Edm.String'> | null;
  deferredGstOnImport: DeserializedType<T, 'Edm.Decimal'>;
  fuelTaxCredit: DeserializedType<T, 'Edm.Decimal'>;
  installmentIncome: DeserializedType<T, 'Edm.Decimal'>;
  paygWithheldSalary: DeserializedType<T, 'Edm.Decimal'>;
  paygReasonForVariation?: DeserializedType<T, 'Edm.String'> | null;
  withheldFromInvestmentWhereNoTfn: DeserializedType<T, 'Edm.Decimal'>;
  installmentRate: DeserializedType<T, 'Edm.Decimal'>;
  estimatedTotalFringeBenefits: DeserializedType<T, 'Edm.Decimal'>;
  fringeReasonForVariation?: DeserializedType<T, 'Edm.String'> | null;
}
