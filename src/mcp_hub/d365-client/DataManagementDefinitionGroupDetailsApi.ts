/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DataManagementDefinitionGroupDetails } from './DataManagementDefinitionGroupDetails';
import { DataManagementDefinitionGroupDetailsRequestBuilder } from './DataManagementDefinitionGroupDetailsRequestBuilder';
import { DataManagementDefinitionGroupsApi } from './DataManagementDefinitionGroupsApi';
import { NoYes } from './NoYes';
import { EntityCategory } from './EntityCategory';
import { DmfModule } from './DmfModule';
import { DmfRefreshType } from './DmfRefreshType';
import { NoYesError } from './NoYesError';
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
  EdmTypeField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class DataManagementDefinitionGroupDetailsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      DataManagementDefinitionGroupDetails<DeSerializersT>,
      DeSerializersT
    >
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
  ): DataManagementDefinitionGroupDetailsApi<DeSerializersT> {
    return new DataManagementDefinitionGroupDetailsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link definitionGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFINITION_GROUP: OneToOneLink<
      DataManagementDefinitionGroupDetails<DeSerializersT>,
      DeSerializersT,
      DataManagementDefinitionGroupsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [DataManagementDefinitionGroupsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      DEFINITION_GROUP: new OneToOneLink('DefinitionGroup', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = DataManagementDefinitionGroupDetails;

  requestBuilder(): DataManagementDefinitionGroupDetailsRequestBuilder<DeSerializersT> {
    return new DataManagementDefinitionGroupDetailsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    DataManagementDefinitionGroupDetails<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      DataManagementDefinitionGroupDetails<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    DataManagementDefinitionGroupDetails<DeSerializersT>,
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
    typeof DataManagementDefinitionGroupDetails,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DataManagementDefinitionGroupDetails,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DEFINITION_GROUP_ID: OrderableEdmTypeField<
      DataManagementDefinitionGroupDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENTITY_NAME: OrderableEdmTypeField<
      DataManagementDefinitionGroupDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RUN_VALIDATE_FIELD: EnumField<
      DataManagementDefinitionGroupDetails<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LEVEL_IN_EXECUTION_UNIT: OrderableEdmTypeField<
      DataManagementDefinitionGroupDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    INPUT_FILE_PATH: OrderableEdmTypeField<
      DataManagementDefinitionGroupDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RUN_BUSINESS_VALIDATION: EnumField<
      DataManagementDefinitionGroupDetails<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ENTITY_CATEGORY: EnumField<
      DataManagementDefinitionGroupDetails<DeSerializers>,
      DeSerializersT,
      EntityCategory,
      true,
      true
    >;
    FAIL_EXECUTION_UNIT_ON_ERROR: EnumField<
      DataManagementDefinitionGroupDetails<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SKIP_STAGING: EnumField<
      DataManagementDefinitionGroupDetails<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    QUERY_FOR_ODBC: OrderableEdmTypeField<
      DataManagementDefinitionGroupDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RUN_BUSINESS_LOGIC: EnumField<
      DataManagementDefinitionGroupDetails<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    AUTO_GENERATE_MAPPING: EnumField<
      DataManagementDefinitionGroupDetails<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    QUERY_DATA: EdmTypeField<
      DataManagementDefinitionGroupDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Binary',
      true,
      true
    >;
    IS_TRANSFORMED: EnumField<
      DataManagementDefinitionGroupDetails<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PARENT_ENTITY_NAME: OrderableEdmTypeField<
      DataManagementDefinitionGroupDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_MODULE: EnumField<
      DataManagementDefinitionGroupDetails<DeSerializers>,
      DeSerializersT,
      DmfModule,
      true,
      true
    >;
    ENTITY_XML_NAME: OrderableEdmTypeField<
      DataManagementDefinitionGroupDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAGS: OrderableEdmTypeField<
      DataManagementDefinitionGroupDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEQUENCE_IN_LEVEL: OrderableEdmTypeField<
      DataManagementDefinitionGroupDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DEFAULT_REFRESH_TYPE: EnumField<
      DataManagementDefinitionGroupDetails<DeSerializers>,
      DeSerializersT,
      DmfRefreshType,
      true,
      true
    >;
    DISABLE: EnumField<
      DataManagementDefinitionGroupDetails<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXCEL_SHEET_NAME: OrderableEdmTypeField<
      DataManagementDefinitionGroupDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SAMPLE_FILE_PATH_ORIGINAL: OrderableEdmTypeField<
      DataManagementDefinitionGroupDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SAMPLE_FILE_PATH: OrderableEdmTypeField<
      DataManagementDefinitionGroupDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXECUTION_UNIT: OrderableEdmTypeField<
      DataManagementDefinitionGroupDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SOURCE_FORMAT: OrderableEdmTypeField<
      DataManagementDefinitionGroupDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PACKAGE_FILE_PATH: OrderableEdmTypeField<
      DataManagementDefinitionGroupDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALIDATION_STATUS: EnumField<
      DataManagementDefinitionGroupDetails<DeSerializers>,
      DeSerializersT,
      NoYesError,
      true,
      true
    >;
    FAIL_LEVEL_ON_ERROR: EnumField<
      DataManagementDefinitionGroupDetails<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link definitionGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFINITION_GROUP: OneToOneLink<
      DataManagementDefinitionGroupDetails<DeSerializersT>,
      DeSerializersT,
      DataManagementDefinitionGroupsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<DataManagementDefinitionGroupDetails<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link definitionGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFINITION_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'DefinitionGroupId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link entityName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENTITY_NAME: fieldBuilder.buildEdmTypeField(
          'EntityName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link runValidateField} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RUN_VALIDATE_FIELD: fieldBuilder.buildEnumField(
          'RunValidateField',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link levelInExecutionUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEVEL_IN_EXECUTION_UNIT: fieldBuilder.buildEdmTypeField(
          'LevelInExecutionUnit',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link inputFilePath} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INPUT_FILE_PATH: fieldBuilder.buildEdmTypeField(
          'InputFilePath',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link runBusinessValidation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RUN_BUSINESS_VALIDATION: fieldBuilder.buildEnumField(
          'RunBusinessValidation',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link entityCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENTITY_CATEGORY: fieldBuilder.buildEnumField(
          'EntityCategory',
          EntityCategory,
          true
        ),
        /**
         * Static representation of the {@link failExecutionUnitOnError} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FAIL_EXECUTION_UNIT_ON_ERROR: fieldBuilder.buildEnumField(
          'FailExecutionUnitOnError',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link skipStaging} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SKIP_STAGING: fieldBuilder.buildEnumField('SkipStaging', NoYes, true),
        /**
         * Static representation of the {@link queryForOdbc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUERY_FOR_ODBC: fieldBuilder.buildEdmTypeField(
          'QueryForODBC',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link runBusinessLogic} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RUN_BUSINESS_LOGIC: fieldBuilder.buildEnumField(
          'RunBusinessLogic',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link autoGenerateMapping} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTO_GENERATE_MAPPING: fieldBuilder.buildEnumField(
          'AutoGenerateMapping',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link queryData} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUERY_DATA: fieldBuilder.buildEdmTypeField(
          'QueryData',
          'Edm.Binary',
          true
        ),
        /**
         * Static representation of the {@link isTransformed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_TRANSFORMED: fieldBuilder.buildEnumField(
          'IsTransformed',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link parentEntityName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_ENTITY_NAME: fieldBuilder.buildEdmTypeField(
          'ParentEntityName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sysModule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_MODULE: fieldBuilder.buildEnumField('SysModule', DmfModule, true),
        /**
         * Static representation of the {@link entityXmlName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENTITY_XML_NAME: fieldBuilder.buildEdmTypeField(
          'EntityXMLName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link tags} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAGS: fieldBuilder.buildEdmTypeField('Tags', 'Edm.String', true),
        /**
         * Static representation of the {@link sequenceInLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEQUENCE_IN_LEVEL: fieldBuilder.buildEdmTypeField(
          'SequenceInLevel',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link defaultRefreshType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_REFRESH_TYPE: fieldBuilder.buildEnumField(
          'DefaultRefreshType',
          DmfRefreshType,
          true
        ),
        /**
         * Static representation of the {@link disable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISABLE: fieldBuilder.buildEnumField('Disable', NoYes, true),
        /**
         * Static representation of the {@link excelSheetName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCEL_SHEET_NAME: fieldBuilder.buildEdmTypeField(
          'ExcelSheetName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sampleFilePathOriginal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAMPLE_FILE_PATH_ORIGINAL: fieldBuilder.buildEdmTypeField(
          'SampleFilePathOriginal',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sampleFilePath} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAMPLE_FILE_PATH: fieldBuilder.buildEdmTypeField(
          'SampleFilePath',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link executionUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXECUTION_UNIT: fieldBuilder.buildEdmTypeField(
          'ExecutionUnit',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link sourceFormat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_FORMAT: fieldBuilder.buildEdmTypeField(
          'SourceFormat',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link packageFilePath} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACKAGE_FILE_PATH: fieldBuilder.buildEdmTypeField(
          'PackageFilePath',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link validationStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALIDATION_STATUS: fieldBuilder.buildEnumField(
          'ValidationStatus',
          NoYesError,
          true
        ),
        /**
         * Static representation of the {@link failLevelOnError} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FAIL_LEVEL_ON_ERROR: fieldBuilder.buildEnumField(
          'FailLevelOnError',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DataManagementDefinitionGroupDetails)
      };
    }

    return this._schema;
  }
}
