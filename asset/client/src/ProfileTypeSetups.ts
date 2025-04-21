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
import type { ProfileTypeSetupsApi } from './ProfileTypeSetupsApi';
import { InventProfileTypeRu } from './InventProfileTypeRu';

/**
 * This class represents the entity "ProfileTypeSetups" of service "d365_metadata".
 */
export class ProfileTypeSetups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProfileTypeSetupsType<T>
{
  /**
   * Technical entity name for ProfileTypeSetups.
   */
  static override _entityName = 'ProfileTypeSetups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProfileTypeSetups entity.
   */
  static _keys = ['dataAreaId', 'KindOfActivity'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Kind Of Activity.
   * @nullable
   */
  declare kindOfActivity?: InventProfileTypeRu | null;
  /**
   * Number Sequence Group Id.
   * @nullable
   */
  declare numberSequenceGroupId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ProfileTypeSetupsApi<T>) {
    super(_entityApi);
  }
}

export interface ProfileTypeSetupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  kindOfActivity?: InventProfileTypeRu | null;
  numberSequenceGroupId?: DeserializedType<T, 'Edm.String'> | null;
}
