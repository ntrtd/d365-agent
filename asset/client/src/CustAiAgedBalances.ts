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
import type { CustAiAgedBalancesApi } from './CustAiAgedBalancesApi';
import { DateTransactionDuedate } from './DateTransactionDuedate';

/**
 * This class represents the entity "CustAIAgedBalances" of service "d365_metadata".
 */
export class CustAiAgedBalances<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CustAiAgedBalancesType<T>
{
  /**
   * Technical entity name for CustAiAgedBalances.
   */
  static override _entityName = 'CustAIAgedBalances';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CustAiAgedBalances entity.
   */
  static _keys = ['dataAreaId', 'CustAccount', 'AgingPeriodDefinition'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Cust Account.
   */
  declare custAccount: DeserializedType<T, 'Edm.String'>;
  /**
   * Aging Period Definition.
   */
  declare agingPeriodDefinition: DeserializedType<T, 'Edm.String'>;
  /**
   * Aging Period 5.
   */
  declare agingPeriod5: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Aging Period 4 Reporting Currency.
   */
  declare agingPeriod4ReportingCurrency: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Last Payment Amount.
   */
  declare lastPaymentAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Credit Remaining Mst.
   */
  declare creditRemainingMst: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Mst Currency.
   * @nullable
   */
  declare mstCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Aging Period 5 Reporting Currency.
   */
  declare agingPeriod5ReportingCurrency: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Disputed Transaction Balance Mst.
   */
  declare disputedTransactionBalanceMst: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Company.
   * @nullable
   */
  declare company?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Aging Period 1 Reporting Currency.
   */
  declare agingPeriod1ReportingCurrency: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Amount Due Mst.
   */
  declare amountDueMst: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * First Nonzero Balance Period.
   */
  declare firstNonzeroBalancePeriod: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Credit Limit Mst.
   */
  declare creditLimitMst: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Aging Period 6 Reporting Currency.
   */
  declare agingPeriod6ReportingCurrency: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Open Order Balance Mst.
   */
  declare openOrderBalanceMst: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Aging Period 2 Reporting Currency.
   */
  declare agingPeriod2ReportingCurrency: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Aging Period 2.
   */
  declare agingPeriod2: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Aging Period 3 Reporting Currency.
   */
  declare agingPeriod3ReportingCurrency: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Aging Period 4.
   */
  declare agingPeriod4: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Amount Due Mst Secondary.
   */
  declare amountDueMstSecondary: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Aging Period 6.
   */
  declare agingPeriod6: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Aging Period Label 6.
   * @nullable
   */
  declare agingPeriodLabel6?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Aging Period Label 4.
   * @nullable
   */
  declare agingPeriodLabel4?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Aged By.
   * @nullable
   */
  declare agedBy?: DateTransactionDuedate | null;
  /**
   * Aging Period Label 5.
   * @nullable
   */
  declare agingPeriodLabel5?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Aging Period Label 2.
   * @nullable
   */
  declare agingPeriodLabel2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Aging Period Label 3.
   * @nullable
   */
  declare agingPeriodLabel3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Aging Period Label 1.
   * @nullable
   */
  declare agingPeriodLabel1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Aging Date.
   */
  declare agingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Num Open Invoices.
   */
  declare numOpenInvoices: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Mst Secondary Currency.
   * @nullable
   */
  declare mstSecondaryCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cust Name.
   * @nullable
   */
  declare custName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Disputed Transaction Count.
   */
  declare disputedTransactionCount: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Aging Period 1.
   */
  declare agingPeriod1: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Last Payment Date.
   */
  declare lastPaymentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Aging Period 3.
   */
  declare agingPeriod3: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Packing Slip Balance Mst.
   */
  declare packingSlipBalanceMst: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: CustAiAgedBalancesApi<T>) {
    super(_entityApi);
  }
}

export interface CustAiAgedBalancesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  custAccount: DeserializedType<T, 'Edm.String'>;
  agingPeriodDefinition: DeserializedType<T, 'Edm.String'>;
  agingPeriod5: DeserializedType<T, 'Edm.Decimal'>;
  agingPeriod4ReportingCurrency: DeserializedType<T, 'Edm.Decimal'>;
  lastPaymentAmount: DeserializedType<T, 'Edm.Decimal'>;
  creditRemainingMst: DeserializedType<T, 'Edm.Decimal'>;
  mstCurrency?: DeserializedType<T, 'Edm.String'> | null;
  agingPeriod5ReportingCurrency: DeserializedType<T, 'Edm.Decimal'>;
  disputedTransactionBalanceMst: DeserializedType<T, 'Edm.Decimal'>;
  company?: DeserializedType<T, 'Edm.String'> | null;
  agingPeriod1ReportingCurrency: DeserializedType<T, 'Edm.Decimal'>;
  amountDueMst: DeserializedType<T, 'Edm.Decimal'>;
  firstNonzeroBalancePeriod: DeserializedType<T, 'Edm.Int32'>;
  creditLimitMst: DeserializedType<T, 'Edm.Decimal'>;
  agingPeriod6ReportingCurrency: DeserializedType<T, 'Edm.Decimal'>;
  openOrderBalanceMst: DeserializedType<T, 'Edm.Decimal'>;
  agingPeriod2ReportingCurrency: DeserializedType<T, 'Edm.Decimal'>;
  agingPeriod2: DeserializedType<T, 'Edm.Decimal'>;
  agingPeriod3ReportingCurrency: DeserializedType<T, 'Edm.Decimal'>;
  agingPeriod4: DeserializedType<T, 'Edm.Decimal'>;
  amountDueMstSecondary: DeserializedType<T, 'Edm.Decimal'>;
  agingPeriod6: DeserializedType<T, 'Edm.Decimal'>;
  agingPeriodLabel6?: DeserializedType<T, 'Edm.String'> | null;
  agingPeriodLabel4?: DeserializedType<T, 'Edm.String'> | null;
  agedBy?: DateTransactionDuedate | null;
  agingPeriodLabel5?: DeserializedType<T, 'Edm.String'> | null;
  agingPeriodLabel2?: DeserializedType<T, 'Edm.String'> | null;
  agingPeriodLabel3?: DeserializedType<T, 'Edm.String'> | null;
  agingPeriodLabel1?: DeserializedType<T, 'Edm.String'> | null;
  agingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  numOpenInvoices: DeserializedType<T, 'Edm.Int32'>;
  mstSecondaryCurrency?: DeserializedType<T, 'Edm.String'> | null;
  custName?: DeserializedType<T, 'Edm.String'> | null;
  disputedTransactionCount: DeserializedType<T, 'Edm.Int32'>;
  agingPeriod1: DeserializedType<T, 'Edm.Decimal'>;
  lastPaymentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  agingPeriod3: DeserializedType<T, 'Edm.Decimal'>;
  packingSlipBalanceMst: DeserializedType<T, 'Edm.Decimal'>;
}
