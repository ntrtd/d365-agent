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
import type { InjuryIncidentsApi } from './InjuryIncidentsApi';
import { NoYes } from './NoYes';
import { HcmInjuryOshaInjuryType } from './HcmInjuryOshaInjuryType';
import { HrmInjuryCaseStatus } from './HrmInjuryCaseStatus';
import { HcmInjuryOshaCaseType } from './HcmInjuryOshaCaseType';
import {
  InjuryIncidentTreatments,
  InjuryIncidentTreatmentsType
} from './InjuryIncidentTreatments';
import { Workers, WorkersType } from './Workers';
import { PositionsV2, PositionsV2Type } from './PositionsV2';
import {
  InjuryOutcomeTypes,
  InjuryOutcomeTypesType
} from './InjuryOutcomeTypes';
import { InjuryTypes, InjuryTypesType } from './InjuryTypes';
import {
  InjurySeverityLevels,
  InjurySeverityLevelsType
} from './InjurySeverityLevels';
import { InjuryBodyParts, InjuryBodyPartsType } from './InjuryBodyParts';
import {
  InjuryIncidentFilingAgencies,
  InjuryIncidentFilingAgenciesType
} from './InjuryIncidentFilingAgencies';
import {
  InjuryIncidentCostTypes,
  InjuryIncidentCostTypesType
} from './InjuryIncidentCostTypes';

/**
 * This class represents the entity "InjuryIncidents" of service "d365_metadata".
 */
export class InjuryIncidents<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements InjuryIncidentsType<T>
{
  /**
   * Technical entity name for InjuryIncidents.
   */
  static override _entityName = 'InjuryIncidents';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InjuryIncidents entity.
   */
  static _keys = ['dataAreaId', 'CaseNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Case Number.
   */
  declare caseNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Severity Level Id.
   * @nullable
   */
  declare severityLevelId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Days Away From Work.
   */
  declare daysAwayFromWork: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Outcome Type Id.
   * @nullable
   */
  declare outcomeTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Expected Days Away From Work.
   */
  declare expectedDaysAwayFromWork: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Injury Or Illness Type Id.
   * @nullable
   */
  declare injuryOrIllnessTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Case Description.
   * @nullable
   */
  declare caseDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Body Part Id.
   * @nullable
   */
  declare bodyPartId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date And Time Began Work.
   */
  declare dateAndTimeBeganWork: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Date And Time Reported.
   */
  declare dateAndTimeReported: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Privacy Case.
   * @nullable
   */
  declare privacyCase?: NoYes | null;
  /**
   * Reported By Id.
   * @nullable
   */
  declare reportedById?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Osha Injury Type.
   * @nullable
   */
  declare oshaInjuryType?: HcmInjuryOshaInjuryType | null;
  /**
   * Days On Job Transfer Or Restriction.
   */
  declare daysOnJobTransferOrRestriction: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Case Status.
   * @nullable
   */
  declare caseStatus?: HrmInjuryCaseStatus | null;
  /**
   * Compliance Recordable Case.
   * @nullable
   */
  declare complianceRecordableCase?: NoYes | null;
  /**
   * On Work Premises.
   * @nullable
   */
  declare onWorkPremises?: NoYes | null;
  /**
   * Supervisor Id.
   * @nullable
   */
  declare supervisorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Employee Job Or Task.
   * @nullable
   */
  declare employeeJobOrTask?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Case Closed Date.
   */
  declare caseClosedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Action To Be Taken.
   * @nullable
   */
  declare actionToBeTaken?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Position Id.
   * @nullable
   */
  declare positionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Worker Id.
   * @nullable
   */
  declare workerId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Osha Case Type.
   * @nullable
   */
  declare oshaCaseType?: HcmInjuryOshaCaseType | null;
  /**
   * Case Opened Date.
   */
  declare caseOpenedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Date And Time Of Incident.
   */
  declare dateAndTimeOfIncident: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Cause Of Incident.
   * @nullable
   */
  declare causeOfIncident?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Where Incident Occurred.
   * @nullable
   */
  declare whereIncidentOccurred?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Human Resources Contact Id.
   * @nullable
   */
  declare humanResourcesContactId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Safeguards That Were Provided.
   * @nullable
   */
  declare safeguardsThatWereProvided?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link InjuryIncidentTreatments} entity.
   */
  declare injuryIncidentTreatment?: InjuryIncidentTreatments<T> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare humanResourcesContactWorker?: Workers<T> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare reportedByWorker?: Workers<T> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare supervisorWorker?: Workers<T> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare worker?: Workers<T> | null;
  /**
   * One-to-one navigation property to the {@link PositionsV2} entity.
   */
  declare position?: PositionsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link InjuryOutcomeTypes} entity.
   */
  declare outcomeType?: InjuryOutcomeTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link InjuryTypes} entity.
   */
  declare incidentType?: InjuryTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link InjurySeverityLevels} entity.
   */
  declare injurySeverityLevel?: InjurySeverityLevels<T> | null;
  /**
   * One-to-one navigation property to the {@link InjuryBodyParts} entity.
   */
  declare bodyPart?: InjuryBodyParts<T> | null;
  /**
   * One-to-one navigation property to the {@link InjuryIncidentFilingAgencies} entity.
   */
  declare injuryIncidentFilingAgency?: InjuryIncidentFilingAgencies<T> | null;
  /**
   * One-to-one navigation property to the {@link InjuryIncidentCostTypes} entity.
   */
  declare injuryIncidentCostType?: InjuryIncidentCostTypes<T> | null;

  constructor(_entityApi: InjuryIncidentsApi<T>) {
    super(_entityApi);
  }
}

