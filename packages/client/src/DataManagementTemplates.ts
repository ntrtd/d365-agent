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
import type { DataManagementTemplatesApi } from './DataManagementTemplatesApi';
import {
  DataManagementTemplateSources,
  DataManagementTemplateSourcesType
} from './DataManagementTemplateSources';
import {
  DataManagementTemplateDetails,
  DataManagementTemplateDetailsType
} from './DataManagementTemplateDetails';

/**
 * This class represents the entity "DataManagementTemplates" of service "d365_metadata".
 */
export class DataManagementTemplates<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DataManagementTemplatesType<T>
{
  /**
   * Technical entity name for DataManagementTemplates.
   */
  static override _entityName = 'DataManagementTemplates';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DataManagementTemplates entity.
   */
  static _keys = ['TemplateId'];
  /**
   * Template Id.
   */
  declare templateId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link DataManagementTemplateSources} entity.
   */
  declare sources: DataManagementTemplateSources<T>[];
  /**
   * One-to-many navigation property to the {@link DataManagementTemplateDetails} entity.
   */
  declare details: DataManagementTemplateDetails<T>[];

  constructor(_entityApi: DataManagementTemplatesApi<T>) {
    super(_entityApi);
  }
}

export interface DataManagementTemplatesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  templateId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  sources: DataManagementTemplateSourcesType<T>[];
  details: DataManagementTemplateDetailsType<T>[];
}
