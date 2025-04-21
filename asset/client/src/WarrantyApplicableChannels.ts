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
import type { WarrantyApplicableChannelsApi } from './WarrantyApplicableChannelsApi';
import { WarrantyGroupStatusType } from './WarrantyGroupStatusType';

/**
 * This class represents the entity "WarrantyApplicableChannels" of service "d365_metadata".
 */
export class WarrantyApplicableChannels<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WarrantyApplicableChannelsType<T>
{
  /**
   * Technical entity name for WarrantyApplicableChannels.
   */
  static override _entityName = 'WarrantyApplicableChannels';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WarrantyApplicableChannels entity.
   */
  static _keys = ['WarrantyGroupName', 'Status', 'LineIdentifier'];
  /**
   * Warranty Group Name.
   */
  declare warrantyGroupName: DeserializedType<T, 'Edm.String'>;
  /**
   * Status.
   * @nullable
   */
  declare status?: WarrantyGroupStatusType | null;
  /**
   * Line Identifier.
   */
  declare lineIdentifier: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Channel Name.
   * @nullable
   */
  declare channelName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Party Number.
   * @nullable
   */
  declare partyNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Om Hierarchy Type.
   * @nullable
   */
  declare omHierarchyType?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: WarrantyApplicableChannelsApi<T>) {
    super(_entityApi);
  }
}

export interface WarrantyApplicableChannelsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  warrantyGroupName: DeserializedType<T, 'Edm.String'>;
  status?: WarrantyGroupStatusType | null;
  lineIdentifier: DeserializedType<T, 'Edm.Decimal'>;
  channelName?: DeserializedType<T, 'Edm.String'> | null;
  partyNumber?: DeserializedType<T, 'Edm.String'> | null;
  omHierarchyType?: DeserializedType<T, 'Edm.String'> | null;
}
