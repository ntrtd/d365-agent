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
import type { RetailCdxDataGroupsApi } from './RetailCdxDataGroupsApi';

/**
 * This class represents the entity "RetailCdxDataGroups" of service "d365_metadata".
 */
export class RetailCdxDataGroups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RetailCdxDataGroupsType<T>
{
  /**
   * Technical entity name for RetailCdxDataGroups.
   */
  static override _entityName = 'RetailCdxDataGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailCdxDataGroups entity.
   */
  static _keys = ['Name'];
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Retail Cdx File Storage Provider Name.
   * @nullable
   */
  declare retailCdxFileStorageProviderName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Force Locale.
   * @nullable
   */
  declare forceLocale?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Retail Conn Channel Schema Schema Name.
   * @nullable
   */
  declare retailConnChannelSchemaSchemaName?: DeserializedType<
    T,
    'Edm.String'
  > | null;

  constructor(_entityApi: RetailCdxDataGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailCdxDataGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name: DeserializedType<T, 'Edm.String'>;
  retailCdxFileStorageProviderName?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  forceLocale?: DeserializedType<T, 'Edm.String'> | null;
  retailConnChannelSchemaSchemaName?: DeserializedType<T, 'Edm.String'> | null;
}
