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
import type { PackDescriptionsApi } from './PackDescriptionsApi';
import { HmimPackCalculation } from './HmimPackCalculation';

/**
 * This class represents the entity "PackDescriptions" of service "d365_metadata".
 */
export class PackDescriptions<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PackDescriptionsType<T>
{
  /**
   * Technical entity name for PackDescriptions.
   */
  static override _entityName = 'PackDescriptions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PackDescriptions entity.
   */
  static _keys = ['PackCode'];
  /**
   * Pack Code.
   */
  declare packCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Calculation Uom.
   * @nullable
   */
  declare calculationUom?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Calculation.
   * @nullable
   */
  declare calculation?: HmimPackCalculation | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: PackDescriptionsApi<T>) {
    super(_entityApi);
  }
}

export interface PackDescriptionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  packCode: DeserializedType<T, 'Edm.String'>;
  calculationUom?: DeserializedType<T, 'Edm.String'> | null;
  calculation?: HmimPackCalculation | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
