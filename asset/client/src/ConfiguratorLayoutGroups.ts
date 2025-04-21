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
import type { ConfiguratorLayoutGroupsApi } from './ConfiguratorLayoutGroupsApi';
import { NoYes } from './NoYes';
import { ConfLayoutTypesChoiceBr } from './ConfLayoutTypesChoiceBr';
import { ConfFileStructureBr } from './ConfFileStructureBr';
import { ConfDelimitersBr } from './ConfDelimitersBr';
import { ConfTextQualifier_Br } from './ConfTextQualifier_Br';
import {
  ConfiguratorLayoutLines,
  ConfiguratorLayoutLinesType
} from './ConfiguratorLayoutLines';
import {
  ConfiguratorLayoutFields,
  ConfiguratorLayoutFieldsType
} from './ConfiguratorLayoutFields';
import {
  ConfiguratorDefinitionGroups,
  ConfiguratorDefinitionGroupsType
} from './ConfiguratorDefinitionGroups';

/**
 * This class represents the entity "ConfiguratorLayoutGroups" of service "d365_metadata".
 */
export class ConfiguratorLayoutGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ConfiguratorLayoutGroupsType<T>
{
  /**
   * Technical entity name for ConfiguratorLayoutGroups.
   */
  static override _entityName = 'ConfiguratorLayoutGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ConfiguratorLayoutGroups entity.
   */
  static _keys = ['dataAreaId', 'LayoutGroupId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Layout Group Id.
   */
  declare layoutGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Register Type.
   * @nullable
   */
  declare registerType?: NoYes | null;
  /**
   * Layout Type.
   * @nullable
   */
  declare layoutType?: ConfLayoutTypesChoiceBr | null;
  /**
   * File Structure.
   * @nullable
   */
  declare fileStructure?: ConfFileStructureBr | null;
  /**
   * Delimited By.
   * @nullable
   */
  declare delimitedBy?: ConfDelimitersBr | null;
  /**
   * Definition Group Id.
   * @nullable
   */
  declare definitionGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Export.
   * @nullable
   */
  declare export?: NoYes | null;
  /**
   * Import.
   * @nullable
   */
  declare import?: NoYes | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delimiter Character.
   * @nullable
   */
  declare delimiterCharacter?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Text Qualifier.
   * @nullable
   */
  declare textQualifier?: ConfTextQualifier_Br | null;
  /**
   * One-to-many navigation property to the {@link ConfiguratorLayoutLines} entity.
   */
  declare configuratorLayoutLines: ConfiguratorLayoutLines<T>[];
  /**
   * One-to-many navigation property to the {@link ConfiguratorLayoutFields} entity.
   */
  declare configuratorLayoutField: ConfiguratorLayoutFields<T>[];
  /**
   * One-to-one navigation property to the {@link ConfiguratorDefinitionGroups} entity.
   */
  declare configuratorDefinitionGroup?: ConfiguratorDefinitionGroups<T> | null;

  constructor(_entityApi: ConfiguratorLayoutGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface ConfiguratorLayoutGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  layoutGroupId: DeserializedType<T, 'Edm.String'>;
  registerType?: NoYes | null;
  layoutType?: ConfLayoutTypesChoiceBr | null;
  fileStructure?: ConfFileStructureBr | null;
  delimitedBy?: ConfDelimitersBr | null;
  definitionGroupId?: DeserializedType<T, 'Edm.String'> | null;
  export?: NoYes | null;
  import?: NoYes | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  delimiterCharacter?: DeserializedType<T, 'Edm.String'> | null;
  textQualifier?: ConfTextQualifier_Br | null;
  configuratorLayoutLines: ConfiguratorLayoutLinesType<T>[];
  configuratorLayoutField: ConfiguratorLayoutFieldsType<T>[];
  configuratorDefinitionGroup?: ConfiguratorDefinitionGroupsType<T> | null;
}
