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
import type { ElectronicAddressRolesApi } from './ElectronicAddressRolesApi';
import { LogisticsElectronicAddressMethodType } from './LogisticsElectronicAddressMethodType';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "ElectronicAddressRoles" of service "d365_metadata".
 */
export class ElectronicAddressRoles<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ElectronicAddressRolesType<T>
{
  /**
   * Technical entity name for ElectronicAddressRoles.
   */
  static override _entityName = 'ElectronicAddressRoles';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ElectronicAddressRoles entity.
   */
  static _keys = [
    'LogisticsLocationRole_FK_Name',
    'Type',
    'ElectronicAddressId'
  ];
  /**
   * Logistics Location Role Fk Name.
   */
  declare logisticsLocationRoleFkName: DeserializedType<T, 'Edm.String'>;
  /**
   * Type.
   * @nullable
   */
  declare type?: LogisticsElectronicAddressMethodType | null;
  /**
   * Electronic Address Id.
   */
  declare electronicAddressId: DeserializedType<T, 'Edm.String'>;
  /**
   * Skip Update Electronic Address Roles.
   * @nullable
   */
  declare skipUpdateElectronicAddressRoles?: NoYes | null;

  constructor(_entityApi: ElectronicAddressRolesApi<T>) {
    super(_entityApi);
  }
}

export interface ElectronicAddressRolesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  logisticsLocationRoleFkName: DeserializedType<T, 'Edm.String'>;
  type?: LogisticsElectronicAddressMethodType | null;
  electronicAddressId: DeserializedType<T, 'Edm.String'>;
  skipUpdateElectronicAddressRoles?: NoYes | null;
}
