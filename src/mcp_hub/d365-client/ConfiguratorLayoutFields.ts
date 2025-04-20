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
import type { ConfiguratorLayoutFieldsApi } from './ConfiguratorLayoutFieldsApi';
import { DisplayFunctionType } from './DisplayFunctionType';
import { ConfJustifyBr } from './ConfJustifyBr';
import { ConfFieldTypeBr } from './ConfFieldTypeBr';
import { ConfTruncateBr } from './ConfTruncateBr';
import {
  ConfiguratorLayoutGroups,
  ConfiguratorLayoutGroupsType
} from './ConfiguratorLayoutGroups';

/**
 * This class represents the entity "ConfiguratorLayoutFields" of service "d365_metadata".
 */
export class ConfiguratorLayoutFields<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ConfiguratorLayoutFieldsType<T>
{
  /**
   * Technical entity name for ConfiguratorLayoutFields.
   */
  static override _entityName = 'ConfiguratorLayoutFields';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ConfiguratorLayoutFields entity.
   */
  static _keys = ['dataAreaId', 'LayoutGroupId', 'LineNumber', 'FieldNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Layout Group Id.
   */
  declare layoutGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Field Number.
   */
  declare fieldNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Method Name.
   * @nullable
   */
  declare methodName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Comments.
   * @nullable
   */
  declare comments?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * End Position.
   */
  declare endPosition: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Content.
   * @nullable
   */
  declare content?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Table Name.
   * @nullable
   */
  declare tableName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Type Of Method.
   * @nullable
   */
  declare typeOfMethod?: DisplayFunctionType | null;
  /**
   * Justification.
   * @nullable
   */
  declare justification?: ConfJustifyBr | null;
  /**
   * Start Position.
   */
  declare startPosition: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Type.
   * @nullable
   */
  declare type?: ConfFieldTypeBr | null;
  /**
   * Format.
   * @nullable
   */
  declare format?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Summation Type.
   * @nullable
   */
  declare summationType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Truncate Field.
   * @nullable
   */
  declare truncateField?: ConfTruncateBr | null;
  /**
   * Field Size.
   */
  declare fieldSize: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Field Name.
   * @nullable
   */
  declare fieldName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fill.
   * @nullable
   */
  declare fill?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Batch Id.
   * @nullable
   */
  declare batchId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Array Index.
   */
  declare arrayIndex: DeserializedType<T, 'Edm.Int32'>;
  /**
   * One-to-one navigation property to the {@link ConfiguratorLayoutGroups} entity.
   */
  declare configuratorLayoutGroup?: ConfiguratorLayoutGroups<T> | null;

  constructor(_entityApi: ConfiguratorLayoutFieldsApi<T>) {
    super(_entityApi);
  }
}

export interface ConfiguratorLayoutFieldsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  layoutGroupId: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  fieldNumber: DeserializedType<T, 'Edm.Decimal'>;
  methodName?: DeserializedType<T, 'Edm.String'> | null;
  comments?: DeserializedType<T, 'Edm.String'> | null;
  endPosition: DeserializedType<T, 'Edm.Int32'>;
  content?: DeserializedType<T, 'Edm.String'> | null;
  tableName?: DeserializedType<T, 'Edm.String'> | null;
  typeOfMethod?: DisplayFunctionType | null;
  justification?: ConfJustifyBr | null;
  startPosition: DeserializedType<T, 'Edm.Int32'>;
  type?: ConfFieldTypeBr | null;
  format?: DeserializedType<T, 'Edm.String'> | null;
  summationType?: DeserializedType<T, 'Edm.String'> | null;
  truncateField?: ConfTruncateBr | null;
  fieldSize: DeserializedType<T, 'Edm.Int32'>;
  fieldName?: DeserializedType<T, 'Edm.String'> | null;
  fill?: DeserializedType<T, 'Edm.String'> | null;
  batchId?: DeserializedType<T, 'Edm.String'> | null;
  arrayIndex: DeserializedType<T, 'Edm.Int32'>;
  configuratorLayoutGroup?: ConfiguratorLayoutGroupsType<T> | null;
}
