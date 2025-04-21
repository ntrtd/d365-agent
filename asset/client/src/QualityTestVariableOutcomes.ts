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
import type { QualityTestVariableOutcomesApi } from './QualityTestVariableOutcomesApi';
import { InventTestOutcomeStatus } from './InventTestOutcomeStatus';

/**
 * This class represents the entity "QualityTestVariableOutcomes" of service "d365_metadata".
 */
export class QualityTestVariableOutcomes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements QualityTestVariableOutcomesType<T>
{
  /**
   * Technical entity name for QualityTestVariableOutcomes.
   */
  static override _entityName = 'QualityTestVariableOutcomes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the QualityTestVariableOutcomes entity.
   */
  static _keys = ['dataAreaId', 'QualityTestVariableId', 'OutcomeId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Quality Test Variable Id.
   */
  declare qualityTestVariableId: DeserializedType<T, 'Edm.String'>;
  /**
   * Outcome Id.
   */
  declare outcomeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Outcome Status.
   * @nullable
   */
  declare outcomeStatus?: InventTestOutcomeStatus | null;
  /**
   * Outcome Description.
   * @nullable
   */
  declare outcomeDescription?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: QualityTestVariableOutcomesApi<T>) {
    super(_entityApi);
  }
}

export interface QualityTestVariableOutcomesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  qualityTestVariableId: DeserializedType<T, 'Edm.String'>;
  outcomeId: DeserializedType<T, 'Edm.String'>;
  outcomeStatus?: InventTestOutcomeStatus | null;
  outcomeDescription?: DeserializedType<T, 'Edm.String'> | null;
}
