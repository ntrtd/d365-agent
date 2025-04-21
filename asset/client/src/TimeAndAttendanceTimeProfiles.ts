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
import type { TimeAndAttendanceTimeProfilesApi } from './TimeAndAttendanceTimeProfilesApi';
import {
  TimeAndAttendanceTimeProfileLinesV2,
  TimeAndAttendanceTimeProfileLinesV2Type
} from './TimeAndAttendanceTimeProfileLinesV2';
import { PayAgreements, PayAgreementsType } from './PayAgreements';
import {
  TimeAndAttendanceTimeProfileLines,
  TimeAndAttendanceTimeProfileLinesType
} from './TimeAndAttendanceTimeProfileLines';
import {
  TimeAndAttendanceTimeProfileDetails,
  TimeAndAttendanceTimeProfileDetailsType
} from './TimeAndAttendanceTimeProfileDetails';

/**
 * This class represents the entity "TimeAndAttendanceTimeProfiles" of service "d365_metadata".
 */
export class TimeAndAttendanceTimeProfiles<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TimeAndAttendanceTimeProfilesType<T>
{
  /**
   * Technical entity name for TimeAndAttendanceTimeProfiles.
   */
  static override _entityName = 'TimeAndAttendanceTimeProfiles';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TimeAndAttendanceTimeProfiles entity.
   */
  static _keys = ['dataAreaId', 'TimeProfileId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Time Profile Id.
   */
  declare timeProfileId: DeserializedType<T, 'Edm.String'>;
  /**
   * Time Profile Description.
   * @nullable
   */
  declare timeProfileDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pay Agreement Code.
   * @nullable
   */
  declare payAgreementCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Time Profile Integer Rgb Color.
   */
  declare timeProfileIntegerRgbColor: DeserializedType<T, 'Edm.Int32'>;
  /**
   * One-to-many navigation property to the {@link TimeAndAttendanceTimeProfileLinesV2} entity.
   */
  declare timeAndAttendanceTimeProfileLinesV2: TimeAndAttendanceTimeProfileLinesV2<T>[];
  /**
   * One-to-one navigation property to the {@link PayAgreements} entity.
   */
  declare payAgreement?: PayAgreements<T> | null;
  /**
   * One-to-many navigation property to the {@link TimeAndAttendanceTimeProfileLines} entity.
   */
  declare timeAndAttendanceTimeProfileLines: TimeAndAttendanceTimeProfileLines<T>[];
  /**
   * One-to-many navigation property to the {@link TimeAndAttendanceTimeProfileDetails} entity.
   */
  declare timeAndAttendanceTimeProfileDetails: TimeAndAttendanceTimeProfileDetails<T>[];

  constructor(_entityApi: TimeAndAttendanceTimeProfilesApi<T>) {
    super(_entityApi);
  }
}

export interface TimeAndAttendanceTimeProfilesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  timeProfileId: DeserializedType<T, 'Edm.String'>;
  timeProfileDescription?: DeserializedType<T, 'Edm.String'> | null;
  payAgreementCode?: DeserializedType<T, 'Edm.String'> | null;
  timeProfileIntegerRgbColor: DeserializedType<T, 'Edm.Int32'>;
  timeAndAttendanceTimeProfileLinesV2: TimeAndAttendanceTimeProfileLinesV2Type<T>[];
  payAgreement?: PayAgreementsType<T> | null;
  timeAndAttendanceTimeProfileLines: TimeAndAttendanceTimeProfileLinesType<T>[];
  timeAndAttendanceTimeProfileDetails: TimeAndAttendanceTimeProfileDetailsType<T>[];
}
