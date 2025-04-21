/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ValidationProjectTasks } from './ValidationProjectTasks';
import { ValidationProjectTasksRequestBuilder } from './ValidationProjectTasksRequestBuilder';
import { ValidationTaskAreasApi } from './ValidationTaskAreasApi';
import { ValidationProjectsApi } from './ValidationProjectsApi';
import { MenuItemType } from './MenuItemType';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class ValidationProjectTasksApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ValidationProjectTasks<DeSerializersT>, DeSerializersT>
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
  ): ValidationProjectTasksApi<DeSerializersT> {
    return new ValidationProjectTasksApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link validationTaskArea} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VALIDATION_TASK_AREA: OneToOneLink<
      ValidationProjectTasks<DeSerializersT>,
      DeSerializersT,
      ValidationTaskAreasApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link validationProject} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VALIDATION_PROJECT: OneToOneLink<
      ValidationProjectTasks<DeSerializersT>,
      DeSerializersT,
      ValidationProjectsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ValidationTaskAreasApi<DeSerializersT>,
      ValidationProjectsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      VALIDATION_TASK_AREA: new OneToOneLink(
        'ValidationTaskArea',
        this,
        linkedApis[0]
      ),
      VALIDATION_PROJECT: new OneToOneLink(
        'ValidationProject',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = ValidationProjectTasks;

  requestBuilder(): ValidationProjectTasksRequestBuilder<DeSerializersT> {
    return new ValidationProjectTasksRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ValidationProjectTasks<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ValidationProjectTasks<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ValidationProjectTasks<DeSerializersT>,
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
    typeof ValidationProjectTasks,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ValidationProjectTasks,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_VALIDATION_PROJECT_NAME: OrderableEdmTypeField<
      ValidationProjectTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      ValidationProjectTasks<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DISPLAY_ORDER: OrderableEdmTypeField<
      ValidationProjectTasks<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      ValidationProjectTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MENU_ITEM_TYPE: EnumField<
      ValidationProjectTasks<DeSerializers>,
      DeSerializersT,
      MenuItemType,
      true,
      true
    >;
    MENU_ITEM: OrderableEdmTypeField<
      ValidationProjectTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AREA_NAME: OrderableEdmTypeField<
      ValidationProjectTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link validationTaskArea} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VALIDATION_TASK_AREA: OneToOneLink<
      ValidationProjectTasks<DeSerializersT>,
      DeSerializersT,
      ValidationTaskAreasApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link validationProject} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VALIDATION_PROJECT: OneToOneLink<
      ValidationProjectTasks<DeSerializersT>,
      DeSerializersT,
      ValidationProjectsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ValidationProjectTasks<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dataValidationProjectName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_VALIDATION_PROJECT_NAME: fieldBuilder.buildEdmTypeField(
          'DataValidationProject_Name',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link displayOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPLAY_ORDER: fieldBuilder.buildEdmTypeField(
          'DisplayOrder',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link menuItemType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MENU_ITEM_TYPE: fieldBuilder.buildEnumField(
          'MenuItemType',
          MenuItemType,
          true
        ),
        /**
         * Static representation of the {@link menuItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MENU_ITEM: fieldBuilder.buildEdmTypeField(
          'MenuItem',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link areaName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AREA_NAME: fieldBuilder.buildEdmTypeField(
          'Area_Name',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ValidationProjectTasks)
      };
    }

    return this._schema;
  }
}
