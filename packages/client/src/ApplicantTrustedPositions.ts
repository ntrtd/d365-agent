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
import type { ApplicantTrustedPositionsApi } from './ApplicantTrustedPositionsApi';

/**
 * This class represents the entity "ApplicantTrustedPositions" of service "d365_metadata".
 */
export class ApplicantTrustedPositions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ApplicantTrustedPositionsType<T>
{
  /**
   * Technical entity name for ApplicantTrustedPositions.
   */
  static override _entityName = 'ApplicantTrustedPositions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ApplicantTrustedPositions entity.
   */
  static _keys = ['ApplicantId', 'Position', 'Employer'];
  /**
   * Applicant Id.
   */
  declare applicantId: DeserializedType<T, 'Edm.String'>;
  /**
   * Position.
   */
  declare position: DeserializedType<T, 'Edm.String'>;
  /**
   * Employer.
   */
  declare employer: DeserializedType<T, 'Edm.String'>;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * End Date.
   */
  declare endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Note.
   * @nullable
   */
  declare note?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ApplicantTrustedPositionsApi<T>) {
    super(_entityApi);
  }
}

export interface ApplicantTrustedPositionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  applicantId: DeserializedType<T, 'Edm.String'>;
  position: DeserializedType<T, 'Edm.String'>;
  employer: DeserializedType<T, 'Edm.String'>;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  note?: DeserializedType<T, 'Edm.String'> | null;
}
