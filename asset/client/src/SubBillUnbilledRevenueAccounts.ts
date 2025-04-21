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
import type { SubBillUnbilledRevenueAccountsApi } from './SubBillUnbilledRevenueAccountsApi';
import { InventPostingItemCode } from './InventPostingItemCode';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';

/**
 * This class represents the entity "SubBillUnbilledRevenueAccountsCollection" of service "d365_metadata".
 */
export class SubBillUnbilledRevenueAccounts<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SubBillUnbilledRevenueAccountsType<T>
{
  /**
   * Technical entity name for SubBillUnbilledRevenueAccounts.
   */
  static override _entityName = 'SubBillUnbilledRevenueAccountsCollection';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SubBillUnbilledRevenueAccounts entity.
   */
  static _keys = ['dataAreaId', 'ItemCode', 'ItemRelation'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Code.
   * @nullable
   */
  declare itemCode?: InventPostingItemCode | null;
  /**
   * Item Relation.
   */
  declare itemRelation: DeserializedType<T, 'Edm.String'>;
  /**
   * Short Term Unbilled Revenue Account.
   * @nullable
   */
  declare shortTermUnbilledRevenueAccount?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Unbilled Discount Account.
   * @nullable
   */
  declare unbilledDiscountAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unbilled Discount Offset Account.
   * @nullable
   */
  declare unbilledDiscountOffsetAccount?: DeserializedType<
    T,
    'Edm.String'
  > | null;
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
   * Short Term Unbilled Discount Account.
   * @nullable
   */
  declare shortTermUnbilledDiscountAccount?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare unbilledDiscountAccountCombination?: DimensionCombinations<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare shortTermUnbilledDiscountAccountCombination?: DimensionCombinations<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare unbilledRevenueOffsetAccountCombination?: DimensionCombinations<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare shortTermUnbilledRevenueAccountCombination?: DimensionCombinations<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare unbilledRevenueAccountCombination?: DimensionCombinations<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare unbilledDiscountOffsetAccountCombination?: DimensionCombinations<T> | null;

  constructor(_entityApi: SubBillUnbilledRevenueAccountsApi<T>) {
    super(_entityApi);
  }
}

export interface SubBillUnbilledRevenueAccountsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  itemCode?: InventPostingItemCode | null;
  itemRelation: DeserializedType<T, 'Edm.String'>;
  shortTermUnbilledRevenueAccount?: DeserializedType<T, 'Edm.String'> | null;
  unbilledDiscountAccount?: DeserializedType<T, 'Edm.String'> | null;
  unbilledDiscountOffsetAccount?: DeserializedType<T, 'Edm.String'> | null;
  unbilledRevenueAccount?: DeserializedType<T, 'Edm.String'> | null;
  unbilledRevenueOffsetAccount?: DeserializedType<T, 'Edm.String'> | null;
  shortTermUnbilledDiscountAccount?: DeserializedType<T, 'Edm.String'> | null;
  unbilledDiscountAccountCombination?: DimensionCombinationsType<T> | null;
  shortTermUnbilledDiscountAccountCombination?: DimensionCombinationsType<T> | null;
  unbilledRevenueOffsetAccountCombination?: DimensionCombinationsType<T> | null;
  shortTermUnbilledRevenueAccountCombination?: DimensionCombinationsType<T> | null;
  unbilledRevenueAccountCombination?: DimensionCombinationsType<T> | null;
  unbilledDiscountOffsetAccountCombination?: DimensionCombinationsType<T> | null;
}
