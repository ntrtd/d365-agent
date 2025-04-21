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
import type { TimeAndAttendanceTimeProfileDetailsApi } from './TimeAndAttendanceTimeProfileDetailsApi';
import { JmgDayIdEnum } from './JmgDayIdEnum';
import { NoYes } from './NoYes';
import { JmgProfileStartCodeBlankPrev } from './JmgProfileStartCodeBlankPrev';
import {
  TimeAndAttendanceTimeProfileLinesV2,
  TimeAndAttendanceTimeProfileLinesV2Type
} from './TimeAndAttendanceTimeProfileLinesV2';
import {
  TimeAndAttendanceTimeProfileLines,
  TimeAndAttendanceTimeProfileLinesType
} from './TimeAndAttendanceTimeProfileLines';
import {
  TimeAndAttendanceTimeProfiles,
  TimeAndAttendanceTimeProfilesType
} from './TimeAndAttendanceTimeProfiles';

/**
 * This class represents the entity "TimeAndAttendanceTimeProfileDetails" of service "d365_metadata".
 */
export class TimeAndAttendanceTimeProfileDetails<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TimeAndAttendanceTimeProfileDetailsType<T>
{
  /**
   * Technical entity name for TimeAndAttendanceTimeProfileDetails.
   */
  static override _entityName = 'TimeAndAttendanceTimeProfileDetails';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TimeAndAttendanceTimeProfileDetails entity.
   */
  static _keys = ['dataAreaId', 'TimeProfileId', 'WeekDay'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Time Profile Id.
   */
  declare timeProfileId: DeserializedType<T, 'Edm.String'>;
  /**
   * Week Day.
   * @nullable
   */
  declare weekDay?: JmgDayIdEnum | null;
  /**
   * Can Payroll Calculation Push Profile.
   * @nullable
   */
  declare canPayrollCalculationPushProfile?: NoYes | null;
  /**
   * Hour Period Start Seconds.
   */
  declare hourPeriodStartSeconds: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Hour Period Start Rule.
   * @nullable
   */
  declare hourPeriodStartRule?: JmgProfileStartCodeBlankPrev | null;
  /**
   * Overtime Flex Limit Seconds.
   */
  declare overtimeFlexLimitSeconds: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Maximum Flex Limit Seconds.
   */
  declare maximumFlexLimitSeconds: DeserializedType<T, 'Edm.Int32'>;
  /**
   * One-to-many navigation property to the {@link TimeAndAttendanceTimeProfileLinesV2} entity.
   */
  declare timeAndAttendanceTimeProfileLinesV2: TimeAndAttendanceTimeProfileLinesV2<T>[];
  /**
   * One-to-many navigation property to the {@link TimeAndAttendanceTimeProfileLines} entity.
   */
  declare timeAndAttendanceTimeProfileLines: TimeAndAttendanceTimeProfileLines<T>[];
  /**
   * One-to-one navigation property to the {@link TimeAndAttendanceTimeProfiles} entity.
   */
  declare timeAndAttendanceTimeProfile?: TimeAndAttendanceTimeProfiles<T> | null;

  constructor(_entityApi: TimeAndAttendanceTimeProfileDetailsApi<T>) {
    super(_entityApi);
  }
}

export interface TimeAndAttendanceTimeProfileDetailsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  timeProfileId: DeserializedType<T, 'Edm.String'>;
  weekDay?: JmgDayIdEnum | null;
  canPayrollCalculationPushProfile?: NoYes | null;
  hourPeriodStartSeconds: DeserializedType<T, 'Edm.Int32'>;
  hourPeriodStartRule?: JmgProfileStartCodeBlankPrev | null;
  overtimeFlexLimitSeconds: DeserializedType<T, 'Edm.Int32'>;
  maximumFlexLimitSeconds: DeserializedType<T, 'Edm.Int32'>;
  timeAndAttendanceTimeProfileLinesV2: TimeAndAttendanceTimeProfileLinesV2Type<T>[];
  timeAndAttendanceTimeProfileLines: TimeAndAttendanceTimeProfileLinesType<T>[];
  timeAndAttendanceTimeProfile?: TimeAndAttendanceTimeProfilesType<T> | null;
}
