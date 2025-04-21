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
import type { RAssetStandardsApi } from './RAssetStandardsApi';
import { NoYes } from './NoYes';
import { DimensionSets, DimensionSetsType } from './DimensionSets';

/**
 * This class represents the entity "RAssetStandards" of service "d365_metadata".
 */
export class RAssetStandards<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RAssetStandardsType<T>
{
  /**
   * Technical entity name for RAssetStandards.
   */
  static override _entityName = 'RAssetStandards';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RAssetStandards entity.
   */
  static _keys = ['dataAreaId', 'FAInventoryNumber', 'ValueModel'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Fa Inventory Number.
   */
  declare faInventoryNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Value Model.
   */
  declare valueModel: DeserializedType<T, 'Edm.String'>;
  /**
   * Depreciation Start Date.
   */
  declare depreciationStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Currency.
   * @nullable
   */
  declare currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dimension Of Rented Fa Display Value.
   * @nullable
   */
  declare dimensionOfRentedFaDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Scrap Value.
   */
  declare scrapValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Depreciation Subgroup.
   * @nullable
   */
  declare depreciationSubgroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Block Depreciation.
   * @nullable
   */
  declare blockDepreciation?: NoYes | null;
  /**
   * Putting Into Operation Amount.
   */
  declare puttingIntoOperationAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Depreciation Group.
   * @nullable
   */
  declare depreciationGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Depreciation.
   * @nullable
   */
  declare depreciation?: NoYes | null;
  /**
   * Default Financial Dimensions Display Value.
   * @nullable
   */
  declare defaultFinancialDimensionsDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Posting Profile.
   * @nullable
   */
  declare postingProfile?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Lending Posting Profile.
   * @nullable
   */
  declare lendingPostingProfile?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Depreciation Method.
   * @nullable
   */
  declare depreciationMethod?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Analysis Code.
   * @nullable
   */
  declare analysisCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;

  constructor(_entityApi: RAssetStandardsApi<T>) {
    super(_entityApi);
  }
}

export interface RAssetStandardsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  faInventoryNumber: DeserializedType<T, 'Edm.String'>;
  valueModel: DeserializedType<T, 'Edm.String'>;
  depreciationStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  dimensionOfRentedFaDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  scrapValue: DeserializedType<T, 'Edm.Decimal'>;
  depreciationSubgroup?: DeserializedType<T, 'Edm.String'> | null;
  blockDepreciation?: NoYes | null;
  puttingIntoOperationAmount: DeserializedType<T, 'Edm.Decimal'>;
  depreciationGroup?: DeserializedType<T, 'Edm.String'> | null;
  depreciation?: NoYes | null;
  defaultFinancialDimensionsDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  postingProfile?: DeserializedType<T, 'Edm.String'> | null;
  lendingPostingProfile?: DeserializedType<T, 'Edm.String'> | null;
  depreciationMethod?: DeserializedType<T, 'Edm.String'> | null;
  analysisCode?: DeserializedType<T, 'Edm.String'> | null;
  dimensionSet?: DimensionSetsType<T> | null;
}
