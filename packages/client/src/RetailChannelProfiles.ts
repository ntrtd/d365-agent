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
import type { RetailChannelProfilesApi } from './RetailChannelProfilesApi';
import { RetailChannelProfileType } from './RetailChannelProfileType';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "RetailChannelProfiles" of service "d365_metadata".
 */
export class RetailChannelProfiles<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailChannelProfilesType<T>
{
  /**
   * Technical entity name for RetailChannelProfiles.
   */
  static override _entityName = 'RetailChannelProfiles';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailChannelProfiles entity.
   */
  static _keys = ['Name'];
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Channel Profile Type.
   * @nullable
   */
  declare channelProfileType?: RetailChannelProfileType | null;
  /**
   * Is System Record.
   * @nullable
   */
  declare isSystemRecord?: NoYes | null;

  constructor(_entityApi: RetailChannelProfilesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailChannelProfilesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name: DeserializedType<T, 'Edm.String'>;
  channelProfileType?: RetailChannelProfileType | null;
  isSystemRecord?: NoYes | null;
}
