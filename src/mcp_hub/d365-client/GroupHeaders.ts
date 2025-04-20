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
import type { GroupHeadersApi } from './GroupHeadersApi';
import { WarrantyGroupStatusType } from './WarrantyGroupStatusType';

/**
 * This class represents the entity "GroupHeaders" of service "d365_metadata".
 */
export class GroupHeaders<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements GroupHeadersType<T>
{
  /**
   * Technical entity name for GroupHeaders.
   */
  static override _entityName = 'GroupHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the GroupHeaders entity.
   */
  static _keys = ['GroupName'];
  /**
   * Group Name.
   */
  declare groupName: DeserializedType<T, 'Edm.String'>;
  /**
   * Display Order.
   */
  declare displayOrder: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Status.
   * @nullable
   */
  declare status?: WarrantyGroupStatusType | null;
  /**
   * Published Date Time.
   */
  declare publishedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: GroupHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface GroupHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  groupName: DeserializedType<T, 'Edm.String'>;
  displayOrder: DeserializedType<T, 'Edm.Decimal'>;
  status?: WarrantyGroupStatusType | null;
  publishedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
