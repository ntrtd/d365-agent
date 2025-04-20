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
import type { PersonCertificatesApi } from './PersonCertificatesApi';
import { People, PeopleType } from './People';
import { CertificateTypes, CertificateTypesType } from './CertificateTypes';

/**
 * This class represents the entity "PersonCertificates" of service "d365_metadata".
 */
export class PersonCertificates<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PersonCertificatesType<T>
{
  /**
   * Technical entity name for PersonCertificates.
   */
  static override _entityName = 'PersonCertificates';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PersonCertificates entity.
   */
  static _keys = ['PartyNumber', 'CertificateTypeId', 'StartDate'];
  /**
   * Party Number.
   */
  declare partyNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Certificate Type Id.
   */
  declare certificateTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Notes.
   * @nullable
   */
  declare notes?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * End Date.
   */
  declare endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-one navigation property to the {@link People} entity.
   */
  declare person?: People<T> | null;
  /**
   * One-to-one navigation property to the {@link CertificateTypes} entity.
   */
  declare certificateType?: CertificateTypes<T> | null;

  constructor(_entityApi: PersonCertificatesApi<T>) {
    super(_entityApi);
  }
}

export interface PersonCertificatesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  partyNumber: DeserializedType<T, 'Edm.String'>;
  certificateTypeId: DeserializedType<T, 'Edm.String'>;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  notes?: DeserializedType<T, 'Edm.String'> | null;
  endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  person?: PeopleType<T> | null;
  certificateType?: CertificateTypesType<T> | null;
}
