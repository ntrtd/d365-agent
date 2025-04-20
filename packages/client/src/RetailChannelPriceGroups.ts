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
import type { RetailChannelPriceGroupsApi } from './RetailChannelPriceGroupsApi';
import { OnlineChannels, OnlineChannelsType } from './OnlineChannels';
import { RetailCallCenters, RetailCallCentersType } from './RetailCallCenters';
import { RetailChannels, RetailChannelsType } from './RetailChannels';
import { RetailStores, RetailStoresType } from './RetailStores';

/**
 * This class represents the entity "RetailChannelPriceGroups" of service "d365_metadata".
 */
export class RetailChannelPriceGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailChannelPriceGroupsType<T>
{
  /**
   * Technical entity name for RetailChannelPriceGroups.
   */
  static override _entityName = 'RetailChannelPriceGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailChannelPriceGroups entity.
   */
  static _keys = ['dataAreaId', 'GroupCode', 'RetailChannelId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Group Code.
   */
  declare groupCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Retail Channel Id.
   */
  declare retailChannelId: DeserializedType<T, 'Edm.String'>;
  /**
   * Price Group Data Area Id.
   * @nullable
   */
  declare priceGroupDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link OnlineChannels} entity.
   */
  declare onlineChannel?: OnlineChannels<T> | null;
  /**
   * One-to-one navigation property to the {@link RetailCallCenters} entity.
   */
  declare retailCallCenter?: RetailCallCenters<T> | null;
  /**
   * One-to-one navigation property to the {@link RetailChannels} entity.
   */
  declare retailChannel?: RetailChannels<T> | null;
  /**
   * One-to-one navigation property to the {@link RetailStores} entity.
   */
  declare retailStore?: RetailStores<T> | null;

  constructor(_entityApi: RetailChannelPriceGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailChannelPriceGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  groupCode: DeserializedType<T, 'Edm.String'>;
  retailChannelId: DeserializedType<T, 'Edm.String'>;
  priceGroupDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  onlineChannel?: OnlineChannelsType<T> | null;
  retailCallCenter?: RetailCallCentersType<T> | null;
  retailChannel?: RetailChannelsType<T> | null;
  retailStore?: RetailStoresType<T> | null;
}
