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
import type { EarningStatementLineInquiriesApi } from './EarningStatementLineInquiriesApi';
import { PayrollPaymentProcessingStatus } from './PayrollPaymentProcessingStatus';
import { PayrollQuantityUnit } from './PayrollQuantityUnit';
import { PayrollGenerationSource } from './PayrollGenerationSource';
import { NoYes } from './NoYes';
import { PayrollFringeBenefitType } from './PayrollFringeBenefitType';
import { PositionsV2, PositionsV2Type } from './PositionsV2';
import {
  PremiumEarningCodes,
  PremiumEarningCodesType
} from './PremiumEarningCodes';
import { EarningStatements, EarningStatementsType } from './EarningStatements';
import { PayPeriods, PayPeriodsType } from './PayPeriods';

/**
 * This class represents the entity "EarningStatementLineInquiries" of service "d365_metadata".
 */
export class EarningStatementLineInquiries<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EarningStatementLineInquiriesType<T>
{
  /**
   * Technical entity name for EarningStatementLineInquiries.
   */
  static override _entityName = 'EarningStatementLineInquiries';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EarningStatementLineInquiries entity.
   */
  static _keys = ['dataAreaId', 'DocumentNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Document Number.
   */
  declare documentNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Payment Status.
   * @nullable
   */
  declare paymentStatus?: PayrollPaymentProcessingStatus | null;
  /**
   * Earning Rate.
   */
  declare earningRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Accounting Date.
   */
  declare accountingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Earning Code.
   * @nullable
   */
  declare earningCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pay Cycle Id.
   * @nullable
   */
  declare payCycleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Period Start Date.
   */
  declare periodStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Retroactive Prior Rate.
   */
  declare retroactivePriorRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Quantity Unit.
   * @nullable
   */
  declare quantityUnit?: PayrollQuantityUnit | null;
  /**
   * Position Id.
   * @nullable
   */
  declare positionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Generation Source.
   * @nullable
   */
  declare generationSource?: PayrollGenerationSource | null;
  /**
   * Is Productive.
   * @nullable
   */
  declare isProductive?: NoYes | null;
  /**
   * Earning Code Description.
   * @nullable
   */
  declare earningCodeDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Personnel Number.
   * @nullable
   */
  declare personnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Accounting Currency Amount.
   */
  declare accountingCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Premium Code.
   * @nullable
   */
  declare premiumCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fringe Benefit Type.
   * @nullable
   */
  declare fringeBenefitType?: PayrollFringeBenefitType | null;
  /**
   * Worker.
   * @nullable
   */
  declare worker?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Worker Compensation Benefit Id.
   * @nullable
   */
  declare workerCompensationBenefitId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Worker Gli Benefit Id.
   * @nullable
   */
  declare workerGliBenefitId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Period End Date.
   */
  declare periodEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Tax Region.
   * @nullable
   */
  declare taxRegion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Earning Date.
   */
  declare earningDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Quantity.
   */
  declare quantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link PositionsV2} entity.
   */
  declare positionV2?: PositionsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link PremiumEarningCodes} entity.
   */
  declare premiumEarningCode?: PremiumEarningCodes<T> | null;
  /**
   * One-to-one navigation property to the {@link EarningStatements} entity.
   */
  declare payrollEarningStatement?: EarningStatements<T> | null;
  /**
   * One-to-one navigation property to the {@link PayPeriods} entity.
   */
  declare payrollPayPeriod?: PayPeriods<T> | null;

  constructor(_entityApi: EarningStatementLineInquiriesApi<T>) {
    super(_entityApi);
  }
}

export interface EarningStatementLineInquiriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  documentNumber: DeserializedType<T, 'Edm.String'>;
  paymentStatus?: PayrollPaymentProcessingStatus | null;
  earningRate: DeserializedType<T, 'Edm.Decimal'>;
  accountingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  earningCode?: DeserializedType<T, 'Edm.String'> | null;
  payCycleId?: DeserializedType<T, 'Edm.String'> | null;
  periodStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  retroactivePriorRate: DeserializedType<T, 'Edm.Decimal'>;
  quantityUnit?: PayrollQuantityUnit | null;
  positionId?: DeserializedType<T, 'Edm.String'> | null;
  generationSource?: PayrollGenerationSource | null;
  isProductive?: NoYes | null;
  earningCodeDescription?: DeserializedType<T, 'Edm.String'> | null;
  personnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  accountingCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  premiumCode?: DeserializedType<T, 'Edm.String'> | null;
  fringeBenefitType?: PayrollFringeBenefitType | null;
  worker?: DeserializedType<T, 'Edm.String'> | null;
  workerCompensationBenefitId?: DeserializedType<T, 'Edm.String'> | null;
  workerGliBenefitId?: DeserializedType<T, 'Edm.String'> | null;
  periodEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  taxRegion?: DeserializedType<T, 'Edm.String'> | null;
  earningDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  quantity: DeserializedType<T, 'Edm.Decimal'>;
  positionV2?: PositionsV2Type<T> | null;
  premiumEarningCode?: PremiumEarningCodesType<T> | null;
  payrollEarningStatement?: EarningStatementsType<T> | null;
  payrollPayPeriod?: PayPeriodsType<T> | null;
}
