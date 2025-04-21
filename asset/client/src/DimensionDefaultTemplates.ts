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
import type { DimensionDefaultTemplatesApi } from './DimensionDefaultTemplatesApi';

/**
 * This class represents the entity "DimensionDefaultTemplates" of service "d365_metadata".
 */
export class DimensionDefaultTemplates<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DimensionDefaultTemplatesType<T>
{
  /**
   * Technical entity name for DimensionDefaultTemplates.
   */
  static override _entityName = 'DimensionDefaultTemplates';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DimensionDefaultTemplates entity.
   */
  static _keys = [
    'dataAreaId',
    'TemplateName',
    'LegalEntityId',
    'DefaultDimensionDisplayValue',
    'LineNum'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Template Name.
   */
  declare templateName: DeserializedType<T, 'Edm.String'>;
  /**
   * Legal Entity Id.
   */
  declare legalEntityId: DeserializedType<T, 'Edm.String'>;
  /**
   * Default Dimension Display Value.
   */
  declare defaultDimensionDisplayValue: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Num.
   */
  declare lineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Distribution Percent.
   */
  declare distributionPercent: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: DimensionDefaultTemplatesApi<T>) {
    super(_entityApi);
  }
}

export interface DimensionDefaultTemplatesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  templateName: DeserializedType<T, 'Edm.String'>;
  legalEntityId: DeserializedType<T, 'Edm.String'>;
  defaultDimensionDisplayValue: DeserializedType<T, 'Edm.String'>;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  distributionPercent: DeserializedType<T, 'Edm.Decimal'>;
}
