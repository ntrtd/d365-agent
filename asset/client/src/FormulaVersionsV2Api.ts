/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FormulaVersionsV2 } from './FormulaVersionsV2';
import { FormulaVersionsV2RequestBuilder } from './FormulaVersionsV2RequestBuilder';
import { ProductVersionsApi } from './ProductVersionsApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class FormulaVersionsV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<FormulaVersionsV2<DeSerializersT>, DeSerializersT>
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
  ): FormulaVersionsV2Api<DeSerializersT> {
    return new FormulaVersionsV2Api(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link productVersion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_VERSION: OneToOneLink<
      FormulaVersionsV2<DeSerializersT>,
      DeSerializersT,
      ProductVersionsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [ProductVersionsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      PRODUCT_VERSION: new OneToOneLink('ProductVersion', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = FormulaVersionsV2;

  requestBuilder(): FormulaVersionsV2RequestBuilder<DeSerializersT> {
    return new FormulaVersionsV2RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    FormulaVersionsV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<FormulaVersionsV2<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<FormulaVersionsV2<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof FormulaVersionsV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        FormulaVersionsV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      FormulaVersionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MANUFACTURED_ITEM_NUMBER: OrderableEdmTypeField<
      FormulaVersionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FORMULA_ID: OrderableEdmTypeField<
      FormulaVersionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCTION_SITE_ID: OrderableEdmTypeField<
      FormulaVersionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      FormulaVersionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_COLOR_ID: OrderableEdmTypeField<
      FormulaVersionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_SIZE_ID: OrderableEdmTypeField<
      FormulaVersionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_STYLE_ID: OrderableEdmTypeField<
      FormulaVersionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_VERSION_ID: OrderableEdmTypeField<
      FormulaVersionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_ACTIVE: EnumField<
      FormulaVersionsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VALID_FROM_DATE: OrderableEdmTypeField<
      FormulaVersionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    FROM_QUANTITY: OrderableEdmTypeField<
      FormulaVersionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FORMULA_BATCH_SIZE: OrderableEdmTypeField<
      FormulaVersionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    APPROVER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      FormulaVersionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHANGED_DATE: OrderableEdmTypeField<
      FormulaVersionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IS_APPROVED: EnumField<
      FormulaVersionsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FROM_CATCH_WEIGHT_QUANTITY: OrderableEdmTypeField<
      FormulaVersionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FORMULA_BATCH_SIZE_MULTIPLES: OrderableEdmTypeField<
      FormulaVersionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CATCH_WEIGHT_SIZE: OrderableEdmTypeField<
      FormulaVersionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_SELECTED_FOR_DESIGNER: EnumField<
      FormulaVersionsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_CO_PRODUCT_QUANTITY_VARIATION_ALLOWED: EnumField<
      FormulaVersionsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WILL_COST_CALCULATION_INCLUDE_VERSION: EnumField<
      FormulaVersionsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VALID_TO_DATE: OrderableEdmTypeField<
      FormulaVersionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    BULK_ITEM_NUMBER: OrderableEdmTypeField<
      FormulaVersionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    YIELD_PERCENTAGE: OrderableEdmTypeField<
      FormulaVersionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_TOTAL_COST_ALLOCATION_USED: EnumField<
      FormulaVersionsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VERSION_NAME: OrderableEdmTypeField<
      FormulaVersionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productVersion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_VERSION: OneToOneLink<
      FormulaVersionsV2<DeSerializersT>,
      DeSerializersT,
      ProductVersionsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<FormulaVersionsV2<DeSerializers>>;
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
         * Static representation of the {@link manufacturedItemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANUFACTURED_ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'ManufacturedItemNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link formulaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORMULA_ID: fieldBuilder.buildEdmTypeField(
          'FormulaId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productionSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_SITE_ID: fieldBuilder.buildEdmTypeField(
          'ProductionSiteId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productConfigurationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_CONFIGURATION_ID: fieldBuilder.buildEdmTypeField(
          'ProductConfigurationId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productColorId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_COLOR_ID: fieldBuilder.buildEdmTypeField(
          'ProductColorId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productSizeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_SIZE_ID: fieldBuilder.buildEdmTypeField(
          'ProductSizeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productStyleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_STYLE_ID: fieldBuilder.buildEdmTypeField(
          'ProductStyleId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productVersionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_VERSION_ID: fieldBuilder.buildEdmTypeField(
          'ProductVersionId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link isActive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ACTIVE: fieldBuilder.buildEnumField('IsActive', NoYes, true),
        /**
         * Static representation of the {@link validFromDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_FROM_DATE: fieldBuilder.buildEdmTypeField(
          'ValidFromDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link fromQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_QUANTITY: fieldBuilder.buildEdmTypeField(
          'FromQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link formulaBatchSize} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORMULA_BATCH_SIZE: fieldBuilder.buildEdmTypeField(
          'FormulaBatchSize',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link approverPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPROVER_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'ApproverPersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link changedDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHANGED_DATE: fieldBuilder.buildEdmTypeField(
          'ChangedDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link isApproved} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_APPROVED: fieldBuilder.buildEnumField('IsApproved', NoYes, true),
        /**
         * Static representation of the {@link fromCatchWeightQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_CATCH_WEIGHT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'FromCatchWeightQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link formulaBatchSizeMultiples} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORMULA_BATCH_SIZE_MULTIPLES: fieldBuilder.buildEdmTypeField(
          'FormulaBatchSizeMultiples',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link catchWeightSize} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATCH_WEIGHT_SIZE: fieldBuilder.buildEdmTypeField(
          'CatchWeightSize',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isSelectedForDesigner} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SELECTED_FOR_DESIGNER: fieldBuilder.buildEnumField(
          'IsSelectedForDesigner',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isCoProductQuantityVariationAllowed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CO_PRODUCT_QUANTITY_VARIATION_ALLOWED: fieldBuilder.buildEnumField(
          'IsCoProductQuantityVariationAllowed',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link willCostCalculationIncludeVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_COST_CALCULATION_INCLUDE_VERSION: fieldBuilder.buildEnumField(
          'WillCostCalculationIncludeVersion',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link validToDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_TO_DATE: fieldBuilder.buildEdmTypeField(
          'ValidToDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link bulkItemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BULK_ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'BulkItemNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link yieldPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        YIELD_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'YieldPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isTotalCostAllocationUsed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_TOTAL_COST_ALLOCATION_USED: fieldBuilder.buildEnumField(
          'IsTotalCostAllocationUsed',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link versionName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VERSION_NAME: fieldBuilder.buildEdmTypeField(
          'VersionName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', FormulaVersionsV2)
      };
    }

    return this._schema;
  }
}
