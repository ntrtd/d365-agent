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
import type { ImpairmentCashGeneratingUnitsApi } from './ImpairmentCashGeneratingUnitsApi';
import { AssetImpairmentCguAssetAllocBasisJp } from './AssetImpairmentCguAssetAllocBasisJp';
import {
  ImpairmentCashGeneratingUnitGroups,
  ImpairmentCashGeneratingUnitGroupsType
} from './ImpairmentCashGeneratingUnitGroups';

/**
 * This class represents the entity "ImpairmentCashGeneratingUnits" of service "d365_metadata".
 */
export class ImpairmentCashGeneratingUnits<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ImpairmentCashGeneratingUnitsType<T>
{
  /**
   * Technical entity name for ImpairmentCashGeneratingUnits.
   */
  static override _entityName = 'ImpairmentCashGeneratingUnits';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ImpairmentCashGeneratingUnits entity.
   */
  static _keys = ['dataAreaId', 'CashGeneratingUnitNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Cash Generating Unit Number.
   */
  declare cashGeneratingUnitNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Impairment Allocation Basis.
   * @nullable
   */
  declare impairmentAllocationBasis?: AssetImpairmentCguAssetAllocBasisJp | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cgu Group Name.
   * @nullable
   */
  declare cguGroupName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Undiscounted Cash Flow Last Updated Date.
   */
  declare undiscountedCashFlowLastUpdatedDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Undiscounted Cash Flow.
   */
  declare undiscountedCashFlow: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Recoverable Amount.
   */
  declare recoverableAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Recoverable Amount Last Updated Date.
   */
  declare recoverableAmountLastUpdatedDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * One-to-one navigation property to the {@link ImpairmentCashGeneratingUnitGroups} entity.
   */
  declare impairmentCashGeneratingUnitGroup?: ImpairmentCashGeneratingUnitGroups<T> | null;

  constructor(_entityApi: ImpairmentCashGeneratingUnitsApi<T>) {
    super(_entityApi);
  }
}

export interface ImpairmentCashGeneratingUnitsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  cashGeneratingUnitNumber: DeserializedType<T, 'Edm.String'>;
  impairmentAllocationBasis?: AssetImpairmentCguAssetAllocBasisJp | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  cguGroupName?: DeserializedType<T, 'Edm.String'> | null;
  undiscountedCashFlowLastUpdatedDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  undiscountedCashFlow: DeserializedType<T, 'Edm.Decimal'>;
  recoverableAmount: DeserializedType<T, 'Edm.Decimal'>;
  recoverableAmountLastUpdatedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  impairmentCashGeneratingUnitGroup?: ImpairmentCashGeneratingUnitGroupsType<T> | null;
}
