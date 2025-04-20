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
import type { KeyboardMappingGroupsApi } from './KeyboardMappingGroupsApi';

/**
 * This class represents the entity "KeyboardMappingGroups" of service "d365_metadata".
 */
export class KeyboardMappingGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements KeyboardMappingGroupsType<T>
{
  /**
   * Technical entity name for KeyboardMappingGroups.
   */
  static override _entityName = 'KeyboardMappingGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the KeyboardMappingGroups entity.
   */
  static _keys = ['KeyboardMappingGroup'];
  /**
   * Keyboard Mapping Group.
   */
  declare keyboardMappingGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: KeyboardMappingGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface KeyboardMappingGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  keyboardMappingGroup: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
