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
import type { SysMonDatasApi } from './SysMonDatasApi';

/**
 * This class represents the entity "SysMonDatas" of service "d365_metadata".
 */
export class SysMonDatas<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SysMonDatasType<T>
{
  /**
   * Technical entity name for SysMonDatas.
   */
  static override _entityName = 'SysMonDatas';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SysMonDatas entity.
   */
  static _keys = ['Description'];
  /**
   * Description.
   */
  declare description: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: SysMonDatasApi<T>) {
    super(_entityApi);
  }
}

export interface SysMonDatasType<
  T extends DeSerializers = DefaultDeSerializers
> {
  description: DeserializedType<T, 'Edm.String'>;
}
