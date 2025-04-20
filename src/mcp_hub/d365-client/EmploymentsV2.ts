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
import type { EmploymentsV2Api } from './EmploymentsV2Api';
import { HcmEmploymentType } from './HcmEmploymentType';
import {
  RegulatoryEstablishmentDetails,
  RegulatoryEstablishmentDetailsType
} from './RegulatoryEstablishmentDetails';
import { Workers, WorkersType } from './Workers';
import { DimensionSets, DimensionSetsType } from './DimensionSets';
import { WorkCalendars, WorkCalendarsType } from './WorkCalendars';
import { EmploymentDetails, EmploymentDetailsType } from './EmploymentDetails';
import { EmploymentTerms, EmploymentTermsType } from './EmploymentTerms';

/**
 * This class represents the entity "EmploymentsV2" of service "d365_metadata".
 */
export class EmploymentsV2<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements EmploymentsV2Type<T>
{
  /**
   * Technical entity name for EmploymentsV2.
   */
  static override _entityName = 'EmploymentsV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EmploymentsV2 entity.
   */
  static _keys = ['PersonnelNumber', 'LegalEntityId', 'EmploymentId'];
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Legal Entity Id.
   */
  declare legalEntityId: DeserializedType<T, 'Edm.String'>;
  /**
   * Employment Id.
   */
  declare employmentId: DeserializedType<T, 'Edm.String'>;
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
   * Employment Start Date.
   */
  declare employmentStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Worker Type.
   * @nullable
   */
  declare workerType?: HcmEmploymentType | null;
  /**
   * Employment End Date.
   */
  declare employmentEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
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
  /**
   * One-to-many navigation property to the {@link EmploymentDetails} entity.
   */
  declare employmentDetails: EmploymentDetails<T>[];
  /**
   * One-to-many navigation property to the {@link EmploymentTerms} entity.
   */
  declare employmentTerms: EmploymentTerms<T>[];

  constructor(_entityApi: EmploymentsV2Api<T>) {
    super(_entityApi);
  }
}

export interface EmploymentsV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  legalEntityId: DeserializedType<T, 'Edm.String'>;
  employmentId: DeserializedType<T, 'Edm.String'>;
  dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  regulatoryEstablishmentId?: DeserializedType<T, 'Edm.String'> | null;
  employmentStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  workerType?: HcmEmploymentType | null;
  employmentEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  calendarId?: DeserializedType<T, 'Edm.String'> | null;
  calendarLegalEntityId?: DeserializedType<T, 'Edm.String'> | null;
  regulatoryEstablishmentDetail?: RegulatoryEstablishmentDetailsType<T> | null;
  worker?: WorkersType<T> | null;
  dimensionSet?: DimensionSetsType<T> | null;
  workCalendar?: WorkCalendarsType<T> | null;
  employmentDetails: EmploymentDetailsType<T>[];
  employmentTerms: EmploymentTermsType<T>[];
}
