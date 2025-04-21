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
import type { ProcessStagesApi } from './ProcessStagesApi';
import { BusinessProcessType } from './BusinessProcessType';

/**
 * This class represents the entity "ProcessStages" of service "d365_metadata".
 */
export class ProcessStages<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProcessStagesType<T>
{
  /**
   * Technical entity name for ProcessStages.
   */
  static override _entityName = 'ProcessStages';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProcessStages entity.
   */
  static _keys = ['dataAreaId', 'ProcessType', 'Name'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Process Type.
   * @nullable
   */
  declare processType?: BusinessProcessType | null;
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Sequence Number.
   */
  declare sequenceNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ProcessStagesApi<T>) {
    super(_entityApi);
  }
}

export interface ProcessStagesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  processType?: BusinessProcessType | null;
  name: DeserializedType<T, 'Edm.String'>;
  sequenceNumber: DeserializedType<T, 'Edm.Decimal'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
