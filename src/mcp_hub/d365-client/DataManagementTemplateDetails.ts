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
import type { DataManagementTemplateDetailsApi } from './DataManagementTemplateDetailsApi';
import { NoYes } from './NoYes';
import { NoYesError } from './NoYesError';
import {
  DataManagementTemplates,
  DataManagementTemplatesType
} from './DataManagementTemplates';

/**
 * This class represents the entity "DataManagementTemplateDetails" of service "d365_metadata".
 */
export class DataManagementTemplateDetails<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DataManagementTemplateDetailsType<T>
{
  /**
   * Technical entity name for DataManagementTemplateDetails.
   */
  static override _entityName = 'DataManagementTemplateDetails';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DataManagementTemplateDetails entity.
   */
  static _keys = ['TemplateId', 'EntityName'];
  /**
   * Template Id.
   */
  declare templateId: DeserializedType<T, 'Edm.String'>;
  /**
   * Entity Name.
   */
  declare entityName: DeserializedType<T, 'Edm.String'>;
  /**
   * Level In Execution Unit.
   */
  declare levelInExecutionUnit: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Fail Level On Error.
   * @nullable
   */
  declare failLevelOnError?: NoYes | null;
  /**
   * Validation Status.
   * @nullable
   */
  declare validationStatus?: NoYesError | null;
  /**
   * Fail Execution Unit On Error.
   * @nullable
   */
  declare failExecutionUnitOnError?: NoYes | null;
  /**
   * Execution Unit.
   */
  declare executionUnit: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Sequence In Level.
   */
  declare sequenceInLevel: DeserializedType<T, 'Edm.Int32'>;
  /**
   * One-to-one navigation property to the {@link DataManagementTemplates} entity.
   */
  declare definitionGroupTemplate?: DataManagementTemplates<T> | null;

  constructor(_entityApi: DataManagementTemplateDetailsApi<T>) {
    super(_entityApi);
  }
}

export interface DataManagementTemplateDetailsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  templateId: DeserializedType<T, 'Edm.String'>;
  entityName: DeserializedType<T, 'Edm.String'>;
  levelInExecutionUnit: DeserializedType<T, 'Edm.Int32'>;
  failLevelOnError?: NoYes | null;
  validationStatus?: NoYesError | null;
  failExecutionUnitOnError?: NoYes | null;
  executionUnit: DeserializedType<T, 'Edm.Int32'>;
  sequenceInLevel: DeserializedType<T, 'Edm.Int32'>;
  definitionGroupTemplate?: DataManagementTemplatesType<T> | null;
}
