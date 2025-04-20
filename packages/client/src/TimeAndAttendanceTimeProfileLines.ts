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
import type { TimeAndAttendanceTimeProfileLinesApi } from './TimeAndAttendanceTimeProfileLinesApi';
import { JmgDayIdEnum } from './JmgDayIdEnum';
import {
  TimeAndAttendanceTimeProfileDetails,
  TimeAndAttendanceTimeProfileDetailsType
} from './TimeAndAttendanceTimeProfileDetails';
import {
  TimeAndAttendanceTimeProfiles,
  TimeAndAttendanceTimeProfilesType
} from './TimeAndAttendanceTimeProfiles';

/**
 * This class represents the entity "TimeAndAttendanceTimeProfileLines" of service "d365_metadata".
 */
export class TimeAndAttendanceTimeProfileLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TimeAndAttendanceTimeProfileLinesType<T>
{
  /**
   * Technical entity name for TimeAndAttendanceTimeProfileLines.
   */
  static override _entityName = 'TimeAndAttendanceTimeProfileLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TimeAndAttendanceTimeProfileLines entity.
   */
  static _keys = ['dataAreaId', 'RecordId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Record Id.
   */
  declare recordId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Time Profile Id.
   * @nullable
   */
  declare timeProfileId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Profile Line End Week Day.
   */
  declare profileLineEndWeekDay: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Tolerance Before Start Minutes.
   */
  declare toleranceBeforeStartMinutes: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Tolerance After End Minutes.
   */
  declare toleranceAfterEndMinutes: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Secondary Time Profile Type Id.
   */
  declare secondaryTimeProfileTypeId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Time Profile Week Day.
   * @nullable
   */
  declare timeProfileWeekDay?: JmgDayIdEnum | null;
  /**
   * Tolerance Before End Minutes.
   */
  declare toleranceBeforeEndMinutes: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Tolerance After Start Minutes.
   */
  declare toleranceAfterStartMinutes: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Profile Line End Time Seconds.
   */
  declare profileLineEndTimeSeconds: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Time And Attendance Switch Code Activity Id.
   * @nullable
   */
  declare timeAndAttendanceSwitchCodeActivityId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Profile Line Start Time Seconds.
   */
  declare profileLineStartTimeSeconds: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Profile Line Start Week Day.
   */
  declare profileLineStartWeekDay: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Primary Time Profile Type Id.
   */
  declare primaryTimeProfileTypeId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * One-to-one navigation property to the {@link TimeAndAttendanceTimeProfileDetails} entity.
   */
  declare timeAndAttendanceTimeProfileDetails?: TimeAndAttendanceTimeProfileDetails<T> | null;
  /**
   * One-to-one navigation property to the {@link TimeAndAttendanceTimeProfiles} entity.
   */
  declare timeAndAttendanceTimeProfile?: TimeAndAttendanceTimeProfiles<T> | null;

  constructor(_entityApi: TimeAndAttendanceTimeProfileLinesApi<T>) {
    super(_entityApi);
  }
}

export interface TimeAndAttendanceTimeProfileLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  recordId: DeserializedType<T, 'Edm.Int64'>;
  timeProfileId?: DeserializedType<T, 'Edm.String'> | null;
  profileLineEndWeekDay: DeserializedType<T, 'Edm.Int32'>;
  toleranceBeforeStartMinutes: DeserializedType<T, 'Edm.Int32'>;
  toleranceAfterEndMinutes: DeserializedType<T, 'Edm.Int32'>;
  secondaryTimeProfileTypeId: DeserializedType<T, 'Edm.Int64'>;
  timeProfileWeekDay?: JmgDayIdEnum | null;
  toleranceBeforeEndMinutes: DeserializedType<T, 'Edm.Int32'>;
  toleranceAfterStartMinutes: DeserializedType<T, 'Edm.Int32'>;
  profileLineEndTimeSeconds: DeserializedType<T, 'Edm.Int32'>;
  timeAndAttendanceSwitchCodeActivityId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  profileLineStartTimeSeconds: DeserializedType<T, 'Edm.Int32'>;
  profileLineStartWeekDay: DeserializedType<T, 'Edm.Int32'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  primaryTimeProfileTypeId: DeserializedType<T, 'Edm.Int64'>;
  timeAndAttendanceTimeProfileDetails?: TimeAndAttendanceTimeProfileDetailsType<T> | null;
  timeAndAttendanceTimeProfile?: TimeAndAttendanceTimeProfilesType<T> | null;
}
