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
import type { DataManagementTemplateSourcesApi } from './DataManagementTemplateSourcesApi';
import {
  DataManagementTemplates,
  DataManagementTemplatesType
} from './DataManagementTemplates';
import {
  DataManagementTemplateSourceDependencies,
  DataManagementTemplateSourceDependenciesType
} from './DataManagementTemplateSourceDependencies';

/**
 * This class represents the entity "DataManagementTemplateSources" of service "d365_metadata".
 */
export class DataManagementTemplateSources<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DataManagementTemplateSourcesType<T>
{
  /**
   * Technical entity name for DataManagementTemplateSources.
   */
  static override _entityName = 'DataManagementTemplateSources';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DataManagementTemplateSources entity.
   */
  static _keys = ['TemplateId', 'SourceEntity'];
  /**
   * Template Id.
   */
  declare templateId: DeserializedType<T, 'Edm.String'>;
  /**
   * Source Entity.
   */
  declare sourceEntity: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link DataManagementTemplates} entity.
   */
  declare definitionGroupTemplate?: DataManagementTemplates<T> | null;
  /**
   * One-to-many navigation property to the {@link DataManagementTemplateSourceDependencies} entity.
   */
  declare dependencies: DataManagementTemplateSourceDependencies<T>[];

  constructor(_entityApi: DataManagementTemplateSourcesApi<T>) {
    super(_entityApi);
  }
}

export interface DataManagementTemplateSourcesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  templateId: DeserializedType<T, 'Edm.String'>;
  sourceEntity: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  definitionGroupTemplate?: DataManagementTemplatesType<T> | null;
  dependencies: DataManagementTemplateSourceDependenciesType<T>[];
}
