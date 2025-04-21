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
import type { RegistrationsApi } from './RegistrationsApi';
import { TaxRegistrationTypesList } from './TaxRegistrationTypesList';

/**
 * This class represents the entity "Registrations" of service "d365_metadata".
 */
export class Registrations<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RegistrationsType<T>
{
  /**
   * Technical entity name for Registrations.
   */
  static override _entityName = 'Registrations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Registrations entity.
   */
  static _keys = [
    'PartyNumber',
    'LocationId',
    'ValidFrom',
    'LegislationType',
    'CountryRegionId'
  ];
  /**
   * Party Number.
   */
  declare partyNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Location Id.
   */
  declare locationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Legislation Type.
   * @nullable
   */
  declare legislationType?: TaxRegistrationTypesList | null;
  /**
   * Country Region Id.
   */
  declare countryRegionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Registration Number.
   * @nullable
   */
  declare registrationNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Issuer.
   * @nullable
   */
  declare issuer?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Issue Date.
   */
  declare issueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Tax Regstration Type.
   * @nullable
   */
  declare taxRegstrationType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Section.
   * @nullable
   */
  declare section?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: RegistrationsApi<T>) {
    super(_entityApi);
  }
}

export interface RegistrationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  partyNumber: DeserializedType<T, 'Edm.String'>;
  locationId: DeserializedType<T, 'Edm.String'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  legislationType?: TaxRegistrationTypesList | null;
  countryRegionId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  registrationNumber?: DeserializedType<T, 'Edm.String'> | null;
  issuer?: DeserializedType<T, 'Edm.String'> | null;
  issueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  taxRegstrationType?: DeserializedType<T, 'Edm.String'> | null;
  section?: DeserializedType<T, 'Edm.String'> | null;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
