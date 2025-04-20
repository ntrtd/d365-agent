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
import type { RetailStoresToDeploysApi } from './RetailStoresToDeploysApi';

/**
 * This class represents the entity "RetailStoresToDeploys" of service "d365_metadata".
 */
export class RetailStoresToDeploys<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailStoresToDeploysType<T>
{
  /**
   * Technical entity name for RetailStoresToDeploys.
   */
  static override _entityName = 'RetailStoresToDeploys';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailStoresToDeploys entity.
   */
  static _keys = ['dataAreaId', 'StoreNumber', 'TerminalId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Store Number.
   */
  declare storeNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Terminal Id.
   */
  declare terminalId: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: RetailStoresToDeploysApi<T>) {
    super(_entityApi);
  }
}

export interface RetailStoresToDeploysType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  storeNumber: DeserializedType<T, 'Edm.String'>;
  terminalId: DeserializedType<T, 'Edm.String'>;
}
