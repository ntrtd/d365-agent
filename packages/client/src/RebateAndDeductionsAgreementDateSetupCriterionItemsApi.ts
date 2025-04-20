/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RebateAndDeductionsAgreementDateSetupCriterionItems } from './RebateAndDeductionsAgreementDateSetupCriterionItems';
import { RebateAndDeductionsAgreementDateSetupCriterionItemsRequestBuilder } from './RebateAndDeductionsAgreementDateSetupCriterionItemsRequestBuilder';
import { ProductStylesApi } from './ProductStylesApi';
import { ProductColorsApi } from './ProductColorsApi';
import { UnitsOfMeasureApi } from './UnitsOfMeasureApi';
import { ProductSizesApi } from './ProductSizesApi';
import { RebateAndDeductionsAgreementDateSetupCriteriaApi } from './RebateAndDeductionsAgreementDateSetupCriteriaApi';
import { TamRebateMethod } from './TamRebateMethod';
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
export class RebateAndDeductionsAgreementDateSetupCriterionItemsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      RebateAndDeductionsAgreementDateSetupCriterionItems<DeSerializersT>,
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
  ): RebateAndDeductionsAgreementDateSetupCriterionItemsApi<DeSerializersT> {
    return new RebateAndDeductionsAgreementDateSetupCriterionItemsApi(
      deSerializers
    );
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link productStyle} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_STYLE: OneToOneLink<
      RebateAndDeductionsAgreementDateSetupCriterionItems<DeSerializersT>,
      DeSerializersT,
      ProductStylesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productColor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_COLOR: OneToOneLink<
      RebateAndDeductionsAgreementDateSetupCriterionItems<DeSerializersT>,
      DeSerializersT,
      ProductColorsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link unitOfMeasure} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UNIT_OF_MEASURE: OneToOneLink<
      RebateAndDeductionsAgreementDateSetupCriterionItems<DeSerializersT>,
      DeSerializersT,
      UnitsOfMeasureApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productSize} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_SIZE: OneToOneLink<
      RebateAndDeductionsAgreementDateSetupCriterionItems<DeSerializersT>,
      DeSerializersT,
      ProductSizesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link rebateAndDeductionsAgreementDateSetupCriterion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REBATE_AND_DEDUCTIONS_AGREEMENT_DATE_SETUP_CRITERION: OneToOneLink<
      RebateAndDeductionsAgreementDateSetupCriterionItems<DeSerializersT>,
      DeSerializersT,
      RebateAndDeductionsAgreementDateSetupCriteriaApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ProductStylesApi<DeSerializersT>,
      ProductColorsApi<DeSerializersT>,
      UnitsOfMeasureApi<DeSerializersT>,
      ProductSizesApi<DeSerializersT>,
      RebateAndDeductionsAgreementDateSetupCriteriaApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PRODUCT_STYLE: new OneToOneLink('ProductStyle', this, linkedApis[0]),
      PRODUCT_COLOR: new OneToOneLink('ProductColor', this, linkedApis[1]),
      UNIT_OF_MEASURE: new OneToOneLink('UnitOfMeasure', this, linkedApis[2]),
      PRODUCT_SIZE: new OneToOneLink('ProductSize', this, linkedApis[3]),
      REBATE_AND_DEDUCTIONS_AGREEMENT_DATE_SETUP_CRITERION: new OneToOneLink(
        'RebateAndDeductionsAgreementDateSetupCriterion',
        this,
        linkedApis[4]
      )
    };
    return this;
  }

  entityConstructor = RebateAndDeductionsAgreementDateSetupCriterionItems;

  requestBuilder(): RebateAndDeductionsAgreementDateSetupCriterionItemsRequestBuilder<DeSerializersT> {
    return new RebateAndDeductionsAgreementDateSetupCriterionItemsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RebateAndDeductionsAgreementDateSetupCriterionItems<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RebateAndDeductionsAgreementDateSetupCriterionItems<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RebateAndDeductionsAgreementDateSetupCriterionItems<DeSerializersT>,
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
    typeof RebateAndDeductionsAgreementDateSetupCriterionItems,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RebateAndDeductionsAgreementDateSetupCriterionItems,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RebateAndDeductionsAgreementDateSetupCriterionItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    AGREEMENT_NUMBER: OrderableEdmTypeField<
      RebateAndDeductionsAgreementDateSetupCriterionItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    AGREEMENT_LINE_NUMBER: OrderableEdmTypeField<
      RebateAndDeductionsAgreementDateSetupCriterionItems<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REBATE_VALID_FROM_QUANTITY_AMOUNT: OrderableEdmTypeField<
      RebateAndDeductionsAgreementDateSetupCriterionItems<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REBATE_VALID_TO_QUANTITY_AMOUNT: OrderableEdmTypeField<
      RebateAndDeductionsAgreementDateSetupCriterionItems<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REBATE_AMOUNT: OrderableEdmTypeField<
      RebateAndDeductionsAgreementDateSetupCriterionItems<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REBATE_CALCULATION_METHOD: EnumField<
      RebateAndDeductionsAgreementDateSetupCriterionItems<DeSerializers>,
      DeSerializersT,
      TamRebateMethod,
      true,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      RebateAndDeductionsAgreementDateSetupCriterionItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      RebateAndDeductionsAgreementDateSetupCriterionItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_COLOR_ID: OrderableEdmTypeField<
      RebateAndDeductionsAgreementDateSetupCriterionItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_SIZE_ID: OrderableEdmTypeField<
      RebateAndDeductionsAgreementDateSetupCriterionItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_STYLE_ID: OrderableEdmTypeField<
      RebateAndDeductionsAgreementDateSetupCriterionItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    UNIT_SYMBOL: OrderableEdmTypeField<
      RebateAndDeductionsAgreementDateSetupCriterionItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MULTIPLE: OrderableEdmTypeField<
      RebateAndDeductionsAgreementDateSetupCriterionItems<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    QTY: OrderableEdmTypeField<
      RebateAndDeductionsAgreementDateSetupCriterionItems<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productStyle} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_STYLE: OneToOneLink<
      RebateAndDeductionsAgreementDateSetupCriterionItems<DeSerializersT>,
      DeSerializersT,
      ProductStylesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productColor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_COLOR: OneToOneLink<
      RebateAndDeductionsAgreementDateSetupCriterionItems<DeSerializersT>,
      DeSerializersT,
      ProductColorsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link unitOfMeasure} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UNIT_OF_MEASURE: OneToOneLink<
      RebateAndDeductionsAgreementDateSetupCriterionItems<DeSerializersT>,
      DeSerializersT,
      UnitsOfMeasureApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productSize} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_SIZE: OneToOneLink<
      RebateAndDeductionsAgreementDateSetupCriterionItems<DeSerializersT>,
      DeSerializersT,
      ProductSizesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link rebateAndDeductionsAgreementDateSetupCriterion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REBATE_AND_DEDUCTIONS_AGREEMENT_DATE_SETUP_CRITERION: OneToOneLink<
      RebateAndDeductionsAgreementDateSetupCriterionItems<DeSerializersT>,
      DeSerializersT,
      RebateAndDeductionsAgreementDateSetupCriteriaApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      RebateAndDeductionsAgreementDateSetupCriterionItems<DeSerializers>
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
         * Static representation of the {@link agreementNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGREEMENT_NUMBER: fieldBuilder.buildEdmTypeField(
          'AgreementNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link agreementLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGREEMENT_LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'AgreementLineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link rebateValidFromQuantityAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REBATE_VALID_FROM_QUANTITY_AMOUNT: fieldBuilder.buildEdmTypeField(
          'RebateValidFromQuantityAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link rebateValidToQuantityAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REBATE_VALID_TO_QUANTITY_AMOUNT: fieldBuilder.buildEdmTypeField(
          'RebateValidToQuantityAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link rebateAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REBATE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'RebateAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link rebateCalculationMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REBATE_CALCULATION_METHOD: fieldBuilder.buildEnumField(
          'RebateCalculationMethod',
          TamRebateMethod,
          true
        ),
        /**
         * Static representation of the {@link itemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemNumber',
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
         * Static representation of the {@link unitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'UnitSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link multiple} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MULTIPLE: fieldBuilder.buildEdmTypeField(
          'Multiple',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link qty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QTY: fieldBuilder.buildEdmTypeField('Qty', 'Edm.Decimal', false),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          RebateAndDeductionsAgreementDateSetupCriterionItems
        )
      };
    }

    return this._schema;
  }
}
