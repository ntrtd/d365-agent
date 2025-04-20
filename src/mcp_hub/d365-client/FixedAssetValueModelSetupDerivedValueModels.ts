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
import type { FixedAssetValueModelSetupDerivedValueModelsApi } from './FixedAssetValueModelSetupDerivedValueModelsApi';
import { AssetTransType } from './AssetTransType';
import { ValueModelSetups, ValueModelSetupsType } from './ValueModelSetups';

/**
 * This class represents the entity "FixedAssetValueModelSetupDerivedValueModels" of service "d365_metadata".
 */
export class FixedAssetValueModelSetupDerivedValueModels<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements FixedAssetValueModelSetupDerivedValueModelsType<T>
{
  /**
   * Technical entity name for FixedAssetValueModelSetupDerivedValueModels.
   */
  static override _entityName = 'FixedAssetValueModelSetupDerivedValueModels';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FixedAssetValueModelSetupDerivedValueModels entity.
   */
  static _keys = [
    'dataAreaId',
    'ValueModelId',
    'DerivedValueModelId',
    'TransactionType'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Value Model Id.
   */
  declare valueModelId: DeserializedType<T, 'Edm.String'>;
  /**
   * Derived Value Model Id.
   */
  declare derivedValueModelId: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Type.
   * @nullable
   */
  declare transactionType?: AssetTransType | null;
  /**
   * One-to-one navigation property to the {@link ValueModelSetups} entity.
   */
  declare valueModelSetupDerivedValueModel?: ValueModelSetups<T> | null;
  /**
   * One-to-one navigation property to the {@link ValueModelSetups} entity.
   */
  declare valueModelSetupValueModel?: ValueModelSetups<T> | null;

  constructor(_entityApi: FixedAssetValueModelSetupDerivedValueModelsApi<T>) {
    super(_entityApi);
  }
}

export interface FixedAssetValueModelSetupDerivedValueModelsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  valueModelId: DeserializedType<T, 'Edm.String'>;
  derivedValueModelId: DeserializedType<T, 'Edm.String'>;
  transactionType?: AssetTransType | null;
  valueModelSetupDerivedValueModel?: ValueModelSetupsType<T> | null;
  valueModelSetupValueModel?: ValueModelSetupsType<T> | null;
}
