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
import type { PersonScreeningsApi } from './PersonScreeningsApi';
import { HcmCompletionStatus } from './HcmCompletionStatus';
import { People, PeopleType } from './People';

/**
 * This class represents the entity "PersonScreenings" of service "d365_metadata".
 */
export class PersonScreenings<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PersonScreeningsType<T>
{
  /**
   * Technical entity name for PersonScreenings.
   */
  static override _entityName = 'PersonScreenings';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PersonScreenings entity.
   */
  static _keys = ['PartyNumber', 'ScreeningTypeId', 'RequiredBy'];
  /**
   * Party Number.
   */
  declare partyNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Screening Type Id.
   */
  declare screeningTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Required By.
   */
  declare requiredBy: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Status.
   * @nullable
   */
  declare status?: HcmCompletionStatus | null;
  /**
   * Note.
   * @nullable
   */
  declare note?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Completed Date.
   */
  declare completedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-one navigation property to the {@link People} entity.
   */
  declare person?: People<T> | null;

  constructor(_entityApi: PersonScreeningsApi<T>) {
    super(_entityApi);
  }
}

export interface PersonScreeningsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  partyNumber: DeserializedType<T, 'Edm.String'>;
  screeningTypeId: DeserializedType<T, 'Edm.String'>;
  requiredBy: DeserializedType<T, 'Edm.DateTimeOffset'>;
  status?: HcmCompletionStatus | null;
  note?: DeserializedType<T, 'Edm.String'> | null;
  completedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  person?: PeopleType<T> | null;
}
