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
import type { PersonnelActionTypeSetupRolesApi } from './PersonnelActionTypeSetupRolesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "PersonnelActionTypeSetupRoles" of service "d365_metadata".
 */
export class PersonnelActionTypeSetupRoles<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PersonnelActionTypeSetupRolesType<T>
{
  /**
   * Technical entity name for PersonnelActionTypeSetupRoles.
   */
  static override _entityName = 'PersonnelActionTypeSetupRoles';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PersonnelActionTypeSetupRoles entity.
   */
  static _keys = ['PersonnelActionTypeId', 'RoleName'];
  /**
   * Personnel Action Type Id.
   */
  declare personnelActionTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Role Name.
   */
  declare roleName: DeserializedType<T, 'Edm.String'>;
  /**
   * Create Action.
   * @nullable
   */
  declare createAction?: NoYes | null;

  constructor(_entityApi: PersonnelActionTypeSetupRolesApi<T>) {
    super(_entityApi);
  }
}

export interface PersonnelActionTypeSetupRolesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  personnelActionTypeId: DeserializedType<T, 'Edm.String'>;
  roleName: DeserializedType<T, 'Edm.String'>;
  createAction?: NoYes | null;
}
