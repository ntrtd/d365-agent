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
import type { CustAgedBalancesApi } from './CustAgedBalancesApi';
import { DateTransactionDuedate } from './DateTransactionDuedate';

/**
 * This class represents the entity "CustAgedBalances" of service "d365_metadata".
 */
export class CustAgedBalances<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CustAgedBalancesType<T>
{
  /**
   * Technical entity name for CustAgedBalances.
   */
  static override _entityName = 'CustAgedBalances';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CustAgedBalances entity.
   */
  static _keys = [
    'dataAreaId',
    'AgingPeriodDefinition',
    'CustAccount',
    'Company'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Aging Period Definition.
   */
  declare agingPeriodDefinition: DeserializedType<T, 'Edm.String'>;
  /**
   * Cust Account.
   */
  declare custAccount: DeserializedType<T, 'Edm.String'>;
  /**
   * Company.
   */
  declare company: DeserializedType<T, 'Edm.String'>;
  /**
   * Sum Of Amount Due Mst.
   */
  declare sumOfAmountDueMst: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Aging Period 4 Reporting Currency.
   */
  declare agingPeriod4ReportingCurrency: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Cust Name.
   * @nullable
   */
  declare custName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Aging Date.
   */
  declare agingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Aging Period 3 Reporting Currency.
   */
  declare agingPeriod3ReportingCurrency: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Aging Period 6.
   */
  declare agingPeriod6: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Aging Period 5 Reporting Currency.
   */
  declare agingPeriod5ReportingCurrency: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Num Open Invoices.
   */
  declare numOpenInvoices: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Aging Period 3.
   */
  declare agingPeriod3: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Aged By.
   * @nullable
   */
  declare agedBy?: DateTransactionDuedate | null;
  /**
   * Aging Period 4.
   */
  declare agingPeriod4: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Last Payment Amount.
   */
  declare lastPaymentAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Aging Period 1 Reporting Currency.
   */
  declare agingPeriod1ReportingCurrency: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Aging Period 1.
   */
  declare agingPeriod1: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Aging Period 6 Reporting Currency.
   */
  declare agingPeriod6ReportingCurrency: DeserializedType<T, 'Edm.Decimal'>;
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
   * Last Payment Date.
   */
  declare lastPaymentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
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
   * Aging Period 2.
   */
  declare agingPeriod2: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Mst Currency.
   * @nullable
   */
  declare mstCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * First Nonzero Balance Period.
   */
  declare firstNonzeroBalancePeriod: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Aging Period 2 Reporting Currency.
   */
  declare agingPeriod2ReportingCurrency: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Aging Period 5.
   */
  declare agingPeriod5: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: CustAgedBalancesApi<T>) {
    super(_entityApi);
  }
}

export interface CustAgedBalancesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  agingPeriodDefinition: DeserializedType<T, 'Edm.String'>;
  custAccount: DeserializedType<T, 'Edm.String'>;
  company: DeserializedType<T, 'Edm.String'>;
  sumOfAmountDueMst: DeserializedType<T, 'Edm.Decimal'>;
  agingPeriod4ReportingCurrency: DeserializedType<T, 'Edm.Decimal'>;
  custName?: DeserializedType<T, 'Edm.String'> | null;
  agingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  agingPeriod3ReportingCurrency: DeserializedType<T, 'Edm.Decimal'>;
  agingPeriod6: DeserializedType<T, 'Edm.Decimal'>;
  agingPeriod5ReportingCurrency: DeserializedType<T, 'Edm.Decimal'>;
  numOpenInvoices: DeserializedType<T, 'Edm.Int32'>;
  agingPeriod3: DeserializedType<T, 'Edm.Decimal'>;
  agedBy?: DateTransactionDuedate | null;
  agingPeriod4: DeserializedType<T, 'Edm.Decimal'>;
  lastPaymentAmount: DeserializedType<T, 'Edm.Decimal'>;
  agingPeriod1ReportingCurrency: DeserializedType<T, 'Edm.Decimal'>;
  agingPeriod1: DeserializedType<T, 'Edm.Decimal'>;
  agingPeriod6ReportingCurrency: DeserializedType<T, 'Edm.Decimal'>;
  agingPeriodLabel6?: DeserializedType<T, 'Edm.String'> | null;
  agingPeriodLabel4?: DeserializedType<T, 'Edm.String'> | null;
  lastPaymentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  agingPeriodLabel5?: DeserializedType<T, 'Edm.String'> | null;
  agingPeriodLabel2?: DeserializedType<T, 'Edm.String'> | null;
  agingPeriodLabel3?: DeserializedType<T, 'Edm.String'> | null;
  agingPeriodLabel1?: DeserializedType<T, 'Edm.String'> | null;
  agingPeriod2: DeserializedType<T, 'Edm.Decimal'>;
  mstCurrency?: DeserializedType<T, 'Edm.String'> | null;
  firstNonzeroBalancePeriod: DeserializedType<T, 'Edm.Int32'>;
  agingPeriod2ReportingCurrency: DeserializedType<T, 'Edm.Decimal'>;
  agingPeriod5: DeserializedType<T, 'Edm.Decimal'>;
}
