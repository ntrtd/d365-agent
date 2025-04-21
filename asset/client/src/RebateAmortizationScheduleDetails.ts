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
import type { RebateAmortizationScheduleDetailsApi } from './RebateAmortizationScheduleDetailsApi';
import { TamRebateMethod } from './TamRebateMethod';

/**
 * This class represents the entity "RebateAmortizationScheduleDetails" of service "d365_metadata".
 */
export class RebateAmortizationScheduleDetails<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RebateAmortizationScheduleDetailsType<T>
{
  /**
   * Technical entity name for RebateAmortizationScheduleDetails.
   */
  static override _entityName = 'RebateAmortizationScheduleDetails';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RebateAmortizationScheduleDetails entity.
   */
  static _keys = [
    'PeriodNumber',
    'TAMRebateLine_RebateId',
    'TAMRebateLine_RefLineNum',
    'TAMRebateLine_RebateFrom',
    'TAMRebateLine_RebateLimit',
    'TAMRebateLine_RebateAmount',
    'TAMRebateLine_RebateMethod'
  ];
  /**
   * Period Number.
   */
  declare periodNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Tam Rebate Line Rebate Id.
   */
  declare tamRebateLineRebateId: DeserializedType<T, 'Edm.String'>;
  /**
   * Tam Rebate Line Ref Line Num.
   */
  declare tamRebateLineRefLineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tam Rebate Line Rebate From.
   */
  declare tamRebateLineRebateFrom: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tam Rebate Line Rebate Limit.
   */
  declare tamRebateLineRebateLimit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tam Rebate Line Rebate Amount.
   */
  declare tamRebateLineRebateAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tam Rebate Line Rebate Method.
   * @nullable
   */
  declare tamRebateLineRebateMethod?: TamRebateMethod | null;
  /**
   * Recognize Amount.
   */
  declare recognizeAmount: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: RebateAmortizationScheduleDetailsApi<T>) {
    super(_entityApi);
  }
}

export interface RebateAmortizationScheduleDetailsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  periodNumber: DeserializedType<T, 'Edm.Int32'>;
  tamRebateLineRebateId: DeserializedType<T, 'Edm.String'>;
  tamRebateLineRefLineNum: DeserializedType<T, 'Edm.Decimal'>;
  tamRebateLineRebateFrom: DeserializedType<T, 'Edm.Decimal'>;
  tamRebateLineRebateLimit: DeserializedType<T, 'Edm.Decimal'>;
  tamRebateLineRebateAmount: DeserializedType<T, 'Edm.Decimal'>;
  tamRebateLineRebateMethod?: TamRebateMethod | null;
  recognizeAmount: DeserializedType<T, 'Edm.Decimal'>;
}
