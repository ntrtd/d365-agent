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
import type { RrgTransType_RuApi } from './RrgTransType_RuApi';
import { LedgerTransType } from './LedgerTransType';

/**
 * This class represents the entity "RRGTransType_RU" of service "d365_metadata".
 */
export class RrgTransType_Ru<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RrgTransType_RuType<T>
{
  /**
   * Technical entity name for RrgTransType_Ru.
   */
  static override _entityName = 'RRGTransType_RU';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RrgTransType_Ru entity.
   */
  static _keys = ['dataAreaId', 'TransType', 'RefTableName', 'RefLineId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Trans Type.
   * @nullable
   */
  declare transType?: LedgerTransType | null;
  /**
   * Ref Table Name.
   */
  declare refTableName: DeserializedType<T, 'Edm.String'>;
  /**
   * Ref Line Id.
   */
  declare refLineId: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: RrgTransType_RuApi<T>) {
    super(_entityApi);
  }
}

export interface RrgTransType_RuType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  transType?: LedgerTransType | null;
  refTableName: DeserializedType<T, 'Edm.String'>;
  refLineId: DeserializedType<T, 'Edm.String'>;
}
