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
import type { PayStatementHeadersApi } from './PayStatementHeadersApi';
import { PayrollPaymentMethodType } from './PayrollPaymentMethodType';
import { PayrollPaymentType } from './PayrollPaymentType';
import { PayrollPayStatementCreationType } from './PayrollPayStatementCreationType';
import { NoYes } from './NoYes';
import { PayrollPaymentStatus } from './PayrollPaymentStatus';
import { PayrollPayStatementPostedStatus } from './PayrollPayStatementPostedStatus';
import {
  PayrollUsTaxTransactionSummaries,
  PayrollUsTaxTransactionSummariesType
} from './PayrollUsTaxTransactionSummaries';
import {
  PayStatementTaxLines,
  PayStatementTaxLinesType
} from './PayStatementTaxLines';
import {
  PayStatementBenefitLines,
  PayStatementBenefitLinesType
} from './PayStatementBenefitLines';
import { Workers, WorkersType } from './Workers';
import { PayCycles, PayCyclesType } from './PayCycles';
import {
  PayStatementAccrualBalances,
  PayStatementAccrualBalancesType
} from './PayStatementAccrualBalances';
import {
  DeductionArrearRecoveries,
  DeductionArrearRecoveriesType
} from './DeductionArrearRecoveries';
import {
  PayStatementEarningLineInquiries,
  PayStatementEarningLineInquiriesType
} from './PayStatementEarningLineInquiries';
import {
  UsTaxTransactionHistories,
  UsTaxTransactionHistoriesType
} from './UsTaxTransactionHistories';
import {
  PayStatementBenefitLineInquiries,
  PayStatementBenefitLineInquiriesType
} from './PayStatementBenefitLineInquiries';
import {
  PayStatementEarningLines,
  PayStatementEarningLinesType
} from './PayStatementEarningLines';
import { DeductionArrears, DeductionArrearsType } from './DeductionArrears';
import {
  UsTaxTransactionHistoryDetails,
  UsTaxTransactionHistoryDetailsType
} from './UsTaxTransactionHistoryDetails';

/**
 * This class represents the entity "PayStatementHeaders" of service "d365_metadata".
 */
