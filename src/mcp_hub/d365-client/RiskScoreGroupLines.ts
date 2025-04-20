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
import type { RiskScoreGroupLinesApi } from './RiskScoreGroupLinesApi';

/**
 * This class represents the entity "RiskScoreGroupLines" of service "d365_metadata".
 */
export class RiskScoreGroupLines<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RiskScoreGroupLinesType<T>
{
  /**
   * Technical entity name for RiskScoreGroupLines.
   */
  static override _entityName = 'RiskScoreGroupLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RiskScoreGroupLines entity.
   */
  static _keys = ['dataAreaId', 'GroupId', 'RangeFrom', 'RangeTo', 'Value'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Group Id.
   */
  declare groupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Range From.
   */
  declare rangeFrom: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Range To.
   */
  declare rangeTo: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Value.
   */
  declare value: DeserializedType<T, 'Edm.String'>;
  /**
   * Score.
   */
  declare score: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: RiskScoreGroupLinesApi<T>) {
    super(_entityApi);
  }
}

export interface RiskScoreGroupLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  groupId: DeserializedType<T, 'Edm.String'>;
  rangeFrom: DeserializedType<T, 'Edm.Decimal'>;
  rangeTo: DeserializedType<T, 'Edm.Decimal'>;
  value: DeserializedType<T, 'Edm.String'>;
  score: DeserializedType<T, 'Edm.Decimal'>;
}
