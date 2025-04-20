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
import type { PaymentSchedulesApi } from './PaymentSchedulesApi';
import { PaymSchedBy } from './PaymSchedBy';
import { PeriodUnit } from './PeriodUnit';
import { PaymSchedTaxDistribution } from './PaymSchedTaxDistribution';
import { McrPaymSchedMiscChargeDist } from './McrPaymSchedMiscChargeDist';
import { NoYes } from './NoYes';
import {
  PurchaseAgreements,
  PurchaseAgreementsType
} from './PurchaseAgreements';
import {
  SalesAgreementConfirmations,
  SalesAgreementConfirmationsType
} from './SalesAgreementConfirmations';
import { PaymentTerms, PaymentTermsType } from './PaymentTerms';
import { SalesAgreements, SalesAgreementsType } from './SalesAgreements';
import {
  FreeTextInvoiceHeaders,
  FreeTextInvoiceHeadersType
} from './FreeTextInvoiceHeaders';
import {
  PaymentScheduleLines,
  PaymentScheduleLinesType
} from './PaymentScheduleLines';
import {
  ClmIntegrationPurchaseAgreements,
  ClmIntegrationPurchaseAgreementsType
} from './ClmIntegrationPurchaseAgreements';

/**
 * This class represents the entity "PaymentSchedules" of service "d365_metadata".
 */
export class PaymentSchedules<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PaymentSchedulesType<T>
{
  /**
   * Technical entity name for PaymentSchedules.
   */
  static override _entityName = 'PaymentSchedules';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PaymentSchedules entity.
   */
  static _keys = ['dataAreaId', 'Name'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Allocation Method.
   * @nullable
   */
  declare allocationMethod?: PaymSchedBy | null;
  /**
   * Payment Frequency Units.
   * @nullable
   */
  declare paymentFrequencyUnits?: PeriodUnit | null;
  /**
   * Number Of Payments.
   */
  declare numberOfPayments: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Sales Tax Allocation Method.
   * @nullable
   */
  declare salesTaxAllocationMethod?: PaymSchedTaxDistribution | null;
  /**
   * Charge Allocation Method.
   * @nullable
   */
  declare chargeAllocationMethod?: McrPaymSchedMiscChargeDist | null;
  /**
   * Installment Minimum Order Amount.
   */
  declare installmentMinimumOrderAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Minimum Payment Amount.
   */
  declare minimumPaymentAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Notes.
   * @nullable
   */
  declare notes?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Installment Maximum Order Amount.
   */
  declare installmentMaximumOrderAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Payment Frequency.
   */
  declare paymentFrequency: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Is Flexible Installment Plan.
   * @nullable
   */
  declare isFlexibleInstallmentPlan?: NoYes | null;
  /**
   * Fixed Payment Amount.
   */
  declare fixedPaymentAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-many navigation property to the {@link PurchaseAgreements} entity.
   */
  declare purchaseAgreementHeaders: PurchaseAgreements<T>[];
  /**
   * One-to-many navigation property to the {@link SalesAgreementConfirmations} entity.
   */
  declare salesAgreementConfirmationHeaders: SalesAgreementConfirmations<T>[];
  /**
   * One-to-many navigation property to the {@link PaymentTerms} entity.
   */
  declare paymentTerm: PaymentTerms<T>[];
  /**
   * One-to-many navigation property to the {@link SalesAgreements} entity.
   */
  declare salesAgreementHeaders: SalesAgreements<T>[];
  /**
   * One-to-many navigation property to the {@link FreeTextInvoiceHeaders} entity.
   */
  declare freeTextInvoiceHeaderPaymentSchedule: FreeTextInvoiceHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link PaymentScheduleLines} entity.
   */
  declare paymentScheduleLines: PaymentScheduleLines<T>[];
  /**
   * One-to-many navigation property to the {@link ClmIntegrationPurchaseAgreements} entity.
   */
  declare clmIntegrationPurchaseAgreementHeaders: ClmIntegrationPurchaseAgreements<T>[];

  constructor(_entityApi: PaymentSchedulesApi<T>) {
    super(_entityApi);
  }
}

export interface PaymentSchedulesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  name: DeserializedType<T, 'Edm.String'>;
  allocationMethod?: PaymSchedBy | null;
  paymentFrequencyUnits?: PeriodUnit | null;
  numberOfPayments: DeserializedType<T, 'Edm.Int32'>;
  salesTaxAllocationMethod?: PaymSchedTaxDistribution | null;
  chargeAllocationMethod?: McrPaymSchedMiscChargeDist | null;
  installmentMinimumOrderAmount: DeserializedType<T, 'Edm.Decimal'>;
  minimumPaymentAmount: DeserializedType<T, 'Edm.Decimal'>;
  notes?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  installmentMaximumOrderAmount: DeserializedType<T, 'Edm.Decimal'>;
  paymentFrequency: DeserializedType<T, 'Edm.Int32'>;
  isFlexibleInstallmentPlan?: NoYes | null;
  fixedPaymentAmount: DeserializedType<T, 'Edm.Decimal'>;
  purchaseAgreementHeaders: PurchaseAgreementsType<T>[];
  salesAgreementConfirmationHeaders: SalesAgreementConfirmationsType<T>[];
  paymentTerm: PaymentTermsType<T>[];
  salesAgreementHeaders: SalesAgreementsType<T>[];
  freeTextInvoiceHeaderPaymentSchedule: FreeTextInvoiceHeadersType<T>[];
  paymentScheduleLines: PaymentScheduleLinesType<T>[];
  clmIntegrationPurchaseAgreementHeaders: ClmIntegrationPurchaseAgreementsType<T>[];
}
