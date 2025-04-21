/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProjectControls } from './ProjectControls';
import { ProjectControlsRequestBuilder } from './ProjectControlsRequestBuilder';
import { AmountUnit } from './AmountUnit';
import { ProjAutoManual } from './ProjAutoManual';
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
export class ProjectControlsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProjectControls<DeSerializersT>, DeSerializersT>
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
  ): ProjectControlsApi<DeSerializersT> {
    return new ProjectControlsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ProjectControls;

  requestBuilder(): ProjectControlsRequestBuilder<DeSerializersT> {
    return new ProjectControlsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProjectControls<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ProjectControls<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ProjectControls<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ProjectControls, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProjectControls,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ProjectControls<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COST_TEMPLATE_ID: OrderableEdmTypeField<
      ProjectControls<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EXPENSE_COST_LINE_ID: OrderableEdmTypeField<
      ProjectControls<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPLETION_BASED_ON: EnumField<
      ProjectControls<DeSerializers>,
      DeSerializersT,
      AmountUnit,
      true,
      true
    >;
    COMPLETION_METHOD: EnumField<
      ProjectControls<DeSerializers>,
      DeSerializersT,
      ProjAutoManual,
      true,
      true
    >;
    HOUR_COST_LINE_ID: OrderableEdmTypeField<
      ProjectControls<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_COST_LINE_ID: OrderableEdmTypeField<
      ProjectControls<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      ProjectControls<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ProjectControls<DeSerializers>>;
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
         * Static representation of the {@link costTemplateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_TEMPLATE_ID: fieldBuilder.buildEdmTypeField(
          'CostTemplateId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link expenseCostLineId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPENSE_COST_LINE_ID: fieldBuilder.buildEdmTypeField(
          'ExpenseCostLineId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link completionBasedOn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPLETION_BASED_ON: fieldBuilder.buildEnumField(
          'CompletionBasedOn',
          AmountUnit,
          true
        ),
        /**
         * Static representation of the {@link completionMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPLETION_METHOD: fieldBuilder.buildEnumField(
          'CompletionMethod',
          ProjAutoManual,
          true
        ),
        /**
         * Static representation of the {@link hourCostLineId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOUR_COST_LINE_ID: fieldBuilder.buildEdmTypeField(
          'HourCostLineId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemCostLineId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_COST_LINE_ID: fieldBuilder.buildEdmTypeField(
          'ItemCostLineId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProjectControls)
      };
    }

    return this._schema;
  }
}
