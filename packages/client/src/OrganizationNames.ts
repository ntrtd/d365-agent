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
import type { OrganizationNamesApi } from './OrganizationNamesApi';

/**
 * This class represents the entity "OrganizationNames" of service "d365_metadata".
 */
export class OrganizationNames<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements OrganizationNamesType<T>
{
  /**
   * Technical entity name for OrganizationNames.
   */
  static override _entityName = 'OrganizationNames';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the OrganizationNames entity.
   */
  static _keys = ['DirOrganizationBase_FK_PartyNumber', 'ValidFrom'];
  /**
   * Dir Organization Base Fk Party Number.
   */
  declare dirOrganizationBaseFkPartyNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: OrganizationNamesApi<T>) {
    super(_entityApi);
  }
}

export interface OrganizationNamesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dirOrganizationBaseFkPartyNumber: DeserializedType<T, 'Edm.String'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
