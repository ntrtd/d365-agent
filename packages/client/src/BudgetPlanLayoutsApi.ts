/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BudgetPlanLayouts } from './BudgetPlanLayouts';
import { BudgetPlanLayoutsRequestBuilder } from './BudgetPlanLayoutsRequestBuilder';
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
export class BudgetPlanLayoutsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BudgetPlanLayouts<DeSerializersT>, DeSerializersT>
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
  ): BudgetPlanLayoutsApi<DeSerializersT> {
    return new BudgetPlanLayoutsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = BudgetPlanLayouts;

  requestBuilder(): BudgetPlanLayoutsRequestBuilder<DeSerializersT> {
    return new BudgetPlanLayoutsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BudgetPlanLayouts<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BudgetPlanLayouts<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<BudgetPlanLayouts<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof BudgetPlanLayouts,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BudgetPlanLayouts,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    LAYOUT_NAME: OrderableEdmTypeField<
      BudgetPlanLayouts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ELEMENT_DEFINITION_NAME: OrderableEdmTypeField<
      BudgetPlanLayouts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LAYOUT_DESCRIPTION: OrderableEdmTypeField<
      BudgetPlanLayouts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IN_WORKSHEET: EnumField<
      BudgetPlanLayouts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DIMENSION_FOCUS_NAME: OrderableEdmTypeField<
      BudgetPlanLayouts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORDINAL: OrderableEdmTypeField<
      BudgetPlanLayouts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    IS_EDITABLE: EnumField<
      BudgetPlanLayouts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<BudgetPlanLayouts<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link layoutName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAYOUT_NAME: fieldBuilder.buildEdmTypeField(
          'LayoutName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link elementDefinitionName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ELEMENT_DEFINITION_NAME: fieldBuilder.buildEdmTypeField(
          'ElementDefinitionName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link layoutDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAYOUT_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'LayoutDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inWorksheet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IN_WORKSHEET: fieldBuilder.buildEnumField('InWorksheet', NoYes, true),
        /**
         * Static representation of the {@link dimensionFocusName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_FOCUS_NAME: fieldBuilder.buildEdmTypeField(
          'DimensionFocusName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ordinal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDINAL: fieldBuilder.buildEdmTypeField('Ordinal', 'Edm.Int32', false),
        /**
         * Static representation of the {@link isEditable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_EDITABLE: fieldBuilder.buildEnumField('IsEditable', NoYes, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BudgetPlanLayouts)
      };
    }

    return this._schema;
  }
}
