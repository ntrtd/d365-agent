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
import type { InventorySiteGatesApi } from './InventorySiteGatesApi';
import { InventSiteGateTypeIn } from './InventSiteGateTypeIn';

/**
 * This class represents the entity "InventorySiteGates" of service "d365_metadata".
 */
export class InventorySiteGates<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements InventorySiteGatesType<T>
{
  /**
   * Technical entity name for InventorySiteGates.
   */
  static override _entityName = 'InventorySiteGates';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InventorySiteGates entity.
   */
  static _keys = ['dataAreaId', 'GateType', 'GateId', 'SiteId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Gate Type.
   * @nullable
   */
  declare gateType?: InventSiteGateTypeIn | null;
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

  constructor(_entityApi: InventorySiteGatesApi<T>) {
    super(_entityApi);
  }
}

export interface InventorySiteGatesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  gateType?: InventSiteGateTypeIn | null;
  gateId: DeserializedType<T, 'Edm.String'>;
  siteId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
