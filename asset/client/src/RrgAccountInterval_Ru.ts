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
import type { RrgAccountInterval_RuApi } from './RrgAccountInterval_RuApi';

/**
 * This class represents the entity "RRGAccountInterval_RU" of service "d365_metadata".
 */
export class RrgAccountInterval_Ru<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RrgAccountInterval_RuType<T>
{
  /**
   * Technical entity name for RrgAccountInterval_Ru.
   */
  static override _entityName = 'RRGAccountInterval_RU';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RrgAccountInterval_Ru entity.
   */
  static _keys = [
    'dataAreaId',
    'FromLedgerDimensionAccountIdDisplayValue',
    'ToLedgerDimensionAccountIdDisplayValue',
    'OperationLineId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * From Ledger Dimension Account Id Display Value.
   */
  declare fromLedgerDimensionAccountIdDisplayValue: DeserializedType<
    T,
    'Edm.String'
  >;
  /**
   * To Ledger Dimension Account Id Display Value.
   */
  declare toLedgerDimensionAccountIdDisplayValue: DeserializedType<
    T,
    'Edm.String'
  >;
  /**
   * Operation Line Id.
   */
  declare operationLineId: DeserializedType<T, 'Edm.Guid'>;

  constructor(_entityApi: RrgAccountInterval_RuApi<T>) {
    super(_entityApi);
  }
}

export interface RrgAccountInterval_RuType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  fromLedgerDimensionAccountIdDisplayValue: DeserializedType<T, 'Edm.String'>;
  toLedgerDimensionAccountIdDisplayValue: DeserializedType<T, 'Edm.String'>;
  operationLineId: DeserializedType<T, 'Edm.Guid'>;
}
