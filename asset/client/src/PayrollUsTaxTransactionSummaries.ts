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
import type { PayrollUsTaxTransactionSummariesApi } from './PayrollUsTaxTransactionSummariesApi';
import { PayrollTaxResidency } from './PayrollTaxResidency';
import { PayrollTaxCodeType } from './PayrollTaxCodeType';
import { PayrollUsState } from './PayrollUsState';
import {
  PayStatementHeaders,
  PayStatementHeadersType
} from './PayStatementHeaders';

/**
 * This class represents the entity "PayrollUSTaxTransactionSummaries" of service "d365_metadata".
 */
export class PayrollUsTaxTransactionSummaries<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PayrollUsTaxTransactionSummariesType<T>
{
  /**
   * Technical entity name for PayrollUsTaxTransactionSummaries.
   */
  static override _entityName = 'PayrollUSTaxTransactionSummaries';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PayrollUsTaxTransactionSummaries entity.
   */
  static _keys = [
    'dataAreaId',
    'Worker',
    'PersonnelNumber',
    'PayStatementNumber',
    'TransDate',
    'TaxCode'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Worker.
   */
  declare worker: DeserializedType<T, 'Edm.String'>;
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Pay Statement Number.
   */
  declare payStatementNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Trans Date.
   */
  declare transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Tax Code.
   */
  declare taxCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Subject Wages.
   */
  declare subjectWages: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Actual Combined Tax.
   */
  declare actualCombinedTax: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Political Sub Division Id.
   * @nullable
   */
  declare politicalSubDivisionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Gross Subject Wages.
   */
  declare grossSubjectWages: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Vend Invoice.
   * @nullable
   */
  declare vendInvoice?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Excess Wages.
   */
  declare excessWages: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Residency.
   * @nullable
   */
  declare residency?: PayrollTaxResidency | null;
  /**
   * Tax Code Type.
   * @nullable
   */
  declare taxCodeType?: PayrollTaxCodeType | null;
  /**
   * Gross Wages.
   */
  declare grossWages: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Rate.
   */
  declare rate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Wage Base.
   */
  declare wageBase: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Prior State Wage Amount.
   */
  declare priorStateWageAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Taxation State.
   * @nullable
   */
  declare taxationState?: PayrollUsState | null;
  /**
   * Hours.
   */
  declare hours: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Prior State.
   * @nullable
   */
  declare priorState?: PayrollUsState | null;
  /**
   * System Calculated Tax.
   */
  declare systemCalculatedTax: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link PayStatementHeaders} entity.
   */
  declare payStatementHeader?: PayStatementHeaders<T> | null;

  constructor(_entityApi: PayrollUsTaxTransactionSummariesApi<T>) {
    super(_entityApi);
  }
}

export interface PayrollUsTaxTransactionSummariesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  worker: DeserializedType<T, 'Edm.String'>;
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  payStatementNumber: DeserializedType<T, 'Edm.String'>;
  transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  taxCode: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  subjectWages: DeserializedType<T, 'Edm.Decimal'>;
  actualCombinedTax: DeserializedType<T, 'Edm.Decimal'>;
  politicalSubDivisionId?: DeserializedType<T, 'Edm.String'> | null;
  grossSubjectWages: DeserializedType<T, 'Edm.Decimal'>;
  vendInvoice?: DeserializedType<T, 'Edm.String'> | null;
  excessWages: DeserializedType<T, 'Edm.Decimal'>;
  residency?: PayrollTaxResidency | null;
  taxCodeType?: PayrollTaxCodeType | null;
  grossWages: DeserializedType<T, 'Edm.Decimal'>;
  rate: DeserializedType<T, 'Edm.Decimal'>;
  wageBase: DeserializedType<T, 'Edm.Decimal'>;
  priorStateWageAmount: DeserializedType<T, 'Edm.Decimal'>;
  taxationState?: PayrollUsState | null;
  hours: DeserializedType<T, 'Edm.Decimal'>;
  priorState?: PayrollUsState | null;
  systemCalculatedTax: DeserializedType<T, 'Edm.Decimal'>;
  payStatementHeader?: PayStatementHeadersType<T> | null;
}
