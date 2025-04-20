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
import type { PartyLocationRolesApi } from './PartyLocationRolesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "PartyLocationRoles" of service "d365_metadata".
 */
export class PartyLocationRoles<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PartyLocationRolesType<T>
{
  /**
   * Technical entity name for PartyLocationRoles.
   */
  static override _entityName = 'PartyLocationRoles';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PartyLocationRoles entity.
   */
  static _keys = [
    'DirPartyTable_FK_PartyNumber',
    'LogisticsLocation_FK_LocationId',
    'LogisticsLocationRole_FK_Name'
  ];
  /**
   * Dir Party Table Fk Party Number.
   */
  declare dirPartyTableFkPartyNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Logistics Location Fk Location Id.
   */
  declare logisticsLocationFkLocationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Logistics Location Role Fk Name.
   */
  declare logisticsLocationRoleFkName: DeserializedType<T, 'Edm.String'>;
  /**
   * Skip Update Location Roles.
   * @nullable
   */
  declare skipUpdateLocationRoles?: NoYes | null;

  constructor(_entityApi: PartyLocationRolesApi<T>) {
    super(_entityApi);
  }
}

export interface PartyLocationRolesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dirPartyTableFkPartyNumber: DeserializedType<T, 'Edm.String'>;
  logisticsLocationFkLocationId: DeserializedType<T, 'Edm.String'>;
  logisticsLocationRoleFkName: DeserializedType<T, 'Edm.String'>;
  skipUpdateLocationRoles?: NoYes | null;
}
