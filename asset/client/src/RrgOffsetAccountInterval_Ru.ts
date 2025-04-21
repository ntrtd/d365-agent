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
import type { RrgOffsetAccountInterval_RuApi } from './RrgOffsetAccountInterval_RuApi';

/**
 * This class represents the entity "RRGOffsetAccountInterval_RU" of service "d365_metadata".
 */
export class RrgOffsetAccountInterval_Ru<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RrgOffsetAccountInterval_RuType<T>
{
  /**
   * Technical entity name for RrgOffsetAccountInterval_Ru.
   */
  static override _entityName = 'RRGOffsetAccountInterval_RU';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RrgOffsetAccountInterval_Ru entity.
   */
  static _keys = [
    'dataAreaId',
    'FromLedgerDimensionDisplayValue',
    'ToLedgerDimensionDisplayValue',
    'OperationLineId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * From Ledger Dimension Display Value.
   */
  declare fromLedgerDimensionDisplayValue: DeserializedType<T, 'Edm.String'>;
  /**
   * To Ledger Dimension Display Value.
   */
  declare toLedgerDimensionDisplayValue: DeserializedType<T, 'Edm.String'>;
  /**
   * Operation Line Id.
   */
  declare operationLineId: DeserializedType<T, 'Edm.Guid'>;

  constructor(_entityApi: RrgOffsetAccountInterval_RuApi<T>) {
    super(_entityApi);
  }
}

export interface RrgOffsetAccountInterval_RuType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  fromLedgerDimensionDisplayValue: DeserializedType<T, 'Edm.String'>;
  toLedgerDimensionDisplayValue: DeserializedType<T, 'Edm.String'>;
  operationLineId: DeserializedType<T, 'Edm.Guid'>;
}
