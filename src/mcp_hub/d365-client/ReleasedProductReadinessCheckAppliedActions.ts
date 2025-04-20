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
import type { ReleasedProductReadinessCheckAppliedActionsApi } from './ReleasedProductReadinessCheckAppliedActionsApi';
import { EngChgReadinessActions } from './EngChgReadinessActions';

/**
 * This class represents the entity "ReleasedProductReadinessCheckAppliedActions" of service "d365_metadata".
 */
export class ReleasedProductReadinessCheckAppliedActions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ReleasedProductReadinessCheckAppliedActionsType<T>
{
  /**
   * Technical entity name for ReleasedProductReadinessCheckAppliedActions.
   */
  static override _entityName = 'ReleasedProductReadinessCheckAppliedActions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ReleasedProductReadinessCheckAppliedActions entity.
   */
  static _keys = [
    'dataAreaId',
    'ReleasedProductReadinessCheckAppliedActionRecordId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Released Product Readiness Check Applied Action Record Id.
   */
  declare releasedProductReadinessCheckAppliedActionRecordId: DeserializedType<
    T,
    'Edm.Int64'
  >;
  /**
   * Applied Action.
   * @nullable
   */
  declare appliedAction?: EngChgReadinessActions | null;
  /**
   * Action Log.
   * @nullable
   */
  declare actionLog?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Released Product Readiness Check Record Id.
   */
  declare releasedProductReadinessCheckRecordId: DeserializedType<
    T,
    'Edm.Int64'
  >;

  constructor(_entityApi: ReleasedProductReadinessCheckAppliedActionsApi<T>) {
    super(_entityApi);
  }
}

export interface ReleasedProductReadinessCheckAppliedActionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  releasedProductReadinessCheckAppliedActionRecordId: DeserializedType<
    T,
    'Edm.Int64'
  >;
  appliedAction?: EngChgReadinessActions | null;
  actionLog?: DeserializedType<T, 'Edm.String'> | null;
  releasedProductReadinessCheckRecordId: DeserializedType<T, 'Edm.Int64'>;
}
