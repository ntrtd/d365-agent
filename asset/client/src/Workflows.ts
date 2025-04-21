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
import type { WorkflowsApi } from './WorkflowsApi';
import { ModuleAxapta } from './ModuleAxapta';
import { WorkflowAssociationType } from './WorkflowAssociationType';
import { NoYes } from './NoYes';
import { WorkflowConfigurationType } from './WorkflowConfigurationType';

/**
 * This class represents the entity "Workflows" of service "d365_metadata".
 */
export class Workflows<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements WorkflowsType<T>
{
  /**
   * Technical entity name for Workflows.
   */
  static override _entityName = 'Workflows';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Workflows entity.
   */
  static _keys = ['SequenceNumber'];
  /**
   * Sequence Number.
   */
  declare sequenceNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Module.
   * @nullable
   */
  declare module?: ModuleAxapta | null;
  /**
   * Association Type.
   * @nullable
   */
  declare associationType?: WorkflowAssociationType | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Data Area.
   * @nullable
   */
  declare dataArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Configuration.
   * @nullable
   */
  declare defaultConfiguration?: NoYes | null;
  /**
   * Type.
   * @nullable
   */
  declare type?: WorkflowConfigurationType | null;
  /**
   * Category Name.
   * @nullable
   */
  declare categoryName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Template Name.
   * @nullable
   */
  declare templateName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document Table Name.
   * @nullable
   */
  declare documentTableName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: WorkflowsApi<T>) {
    super(_entityApi);
  }
}

export interface WorkflowsType<T extends DeSerializers = DefaultDeSerializers> {
  sequenceNumber: DeserializedType<T, 'Edm.String'>;
  module?: ModuleAxapta | null;
  associationType?: WorkflowAssociationType | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  dataArea?: DeserializedType<T, 'Edm.String'> | null;
  defaultConfiguration?: NoYes | null;
  type?: WorkflowConfigurationType | null;
  categoryName?: DeserializedType<T, 'Edm.String'> | null;
  templateName?: DeserializedType<T, 'Edm.String'> | null;
  documentTableName?: DeserializedType<T, 'Edm.String'> | null;
}
