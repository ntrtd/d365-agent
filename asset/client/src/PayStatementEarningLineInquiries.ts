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
import type { PayStatementEarningLineInquiriesApi } from './PayStatementEarningLineInquiriesApi';
import { PayrollPayStatementLineSource } from './PayrollPayStatementLineSource';
import {
  PayStatementHeaders,
  PayStatementHeadersType
} from './PayStatementHeaders';

/**
 * This class represents the entity "PayStatementEarningLineInquiries" of service "d365_metadata".
 */
export class PayStatementEarningLineInquiries<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PayStatementEarningLineInquiriesType<T>
{
  /**
   * Technical entity name for PayStatementEarningLineInquiries.
   */
  static override _entityName = 'PayStatementEarningLineInquiries';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PayStatementEarningLineInquiries entity.
   */
  static _keys = ['dataAreaId', 'PayStatementNumber', 'LineNum'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Pay Statement Number.
   */
  declare payStatementNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Num.
   */
  declare lineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Benefit Plan Idgli.
   * @nullable
   */
  declare benefitPlanIdgli?: DeserializedType<T, 'Edm.String'> | null;
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
   * General Liability Insurance.
   * @nullable
   */
  declare generalLiabilityInsurance?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Benefit Plan Id Comp.
   * @nullable
   */
  declare benefitPlanIdComp?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Position Id.
   * @nullable
   */
  declare positionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Benefit Option Id Comp.
   * @nullable
   */
  declare benefitOptionIdComp?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Region Description.
   * @nullable
   */
  declare taxRegionDescription?: DeserializedType<T, 'Edm.String'> | null;
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
   * Worker.
   * @nullable
   */
  declare worker?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Period End Date.
   */
  declare periodEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Worker Compensation.
   * @nullable
   */
  declare workerCompensation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Benefit Option Idgli.
   * @nullable
   */
  declare benefitOptionIdgli?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Quantity.
   */
  declare quantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link PayStatementHeaders} entity.
   */
  declare payStatementHeader?: PayStatementHeaders<T> | null;

  constructor(_entityApi: PayStatementEarningLineInquiriesApi<T>) {
    super(_entityApi);
  }
}

export interface PayStatementEarningLineInquiriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  payStatementNumber: DeserializedType<T, 'Edm.String'>;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  benefitPlanIdgli?: DeserializedType<T, 'Edm.String'> | null;
  earningRate: DeserializedType<T, 'Edm.Decimal'>;
  accountingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  earningCode?: DeserializedType<T, 'Edm.String'> | null;
  payCycleId?: DeserializedType<T, 'Edm.String'> | null;
  periodStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  generalLiabilityInsurance?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  benefitPlanIdComp?: DeserializedType<T, 'Edm.String'> | null;
  positionId?: DeserializedType<T, 'Edm.String'> | null;
  benefitOptionIdComp?: DeserializedType<T, 'Edm.String'> | null;
  taxRegionDescription?: DeserializedType<T, 'Edm.String'> | null;
  source?: PayrollPayStatementLineSource | null;
  personnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  accountingCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  worker?: DeserializedType<T, 'Edm.String'> | null;
  periodEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  workerCompensation?: DeserializedType<T, 'Edm.String'> | null;
  benefitOptionIdgli?: DeserializedType<T, 'Edm.String'> | null;
  quantity: DeserializedType<T, 'Edm.Decimal'>;
  payStatementHeader?: PayStatementHeadersType<T> | null;
}