export interface InjuryIncidentsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  caseNumber: DeserializedType<T, 'Edm.String'>;
  severityLevelId?: DeserializedType<T, 'Edm.String'> | null;
  daysAwayFromWork: DeserializedType<T, 'Edm.Int32'>;
  outcomeTypeId?: DeserializedType<T, 'Edm.String'> | null;
  expectedDaysAwayFromWork: DeserializedType<T, 'Edm.Int32'>;
  injuryOrIllnessTypeId?: DeserializedType<T, 'Edm.String'> | null;
  caseDescription?: DeserializedType<T, 'Edm.String'> | null;
  bodyPartId?: DeserializedType<T, 'Edm.String'> | null;
  dateAndTimeBeganWork: DeserializedType<T, 'Edm.DateTimeOffset'>;
  dateAndTimeReported: DeserializedType<T, 'Edm.DateTimeOffset'>;
  privacyCase?: NoYes | null;
  reportedById?: DeserializedType<T, 'Edm.String'> | null;
  oshaInjuryType?: HcmInjuryOshaInjuryType | null;
  daysOnJobTransferOrRestriction: DeserializedType<T, 'Edm.Int32'>;
  caseStatus?: HrmInjuryCaseStatus | null;
  complianceRecordableCase?: NoYes | null;
  onWorkPremises?: NoYes | null;
  supervisorId?: DeserializedType<T, 'Edm.String'> | null;
  employeeJobOrTask?: DeserializedType<T, 'Edm.String'> | null;
  caseClosedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  actionToBeTaken?: DeserializedType<T, 'Edm.String'> | null;
  positionId?: DeserializedType<T, 'Edm.String'> | null;
  workerId?: DeserializedType<T, 'Edm.String'> | null;
  oshaCaseType?: HcmInjuryOshaCaseType | null;
  caseOpenedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  dateAndTimeOfIncident: DeserializedType<T, 'Edm.DateTimeOffset'>;
  causeOfIncident?: DeserializedType<T, 'Edm.String'> | null;
  whereIncidentOccurred?: DeserializedType<T, 'Edm.String'> | null;
  humanResourcesContactId?: DeserializedType<T, 'Edm.String'> | null;
  safeguardsThatWereProvided?: DeserializedType<T, 'Edm.String'> | null;
  injuryIncidentTreatment?: InjuryIncidentTreatmentsType<T> | null;
  humanResourcesContactWorker?: WorkersType<T> | null;
  reportedByWorker?: WorkersType<T> | null;
  supervisorWorker?: WorkersType<T> | null;
  worker?: WorkersType<T> | null;
  position?: PositionsV2Type<T> | null;
  outcomeType?: InjuryOutcomeTypesType<T> | null;
  incidentType?: InjuryTypesType<T> | null;
  injurySeverityLevel?: InjurySeverityLevelsType<T> | null;
  bodyPart?: InjuryBodyPartsType<T> | null;
  injuryIncidentFilingAgency?: InjuryIncidentFilingAgenciesType<T> | null;
  injuryIncidentCostType?: InjuryIncidentCostTypesType<T> | null;
}
