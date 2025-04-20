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
import type { PayStatementBenefitLineInquiriesApi } from './PayStatementBenefitLineInquiriesApi';
import { PayrollPayStatementLineSource } from './PayrollPayStatementLineSource';
import { NoYes } from './NoYes';
import {
  PayStatementHeaders,
  PayStatementHeadersType
} from './PayStatementHeaders';
import { Benefits, BenefitsType } from './Benefits';

/**
 * This class represents the entity "PayStatementBenefitLineInquiries" of service "d365_metadata".
 */
export class PayStatementBenefitLineInquiries<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PayStatementBenefitLineInquiriesType<T>
{
  /**
   * Technical entity name for PayStatementBenefitLineInquiries.
   */
  static override _entityName = 'PayStatementBenefitLineInquiries';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PayStatementBenefitLineInquiries entity.
   */
  static _keys = ['PayStatementNumber', 'LineNum'];
  /**
   * Pay Statement Number.
   */
  declare payStatementNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Num.
   */
  declare lineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Accounting Date.
   */
  declare accountingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
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
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Premium Earning Base Hours.
   */
  declare premiumEarningBaseHours: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Base Time Earning Base Amount.
   */
  declare baseTimeEarningBaseAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Position Id.
   * @nullable
   */
  declare positionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Benefit Id.
   * @nullable
   */
  declare benefitId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source.
   * @nullable
   */
  declare source?: PayrollPayStatementLineSource | null;
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
   * Vendor Invoice.
   * @nullable
   */
  declare vendorInvoice?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Base Time Earning Base Hours.
   */
  declare baseTimeEarningBaseHours: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Premium Earning Base Amount.
   */
  declare premiumEarningBaseAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Employer.
   * @nullable
   */
  declare isEmployer?: NoYes | null;
  /**
   * Worker.
   * @nullable
   */
  declare worker?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Period End Date.
   */
  declare periodEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-one navigation property to the {@link PayStatementHeaders} entity.
   */
  declare payStatementHeader?: PayStatementHeaders<T> | null;
  /**
   * One-to-one navigation property to the {@link Benefits} entity.
   */
  declare benefit?: Benefits<T> | null;

  constructor(_entityApi: PayStatementBenefitLineInquiriesApi<T>) {
    super(_entityApi);
  }
}

export interface PayStatementBenefitLineInquiriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  payStatementNumber: DeserializedType<T, 'Edm.String'>;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  accountingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  payCycleId?: DeserializedType<T, 'Edm.String'> | null;
  periodStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  premiumEarningBaseHours: DeserializedType<T, 'Edm.Decimal'>;
  baseTimeEarningBaseAmount: DeserializedType<T, 'Edm.Decimal'>;
  positionId?: DeserializedType<T, 'Edm.String'> | null;
  benefitId?: DeserializedType<T, 'Edm.String'> | null;
  source?: PayrollPayStatementLineSource | null;
  personnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  accountingCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  vendorInvoice?: DeserializedType<T, 'Edm.String'> | null;
  baseTimeEarningBaseHours: DeserializedType<T, 'Edm.Decimal'>;
  premiumEarningBaseAmount: DeserializedType<T, 'Edm.Decimal'>;
  isEmployer?: NoYes | null;
  worker?: DeserializedType<T, 'Edm.String'> | null;
  periodEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  payStatementHeader?: PayStatementHeadersType<T> | null;
  benefit?: BenefitsType<T> | null;
}
