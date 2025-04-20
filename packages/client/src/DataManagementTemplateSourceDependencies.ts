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
import type { DataManagementTemplateSourceDependenciesApi } from './DataManagementTemplateSourceDependenciesApi';
import { NoYes } from './NoYes';
import {
  DataManagementTemplateSources,
  DataManagementTemplateSourcesType
} from './DataManagementTemplateSources';

/**
 * This class represents the entity "DataManagementTemplateSourceDependencies" of service "d365_metadata".
 */
export class DataManagementTemplateSourceDependencies<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DataManagementTemplateSourceDependenciesType<T>
{
  /**
   * Technical entity name for DataManagementTemplateSourceDependencies.
   */
  static override _entityName = 'DataManagementTemplateSourceDependencies';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DataManagementTemplateSourceDependencies entity.
   */
  static _keys = [
    'TemplateId',
    'SourceEntity',
    'DependentOnEntity',
    'RelationName'
  ];
  /**
   * Template Id.
   */
  declare templateId: DeserializedType<T, 'Edm.String'>;
  /**
   * Source Entity.
   */
  declare sourceEntity: DeserializedType<T, 'Edm.String'>;
  /**
   * Dependent On Entity.
   */
  declare dependentOnEntity: DeserializedType<T, 'Edm.String'>;
  /**
   * Relation Name.
   */
  declare relationName: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Friendly Name.
   * @nullable
   */
  declare friendlyName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Validation Required.
   * @nullable
   */
  declare validationRequired?: NoYes | null;
  /**
   * One-to-one navigation property to the {@link DataManagementTemplateSources} entity.
   */
  declare templateSource?: DataManagementTemplateSources<T> | null;

  constructor(_entityApi: DataManagementTemplateSourceDependenciesApi<T>) {
    super(_entityApi);
  }
}

export interface DataManagementTemplateSourceDependenciesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  templateId: DeserializedType<T, 'Edm.String'>;
  sourceEntity: DeserializedType<T, 'Edm.String'>;
  dependentOnEntity: DeserializedType<T, 'Edm.String'>;
  relationName: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  friendlyName?: DeserializedType<T, 'Edm.String'> | null;
  validationRequired?: NoYes | null;
  templateSource?: DataManagementTemplateSourcesType<T> | null;
}
