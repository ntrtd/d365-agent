/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ConfiguratorLayoutGroups } from './ConfiguratorLayoutGroups';
import { ConfiguratorLayoutGroupsRequestBuilder } from './ConfiguratorLayoutGroupsRequestBuilder';
import { ConfiguratorLayoutLinesApi } from './ConfiguratorLayoutLinesApi';
import { ConfiguratorLayoutFieldsApi } from './ConfiguratorLayoutFieldsApi';
import { ConfiguratorDefinitionGroupsApi } from './ConfiguratorDefinitionGroupsApi';
import { NoYes } from './NoYes';
import { ConfLayoutTypesChoiceBr } from './ConfLayoutTypesChoiceBr';
import { ConfFileStructureBr } from './ConfFileStructureBr';
import { ConfDelimitersBr } from './ConfDelimitersBr';
import { ConfTextQualifier_Br } from './ConfTextQualifier_Br';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  EnumField,
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class ConfiguratorLayoutGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ConfiguratorLayoutGroups<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): ConfiguratorLayoutGroupsApi<DeSerializersT> {
    return new ConfiguratorLayoutGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link configuratorLayoutLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONFIGURATOR_LAYOUT_LINES: OneToManyLink<
      ConfiguratorLayoutGroups<DeSerializersT>,
      DeSerializersT,
      ConfiguratorLayoutLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link configuratorLayoutField} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONFIGURATOR_LAYOUT_FIELD: OneToManyLink<
      ConfiguratorLayoutGroups<DeSerializersT>,
      DeSerializersT,
      ConfiguratorLayoutFieldsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link configuratorDefinitionGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONFIGURATOR_DEFINITION_GROUP: OneToOneLink<
      ConfiguratorLayoutGroups<DeSerializersT>,
      DeSerializersT,
      ConfiguratorDefinitionGroupsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ConfiguratorLayoutLinesApi<DeSerializersT>,
      ConfiguratorLayoutFieldsApi<DeSerializersT>,
      ConfiguratorDefinitionGroupsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      CONFIGURATOR_LAYOUT_LINES: new OneToManyLink(
        'ConfiguratorLayoutLines',
        this,
        linkedApis[0]
      ),
      CONFIGURATOR_LAYOUT_FIELD: new OneToManyLink(
        'ConfiguratorLayoutField',
        this,
        linkedApis[1]
      ),
      CONFIGURATOR_DEFINITION_GROUP: new OneToOneLink(
        'ConfiguratorDefinitionGroup',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = ConfiguratorLayoutGroups;

  requestBuilder(): ConfiguratorLayoutGroupsRequestBuilder<DeSerializersT> {
    return new ConfiguratorLayoutGroupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ConfiguratorLayoutGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ConfiguratorLayoutGroups<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ConfiguratorLayoutGroups<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof ConfiguratorLayoutGroups,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ConfiguratorLayoutGroups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ConfiguratorLayoutGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LAYOUT_GROUP_ID: OrderableEdmTypeField<
      ConfiguratorLayoutGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REGISTER_TYPE: EnumField<
      ConfiguratorLayoutGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LAYOUT_TYPE: EnumField<
      ConfiguratorLayoutGroups<DeSerializers>,
      DeSerializersT,
      ConfLayoutTypesChoiceBr,
      true,
      true
    >;
    FILE_STRUCTURE: EnumField<
      ConfiguratorLayoutGroups<DeSerializers>,
      DeSerializersT,
      ConfFileStructureBr,
      true,
      true
    >;
    DELIMITED_BY: EnumField<
      ConfiguratorLayoutGroups<DeSerializers>,
      DeSerializersT,
      ConfDelimitersBr,
      true,
      true
    >;
    DEFINITION_GROUP_ID: OrderableEdmTypeField<
      ConfiguratorLayoutGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXPORT: EnumField<
      ConfiguratorLayoutGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IMPORT: EnumField<
      ConfiguratorLayoutGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      ConfiguratorLayoutGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIMITER_CHARACTER: OrderableEdmTypeField<
      ConfiguratorLayoutGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TEXT_QUALIFIER: EnumField<
      ConfiguratorLayoutGroups<DeSerializers>,
      DeSerializersT,
      ConfTextQualifier_Br,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link configuratorLayoutLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONFIGURATOR_LAYOUT_LINES: OneToManyLink<
      ConfiguratorLayoutGroups<DeSerializersT>,
      DeSerializersT,
      ConfiguratorLayoutLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link configuratorLayoutField} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONFIGURATOR_LAYOUT_FIELD: OneToManyLink<
      ConfiguratorLayoutGroups<DeSerializersT>,
      DeSerializersT,
      ConfiguratorLayoutFieldsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link configuratorDefinitionGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONFIGURATOR_DEFINITION_GROUP: OneToOneLink<
      ConfiguratorLayoutGroups<DeSerializersT>,
      DeSerializersT,
      ConfiguratorDefinitionGroupsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ConfiguratorLayoutGroups<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'dataAreaId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link layoutGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAYOUT_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'LayoutGroupId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link registerType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGISTER_TYPE: fieldBuilder.buildEnumField('RegisterType', NoYes, true),
        /**
         * Static representation of the {@link layoutType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAYOUT_TYPE: fieldBuilder.buildEnumField(
          'LayoutType',
          ConfLayoutTypesChoiceBr,
          true
        ),
        /**
         * Static representation of the {@link fileStructure} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FILE_STRUCTURE: fieldBuilder.buildEnumField(
          'FileStructure',
          ConfFileStructureBr,
          true
        ),
        /**
         * Static representation of the {@link delimitedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIMITED_BY: fieldBuilder.buildEnumField(
          'DelimitedBy',
          ConfDelimitersBr,
          true
        ),
        /**
         * Static representation of the {@link definitionGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFINITION_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'DefinitionGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link export} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPORT: fieldBuilder.buildEnumField('Export', NoYes, true),
        /**
         * Static representation of the {@link import} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IMPORT: fieldBuilder.buildEnumField('Import', NoYes, true),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link delimiterCharacter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIMITER_CHARACTER: fieldBuilder.buildEdmTypeField(
          'DelimiterCharacter',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link textQualifier} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEXT_QUALIFIER: fieldBuilder.buildEnumField(
          'TextQualifier',
          ConfTextQualifier_Br,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ConfiguratorLayoutGroups)
      };
    }

    return this._schema;
  }
}
