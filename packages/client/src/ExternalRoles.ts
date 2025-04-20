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
import type { ExternalRolesApi } from './ExternalRolesApi';
import { UserExternalPartyEntityType } from './UserExternalPartyEntityType';

/**
 * This class represents the entity "ExternalRoles" of service "d365_metadata".
 */
export class ExternalRoles<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ExternalRolesType<T>
{
  /**
   * Technical entity name for ExternalRoles.
   */
  static override _entityName = 'ExternalRoles';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ExternalRoles entity.
   */
  static _keys = ['Role', 'Type'];
  /**
   * Role.
   */
  declare role: DeserializedType<T, 'Edm.String'>;
  /**
   * Type.
   * @nullable
   */
  declare type?: UserExternalPartyEntityType | null;

  constructor(_entityApi: ExternalRolesApi<T>) {
    super(_entityApi);
  }
}

export interface ExternalRolesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  role: DeserializedType<T, 'Edm.String'>;
  type?: UserExternalPartyEntityType | null;
}
