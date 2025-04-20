/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetMaintenanceChecklistVariableValues } from './AssetMaintenanceChecklistVariableValues';
import { AssetMaintenanceChecklistVariableValuesRequestBuilder } from './AssetMaintenanceChecklistVariableValuesRequestBuilder';
import { EntAssetChecklistLineStatus } from './EntAssetChecklistLineStatus';
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
export class AssetMaintenanceChecklistVariableValuesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      AssetMaintenanceChecklistVariableValues<DeSerializersT>,
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
  ): AssetMaintenanceChecklistVariableValuesApi<DeSerializersT> {
    return new AssetMaintenanceChecklistVariableValuesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = AssetMaintenanceChecklistVariableValues;

  requestBuilder(): AssetMaintenanceChecklistVariableValuesRequestBuilder<DeSerializersT> {
    return new AssetMaintenanceChecklistVariableValuesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AssetMaintenanceChecklistVariableValues<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetMaintenanceChecklistVariableValues<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetMaintenanceChecklistVariableValues<DeSerializersT>,
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
    typeof AssetMaintenanceChecklistVariableValues,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetMaintenanceChecklistVariableValues,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetMaintenanceChecklistVariableValues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CHECKLIST_VARIABLE_ID: OrderableEdmTypeField<
      AssetMaintenanceChecklistVariableValues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      AssetMaintenanceChecklistVariableValues<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VALUE: OrderableEdmTypeField<
      AssetMaintenanceChecklistVariableValues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHECK_STATUS: EnumField<
      AssetMaintenanceChecklistVariableValues<DeSerializers>,
      DeSerializersT,
      EntAssetChecklistLineStatus,
      true,
      true
    >;
    ALL_FIELDS: AllFields<
      AssetMaintenanceChecklistVariableValues<DeSerializers>
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
         * Static representation of the {@link checklistVariableId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECKLIST_VARIABLE_ID: fieldBuilder.buildEdmTypeField(
          'ChecklistVariableId',
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
         * Static representation of the {@link value} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE: fieldBuilder.buildEdmTypeField('Value', 'Edm.String', true),
        /**
         * Static representation of the {@link checkStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECK_STATUS: fieldBuilder.buildEnumField(
          'CheckStatus',
          EntAssetChecklistLineStatus,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AssetMaintenanceChecklistVariableValues)
      };
    }

    return this._schema;
  }
}
