/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProjectParameterV2 } from './ProjectParameterV2';
import { ProjectParameterV2RequestBuilder } from './ProjectParameterV2RequestBuilder';
import { ProjLineTotal } from './ProjLineTotal';
import { NoYes } from './NoYes';
import { ProjDefaultInvoiceLayout } from './ProjDefaultInvoiceLayout';
import { ProjTaxItemGroupMethod } from './ProjTaxItemGroupMethod';
import { ProjTaxGroupMethod } from './ProjTaxGroupMethod';
import { TaxCalculationProjDateType } from './TaxCalculationProjDateType';
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
export class ProjectParameterV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProjectParameterV2<DeSerializersT>, DeSerializersT>
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
  ): ProjectParameterV2Api<DeSerializersT> {
    return new ProjectParameterV2Api(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ProjectParameterV2;

  requestBuilder(): ProjectParameterV2RequestBuilder<DeSerializersT> {
    return new ProjectParameterV2RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProjectParameterV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ProjectParameterV2<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProjectParameterV2<DeSerializersT>,
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
    typeof ProjectParameterV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProjectParameterV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ProjectParameterV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    KEY: OrderableEdmTypeField<
      ProjectParameterV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    LINE_TOTAL_POST_COST: EnumField<
      ProjectParameterV2<DeSerializers>,
      DeSerializersT,
      ProjLineTotal,
      true,
      true
    >;
    TAX_ITEM_GROUP_ON_ACC: OrderableEdmTypeField<
      ProjectParameterV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_CATEGORY: OrderableEdmTypeField<
      ProjectParameterV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_OPERATIONS_INTEGRATION_FEATURE_STATUS: EnumField<
      ProjectParameterV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EMPL_CATEGORY: OrderableEdmTypeField<
      ProjectParameterV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_TOTAL_ESTIMATE: EnumField<
      ProjectParameterV2<DeSerializers>,
      DeSerializersT,
      ProjLineTotal,
      true,
      true
    >;
    DEFAULT_INVOICE_LAYOUT: EnumField<
      ProjectParameterV2<DeSerializers>,
      DeSerializersT,
      ProjDefaultInvoiceLayout,
      true,
      true
    >;
    ON_ACCOUNT_CATEGORY: OrderableEdmTypeField<
      ProjectParameterV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_CATEGORY: OrderableEdmTypeField<
      ProjectParameterV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_OPERATIONS_FORECAST_MODEL_ID: OrderableEdmTypeField<
      ProjectParameterV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_ITEM_GROUP_METHOD: EnumField<
      ProjectParameterV2<DeSerializers>,
      DeSerializersT,
      ProjTaxItemGroupMethod,
      true,
      true
    >;
    IS_ACCOUNTING_DATE_UPDATE_ALLOWED: EnumField<
      ProjectParameterV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REVENUE_CATEGORY: OrderableEdmTypeField<
      ProjectParameterV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_GROUP_METHOD: EnumField<
      ProjectParameterV2<DeSerializers>,
      DeSerializersT,
      ProjTaxGroupMethod,
      true,
      true
    >;
    LINE_TOTAL_INVOICE: EnumField<
      ProjectParameterV2<DeSerializers>,
      DeSerializersT,
      ProjLineTotal,
      true,
      true
    >;
    LINE_TOTAL_ACCRUE_REVENUE: EnumField<
      ProjectParameterV2<DeSerializers>,
      DeSerializersT,
      ProjLineTotal,
      true,
      true
    >;
    DIMENSION_ATTRIBUTE_VALUE_COMBINATION_DISPLAY_VALUE: OrderableEdmTypeField<
      ProjectParameterV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_CALC_DATE_TYPE: EnumField<
      ProjectParameterV2<DeSerializers>,
      DeSerializersT,
      TaxCalculationProjDateType,
      true,
      true
    >;
    ALL_FIELDS: AllFields<ProjectParameterV2<DeSerializers>>;
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
         * Static representation of the {@link key} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KEY: fieldBuilder.buildEdmTypeField('Key', 'Edm.Int32', false),
        /**
         * Static representation of the {@link lineTotalPostCost} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_TOTAL_POST_COST: fieldBuilder.buildEnumField(
          'LineTotalPostCost',
          ProjLineTotal,
          true
        ),
        /**
         * Static representation of the {@link taxItemGroupOnAcc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_ITEM_GROUP_ON_ACC: fieldBuilder.buildEdmTypeField(
          'TaxItemGroupOnAcc',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link costCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_CATEGORY: fieldBuilder.buildEdmTypeField(
          'CostCategory',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projectOperationsIntegrationFeatureStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_OPERATIONS_INTEGRATION_FEATURE_STATUS:
          fieldBuilder.buildEnumField(
            'ProjectOperationsIntegrationFeatureStatus',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link emplCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPL_CATEGORY: fieldBuilder.buildEdmTypeField(
          'EmplCategory',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lineTotalEstimate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_TOTAL_ESTIMATE: fieldBuilder.buildEnumField(
          'LineTotalEstimate',
          ProjLineTotal,
          true
        ),
        /**
         * Static representation of the {@link defaultInvoiceLayout} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_INVOICE_LAYOUT: fieldBuilder.buildEnumField(
          'DefaultInvoiceLayout',
          ProjDefaultInvoiceLayout,
          true
        ),
        /**
         * Static representation of the {@link onAccountCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ON_ACCOUNT_CATEGORY: fieldBuilder.buildEdmTypeField(
          'OnAccountCategory',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_CATEGORY: fieldBuilder.buildEdmTypeField(
          'ItemCategory',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projectOperationsForecastModelId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_OPERATIONS_FORECAST_MODEL_ID: fieldBuilder.buildEdmTypeField(
          'ProjectOperationsForecastModelId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxItemGroupMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_ITEM_GROUP_METHOD: fieldBuilder.buildEnumField(
          'TaxItemGroupMethod',
          ProjTaxItemGroupMethod,
          true
        ),
        /**
         * Static representation of the {@link isAccountingDateUpdateAllowed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ACCOUNTING_DATE_UPDATE_ALLOWED: fieldBuilder.buildEnumField(
          'IsAccountingDateUpdateAllowed',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link revenueCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVENUE_CATEGORY: fieldBuilder.buildEdmTypeField(
          'RevenueCategory',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxGroupMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_GROUP_METHOD: fieldBuilder.buildEnumField(
          'TaxGroupMethod',
          ProjTaxGroupMethod,
          true
        ),
        /**
         * Static representation of the {@link lineTotalInvoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_TOTAL_INVOICE: fieldBuilder.buildEnumField(
          'LineTotalInvoice',
          ProjLineTotal,
          true
        ),
        /**
         * Static representation of the {@link lineTotalAccrueRevenue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_TOTAL_ACCRUE_REVENUE: fieldBuilder.buildEnumField(
          'LineTotalAccrueRevenue',
          ProjLineTotal,
          true
        ),
        /**
         * Static representation of the {@link dimensionAttributeValueCombinationDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_ATTRIBUTE_VALUE_COMBINATION_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'DimensionAttributeValueCombinationDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link taxCalcDateType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_CALC_DATE_TYPE: fieldBuilder.buildEnumField(
          'TaxCalcDateType',
          TaxCalculationProjDateType,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProjectParameterV2)
      };
    }

    return this._schema;
  }
}
