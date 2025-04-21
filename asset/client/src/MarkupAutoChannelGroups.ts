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
import type { MarkupAutoChannelGroupsApi } from './MarkupAutoChannelGroupsApi';

/**
 * This class represents the entity "MarkupAutoChannelGroups" of service "d365_metadata".
 */
export class MarkupAutoChannelGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements MarkupAutoChannelGroupsType<T>
{
  /**
   * Technical entity name for MarkupAutoChannelGroups.
   */
  static override _entityName = 'MarkupAutoChannelGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the MarkupAutoChannelGroups entity.
   */
  static _keys = ['dataAreaId', 'RetailChannelRelation'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Retail Channel Relation.
   */
  declare retailChannelRelation: DeserializedType<T, 'Edm.String'>;
  /**
   * Retail Channel Relation Description.
   * @nullable
   */
  declare retailChannelRelationDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;

  constructor(_entityApi: MarkupAutoChannelGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface MarkupAutoChannelGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  retailChannelRelation: DeserializedType<T, 'Edm.String'>;
  retailChannelRelationDescription?: DeserializedType<T, 'Edm.String'> | null;
}
