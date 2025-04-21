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
import type { PersonUsersApi } from './PersonUsersApi';
import { SystemUsers, SystemUsersType } from './SystemUsers';

/**
 * This class represents the entity "PersonUsers" of service "d365_metadata".
 */
export class PersonUsers<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PersonUsersType<T>
{
  /**
   * Technical entity name for PersonUsers.
   */
  static override _entityName = 'PersonUsers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PersonUsers entity.
   */
  static _keys = ['UserId', 'PartyNumber', 'ValidFrom'];
  /**
   * User Id.
   */
  declare userId: DeserializedType<T, 'Edm.String'>;
  /**
   * Party Number.
   */
  declare partyNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Person Primary Email.
   * @nullable
   */
  declare personPrimaryEmail?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * User Email.
   * @nullable
   */
  declare userEmail?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Person Name Alias.
   * @nullable
   */
  declare personNameAlias?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Person Name.
   * @nullable
   */
  declare personName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-one navigation property to the {@link SystemUsers} entity.
   */
  declare systemUserEntities?: SystemUsers<T> | null;

  constructor(_entityApi: PersonUsersApi<T>) {
    super(_entityApi);
  }
}

export interface PersonUsersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  userId: DeserializedType<T, 'Edm.String'>;
  partyNumber: DeserializedType<T, 'Edm.String'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  personPrimaryEmail?: DeserializedType<T, 'Edm.String'> | null;
  userEmail?: DeserializedType<T, 'Edm.String'> | null;
  personNameAlias?: DeserializedType<T, 'Edm.String'> | null;
  personName?: DeserializedType<T, 'Edm.String'> | null;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  systemUserEntities?: SystemUsersType<T> | null;
}
