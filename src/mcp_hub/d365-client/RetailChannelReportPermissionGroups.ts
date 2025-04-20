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
import type { RetailChannelReportPermissionGroupsApi } from './RetailChannelReportPermissionGroupsApi';

/**
 * This class represents the entity "RetailChannelReportPermissionGroups" of service "d365_metadata".
 */
export class RetailChannelReportPermissionGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailChannelReportPermissionGroupsType<T>
{
  /**
   * Technical entity name for RetailChannelReportPermissionGroups.
   */
  static override _entityName = 'RetailChannelReportPermissionGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailChannelReportPermissionGroups entity.
   */
  static _keys = ['ChannelReportId', 'PosPermissionGroupId'];
  /**
   * Channel Report Id.
   */
  declare channelReportId: DeserializedType<T, 'Edm.String'>;
  /**
   * Pos Permission Group Id.
   */
  declare posPermissionGroupId: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: RetailChannelReportPermissionGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailChannelReportPermissionGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  channelReportId: DeserializedType<T, 'Edm.String'>;
  posPermissionGroupId: DeserializedType<T, 'Edm.String'>;
}
