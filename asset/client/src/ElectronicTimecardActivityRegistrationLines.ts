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
import type { ElectronicTimecardActivityRegistrationLinesApi } from './ElectronicTimecardActivityRegistrationLinesApi';
import { NoYes } from './NoYes';
import { JmgJourRegTypeEnum } from './JmgJourRegTypeEnum';
import {
  ElectronicTimecardActivityRegistrationHeaders,
  ElectronicTimecardActivityRegistrationHeadersType
} from './ElectronicTimecardActivityRegistrationHeaders';

/**
 * This class represents the entity "ElectronicTimecardActivityRegistrationLines" of service "d365_metadata".
 */
export class ElectronicTimecardActivityRegistrationLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ElectronicTimecardActivityRegistrationLinesType<T>
{
  /**
   * Technical entity name for ElectronicTimecardActivityRegistrationLines.
   */
  static override _entityName = 'ElectronicTimecardActivityRegistrationLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ElectronicTimecardActivityRegistrationLines entity.
   */
  static _keys = [
    'dataAreaId',
    'ElectronicTimecardActivityRegistrationEntryNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Electronic Timecard Activity Registration Entry Number.
   */
  declare electronicTimecardActivityRegistrationEntryNumber: DeserializedType<
    T,
    'Edm.Int64'
  >;
  /**
   * On Call Time And Attendance Job Id.
   * @nullable
   */
  declare onCallTimeAndAttendanceJobId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Start Date Time.
   */
  declare startDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Is Work In Progress.
   * @nullable
   */
  declare isWorkInProgress?: NoYes | null;
  /**
   * Absence Code Id.
   * @nullable
   */
  declare absenceCodeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Indirect Activity Category Id.
   * @nullable
   */
  declare indirectActivityCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Category Id.
   * @nullable
   */
  declare projectCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Journal Registration Type.
   * @nullable
   */
  declare journalRegistrationType?: JmgJourRegTypeEnum | null;
  /**
   * Production Order Number.
   * @nullable
   */
  declare productionOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Time Profile Date.
   */
  declare timeProfileDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Project Id.
   * @nullable
   */
  declare projectId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Stop Date Time.
   */
  declare stopDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Calculated Time Seconds.
   */
  declare calculatedTimeSeconds: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Worker Personnel Number.
   * @nullable
   */
  declare workerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Operations Resource Id.
   * @nullable
   */
  declare operationsResourceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Operations Resource Pilot Id.
   * @nullable
   */
  declare operationsResourcePilotId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Absence Code Time And Attendance Job Id.
   * @nullable
   */
  declare absenceCodeTimeAndAttendanceJobId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Time And Attendance Job Id.
   * @nullable
   */
  declare timeAndAttendanceJobId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Job Finished.
   * @nullable
   */
  declare isJobFinished?: NoYes | null;
  /**
   * Pilot Personnel Number.
   * @nullable
   */
  declare pilotPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link ElectronicTimecardActivityRegistrationHeaders} entity.
   */
  declare electronicTimecardActivityRegistrationHeader?: ElectronicTimecardActivityRegistrationHeaders<T> | null;

  constructor(_entityApi: ElectronicTimecardActivityRegistrationLinesApi<T>) {
    super(_entityApi);
  }
}

export interface ElectronicTimecardActivityRegistrationLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  electronicTimecardActivityRegistrationEntryNumber: DeserializedType<
    T,
    'Edm.Int64'
  >;
  onCallTimeAndAttendanceJobId?: DeserializedType<T, 'Edm.String'> | null;
  startDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isWorkInProgress?: NoYes | null;
  absenceCodeId?: DeserializedType<T, 'Edm.String'> | null;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  indirectActivityCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  projectCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  journalRegistrationType?: JmgJourRegTypeEnum | null;
  productionOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  timeProfileDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  projectId?: DeserializedType<T, 'Edm.String'> | null;
  stopDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  calculatedTimeSeconds: DeserializedType<T, 'Edm.Int32'>;
  workerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  operationsResourceId?: DeserializedType<T, 'Edm.String'> | null;
  operationsResourcePilotId?: DeserializedType<T, 'Edm.String'> | null;
  absenceCodeTimeAndAttendanceJobId?: DeserializedType<T, 'Edm.String'> | null;
  timeAndAttendanceJobId?: DeserializedType<T, 'Edm.String'> | null;
  isJobFinished?: NoYes | null;
  pilotPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  electronicTimecardActivityRegistrationHeader?: ElectronicTimecardActivityRegistrationHeadersType<T> | null;
}
