/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetMaintenanceChecklistTemplateLines } from './AssetMaintenanceChecklistTemplateLines';
import { AssetMaintenanceChecklistTemplateLinesRequestBuilder } from './AssetMaintenanceChecklistTemplateLinesRequestBuilder';
import { EntAssetChecklistCounterUpdate } from './EntAssetChecklistCounterUpdate';
import { EntAssetChecklistActionType } from './EntAssetChecklistActionType';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class AssetMaintenanceChecklistTemplateLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      AssetMaintenanceChecklistTemplateLines<DeSerializersT>,
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
  ): AssetMaintenanceChecklistTemplateLinesApi<DeSerializersT> {
    return new AssetMaintenanceChecklistTemplateLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = AssetMaintenanceChecklistTemplateLines;

  requestBuilder(): AssetMaintenanceChecklistTemplateLinesRequestBuilder<DeSerializersT> {
    return new AssetMaintenanceChecklistTemplateLinesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AssetMaintenanceChecklistTemplateLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetMaintenanceChecklistTemplateLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetMaintenanceChecklistTemplateLines<DeSerializersT>,
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
    typeof AssetMaintenanceChecklistTemplateLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetMaintenanceChecklistTemplateLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetMaintenanceChecklistTemplateLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CHECKLIST_TEMPLATE_ID: OrderableEdmTypeField<
      AssetMaintenanceChecklistTemplateLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      AssetMaintenanceChecklistTemplateLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MEASURE_UPDATE: EnumField<
      AssetMaintenanceChecklistTemplateLines<DeSerializers>,
      DeSerializersT,
      EntAssetChecklistCounterUpdate,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      AssetMaintenanceChecklistTemplateLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINKED_CHECKLIST_TEMPLATE_ID: OrderableEdmTypeField<
      AssetMaintenanceChecklistTemplateLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MEASURE_MAX_VALUE: OrderableEdmTypeField<
      AssetMaintenanceChecklistTemplateLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INSTRUCTIONS: OrderableEdmTypeField<
      AssetMaintenanceChecklistTemplateLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHECKLIST_VARIABLE_ID: OrderableEdmTypeField<
      AssetMaintenanceChecklistTemplateLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TYPE: EnumField<
      AssetMaintenanceChecklistTemplateLines<DeSerializers>,
      DeSerializersT,
      EntAssetChecklistActionType,
      true,
      true
    >;
    MEASURE_UNIT_ID: OrderableEdmTypeField<
      AssetMaintenanceChecklistTemplateLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MEASURE_MIN_VALUE: OrderableEdmTypeField<
      AssetMaintenanceChecklistTemplateLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MANDATORY: EnumField<
      AssetMaintenanceChecklistTemplateLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COUNTER_ID: OrderableEdmTypeField<
      AssetMaintenanceChecklistTemplateLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<
      AssetMaintenanceChecklistTemplateLines<DeSerializers>
    >;
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
         * Static representation of the {@link checklistTemplateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECKLIST_TEMPLATE_ID: fieldBuilder.buildEdmTypeField(
          'ChecklistTemplateId',
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
         * Static representation of the {@link measureUpdate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MEASURE_UPDATE: fieldBuilder.buildEnumField(
          'MeasureUpdate',
          EntAssetChecklistCounterUpdate,
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link linkedChecklistTemplateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINKED_CHECKLIST_TEMPLATE_ID: fieldBuilder.buildEdmTypeField(
          'LinkedChecklistTemplateId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link measureMaxValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MEASURE_MAX_VALUE: fieldBuilder.buildEdmTypeField(
          'MeasureMaxValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link instructions} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSTRUCTIONS: fieldBuilder.buildEdmTypeField(
          'Instructions',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link checklistVariableId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECKLIST_VARIABLE_ID: fieldBuilder.buildEdmTypeField(
          'ChecklistVariableId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEnumField(
          'Type',
          EntAssetChecklistActionType,
          true
        ),
        /**
         * Static representation of the {@link measureUnitId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MEASURE_UNIT_ID: fieldBuilder.buildEdmTypeField(
          'MeasureUnitId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link measureMinValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MEASURE_MIN_VALUE: fieldBuilder.buildEdmTypeField(
          'MeasureMinValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link mandatory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANDATORY: fieldBuilder.buildEnumField('Mandatory', NoYes, true),
        /**
         * Static representation of the {@link counterId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTER_ID: fieldBuilder.buildEdmTypeField(
          'CounterId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AssetMaintenanceChecklistTemplateLines)
      };
    }

    return this._schema;
  }
}
