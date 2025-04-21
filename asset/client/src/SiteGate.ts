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
import type { SiteGateApi } from './SiteGateApi';
import { InventSiteGateTypeIn } from './InventSiteGateTypeIn';

/**
 * This class represents the entity "SiteGate" of service "d365_metadata".
 */
export class SiteGate<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SiteGateType<T>
{
  /**
   * Technical entity name for SiteGate.
   */
  static override _entityName = 'SiteGate';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SiteGate entity.
   */
  static _keys = ['dataAreaId', 'Type', 'GateId', 'SiteId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Type.
   * @nullable
   */
  declare type?: InventSiteGateTypeIn | null;
  /**
   * Gate Id.
   */
  declare gateId: DeserializedType<T, 'Edm.String'>;
  /**
   * Site Id.
   */
  declare siteId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: SiteGateApi<T>) {
    super(_entityApi);
  }
}

export interface SiteGateType<T extends DeSerializers = DefaultDeSerializers> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  type?: InventSiteGateTypeIn | null;
  gateId: DeserializedType<T, 'Edm.String'>;
  siteId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
