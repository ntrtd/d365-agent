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
import type { DefinitionGroupTemplateHeadersApi } from './DefinitionGroupTemplateHeadersApi';
import { DmfDefinitionGroupTemplateStatus } from './DmfDefinitionGroupTemplateStatus';
import {
  DefinitionGroupTemplateLines,
  DefinitionGroupTemplateLinesType
} from './DefinitionGroupTemplateLines';

/**
 * This class represents the entity "DefinitionGroupTemplateHeaders" of service "d365_metadata".
 */
export class DefinitionGroupTemplateHeaders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DefinitionGroupTemplateHeadersType<T>
{
  /**
   * Technical entity name for DefinitionGroupTemplateHeaders.
   */
  static override _entityName = 'DefinitionGroupTemplateHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DefinitionGroupTemplateHeaders entity.
   */
  static _keys = ['TemplateId'];
  /**
   * Template Id.
   */
  declare templateId: DeserializedType<T, 'Edm.String'>;
  /**
   * Status.
   * @nullable
   */
  declare status?: DmfDefinitionGroupTemplateStatus | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Validated Date Time.
   */
  declare validatedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-one navigation property to the {@link DefinitionGroupTemplateLines} entity.
   */
  declare dmfDefinitionGroupTemplateLineEntityRole?: DefinitionGroupTemplateLines<T> | null;
  /**
   * One-to-one navigation property to the {@link DefinitionGroupTemplateLines} entity.
   */
  declare dmfDefinitionGroupTemplateLineRole?: DefinitionGroupTemplateLines<T> | null;

  constructor(_entityApi: DefinitionGroupTemplateHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface DefinitionGroupTemplateHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  templateId: DeserializedType<T, 'Edm.String'>;
  status?: DmfDefinitionGroupTemplateStatus | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  validatedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  dmfDefinitionGroupTemplateLineEntityRole?: DefinitionGroupTemplateLinesType<T> | null;
  dmfDefinitionGroupTemplateLineRole?: DefinitionGroupTemplateLinesType<T> | null;
}
