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
import type { ProcessingActionsApi } from './ProcessingActionsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "ProcessingActions" of service "d365_metadata".
 */
export class ProcessingActions<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProcessingActionsType<T>
{
  /**
   * Technical entity name for ProcessingActions.
   */
  static override _entityName = 'ProcessingActions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProcessingActions entity.
   */
  static _keys = ['dataAreaId', 'Processing', 'Action'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Processing.
   */
  declare processing: DeserializedType<T, 'Edm.String'>;
  /**
   * Action.
   */
  declare action: DeserializedType<T, 'Edm.String'>;
  /**
   * Use Parameters.
   * @nullable
   */
  declare useParameters?: NoYes | null;
  /**
   * Run Separately.
   * @nullable
   */
  declare runSeparately?: NoYes | null;
  /**
   * Execution Order.
   */
  declare executionOrder: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Sequence Id.
   * @nullable
   */
  declare sequenceId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ProcessingActionsApi<T>) {
    super(_entityApi);
  }
}

export interface ProcessingActionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  processing: DeserializedType<T, 'Edm.String'>;
  action: DeserializedType<T, 'Edm.String'>;
  useParameters?: NoYes | null;
  runSeparately?: NoYes | null;
  executionOrder: DeserializedType<T, 'Edm.Int32'>;
  sequenceId?: DeserializedType<T, 'Edm.String'> | null;
}
