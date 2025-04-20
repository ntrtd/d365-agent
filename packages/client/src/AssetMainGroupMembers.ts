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
import type { AssetMainGroupMembersApi } from './AssetMainGroupMembersApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "AssetMainGroupMembers" of service "d365_metadata".
 */
export class AssetMainGroupMembers<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMainGroupMembersType<T>
{
  /**
   * Technical entity name for AssetMainGroupMembers.
   */
  static override _entityName = 'AssetMainGroupMembers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMainGroupMembers entity.
   */
  static _keys = ['dataAreaId', 'FAGroup', 'ValueModel'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Fa Group.
   */
  declare faGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Value Model.
   */
  declare valueModel: DeserializedType<T, 'Edm.String'>;
  /**
   * Depreciation Group.
   * @nullable
   */
  declare depreciationGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Life By Rate.
   * @nullable
   */
  declare serviceLifeByRate?: NoYes | null;

  constructor(_entityApi: AssetMainGroupMembersApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMainGroupMembersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  faGroup: DeserializedType<T, 'Edm.String'>;
  valueModel: DeserializedType<T, 'Edm.String'>;
  depreciationGroup?: DeserializedType<T, 'Edm.String'> | null;
  serviceLifeByRate?: NoYes | null;
}
