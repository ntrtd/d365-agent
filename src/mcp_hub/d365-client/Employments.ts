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
import type { EmploymentsApi } from './EmploymentsApi';
import { HcmEmploymentType } from './HcmEmploymentType';
import {
  OnboardingWorkerChecklistHeaders,
  OnboardingWorkerChecklistHeadersType
} from './OnboardingWorkerChecklistHeaders';
import {
  EmploymentContractors,
  EmploymentContractorsType
} from './EmploymentContractors';
import {
  RegulatoryEstablishmentDetails,
  RegulatoryEstablishmentDetailsType
} from './RegulatoryEstablishmentDetails';
import { Workers, WorkersType } from './Workers';
import { DimensionSets, DimensionSetsType } from './DimensionSets';
import { WorkCalendars, WorkCalendarsType } from './WorkCalendars';

/**
 * This class represents the entity "Employments" of service "d365_metadata".
 */
export class Employments<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements EmploymentsType<T>
{
  /**
   * Technical entity name for Employments.
   */
  static override _entityName = 'Employments';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Employments entity.
   */
  static _keys = [
    'PersonnelNumber',
    'LegalEntityId',
    'EmploymentStartDate',
    'EmploymentEndDate'
  ];
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Legal Entity Id.
   */
  declare legalEntityId: DeserializedType<T, 'Edm.String'>;
  /**
   * Employment Start Date.
   */
  declare employmentStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Employment End Date.
   */
  declare employmentEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Dimension Display Value.
   * @nullable
   */
  declare dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Regulatory Establishment Id.
   * @nullable
   */
  declare regulatoryEstablishmentId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Worker Type.
   * @nullable
   */
  declare workerType?: HcmEmploymentType | null;
  /**
   * Calendar Id.
   * @nullable
   */
  declare calendarId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Calendar Legal Entity Id.
   * @nullable
   */
  declare calendarLegalEntityId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link OnboardingWorkerChecklistHeaders} entity.
   */
  declare onboardingChecklists: OnboardingWorkerChecklistHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link EmploymentContractors} entity.
   */
  declare employmentContractor: EmploymentContractors<T>[];
  /**
   * One-to-one navigation property to the {@link RegulatoryEstablishmentDetails} entity.
   */
  declare regulatoryEstablishmentDetail?: RegulatoryEstablishmentDetails<T> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare worker?: Workers<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;
  /**
   * One-to-one navigation property to the {@link WorkCalendars} entity.
   */
  declare workCalendar?: WorkCalendars<T> | null;

  constructor(_entityApi: EmploymentsApi<T>) {
    super(_entityApi);
  }
}

export interface EmploymentsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  legalEntityId: DeserializedType<T, 'Edm.String'>;
  employmentStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  employmentEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  regulatoryEstablishmentId?: DeserializedType<T, 'Edm.String'> | null;
  workerType?: HcmEmploymentType | null;
  calendarId?: DeserializedType<T, 'Edm.String'> | null;
  calendarLegalEntityId?: DeserializedType<T, 'Edm.String'> | null;
  onboardingChecklists: OnboardingWorkerChecklistHeadersType<T>[];
  employmentContractor: EmploymentContractorsType<T>[];
  regulatoryEstablishmentDetail?: RegulatoryEstablishmentDetailsType<T> | null;
  worker?: WorkersType<T> | null;
  dimensionSet?: DimensionSetsType<T> | null;
  workCalendar?: WorkCalendarsType<T> | null;
}
