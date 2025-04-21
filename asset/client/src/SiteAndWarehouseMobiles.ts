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
import type { SiteAndWarehouseMobilesApi } from './SiteAndWarehouseMobilesApi';

/**
 * This class represents the entity "SiteAndWarehouseMobiles" of service "d365_metadata".
 */
export class SiteAndWarehouseMobiles<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SiteAndWarehouseMobilesType<T>
{
  /**
   * Technical entity name for SiteAndWarehouseMobiles.
   */
  static override _entityName = 'SiteAndWarehouseMobiles';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SiteAndWarehouseMobiles entity.
   */
  static _keys = ['dataAreaId', 'InventLocationId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Invent Location Id.
   */
  declare inventLocationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Site Id.
   * @nullable
   */
  declare inventSiteId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: SiteAndWarehouseMobilesApi<T>) {
    super(_entityApi);
  }
}

export interface SiteAndWarehouseMobilesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  inventLocationId: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  inventSiteId?: DeserializedType<T, 'Edm.String'> | null;
}
