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
import type { ContractLineGroupsApi } from './ContractLineGroupsApi';

/**
 * This class represents the entity "ContractLineGroups" of service "d365_metadata".
 */
export class ContractLineGroups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ContractLineGroupsType<T>
{
  /**
   * Technical entity name for ContractLineGroups.
   */
  static override _entityName = 'ContractLineGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ContractLineGroups entity.
   */
  static _keys = ['dataAreaId', 'ContractLineGroupId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Contract Line Group Id.
   */
  declare contractLineGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ContractLineGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface ContractLineGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  contractLineGroupId: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
}
