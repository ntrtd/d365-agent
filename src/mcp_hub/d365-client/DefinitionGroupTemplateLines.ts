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
import type { DefinitionGroupTemplateLinesApi } from './DefinitionGroupTemplateLinesApi';
import { DmfModule } from './DmfModule';
import { NoYes } from './NoYes';
import { EntityCategory } from './EntityCategory';
import { NoYesError } from './NoYesError';
import {
  DefinitionGroupTemplateHeaders,
  DefinitionGroupTemplateHeadersType
} from './DefinitionGroupTemplateHeaders';

/**
 * This class represents the entity "DefinitionGroupTemplateLines" of service "d365_metadata".
 */
export class DefinitionGroupTemplateLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DefinitionGroupTemplateLinesType<T>
{
  /**
   * Technical entity name for DefinitionGroupTemplateLines.
   */
  static override _entityName = 'DefinitionGroupTemplateLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DefinitionGroupTemplateLines entity.
   */
  static _keys = ['TemplateId', 'Entity'];
  /**
   * Template Id.
   */
  declare templateId: DeserializedType<T, 'Edm.String'>;
  /**
   * Entity.
   */
  declare entity: DeserializedType<T, 'Edm.String'>;
  /**
   * Sys Module.
   * @nullable
   */
  declare sysModule?: DmfModule | null;
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
   * Sequence.
   */
  declare sequence: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Entity Category.
   * @nullable
   */
  declare entityCategory?: EntityCategory | null;
  /**
   * Validation Status.
   * @nullable
   */
  declare validationStatus?: NoYesError | null;
  /**
   * Tags.
   * @nullable
   */
  declare tags?: DeserializedType<T, 'Edm.String'> | null;
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
   * One-to-many navigation property to the {@link DefinitionGroupTemplateHeaders} entity.
   */
  declare definitionGroupTemplateHeader: DefinitionGroupTemplateHeaders<T>[];
  /**
   * One-to-one navigation property to the {@link DefinitionGroupTemplateHeaders} entity.
   */
  declare dmfDefinitionGroupTemplateHeaderRole?: DefinitionGroupTemplateHeaders<T> | null;

  constructor(_entityApi: DefinitionGroupTemplateLinesApi<T>) {
    super(_entityApi);
  }
}

export interface DefinitionGroupTemplateLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  templateId: DeserializedType<T, 'Edm.String'>;
  entity: DeserializedType<T, 'Edm.String'>;
  sysModule?: DmfModule | null;
  levelInExecutionUnit: DeserializedType<T, 'Edm.Int32'>;
  failLevelOnError?: NoYes | null;
  sequence: DeserializedType<T, 'Edm.Int32'>;
  entityCategory?: EntityCategory | null;
  validationStatus?: NoYesError | null;
  tags?: DeserializedType<T, 'Edm.String'> | null;
  failExecutionUnitOnError?: NoYes | null;
  executionUnit: DeserializedType<T, 'Edm.Int32'>;
  definitionGroupTemplateHeader: DefinitionGroupTemplateHeadersType<T>[];
  dmfDefinitionGroupTemplateHeaderRole?: DefinitionGroupTemplateHeadersType<T> | null;
}
