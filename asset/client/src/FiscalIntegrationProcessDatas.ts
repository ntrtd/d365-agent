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
import type { FiscalIntegrationProcessDatasApi } from './FiscalIntegrationProcessDatasApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "FiscalIntegrationProcessDatas" of service "d365_metadata".
 */
export class FiscalIntegrationProcessDatas<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements FiscalIntegrationProcessDatasType<T>
{
  /**
   * Technical entity name for FiscalIntegrationProcessDatas.
   */
  static override _entityName = 'FiscalIntegrationProcessDatas';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FiscalIntegrationProcessDatas entity.
   */
  static _keys = ['Terminal', 'Channel', 'Store'];
  /**
   * Terminal.
   */
  declare terminal: DeserializedType<T, 'Edm.String'>;
  /**
   * Channel.
   */
  declare channel: DeserializedType<T, 'Edm.String'>;
  /**
   * Store.
   */
  declare store: DeserializedType<T, 'Edm.String'>;
  /**
   * Process Data.
   * @nullable
   */
  declare processData?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Completed.
   * @nullable
   */
  declare isCompleted?: NoYes | null;

  constructor(_entityApi: FiscalIntegrationProcessDatasApi<T>) {
    super(_entityApi);
  }
}

export interface FiscalIntegrationProcessDatasType<
  T extends DeSerializers = DefaultDeSerializers
> {
  terminal: DeserializedType<T, 'Edm.String'>;
  channel: DeserializedType<T, 'Edm.String'>;
  store: DeserializedType<T, 'Edm.String'>;
  processData?: DeserializedType<T, 'Edm.String'> | null;
  isCompleted?: NoYes | null;
}
