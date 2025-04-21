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
import type { PersonImagesApi } from './PersonImagesApi';
import { People, PeopleType } from './People';

/**
 * This class represents the entity "PersonImages" of service "d365_metadata".
 */
export class PersonImages<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PersonImagesType<T>
{
  /**
   * Technical entity name for PersonImages.
   */
  static override _entityName = 'PersonImages';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PersonImages entity.
   */
  static _keys = ['PartyNumber'];
  /**
   * Party Number.
   */
  declare partyNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Image.
   * @nullable
   */
  declare image?: DeserializedType<T, 'Edm.Binary'> | null;
  /**
   * One-to-one navigation property to the {@link People} entity.
   */
  declare person?: People<T> | null;

  constructor(_entityApi: PersonImagesApi<T>) {
    super(_entityApi);
  }
}

export interface PersonImagesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  partyNumber: DeserializedType<T, 'Edm.String'>;
  image?: DeserializedType<T, 'Edm.Binary'> | null;
  person?: PeopleType<T> | null;
}
