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
import type { PersonTrustedPositionsApi } from './PersonTrustedPositionsApi';
import { People, PeopleType } from './People';

/**
 * This class represents the entity "PersonTrustedPositions" of service "d365_metadata".
 */
export class PersonTrustedPositions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PersonTrustedPositionsType<T>
{
  /**
   * Technical entity name for PersonTrustedPositions.
   */
  static override _entityName = 'PersonTrustedPositions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PersonTrustedPositions entity.
   */
  static _keys = ['PartyNumber', 'Position', 'Employer'];
  /**
   * Party Number.
   */
  declare partyNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Position.
   */
  declare position: DeserializedType<T, 'Edm.String'>;
  /**
   * Employer.
   */
  declare employer: DeserializedType<T, 'Edm.String'>;
  /**
   * Note.
   * @nullable
   */
  declare note?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * End Date.
   */
  declare endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-one navigation property to the {@link People} entity.
   */
  declare person?: People<T> | null;

  constructor(_entityApi: PersonTrustedPositionsApi<T>) {
    super(_entityApi);
  }
}

export interface PersonTrustedPositionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  partyNumber: DeserializedType<T, 'Edm.String'>;
  position: DeserializedType<T, 'Edm.String'>;
  employer: DeserializedType<T, 'Edm.String'>;
  note?: DeserializedType<T, 'Edm.String'> | null;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  person?: PeopleType<T> | null;
}
