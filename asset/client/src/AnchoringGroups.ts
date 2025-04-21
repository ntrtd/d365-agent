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
import type { AnchoringGroupsApi } from './AnchoringGroupsApi';

/**
 * This class represents the entity "AnchoringGroups" of service "d365_metadata".
 */
export class AnchoringGroups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements AnchoringGroupsType<T>
{
  /**
   * Technical entity name for AnchoringGroups.
   */
  static override _entityName = 'AnchoringGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AnchoringGroups entity.
   */
  static _keys = ['dataAreaId', 'AnchoringGroupId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Anchoring Group Id.
   */
  declare anchoringGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Anchoring Group Description.
   * @nullable
   */
  declare anchoringGroupDescription?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: AnchoringGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface AnchoringGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  anchoringGroupId: DeserializedType<T, 'Edm.String'>;
  anchoringGroupDescription?: DeserializedType<T, 'Edm.String'> | null;
}
