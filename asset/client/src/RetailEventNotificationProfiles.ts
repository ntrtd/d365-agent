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
import type { RetailEventNotificationProfilesApi } from './RetailEventNotificationProfilesApi';
import { NoYes } from './NoYes';
import { OnlineChannelV2S, OnlineChannelV2SType } from './OnlineChannelV2S';
import { RetailCallCenters, RetailCallCentersType } from './RetailCallCenters';
import { OnlineChannels, OnlineChannelsType } from './OnlineChannels';
import { RetailStores, RetailStoresType } from './RetailStores';

/**
 * This class represents the entity "RetailEventNotificationProfiles" of service "d365_metadata".
 */
export class RetailEventNotificationProfiles<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailEventNotificationProfilesType<T>
{
  /**
   * Technical entity name for RetailEventNotificationProfiles.
   */
  static override _entityName = 'RetailEventNotificationProfiles';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailEventNotificationProfiles entity.
   */
  static _keys = ['dataAreaId', 'ProfileId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Profile Id.
   */
  declare profileId: DeserializedType<T, 'Edm.String'>;
  /**
   * Active.
   * @nullable
   */
  declare active?: NoYes | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link OnlineChannelV2S} entity.
   */
  declare onlineChannelV2: OnlineChannelV2S<T>[];
  /**
   * One-to-many navigation property to the {@link RetailCallCenters} entity.
   */
  declare retailCallCenter: RetailCallCenters<T>[];
  /**
   * One-to-many navigation property to the {@link OnlineChannels} entity.
   */
  declare onlineChannel: OnlineChannels<T>[];
  /**
   * One-to-many navigation property to the {@link RetailStores} entity.
   */
  declare retailStore: RetailStores<T>[];

  constructor(_entityApi: RetailEventNotificationProfilesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailEventNotificationProfilesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  profileId: DeserializedType<T, 'Edm.String'>;
  active?: NoYes | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  onlineChannelV2: OnlineChannelV2SType<T>[];
  retailCallCenter: RetailCallCentersType<T>[];
  onlineChannel: OnlineChannelsType<T>[];
  retailStore: RetailStoresType<T>[];
}
