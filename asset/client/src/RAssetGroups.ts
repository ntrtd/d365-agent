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
import type { RAssetGroupsApi } from './RAssetGroupsApi';
import { RAssetInitDepStartDate } from './RAssetInitDepStartDate';

/**
 * This class represents the entity "RAssetGroups" of service "d365_metadata".
 */
export class RAssetGroups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RAssetGroupsType<T>
{
  /**
   * Technical entity name for RAssetGroups.
   */
  static override _entityName = 'RAssetGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RAssetGroups entity.
   */
  static _keys = ['dataAreaId', 'DepreciationGroup'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Depreciation Group.
   */
  declare depreciationGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Year Rate.
   */
  declare yearRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Minimal Depreciation.
   */
  declare minimalDepreciation: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Depreciation Method.
   * @nullable
   */
  declare depreciationMethod?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Value Model.
   * @nullable
   */
  declare valueModel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Depreciation Start Date.
   * @nullable
   */
  declare depreciationStartDate?: RAssetInitDepStartDate | null;
  /**
   * Depreciation Bonus.
   */
  declare depreciationBonus: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Lifetime.
   */
  declare lifetime: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: RAssetGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface RAssetGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  depreciationGroup: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  yearRate: DeserializedType<T, 'Edm.Decimal'>;
  minimalDepreciation: DeserializedType<T, 'Edm.Decimal'>;
  depreciationMethod?: DeserializedType<T, 'Edm.String'> | null;
  valueModel?: DeserializedType<T, 'Edm.String'> | null;
  depreciationStartDate?: RAssetInitDepStartDate | null;
  depreciationBonus: DeserializedType<T, 'Edm.Decimal'>;
  lifetime: DeserializedType<T, 'Edm.Int32'>;
}
