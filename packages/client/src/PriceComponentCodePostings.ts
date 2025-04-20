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
import type { PriceComponentCodePostingsApi } from './PriceComponentCodePostingsApi';
import { TableGroupAll } from './TableGroupAll';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';

/**
 * This class represents the entity "PriceComponentCodePostings" of service "d365_metadata".
 */
export class PriceComponentCodePostings<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PriceComponentCodePostingsType<T>
{
  /**
   * Technical entity name for PriceComponentCodePostings.
   */
  static override _entityName = 'PriceComponentCodePostings';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PriceComponentCodePostings entity.
   */
  static _keys = [
    'dataAreaId',
    'GUPPriceComponentCodePostingProfile_Name',
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
   * Gup Price Component Code Posting Profile Name.
   */
  declare gupPriceComponentCodePostingProfileName: DeserializedType<
    T,
    'Edm.String'
  >;
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
   * Ledger Dimension Display Value.
   * @nullable
   */
  declare ledgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;

  constructor(_entityApi: PriceComponentCodePostingsApi<T>) {
    super(_entityApi);
  }
}

export interface PriceComponentCodePostingsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  gupPriceComponentCodePostingProfileName: DeserializedType<T, 'Edm.String'>;
  itemCode?: TableGroupAll | null;
  itemRelation: DeserializedType<T, 'Edm.String'>;
  accountCode?: TableGroupAll | null;
  accountRelation: DeserializedType<T, 'Edm.String'>;
  ledgerDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  dimensionCombination?: DimensionCombinationsType<T> | null;
}
