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
import type { PersonLaborUnionsApi } from './PersonLaborUnionsApi';
import { People, PeopleType } from './People';
import { Unions, UnionsType } from './Unions';

/**
 * This class represents the entity "PersonLaborUnions" of service "d365_metadata".
 */
export class PersonLaborUnions<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PersonLaborUnionsType<T>
{
  /**
   * Technical entity name for PersonLaborUnions.
   */
  static override _entityName = 'PersonLaborUnions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PersonLaborUnions entity.
   */
  static _keys = ['PartyNumber', 'UnionId', 'StartDate'];
  /**
   * Party Number.
   */
  declare partyNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Union Id.
   */
  declare unionId: DeserializedType<T, 'Edm.String'>;
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
  /**
   * One-to-one navigation property to the {@link Unions} entity.
   */
  declare laborUnion?: Unions<T> | null;

  constructor(_entityApi: PersonLaborUnionsApi<T>) {
    super(_entityApi);
  }
}

export interface PersonLaborUnionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  partyNumber: DeserializedType<T, 'Edm.String'>;
  unionId: DeserializedType<T, 'Edm.String'>;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  person?: PeopleType<T> | null;
  laborUnion?: UnionsType<T> | null;
}
