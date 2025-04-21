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
import type { CustomerHierarchiesRetailChannelsApi } from './CustomerHierarchiesRetailChannelsApi';

/**
 * This class represents the entity "CustomerHierarchiesRetailChannels" of service "d365_metadata".
 */
export class CustomerHierarchiesRetailChannels<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CustomerHierarchiesRetailChannelsType<T>
{
  /**
   * Technical entity name for CustomerHierarchiesRetailChannels.
   */
  static override _entityName = 'CustomerHierarchiesRetailChannels';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CustomerHierarchiesRetailChannels entity.
   */
  static _keys = ['Channel', 'CustHierarchyId'];
  /**
   * Channel.
   */
  declare channel: DeserializedType<T, 'Edm.String'>;
  /**
   * Cust Hierarchy Id.
   */
  declare custHierarchyId: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: CustomerHierarchiesRetailChannelsApi<T>) {
    super(_entityApi);
  }
}

export interface CustomerHierarchiesRetailChannelsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  channel: DeserializedType<T, 'Edm.String'>;
  custHierarchyId: DeserializedType<T, 'Edm.String'>;
}
