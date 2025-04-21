/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CashControlConfigurations } from './CashControlConfigurations';
import { CashControlConfigurationsRequestBuilder } from './CashControlConfigurationsRequestBuilder';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
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
export class CashControlConfigurationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<CashControlConfigurations<DeSerializersT>, DeSerializersT>
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
  ): CashControlConfigurationsApi<DeSerializersT> {
    return new CashControlConfigurationsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link apAccountDimension} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AP_ACCOUNT_DIMENSION: OneToOneLink<
      CashControlConfigurations<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [DimensionCombinationsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      AP_ACCOUNT_DIMENSION: new OneToOneLink(
        'APAccountDimension',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = CashControlConfigurations;

  requestBuilder(): CashControlConfigurationsRequestBuilder<DeSerializersT> {
    return new CashControlConfigurationsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CashControlConfigurations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CashControlConfigurations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CashControlConfigurations<DeSerializersT>,
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
    typeof CashControlConfigurations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CashControlConfigurations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CASH_ACCOUNT_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      CashControlConfigurations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARTICIPATE_IN_CASH_CONTROL: EnumField<
      CashControlConfigurations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ACCOUNTS_PAYABLE_ACCOUNT_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      CashControlConfigurations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATA_AREA_ID: OrderableEdmTypeField<
      CashControlConfigurations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    THRESHOLD_AMOUNT: OrderableEdmTypeField<
      CashControlConfigurations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link apAccountDimension} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AP_ACCOUNT_DIMENSION: OneToOneLink<
      CashControlConfigurations<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CashControlConfigurations<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link cashAccountLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_ACCOUNT_LEDGER_DIMENSION_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'CashAccountLedgerDimensionDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link participateInCashControl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTICIPATE_IN_CASH_CONTROL: fieldBuilder.buildEnumField(
          'ParticipateInCashControl',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link accountsPayableAccountLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTS_PAYABLE_ACCOUNT_LEDGER_DIMENSION_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'AccountsPayableAccountLedgerDimensionDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link dataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'dataAreaId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link thresholdAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        THRESHOLD_AMOUNT: fieldBuilder.buildEdmTypeField(
          'ThresholdAmount',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CashControlConfigurations)
      };
    }

    return this._schema;
  }
}