export class PayStatementHeaders<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PayStatementHeadersType<T>
{
  /**
   * Technical entity name for PayStatementHeaders.
   */
  static override _entityName = 'PayStatementHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PayStatementHeaders entity.
   */
  static _keys = ['PayStatementNumber'];
  /**
   * Pay Statement Number.
   */
  declare payStatementNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Payment Date.
   */
  declare paymentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Gross Pay.
   */
  declare grossPay: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Pay Cycle Id.
   * @nullable
   */
  declare payCycleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Disbursement Format.
   * @nullable
   */
  declare disbursementFormat?: PayrollPaymentMethodType | null;
  /**
   * Period Start Date.
   */
  declare periodStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Company.
   * @nullable
   */
  declare company?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Run Type.
   * @nullable
   */
  declare paymentRunType?: PayrollPaymentType | null;
  /**
   * Creation Type.
   * @nullable
   */
  declare creationType?: PayrollPayStatementCreationType | null;
  /**
   * Payment Journal.
   * @nullable
   */
  declare paymentJournal?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Batch Number.
   * @nullable
   */
  declare batchNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Disable Accounting.
   * @nullable
   */
  declare disableAccounting?: NoYes | null;
  /**
   * Reversed Pay Statement Number.
   * @nullable
   */
  declare reversedPayStatementNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Personnel Number.
   * @nullable
   */
  declare personnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pay Statement Reversed.
   * @nullable
   */
  declare payStatementReversed?: NoYes | null;
  /**
   * Pay Statement Status.
   * @nullable
   */
  declare payStatementStatus?: PayrollPaymentStatus | null;
  /**
   * Posted.
   * @nullable
   */
  declare posted?: PayrollPayStatementPostedStatus | null;
  /**
   * Net Pay.
   */
  declare netPay: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Period End Date.
   */
  declare periodEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-many navigation property to the {@link PayrollUsTaxTransactionSummaries} entity.
   */
  declare payrollUsTaxTransactionSummary: PayrollUsTaxTransactionSummaries<T>[];
  /**
   * One-to-many navigation property to the {@link PayStatementTaxLines} entity.
   */
  declare payStatementTaxLine: PayStatementTaxLines<T>[];
  /**
   * One-to-many navigation property to the {@link PayStatementBenefitLines} entity.
   */
  declare payStatementBenefitLine: PayStatementBenefitLines<T>[];
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare worker?: Workers<T> | null;
  /**
   * One-to-one navigation property to the {@link PayCycles} entity.
   */
  declare payCycle?: PayCycles<T> | null;
  /**
   * One-to-many navigation property to the {@link PayStatementAccrualBalances} entity.
   */
  declare payStatementAccrualBalance: PayStatementAccrualBalances<T>[];
  /**
   * One-to-many navigation property to the {@link DeductionArrearRecoveries} entity.
   */
  declare deductionArrearRecovery: DeductionArrearRecoveries<T>[];
  /**
   * One-to-many navigation property to the {@link PayStatementEarningLineInquiries} entity.
   */
  declare payStatementEarningLines: PayStatementEarningLineInquiries<T>[];
  /**
   * One-to-many navigation property to the {@link UsTaxTransactionHistories} entity.
   */
  declare taxTransactions: UsTaxTransactionHistories<T>[];
  /**
   * One-to-many navigation property to the {@link PayStatementBenefitLineInquiries} entity.
   */
  declare payStatementBenefitLines: PayStatementBenefitLineInquiries<T>[];
  /**
   * One-to-many navigation property to the {@link PayStatementEarningLines} entity.
   */
  declare payStatementEarningLine: PayStatementEarningLines<T>[];
  /**
   * One-to-many navigation property to the {@link DeductionArrears} entity.
   */
  declare deductionArrear: DeductionArrears<T>[];
  /**
   * One-to-many navigation property to the {@link UsTaxTransactionHistoryDetails} entity.
   */
  declare usTaxTransactionHistoryDetail: UsTaxTransactionHistoryDetails<T>[];

  constructor(_entityApi: PayStatementHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface PayStatementHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  payStatementNumber: DeserializedType<T, 'Edm.String'>;
  paymentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  grossPay: DeserializedType<T, 'Edm.Decimal'>;
  payCycleId?: DeserializedType<T, 'Edm.String'> | null;
  disbursementFormat?: PayrollPaymentMethodType | null;
  periodStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  company?: DeserializedType<T, 'Edm.String'> | null;
  paymentRunType?: PayrollPaymentType | null;
  creationType?: PayrollPayStatementCreationType | null;
  paymentJournal?: DeserializedType<T, 'Edm.String'> | null;
  batchNumber?: DeserializedType<T, 'Edm.String'> | null;
  disableAccounting?: NoYes | null;
  reversedPayStatementNumber?: DeserializedType<T, 'Edm.String'> | null;
  personnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  payStatementReversed?: NoYes | null;
  payStatementStatus?: PayrollPaymentStatus | null;
  posted?: PayrollPayStatementPostedStatus | null;
  netPay: DeserializedType<T, 'Edm.Decimal'>;
  periodEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  payrollUsTaxTransactionSummary: PayrollUsTaxTransactionSummariesType<T>[];
  payStatementTaxLine: PayStatementTaxLinesType<T>[];
  payStatementBenefitLine: PayStatementBenefitLinesType<T>[];
  worker?: WorkersType<T> | null;
  payCycle?: PayCyclesType<T> | null;
  payStatementAccrualBalance: PayStatementAccrualBalancesType<T>[];
  deductionArrearRecovery: DeductionArrearRecoveriesType<T>[];
  payStatementEarningLines: PayStatementEarningLineInquiriesType<T>[];
  taxTransactions: UsTaxTransactionHistoriesType<T>[];
  payStatementBenefitLines: PayStatementBenefitLineInquiriesType<T>[];
  payStatementEarningLine: PayStatementEarningLinesType<T>[];
  deductionArrear: DeductionArrearsType<T>[];
  usTaxTransactionHistoryDetail: UsTaxTransactionHistoryDetailsType<T>[];
}
