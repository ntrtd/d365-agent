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
import type { DateIntervalsApi } from './DateIntervalsApi';
import { StartEnd } from './StartEnd';
import { PeriodUnitCalc } from './PeriodUnitCalc';
import { LedgerPeriodType } from './LedgerPeriodType';

/**
 * This class represents the entity "DateIntervals" of service "d365_metadata".
 */
export class DateIntervals<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements DateIntervalsType<T>
{
  /**
   * Technical entity name for DateIntervals.
   */
  static override _entityName = 'DateIntervals';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DateIntervals entity.
   */
  static _keys = ['dataAreaId', 'DateIntervalCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Date Interval Code.
   */
  declare dateIntervalCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * End Function Adjustment.
   * @nullable
   */
  declare endFunctionAdjustment?: StartEnd | null;
  /**
   * Start Adjustment Unit.
   * @nullable
   */
  declare startAdjustmentUnit?: PeriodUnitCalc | null;
  /**
   * Start Function.
   * @nullable
   */
  declare startFunction?: StartEnd | null;
  /**
   * End Adjustment Unit.
   * @nullable
   */
  declare endAdjustmentUnit?: PeriodUnitCalc | null;
  /**
   * Locked Start Date.
   */
  declare lockedStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * End Period Type Adjustment.
   * @nullable
   */
  declare endPeriodTypeAdjustment?: LedgerPeriodType | null;
  /**
   * Start Change.
   */
  declare startChange: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Locked End Date.
   */
  declare lockedEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Start Period Type Adjustment.
   * @nullable
   */
  declare startPeriodTypeAdjustment?: LedgerPeriodType | null;
  /**
   * End Function.
   * @nullable
   */
  declare endFunction?: StartEnd | null;
  /**
   * End Period Type.
   * @nullable
   */
  declare endPeriodType?: LedgerPeriodType | null;
  /**
   * End Change.
   */
  declare endChange: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Start Function Adjustment.
   * @nullable
   */
  declare startFunctionAdjustment?: StartEnd | null;
  /**
   * Start Period Type.
   * @nullable
   */
  declare startPeriodType?: LedgerPeriodType | null;

  constructor(_entityApi: DateIntervalsApi<T>) {
    super(_entityApi);
  }
}

export interface DateIntervalsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  dateIntervalCode: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  endFunctionAdjustment?: StartEnd | null;
  startAdjustmentUnit?: PeriodUnitCalc | null;
  startFunction?: StartEnd | null;
  endAdjustmentUnit?: PeriodUnitCalc | null;
  lockedStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  endPeriodTypeAdjustment?: LedgerPeriodType | null;
  startChange: DeserializedType<T, 'Edm.Int32'>;
  lockedEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  startPeriodTypeAdjustment?: LedgerPeriodType | null;
  endFunction?: StartEnd | null;
  endPeriodType?: LedgerPeriodType | null;
  endChange: DeserializedType<T, 'Edm.Int32'>;
  startFunctionAdjustment?: StartEnd | null;
  startPeriodType?: LedgerPeriodType | null;
}
