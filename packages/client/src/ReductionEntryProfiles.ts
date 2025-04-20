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
import type { ReductionEntryProfilesApi } from './ReductionEntryProfilesApi';
import { DayWeekMonthQuarterYear } from './DayWeekMonthQuarterYear';
import { AssetReductionEntryConventionJp } from './AssetReductionEntryConventionJp';
import { AssetReductionEntryMethodJp } from './AssetReductionEntryMethodJp';
import { AssetReductionEntryStartFromJp } from './AssetReductionEntryStartFromJp';
import { AssetReductionEntryRepayTypeJp } from './AssetReductionEntryRepayTypeJp';

/**
 * This class represents the entity "ReductionEntryProfiles" of service "d365_metadata".
 */
export class ReductionEntryProfiles<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ReductionEntryProfilesType<T>
{
  /**
   * Technical entity name for ReductionEntryProfiles.
   */
  static override _entityName = 'ReductionEntryProfiles';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ReductionEntryProfiles entity.
   */
  static _keys = ['dataAreaId', 'ReductionEntryDocument'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Reduction Entry Document.
   */
  declare reductionEntryDocument: DeserializedType<T, 'Edm.String'>;
  /**
   * Retention Period Measure.
   * @nullable
   */
  declare retentionPeriodMeasure?: DayWeekMonthQuarterYear | null;
  /**
   * Subsidies Reason.
   * @nullable
   */
  declare subsidiesReason?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Max Amt.
   */
  declare maxAmt: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Depreciation Convention.
   * @nullable
   */
  declare depreciationConvention?: AssetReductionEntryConventionJp | null;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Retention Period.
   */
  declare retentionPeriod: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Reduction Entry Type.
   * @nullable
   */
  declare reductionEntryType?: AssetReductionEntryMethodJp | null;
  /**
   * Retention Start Date.
   * @nullable
   */
  declare retentionStartDate?: AssetReductionEntryStartFromJp | null;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Repayment Type.
   * @nullable
   */
  declare repaymentType?: AssetReductionEntryRepayTypeJp | null;
  /**
   * Max Per.
   */
  declare maxPer: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: ReductionEntryProfilesApi<T>) {
    super(_entityApi);
  }
}

export interface ReductionEntryProfilesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  reductionEntryDocument: DeserializedType<T, 'Edm.String'>;
  retentionPeriodMeasure?: DayWeekMonthQuarterYear | null;
  subsidiesReason?: DeserializedType<T, 'Edm.String'> | null;
  maxAmt: DeserializedType<T, 'Edm.Decimal'>;
  depreciationConvention?: AssetReductionEntryConventionJp | null;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  retentionPeriod: DeserializedType<T, 'Edm.Int32'>;
  reductionEntryType?: AssetReductionEntryMethodJp | null;
  retentionStartDate?: AssetReductionEntryStartFromJp | null;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  repaymentType?: AssetReductionEntryRepayTypeJp | null;
  maxPer: DeserializedType<T, 'Edm.Decimal'>;
}
