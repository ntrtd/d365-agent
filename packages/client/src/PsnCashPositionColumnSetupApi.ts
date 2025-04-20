/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PsnCashPositionColumnSetup } from './PsnCashPositionColumnSetup';
import { PsnCashPositionColumnSetupRequestBuilder } from './PsnCashPositionColumnSetupRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class PsnCashPositionColumnSetupApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<PsnCashPositionColumnSetup<DeSerializersT>, DeSerializersT>
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
  ): PsnCashPositionColumnSetupApi<DeSerializersT> {
    return new PsnCashPositionColumnSetupApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = PsnCashPositionColumnSetup;

  requestBuilder(): PsnCashPositionColumnSetupRequestBuilder<DeSerializersT> {
    return new PsnCashPositionColumnSetupRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PsnCashPositionColumnSetup<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PsnCashPositionColumnSetup<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PsnCashPositionColumnSetup<DeSerializersT>,
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
    typeof PsnCashPositionColumnSetup,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PsnCashPositionColumnSetup,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      PsnCashPositionColumnSetup<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    KEY: OrderableEdmTypeField<
      PsnCashPositionColumnSetup<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    COLUMN_THREE_LABEL: OrderableEdmTypeField<
      PsnCashPositionColumnSetup<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COLUMN_FOUR_RANGE: OrderableEdmTypeField<
      PsnCashPositionColumnSetup<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COLUMN_FIVE_LABEL: OrderableEdmTypeField<
      PsnCashPositionColumnSetup<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COLUMN_SEVEN_LABEL: OrderableEdmTypeField<
      PsnCashPositionColumnSetup<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COLUMN_EIGHT_LABEL: OrderableEdmTypeField<
      PsnCashPositionColumnSetup<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COLUMN_TWO_RANGE: OrderableEdmTypeField<
      PsnCashPositionColumnSetup<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COLUMN_FOUR_DEBIT_RANGE: OrderableEdmTypeField<
      PsnCashPositionColumnSetup<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COLUMN_TWO_DEBIT_RANGE: OrderableEdmTypeField<
      PsnCashPositionColumnSetup<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COLUMN_ONE_RANGE: OrderableEdmTypeField<
      PsnCashPositionColumnSetup<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COLUMN_THREE_CREDIT_RANGE: OrderableEdmTypeField<
      PsnCashPositionColumnSetup<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COLUMN_SIX_DEBIT_RANGE: OrderableEdmTypeField<
      PsnCashPositionColumnSetup<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COLUMN_FOUR_CREDIT_RANGE: OrderableEdmTypeField<
      PsnCashPositionColumnSetup<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COLUMN_SIX_RANGE: OrderableEdmTypeField<
      PsnCashPositionColumnSetup<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COLUMN_SIX_CREDIT_RANGE: OrderableEdmTypeField<
      PsnCashPositionColumnSetup<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COLUMN_THREE_DEBIT_RANGE: OrderableEdmTypeField<
      PsnCashPositionColumnSetup<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COLUMN_SIX_LABEL: OrderableEdmTypeField<
      PsnCashPositionColumnSetup<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COLUMN_FOUR_LABEL: OrderableEdmTypeField<
      PsnCashPositionColumnSetup<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COLUMN_ONE_LABEL: OrderableEdmTypeField<
      PsnCashPositionColumnSetup<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COLUMN_SEVEN_RANGE: OrderableEdmTypeField<
      PsnCashPositionColumnSetup<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COLUMN_THREE_RANGE: OrderableEdmTypeField<
      PsnCashPositionColumnSetup<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COLUMN_TWO_LABEL: OrderableEdmTypeField<
      PsnCashPositionColumnSetup<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COLUMN_SEVEN_DEBIT_RANGE: OrderableEdmTypeField<
      PsnCashPositionColumnSetup<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COLUMN_TWO_CREDIT_RANGE: OrderableEdmTypeField<
      PsnCashPositionColumnSetup<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COLUMN_SEVEN_CREDIT_RANGE: OrderableEdmTypeField<
      PsnCashPositionColumnSetup<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<PsnCashPositionColumnSetup<DeSerializers>>;
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
         * Static representation of the {@link columnThreeLabel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLUMN_THREE_LABEL: fieldBuilder.buildEdmTypeField(
          'ColumnThreeLabel',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link columnFourRange} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLUMN_FOUR_RANGE: fieldBuilder.buildEdmTypeField(
          'ColumnFourRange',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link columnFiveLabel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLUMN_FIVE_LABEL: fieldBuilder.buildEdmTypeField(
          'ColumnFiveLabel',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link columnSevenLabel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLUMN_SEVEN_LABEL: fieldBuilder.buildEdmTypeField(
          'ColumnSevenLabel',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link columnEightLabel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLUMN_EIGHT_LABEL: fieldBuilder.buildEdmTypeField(
          'ColumnEightLabel',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link columnTwoRange} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLUMN_TWO_RANGE: fieldBuilder.buildEdmTypeField(
          'ColumnTwoRange',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link columnFourDebitRange} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLUMN_FOUR_DEBIT_RANGE: fieldBuilder.buildEdmTypeField(
          'ColumnFourDebitRange',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link columnTwoDebitRange} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLUMN_TWO_DEBIT_RANGE: fieldBuilder.buildEdmTypeField(
          'ColumnTwoDebitRange',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link columnOneRange} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLUMN_ONE_RANGE: fieldBuilder.buildEdmTypeField(
          'ColumnOneRange',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link columnThreeCreditRange} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLUMN_THREE_CREDIT_RANGE: fieldBuilder.buildEdmTypeField(
          'ColumnThreeCreditRange',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link columnSixDebitRange} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLUMN_SIX_DEBIT_RANGE: fieldBuilder.buildEdmTypeField(
          'ColumnSixDebitRange',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link columnFourCreditRange} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLUMN_FOUR_CREDIT_RANGE: fieldBuilder.buildEdmTypeField(
          'ColumnFourCreditRange',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link columnSixRange} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLUMN_SIX_RANGE: fieldBuilder.buildEdmTypeField(
          'ColumnSixRange',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link columnSixCreditRange} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLUMN_SIX_CREDIT_RANGE: fieldBuilder.buildEdmTypeField(
          'ColumnSixCreditRange',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link columnThreeDebitRange} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLUMN_THREE_DEBIT_RANGE: fieldBuilder.buildEdmTypeField(
          'ColumnThreeDebitRange',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link columnSixLabel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLUMN_SIX_LABEL: fieldBuilder.buildEdmTypeField(
          'ColumnSixLabel',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link columnFourLabel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLUMN_FOUR_LABEL: fieldBuilder.buildEdmTypeField(
          'ColumnFourLabel',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link columnOneLabel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLUMN_ONE_LABEL: fieldBuilder.buildEdmTypeField(
          'ColumnOneLabel',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link columnSevenRange} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLUMN_SEVEN_RANGE: fieldBuilder.buildEdmTypeField(
          'ColumnSevenRange',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link columnThreeRange} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLUMN_THREE_RANGE: fieldBuilder.buildEdmTypeField(
          'ColumnThreeRange',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link columnTwoLabel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLUMN_TWO_LABEL: fieldBuilder.buildEdmTypeField(
          'ColumnTwoLabel',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link columnSevenDebitRange} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLUMN_SEVEN_DEBIT_RANGE: fieldBuilder.buildEdmTypeField(
          'ColumnSevenDebitRange',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link columnTwoCreditRange} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLUMN_TWO_CREDIT_RANGE: fieldBuilder.buildEdmTypeField(
          'ColumnTwoCreditRange',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link columnSevenCreditRange} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLUMN_SEVEN_CREDIT_RANGE: fieldBuilder.buildEdmTypeField(
          'ColumnSevenCreditRange',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PsnCashPositionColumnSetup)
      };
    }

    return this._schema;
  }
}
