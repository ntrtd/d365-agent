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
import type { RrgAccountInterval_Ruv2Api } from './RrgAccountInterval_Ruv2Api';

/**
 * This class represents the entity "RRGAccountInterval_RUV2" of service "d365_metadata".
 */
export class RrgAccountInterval_Ruv2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RrgAccountInterval_Ruv2Type<T>
{
  /**
   * Technical entity name for RrgAccountInterval_Ruv2.
   */
  static override _entityName = 'RRGAccountInterval_RUV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RrgAccountInterval_Ruv2 entity.
   */
  static _keys = [
    'dataAreaId',
    'FromMainAccountId',
    'ToMainAccountId',
    'OperationLineId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * From Main Account Id.
   */
  declare fromMainAccountId: DeserializedType<T, 'Edm.String'>;
  /**
   * To Main Account Id.
   */
  declare toMainAccountId: DeserializedType<T, 'Edm.String'>;
  /**
   * Operation Line Id.
   */
  declare operationLineId: DeserializedType<T, 'Edm.Guid'>;

  constructor(_entityApi: RrgAccountInterval_Ruv2Api<T>) {
    super(_entityApi);
  }
}

export interface RrgAccountInterval_Ruv2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  fromMainAccountId: DeserializedType<T, 'Edm.String'>;
  toMainAccountId: DeserializedType<T, 'Edm.String'>;
  operationLineId: DeserializedType<T, 'Edm.Guid'>;
}
