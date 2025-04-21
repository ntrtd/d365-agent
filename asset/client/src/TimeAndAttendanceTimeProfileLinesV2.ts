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
import type { TimeAndAttendanceTimeProfileLinesV2Api } from './TimeAndAttendanceTimeProfileLinesV2Api';
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
 * This class represents the entity "TimeAndAttendanceTimeProfileLinesV2" of service "d365_metadata".
 */
export class TimeAndAttendanceTimeProfileLinesV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TimeAndAttendanceTimeProfileLinesV2Type<T>
{
  /**
   * Technical entity name for TimeAndAttendanceTimeProfileLinesV2.
   */
  static override _entityName = 'TimeAndAttendanceTimeProfileLinesV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TimeAndAttendanceTimeProfileLinesV2 entity.
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
   * Time And Attendance Switch Code Activity Id.
   * @nullable
   */
  declare timeAndAttendanceSwitchCodeActivityId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Tolerance Before End Minutes.
   */
  declare toleranceBeforeEndMinutes: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tolerance After End Minutes.
   */
  declare toleranceAfterEndMinutes: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Time Profile Id.
   * @nullable
   */
  declare timeProfileId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Profile Line Start Week Day.
   */
  declare profileLineStartWeekDay: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Profile Line End Time Seconds.
   */
  declare profileLineEndTimeSeconds: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Profile Line Start Time Seconds.
   */
  declare profileLineStartTimeSeconds: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Secondary Time Profile Type Id.
   * @nullable
   */
  declare secondaryTimeProfileTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Time Profile Type Id.
   * @nullable
   */
  declare primaryTimeProfileTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tolerance Before Start Minutes.
   */
  declare toleranceBeforeStartMinutes: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Tolerance After Start Minutes.
   */
  declare toleranceAfterStartMinutes: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Time Profile Week Day.
   * @nullable
   */
  declare timeProfileWeekDay?: JmgDayIdEnum | null;
  /**
   * Profile Line End Week Day.
   */
  declare profileLineEndWeekDay: DeserializedType<T, 'Edm.Int32'>;
  /**
   * One-to-one navigation property to the {@link TimeAndAttendanceTimeProfileDetails} entity.
   */
  declare timeAndAttendanceTimeProfileDetails?: TimeAndAttendanceTimeProfileDetails<T> | null;
  /**
   * One-to-one navigation property to the {@link TimeAndAttendanceTimeProfiles} entity.
   */
  declare timeAndAttendanceTimeProfile?: TimeAndAttendanceTimeProfiles<T> | null;

  constructor(_entityApi: TimeAndAttendanceTimeProfileLinesV2Api<T>) {
    super(_entityApi);
  }
}

export interface TimeAndAttendanceTimeProfileLinesV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  recordId: DeserializedType<T, 'Edm.Int64'>;
  timeAndAttendanceSwitchCodeActivityId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  toleranceBeforeEndMinutes: DeserializedType<T, 'Edm.Int32'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  toleranceAfterEndMinutes: DeserializedType<T, 'Edm.Int32'>;
  timeProfileId?: DeserializedType<T, 'Edm.String'> | null;
  profileLineStartWeekDay: DeserializedType<T, 'Edm.Int32'>;
  profileLineEndTimeSeconds: DeserializedType<T, 'Edm.Int32'>;
  profileLineStartTimeSeconds: DeserializedType<T, 'Edm.Int32'>;
  secondaryTimeProfileTypeId?: DeserializedType<T, 'Edm.String'> | null;
  primaryTimeProfileTypeId?: DeserializedType<T, 'Edm.String'> | null;
  toleranceBeforeStartMinutes: DeserializedType<T, 'Edm.Int32'>;
  toleranceAfterStartMinutes: DeserializedType<T, 'Edm.Int32'>;
  timeProfileWeekDay?: JmgDayIdEnum | null;
  profileLineEndWeekDay: DeserializedType<T, 'Edm.Int32'>;
  timeAndAttendanceTimeProfileDetails?: TimeAndAttendanceTimeProfileDetailsType<T> | null;
  timeAndAttendanceTimeProfile?: TimeAndAttendanceTimeProfilesType<T> | null;
}
