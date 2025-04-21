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
import type { RrgTransOperationsTax_RuApi } from './RrgTransOperationsTax_RuApi';
import { OperationsTax } from './OperationsTax';

/**
 * This class represents the entity "RRGTransOperationsTax_RU" of service "d365_metadata".
 */
export class RrgTransOperationsTax_Ru<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RrgTransOperationsTax_RuType<T>
{
  /**
   * Technical entity name for RrgTransOperationsTax_Ru.
   */
  static override _entityName = 'RRGTransOperationsTax_RU';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RrgTransOperationsTax_Ru entity.
   */
  static _keys = ['dataAreaId', 'OperationsTax', 'RefTableName', 'RefLineId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Operations Tax.
   * @nullable
   */
  declare operationsTax?: OperationsTax | null;
  /**
   * Ref Table Name.
   */
  declare refTableName: DeserializedType<T, 'Edm.String'>;
  /**
   * Ref Line Id.
   */
  declare refLineId: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: RrgTransOperationsTax_RuApi<T>) {
    super(_entityApi);
  }
}

export interface RrgTransOperationsTax_RuType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  operationsTax?: OperationsTax | null;
  refTableName: DeserializedType<T, 'Edm.String'>;
  refLineId: DeserializedType<T, 'Edm.String'>;
}
