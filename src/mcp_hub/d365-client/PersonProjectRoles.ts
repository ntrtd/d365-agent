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
import type { PersonProjectRolesApi } from './PersonProjectRolesApi';
import { People, PeopleType } from './People';
import { Projects, ProjectsType } from './Projects';

/**
 * This class represents the entity "PersonProjectRoles" of service "d365_metadata".
 */
export class PersonProjectRoles<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PersonProjectRolesType<T>
{
  /**
   * Technical entity name for PersonProjectRoles.
   */
  static override _entityName = 'PersonProjectRoles';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PersonProjectRoles entity.
   */
  static _keys = [
    'PartyNumber',
    'ProjectName',
    'Role',
    'ProjectId',
    'DataArea'
  ];
  /**
   * Party Number.
   */
  declare partyNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Project Name.
   */
  declare projectName: DeserializedType<T, 'Edm.String'>;
  /**
   * Role.
   */
  declare role: DeserializedType<T, 'Edm.String'>;
  /**
   * Project Id.
   */
  declare projectId: DeserializedType<T, 'Edm.String'>;
  /**
   * Data Area.
   */
  declare dataArea: DeserializedType<T, 'Edm.String'>;
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
   * One-to-one navigation property to the {@link Projects} entity.
   */
  declare project?: Projects<T> | null;

  constructor(_entityApi: PersonProjectRolesApi<T>) {
    super(_entityApi);
  }
}

export interface PersonProjectRolesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  partyNumber: DeserializedType<T, 'Edm.String'>;
  projectName: DeserializedType<T, 'Edm.String'>;
  role: DeserializedType<T, 'Edm.String'>;
  projectId: DeserializedType<T, 'Edm.String'>;
  dataArea: DeserializedType<T, 'Edm.String'>;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  person?: PeopleType<T> | null;
  project?: ProjectsType<T> | null;
}
