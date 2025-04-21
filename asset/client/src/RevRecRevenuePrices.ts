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
import type { RevRecRevenuePricesApi } from './RevRecRevenuePricesApi';
import { TableGroupAll } from './TableGroupAll';
import { RevRecAmountPercentList } from './RevRecAmountPercentList';

/**
 * This class represents the entity "RevRecRevenuePrices" of service "d365_metadata".
 */
export class RevRecRevenuePrices<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RevRecRevenuePricesType<T>
{
  /**
   * Technical entity name for RevRecRevenuePrices.
   */
  static override _entityName = 'RevRecRevenuePrices';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RevRecRevenuePrices entity.
   */
  static _keys = [
    'dataAreaId',
    'ToDate',
    'FromDate',
    'Currency',
    'AccountRelation',
    'AccountCode',
    'ItemRelation',
    'ItemCode'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * To Date.
   */
  declare toDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * From Date.
   */
  declare fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Currency.
   */
  declare currency: DeserializedType<T, 'Edm.String'>;
  /**
   * Account Relation.
   */
  declare accountRelation: DeserializedType<T, 'Edm.String'>;
  /**
   * Account Code.
   * @nullable
   */
  declare accountCode?: TableGroupAll | null;
  /**
   * Item Relation.
   */
  declare itemRelation: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Code.
   * @nullable
   */
  declare itemCode?: TableGroupAll | null;
  /**
   * Amount Percent List.
   * @nullable
   */
  declare amountPercentList?: RevRecAmountPercentList | null;
  /**
   * Allocation Price.
   */
  declare allocationPrice: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: RevRecRevenuePricesApi<T>) {
    super(_entityApi);
  }
}

export interface RevRecRevenuePricesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  toDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  currency: DeserializedType<T, 'Edm.String'>;
  accountRelation: DeserializedType<T, 'Edm.String'>;
  accountCode?: TableGroupAll | null;
  itemRelation: DeserializedType<T, 'Edm.String'>;
  itemCode?: TableGroupAll | null;
  amountPercentList?: RevRecAmountPercentList | null;
  allocationPrice: DeserializedType<T, 'Edm.Decimal'>;
}
