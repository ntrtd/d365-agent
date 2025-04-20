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
import type { PriceTolerancesApi } from './PriceTolerancesApi';
import { TableGroupAll } from './TableGroupAll';

/**
 * This class represents the entity "PriceTolerances" of service "d365_metadata".
 */
export class PriceTolerances<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PriceTolerancesType<T>
{
  /**
   * Technical entity name for PriceTolerances.
   */
  static override _entityName = 'PriceTolerances';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PriceTolerances entity.
   */
  static _keys = [
    'dataAreaId',
    'ItemCode',
    'ItemRelation',
    'AccountCode',
    'AccountRelation'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Code.
   * @nullable
   */
  declare itemCode?: TableGroupAll | null;
  /**
   * Item Relation.
   */
  declare itemRelation: DeserializedType<T, 'Edm.String'>;
  /**
   * Account Code.
   * @nullable
   */
  declare accountCode?: TableGroupAll | null;
  /**
   * Account Relation.
   */
  declare accountRelation: DeserializedType<T, 'Edm.String'>;
  /**
   * Unit Price Tolerance Percentage.
   */
  declare unitPriceTolerancePercentage: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: PriceTolerancesApi<T>) {
    super(_entityApi);
  }
}

export interface PriceTolerancesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  itemCode?: TableGroupAll | null;
  itemRelation: DeserializedType<T, 'Edm.String'>;
  accountCode?: TableGroupAll | null;
  accountRelation: DeserializedType<T, 'Edm.String'>;
  unitPriceTolerancePercentage: DeserializedType<T, 'Edm.Decimal'>;
}
