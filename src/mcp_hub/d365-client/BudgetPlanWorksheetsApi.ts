/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BudgetPlanWorksheets } from './BudgetPlanWorksheets';
import { BudgetPlanWorksheetsRequestBuilder } from './BudgetPlanWorksheetsRequestBuilder';
import { NoYes } from './NoYes';
import { BudgetClass } from './BudgetClass';
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
export class BudgetPlanWorksheetsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BudgetPlanWorksheets<DeSerializersT>, DeSerializersT>
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
  ): BudgetPlanWorksheetsApi<DeSerializersT> {
    return new BudgetPlanWorksheetsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = BudgetPlanWorksheets;

  requestBuilder(): BudgetPlanWorksheetsRequestBuilder<DeSerializersT> {
    return new BudgetPlanWorksheetsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BudgetPlanWorksheets<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BudgetPlanWorksheets<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BudgetPlanWorksheets<DeSerializersT>,
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
    typeof BudgetPlanWorksheets,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BudgetPlanWorksheets,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DOCUMENT_NUMBER: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LAYOUT: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSACTION_CURRENCY_AMOUNT_2: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DIMENSION_NAME_3: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_CURRENCY_CODE: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_CURRENCY_AMOUNT_33: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANSACTION_CURRENCY_AMOUNT_32: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANSACTION_CURRENCY_AMOUNT_31: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANSACTION_CURRENCY_AMOUNT_30: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANSACTION_CURRENCY_AMOUNT_36: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANSACTION_CURRENCY_AMOUNT_35: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DIMENSION_NAME_9: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_CURRENCY_AMOUNT_34: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROPOSED_ASSET_DESCRIPTION: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSITION_ID: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUANTITY_11: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    QUANTITY_31: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    QUANTITY_21: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DIMENSION_NAME_6: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUANTITY_17: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SOURCE_DATA_AREA_ID: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUANTITY_27: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANSACTION_CURRENCY_AMOUNT_19: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANSACTION_CURRENCY_AMOUNT_18: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DIMENSION_NAME_2: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_CURRENCY_AMOUNT_13: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANSACTION_CURRENCY_AMOUNT_12: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANSACTION_CURRENCY_AMOUNT_11: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANSACTION_CURRENCY_AMOUNT_10: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANSACTION_CURRENCY_AMOUNT_17: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ASSET_ID: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_CURRENCY_AMOUNT_16: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANSACTION_CURRENCY_AMOUNT_15: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANSACTION_CURRENCY_AMOUNT_14: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    QUANTITY_13: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    QUANTITY_33: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    QUANTITY_23: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    QUANTITY_5: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    QUANTITY_4: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    QUANTITY_7: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    QUANTITY_6: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    QUANTITY_1: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    QUANTITY_3: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    QUANTITY_2: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    QUANTITY_9: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    QUANTITY_8: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROJECT_ID: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUANTITY_16: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    QUANTITY_36: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    QUANTITY_26: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DIMENSION_VALUE_11: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_CURRENCY_AMOUNT_7: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANSACTION_CURRENCY_AMOUNT_8: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DIMENSION_NAME_4: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_ID_DESCRIPTION: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIMENSION_VALUE_1: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIMENSION_VALUE_3: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIMENSION_VALUE_2: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIMENSION_VALUE_5: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIMENSION_VALUE_4: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIMENSION_VALUE_7: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIMENSION_VALUE_6: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIMENSION_VALUE_9: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIMENSION_VALUE_8: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUANTITY_12: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    QUANTITY_32: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    QUANTITY_22: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANSACTION_CURRENCY_AMOUNT_3: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    QUANTITY_18: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    QUANTITY_28: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANSACTION_CURRENCY_AMOUNT_5: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROPOSED_PROJECT_DESCRIPTION: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_NEW_REQUEST: EnumField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    QUANTITY_14: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    QUANTITY_34: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    QUANTITY_24: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANSACTION_CURRENCY_AMOUNT_1: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    POSITION_DESCRIPTION: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_CURRENCY_AMOUNT_29: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANSACTION_CURRENCY_AMOUNT_28: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BUDGET_CLASS: EnumField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      BudgetClass,
      true,
      true
    >;
    TRANSACTION_CURRENCY_AMOUNT_23: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANSACTION_CURRENCY_AMOUNT_22: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANSACTION_CURRENCY_AMOUNT_21: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANSACTION_CURRENCY_AMOUNT_20: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANSACTION_CURRENCY_AMOUNT_27: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANSACTION_CURRENCY_AMOUNT_26: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANSACTION_CURRENCY_AMOUNT_25: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DIMENSION_NAME_8: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_CURRENCY_AMOUNT_24: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ASSET_ID_DESCRIPTION: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUANTITY_10: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    QUANTITY_30: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    QUANTITY_20: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANSACTION_CURRENCY_AMOUNT_4: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROPOSED_ASSET_NAME: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROPOSED_PROJECT_NAME: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMMENT: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_CURRENCY_AMOUNT_9: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    POSITION_WORKER_NAME: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIMENSION_NAME_5: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIMENSION_NAME_11: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIMENSION_NAME_10: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIMENSION_NAME_1: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUANTITY_19: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_RECURRING: EnumField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    QUANTITY_29: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DIMENSION_VALUE_10: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_CURRENCY_AMOUNT_6: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DIMENSION_NAME_7: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUANTITY_15: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    QUANTITY_35: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    QUANTITY_25: OrderableEdmTypeField<
      BudgetPlanWorksheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<BudgetPlanWorksheets<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link documentNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_NUMBER: fieldBuilder.buildEdmTypeField(
          'DocumentNumber',
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
         * Static representation of the {@link layout} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAYOUT: fieldBuilder.buildEdmTypeField('Layout', 'Edm.String', false),
        /**
         * Static representation of the {@link transactionCurrencyAmount2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CURRENCY_AMOUNT_2: fieldBuilder.buildEdmTypeField(
          'TransactionCurrencyAmount2',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link dimensionName3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_NAME_3: fieldBuilder.buildEdmTypeField(
          'DimensionName3',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transactionCurrencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'TransactionCurrencyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transactionCurrencyAmount33} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CURRENCY_AMOUNT_33: fieldBuilder.buildEdmTypeField(
          'TransactionCurrencyAmount33',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link transactionCurrencyAmount32} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CURRENCY_AMOUNT_32: fieldBuilder.buildEdmTypeField(
          'TransactionCurrencyAmount32',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link transactionCurrencyAmount31} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CURRENCY_AMOUNT_31: fieldBuilder.buildEdmTypeField(
          'TransactionCurrencyAmount31',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link transactionCurrencyAmount30} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CURRENCY_AMOUNT_30: fieldBuilder.buildEdmTypeField(
          'TransactionCurrencyAmount30',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link transactionCurrencyAmount36} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CURRENCY_AMOUNT_36: fieldBuilder.buildEdmTypeField(
          'TransactionCurrencyAmount36',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link transactionCurrencyAmount35} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CURRENCY_AMOUNT_35: fieldBuilder.buildEdmTypeField(
          'TransactionCurrencyAmount35',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link dimensionName9} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_NAME_9: fieldBuilder.buildEdmTypeField(
          'DimensionName9',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transactionCurrencyAmount34} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CURRENCY_AMOUNT_34: fieldBuilder.buildEdmTypeField(
          'TransactionCurrencyAmount34',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link proposedAssetDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPOSED_ASSET_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'ProposedAssetDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link positionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSITION_ID: fieldBuilder.buildEdmTypeField(
          'PositionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link quantity11} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY_11: fieldBuilder.buildEdmTypeField(
          'Quantity11',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link quantity31} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY_31: fieldBuilder.buildEdmTypeField(
          'Quantity31',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link quantity21} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY_21: fieldBuilder.buildEdmTypeField(
          'Quantity21',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link dimensionName6} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_NAME_6: fieldBuilder.buildEdmTypeField(
          'DimensionName6',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link quantity17} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY_17: fieldBuilder.buildEdmTypeField(
          'Quantity17',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link sourceDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'SourceDataAreaId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link quantity27} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY_27: fieldBuilder.buildEdmTypeField(
          'Quantity27',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link transactionCurrencyAmount19} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CURRENCY_AMOUNT_19: fieldBuilder.buildEdmTypeField(
          'TransactionCurrencyAmount19',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link transactionCurrencyAmount18} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CURRENCY_AMOUNT_18: fieldBuilder.buildEdmTypeField(
          'TransactionCurrencyAmount18',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link dimensionName2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_NAME_2: fieldBuilder.buildEdmTypeField(
          'DimensionName2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transactionCurrencyAmount13} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CURRENCY_AMOUNT_13: fieldBuilder.buildEdmTypeField(
          'TransactionCurrencyAmount13',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link transactionCurrencyAmount12} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CURRENCY_AMOUNT_12: fieldBuilder.buildEdmTypeField(
          'TransactionCurrencyAmount12',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link transactionCurrencyAmount11} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CURRENCY_AMOUNT_11: fieldBuilder.buildEdmTypeField(
          'TransactionCurrencyAmount11',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link transactionCurrencyAmount10} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CURRENCY_AMOUNT_10: fieldBuilder.buildEdmTypeField(
          'TransactionCurrencyAmount10',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link transactionCurrencyAmount17} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CURRENCY_AMOUNT_17: fieldBuilder.buildEdmTypeField(
          'TransactionCurrencyAmount17',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link assetId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_ID: fieldBuilder.buildEdmTypeField('AssetId', 'Edm.String', true),
        /**
         * Static representation of the {@link transactionCurrencyAmount16} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CURRENCY_AMOUNT_16: fieldBuilder.buildEdmTypeField(
          'TransactionCurrencyAmount16',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link transactionCurrencyAmount15} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CURRENCY_AMOUNT_15: fieldBuilder.buildEdmTypeField(
          'TransactionCurrencyAmount15',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link transactionCurrencyAmount14} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CURRENCY_AMOUNT_14: fieldBuilder.buildEdmTypeField(
          'TransactionCurrencyAmount14',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link quantity13} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY_13: fieldBuilder.buildEdmTypeField(
          'Quantity13',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link quantity33} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY_33: fieldBuilder.buildEdmTypeField(
          'Quantity33',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link quantity23} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY_23: fieldBuilder.buildEdmTypeField(
          'Quantity23',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link quantity5} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY_5: fieldBuilder.buildEdmTypeField(
          'Quantity5',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link quantity4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY_4: fieldBuilder.buildEdmTypeField(
          'Quantity4',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link quantity7} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY_7: fieldBuilder.buildEdmTypeField(
          'Quantity7',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link quantity6} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY_6: fieldBuilder.buildEdmTypeField(
          'Quantity6',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link quantity1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY_1: fieldBuilder.buildEdmTypeField(
          'Quantity1',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link quantity3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY_3: fieldBuilder.buildEdmTypeField(
          'Quantity3',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link quantity2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY_2: fieldBuilder.buildEdmTypeField(
          'Quantity2',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link quantity9} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY_9: fieldBuilder.buildEdmTypeField(
          'Quantity9',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link quantity8} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY_8: fieldBuilder.buildEdmTypeField(
          'Quantity8',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link projectId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_ID: fieldBuilder.buildEdmTypeField(
          'ProjectId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link quantity16} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY_16: fieldBuilder.buildEdmTypeField(
          'Quantity16',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link quantity36} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY_36: fieldBuilder.buildEdmTypeField(
          'Quantity36',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link quantity26} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY_26: fieldBuilder.buildEdmTypeField(
          'Quantity26',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link dimensionValue11} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_VALUE_11: fieldBuilder.buildEdmTypeField(
          'DimensionValue11',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transactionCurrencyAmount7} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CURRENCY_AMOUNT_7: fieldBuilder.buildEdmTypeField(
          'TransactionCurrencyAmount7',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link transactionCurrencyAmount8} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CURRENCY_AMOUNT_8: fieldBuilder.buildEdmTypeField(
          'TransactionCurrencyAmount8',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link dimensionName4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_NAME_4: fieldBuilder.buildEdmTypeField(
          'DimensionName4',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projectIdDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_ID_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'ProjectIdDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dimensionValue1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_VALUE_1: fieldBuilder.buildEdmTypeField(
          'DimensionValue1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dimensionValue3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_VALUE_3: fieldBuilder.buildEdmTypeField(
          'DimensionValue3',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dimensionValue2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_VALUE_2: fieldBuilder.buildEdmTypeField(
          'DimensionValue2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dimensionValue5} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_VALUE_5: fieldBuilder.buildEdmTypeField(
          'DimensionValue5',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dimensionValue4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_VALUE_4: fieldBuilder.buildEdmTypeField(
          'DimensionValue4',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dimensionValue7} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_VALUE_7: fieldBuilder.buildEdmTypeField(
          'DimensionValue7',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dimensionValue6} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_VALUE_6: fieldBuilder.buildEdmTypeField(
          'DimensionValue6',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dimensionValue9} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_VALUE_9: fieldBuilder.buildEdmTypeField(
          'DimensionValue9',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dimensionValue8} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_VALUE_8: fieldBuilder.buildEdmTypeField(
          'DimensionValue8',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link quantity12} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY_12: fieldBuilder.buildEdmTypeField(
          'Quantity12',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link quantity32} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY_32: fieldBuilder.buildEdmTypeField(
          'Quantity32',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link quantity22} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY_22: fieldBuilder.buildEdmTypeField(
          'Quantity22',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link transactionCurrencyAmount3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CURRENCY_AMOUNT_3: fieldBuilder.buildEdmTypeField(
          'TransactionCurrencyAmount3',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link quantity18} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY_18: fieldBuilder.buildEdmTypeField(
          'Quantity18',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link quantity28} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY_28: fieldBuilder.buildEdmTypeField(
          'Quantity28',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link transactionCurrencyAmount5} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CURRENCY_AMOUNT_5: fieldBuilder.buildEdmTypeField(
          'TransactionCurrencyAmount5',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link proposedProjectDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPOSED_PROJECT_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'ProposedProjectDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isNewRequest} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_NEW_REQUEST: fieldBuilder.buildEnumField(
          'IsNewRequest',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link quantity14} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY_14: fieldBuilder.buildEdmTypeField(
          'Quantity14',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link quantity34} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY_34: fieldBuilder.buildEdmTypeField(
          'Quantity34',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link quantity24} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY_24: fieldBuilder.buildEdmTypeField(
          'Quantity24',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link transactionCurrencyAmount1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CURRENCY_AMOUNT_1: fieldBuilder.buildEdmTypeField(
          'TransactionCurrencyAmount1',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link positionDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSITION_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PositionDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transactionCurrencyAmount29} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CURRENCY_AMOUNT_29: fieldBuilder.buildEdmTypeField(
          'TransactionCurrencyAmount29',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link transactionCurrencyAmount28} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CURRENCY_AMOUNT_28: fieldBuilder.buildEdmTypeField(
          'TransactionCurrencyAmount28',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link budgetClass} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_CLASS: fieldBuilder.buildEnumField(
          'BudgetClass',
          BudgetClass,
          true
        ),
        /**
         * Static representation of the {@link transactionCurrencyAmount23} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CURRENCY_AMOUNT_23: fieldBuilder.buildEdmTypeField(
          'TransactionCurrencyAmount23',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link transactionCurrencyAmount22} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CURRENCY_AMOUNT_22: fieldBuilder.buildEdmTypeField(
          'TransactionCurrencyAmount22',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link transactionCurrencyAmount21} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CURRENCY_AMOUNT_21: fieldBuilder.buildEdmTypeField(
          'TransactionCurrencyAmount21',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link transactionCurrencyAmount20} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CURRENCY_AMOUNT_20: fieldBuilder.buildEdmTypeField(
          'TransactionCurrencyAmount20',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link transactionCurrencyAmount27} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CURRENCY_AMOUNT_27: fieldBuilder.buildEdmTypeField(
          'TransactionCurrencyAmount27',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link transactionCurrencyAmount26} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CURRENCY_AMOUNT_26: fieldBuilder.buildEdmTypeField(
          'TransactionCurrencyAmount26',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link transactionCurrencyAmount25} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CURRENCY_AMOUNT_25: fieldBuilder.buildEdmTypeField(
          'TransactionCurrencyAmount25',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link dimensionName8} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_NAME_8: fieldBuilder.buildEdmTypeField(
          'DimensionName8',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transactionCurrencyAmount24} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CURRENCY_AMOUNT_24: fieldBuilder.buildEdmTypeField(
          'TransactionCurrencyAmount24',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link assetIdDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_ID_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'AssetIdDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link quantity10} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY_10: fieldBuilder.buildEdmTypeField(
          'Quantity10',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link quantity30} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY_30: fieldBuilder.buildEdmTypeField(
          'Quantity30',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link quantity20} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY_20: fieldBuilder.buildEdmTypeField(
          'Quantity20',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link transactionCurrencyAmount4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CURRENCY_AMOUNT_4: fieldBuilder.buildEdmTypeField(
          'TransactionCurrencyAmount4',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link proposedAssetName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPOSED_ASSET_NAME: fieldBuilder.buildEdmTypeField(
          'ProposedAssetName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link proposedProjectName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPOSED_PROJECT_NAME: fieldBuilder.buildEdmTypeField(
          'ProposedProjectName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link comment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMENT: fieldBuilder.buildEdmTypeField('Comment', 'Edm.String', true),
        /**
         * Static representation of the {@link transactionCurrencyAmount9} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CURRENCY_AMOUNT_9: fieldBuilder.buildEdmTypeField(
          'TransactionCurrencyAmount9',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link positionWorkerName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSITION_WORKER_NAME: fieldBuilder.buildEdmTypeField(
          'PositionWorkerName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dimensionName5} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_NAME_5: fieldBuilder.buildEdmTypeField(
          'DimensionName5',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dimensionName11} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_NAME_11: fieldBuilder.buildEdmTypeField(
          'DimensionName11',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dimensionName10} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_NAME_10: fieldBuilder.buildEdmTypeField(
          'DimensionName10',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dimensionName1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_NAME_1: fieldBuilder.buildEdmTypeField(
          'DimensionName1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link quantity19} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY_19: fieldBuilder.buildEdmTypeField(
          'Quantity19',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isRecurring} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_RECURRING: fieldBuilder.buildEnumField('IsRecurring', NoYes, true),
        /**
         * Static representation of the {@link quantity29} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY_29: fieldBuilder.buildEdmTypeField(
          'Quantity29',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link dimensionValue10} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_VALUE_10: fieldBuilder.buildEdmTypeField(
          'DimensionValue10',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transactionCurrencyAmount6} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CURRENCY_AMOUNT_6: fieldBuilder.buildEdmTypeField(
          'TransactionCurrencyAmount6',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link dimensionName7} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_NAME_7: fieldBuilder.buildEdmTypeField(
          'DimensionName7',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link quantity15} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY_15: fieldBuilder.buildEdmTypeField(
          'Quantity15',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link quantity35} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY_35: fieldBuilder.buildEdmTypeField(
          'Quantity35',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link quantity25} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY_25: fieldBuilder.buildEdmTypeField(
          'Quantity25',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BudgetPlanWorksheets)
      };
    }

    return this._schema;
  }
}
