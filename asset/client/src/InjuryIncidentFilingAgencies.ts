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
import type { InjuryIncidentFilingAgenciesApi } from './InjuryIncidentFilingAgenciesApi';
import { NoYes } from './NoYes';
import { InjuryIncidents, InjuryIncidentsType } from './InjuryIncidents';
import {
  InjuryFilingAgencies,
  InjuryFilingAgenciesType
} from './InjuryFilingAgencies';

/**
 * This class represents the entity "InjuryIncidentFilingAgencies" of service "d365_metadata".
 */
export class InjuryIncidentFilingAgencies<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements InjuryIncidentFilingAgenciesType<T>
{
  /**
   * Technical entity name for InjuryIncidentFilingAgencies.
   */
  static override _entityName = 'InjuryIncidentFilingAgencies';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InjuryIncidentFilingAgencies entity.
   */
  static _keys = ['CaseNumber', 'FilingAgencyId'];
  /**
   * Case Number.
   */
  declare caseNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Filing Agency Id.
   */
  declare filingAgencyId: DeserializedType<T, 'Edm.String'>;
  /**
   * Comments.
   * @nullable
   */
  declare comments?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Agency Was Notified.
   * @nullable
   */
  declare agencyWasNotified?: NoYes | null;
  /**
   * Report Submit Date Time.
   */
  declare reportSubmitDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-one navigation property to the {@link InjuryIncidents} entity.
   */
  declare injuryIncident?: InjuryIncidents<T> | null;
  /**
   * One-to-one navigation property to the {@link InjuryFilingAgencies} entity.
   */
  declare injuryFilingAgency?: InjuryFilingAgencies<T> | null;

  constructor(_entityApi: InjuryIncidentFilingAgenciesApi<T>) {
    super(_entityApi);
  }
}

export interface InjuryIncidentFilingAgenciesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  caseNumber: DeserializedType<T, 'Edm.String'>;
  filingAgencyId: DeserializedType<T, 'Edm.String'>;
  comments?: DeserializedType<T, 'Edm.String'> | null;
  agencyWasNotified?: NoYes | null;
  reportSubmitDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  injuryIncident?: InjuryIncidentsType<T> | null;
  injuryFilingAgency?: InjuryFilingAgenciesType<T> | null;
}
