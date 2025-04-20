/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DataManagementDefinitionGroups } from './DataManagementDefinitionGroups';
import { DataManagementDefinitionGroupsRequestBuilder } from './DataManagementDefinitionGroupsRequestBuilder';
import { DataManagementDefinitionGroupDetailsApi } from './DataManagementDefinitionGroupDetailsApi';
import { DmfProjectCategory } from './DmfProjectCategory';
import { DmfOperationType } from './DmfOperationType';
import { NoYes } from './NoYes';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class DataManagementDefinitionGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<DataManagementDefinitionGroups<DeSerializersT>, DeSerializersT>
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
  ): DataManagementDefinitionGroupsApi<DeSerializersT> {
    return new DataManagementDefinitionGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link details} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DETAILS: OneToManyLink<
      DataManagementDefinitionGroups<DeSerializersT>,
      DeSerializersT,
      DataManagementDefinitionGroupDetailsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [DataManagementDefinitionGroupDetailsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      DETAILS: new OneToManyLink('Details', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = DataManagementDefinitionGroups;

  requestBuilder(): DataManagementDefinitionGroupsRequestBuilder<DeSerializersT> {
    return new DataManagementDefinitionGroupsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    DataManagementDefinitionGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      DataManagementDefinitionGroups<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    DataManagementDefinitionGroups<DeSerializersT>,
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
    typeof DataManagementDefinitionGroups,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DataManagementDefinitionGroups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    NAME: OrderableEdmTypeField<
      DataManagementDefinitionGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROJECT_CATEGORY: EnumField<
      DataManagementDefinitionGroups<DeSerializers>,
      DeSerializersT,
      DmfProjectCategory,
      true,
      true
    >;
    OPERATION_TYPE: EnumField<
      DataManagementDefinitionGroups<DeSerializers>,
      DeSerializersT,
      DmfOperationType,
      true,
      true
    >;
    GENERATE_DATA_PACKAGE: EnumField<
      DataManagementDefinitionGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      DataManagementDefinitionGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRUNCATE_ENTITY_DATA: EnumField<
      DataManagementDefinitionGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link details} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DETAILS: OneToManyLink<
      DataManagementDefinitionGroups<DeSerializersT>,
      DeSerializersT,
      DataManagementDefinitionGroupDetailsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<DataManagementDefinitionGroups<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', false),
        /**
         * Static representation of the {@link projectCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_CATEGORY: fieldBuilder.buildEnumField(
          'ProjectCategory',
          DmfProjectCategory,
          true
        ),
        /**
         * Static representation of the {@link operationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATION_TYPE: fieldBuilder.buildEnumField(
          'OperationType',
          DmfOperationType,
          true
        ),
        /**
         * Static representation of the {@link generateDataPackage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GENERATE_DATA_PACKAGE: fieldBuilder.buildEnumField(
          'GenerateDataPackage',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link truncateEntityData} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRUNCATE_ENTITY_DATA: fieldBuilder.buildEnumField(
          'TruncateEntityData',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DataManagementDefinitionGroups)
      };
    }

    return this._schema;
  }
}
