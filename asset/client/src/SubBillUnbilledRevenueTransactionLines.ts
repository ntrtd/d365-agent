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
import type { SubBillUnbilledRevenueTransactionLinesApi } from './SubBillUnbilledRevenueTransactionLinesApi';
import { NoYes } from './NoYes';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';

/**
 * This class represents the entity "SubBillUnbilledRevenueTransactionLines" of service "d365_metadata".
 */
export class SubBillUnbilledRevenueTransactionLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SubBillUnbilledRevenueTransactionLinesType<T>
{
  /**
   * Technical entity name for SubBillUnbilledRevenueTransactionLines.
   */
  static override _entityName = 'SubBillUnbilledRevenueTransactionLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SubBillUnbilledRevenueTransactionLines entity.
   */
  static _keys = ['dataAreaId', 'ScheduleNumber', 'LineNum'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Schedule Number.
   */
  declare scheduleNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Num.
   */
  declare lineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Unbilled Short Term Discount Account Display Value.
   * @nullable
   */
  declare unbilledShortTermDiscountAccountDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Unbilled Discount Account.
   * @nullable
   */
  declare unbilledDiscountAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unbilled Short Term Revenue Account Display Value.
   * @nullable
   */
  declare unbilledShortTermRevenueAccountDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Unbilled Deferred Discount Account Display Value.
   * @nullable
   */
  declare unbilledDeferredDiscountAccountDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Unbilled Discount Offset Account.
   * @nullable
   */
  declare unbilledDiscountOffsetAccount?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Unbilled Revenue.
   * @nullable
   */
  declare unbilledRevenue?: NoYes | null;
  /**
   * Unbilled Revenue Account.
   * @nullable
   */
  declare unbilledRevenueAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unbilled Revenue Offset Account.
   * @nullable
   */
  declare unbilledRevenueOffsetAccount?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare unbilledDiscountAccountIdCombination?: DimensionCombinations<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare unbilledRevenueAccountIdCombination?: DimensionCombinations<T> | null;

  constructor(_entityApi: SubBillUnbilledRevenueTransactionLinesApi<T>) {
    super(_entityApi);
  }
}

export interface SubBillUnbilledRevenueTransactionLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  scheduleNumber: DeserializedType<T, 'Edm.String'>;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  unbilledShortTermDiscountAccountDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  unbilledDiscountAccount?: DeserializedType<T, 'Edm.String'> | null;
  unbilledShortTermRevenueAccountDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  unbilledDeferredDiscountAccountDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  unbilledDiscountOffsetAccount?: DeserializedType<T, 'Edm.String'> | null;
  unbilledRevenue?: NoYes | null;
  unbilledRevenueAccount?: DeserializedType<T, 'Edm.String'> | null;
  unbilledRevenueOffsetAccount?: DeserializedType<T, 'Edm.String'> | null;
  unbilledDiscountAccountIdCombination?: DimensionCombinationsType<T> | null;
  unbilledRevenueAccountIdCombination?: DimensionCombinationsType<T> | null;
}
