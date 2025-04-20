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
import type { InjuryIncidentTreatmentsApi } from './InjuryIncidentTreatmentsApi';
import { NoYes } from './NoYes';
import {
  InjuryTreatmentTypes,
  InjuryTreatmentTypesType
} from './InjuryTreatmentTypes';
import { InjuryIncidents, InjuryIncidentsType } from './InjuryIncidents';

/**
 * This class represents the entity "InjuryIncidentTreatments" of service "d365_metadata".
 */
export class InjuryIncidentTreatments<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements InjuryIncidentTreatmentsType<T>
{
  /**
   * Technical entity name for InjuryIncidentTreatments.
   */
  static override _entityName = 'InjuryIncidentTreatments';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InjuryIncidentTreatments entity.
   */
  static _keys = ['CaseNumber', 'LineNum'];
  /**
   * Case Number.
   */
  declare caseNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Num.
   */
  declare lineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Emergency Visit Required.
   * @nullable
   */
  declare emergencyVisitRequired?: NoYes | null;
  /**
   * Treatment Date Time.
   */
  declare treatmentDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Treatment Type Id.
   * @nullable
   */
  declare treatmentTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Comments.
   * @nullable
   */
  declare comments?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Treatment Details.
   * @nullable
   */
  declare treatmentDetails?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Treatment Facility.
   * @nullable
   */
  declare treatmentFacility?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Overnight Required.
   * @nullable
   */
  declare overnightRequired?: NoYes | null;
  /**
   * Physician.
   * @nullable
   */
  declare physician?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link InjuryTreatmentTypes} entity.
   */
  declare injuryTreatmentType?: InjuryTreatmentTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link InjuryIncidents} entity.
   */
  declare injuryIncident?: InjuryIncidents<T> | null;

  constructor(_entityApi: InjuryIncidentTreatmentsApi<T>) {
    super(_entityApi);
  }
}

export interface InjuryIncidentTreatmentsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  caseNumber: DeserializedType<T, 'Edm.String'>;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  emergencyVisitRequired?: NoYes | null;
  treatmentDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  treatmentTypeId?: DeserializedType<T, 'Edm.String'> | null;
  comments?: DeserializedType<T, 'Edm.String'> | null;
  treatmentDetails?: DeserializedType<T, 'Edm.String'> | null;
  treatmentFacility?: DeserializedType<T, 'Edm.String'> | null;
  overnightRequired?: NoYes | null;
  physician?: DeserializedType<T, 'Edm.String'> | null;
  injuryTreatmentType?: InjuryTreatmentTypesType<T> | null;
  injuryIncident?: InjuryIncidentsType<T> | null;
}
