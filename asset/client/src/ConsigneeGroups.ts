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
import type { ConsigneeGroupsApi } from './ConsigneeGroupsApi';

/**
 * This class represents the entity "ConsigneeGroups" of service "d365_metadata".
 */
export class ConsigneeGroups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ConsigneeGroupsType<T>
{
  /**
   * Technical entity name for ConsigneeGroups.
   */
  static override _entityName = 'ConsigneeGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ConsigneeGroups entity.
   */
  static _keys = ['dataAreaId', 'ConsigneeGroupId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Consignee Group Id.
   */
  declare consigneeGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ConsigneeGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface ConsigneeGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  consigneeGroupId: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
}
