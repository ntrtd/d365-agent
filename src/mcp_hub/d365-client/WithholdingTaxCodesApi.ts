/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WithholdingTaxCodes } from './WithholdingTaxCodes';
import { WithholdingTaxCodesRequestBuilder } from './WithholdingTaxCodesRequestBuilder';
import { WithholdingTaxCodeLimitsApi } from './WithholdingTaxCodeLimitsApi';
import { WithholdingTaxCodeValuesApi } from './WithholdingTaxCodeValuesApi';
import { WithholdingGroupDatasApi } from './WithholdingGroupDatasApi';
import { WithholdLedgerAccountGroupsApi } from './WithholdLedgerAccountGroupsApi';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { WithholdingPeriodsApi } from './WithholdingPeriodsApi';
import { NoYes } from './NoYes';
import { TaxWithholdBaseType } from './TaxWithholdBaseType';
import { TaxWithholdCodeTypeIn } from './TaxWithholdCodeTypeIn';
import { TaxWithholdTypeBr } from './TaxWithholdTypeBr';
import { RoundOffType } from './RoundOffType';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class WithholdingTaxCodesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<WithholdingTaxCodes<DeSerializersT>, DeSerializersT>
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
  ): WithholdingTaxCodesApi<DeSerializersT> {
    return new WithholdingTaxCodesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link withholdingTaxCodeLimit} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WITHHOLDING_TAX_CODE_LIMIT: OneToManyLink<
      WithholdingTaxCodes<DeSerializersT>,
      DeSerializersT,
      WithholdingTaxCodeLimitsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link withholdingTaxCodeValue} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WITHHOLDING_TAX_CODE_VALUE: OneToManyLink<
      WithholdingTaxCodes<DeSerializersT>,
      DeSerializersT,
      WithholdingTaxCodeValuesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link withholdingGroupData} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WITHHOLDING_GROUP_DATA: OneToManyLink<
      WithholdingTaxCodes<DeSerializersT>,
      DeSerializersT,
      WithholdingGroupDatasApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link withholdLedgerAccountGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WITHHOLD_LEDGER_ACCOUNT_GROUP: OneToOneLink<
      WithholdingTaxCodes<DeSerializersT>,
      DeSerializersT,
      WithholdLedgerAccountGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      WithholdingTaxCodes<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link withholdingPeriod} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WITHHOLDING_PERIOD: OneToOneLink<
      WithholdingTaxCodes<DeSerializersT>,
      DeSerializersT,
      WithholdingPeriodsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      WithholdingTaxCodeLimitsApi<DeSerializersT>,
      WithholdingTaxCodeValuesApi<DeSerializersT>,
      WithholdingGroupDatasApi<DeSerializersT>,
      WithholdLedgerAccountGroupsApi<DeSerializersT>,
      DimensionCombinationsApi<DeSerializersT>,
      WithholdingPeriodsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      WITHHOLDING_TAX_CODE_LIMIT: new OneToManyLink(
        'WithholdingTaxCodeLimit',
        this,
        linkedApis[0]
      ),
      WITHHOLDING_TAX_CODE_VALUE: new OneToManyLink(
        'WithholdingTaxCodeValue',
        this,
        linkedApis[1]
      ),
      WITHHOLDING_GROUP_DATA: new OneToManyLink(
        'WithholdingGroupData',
        this,
        linkedApis[2]
      ),
      WITHHOLD_LEDGER_ACCOUNT_GROUP: new OneToOneLink(
        'WithholdLedgerAccountGroup',
        this,
        linkedApis[3]
      ),
      DIMENSION_COMBINATION: new OneToOneLink(
        'DimensionCombination',
        this,
        linkedApis[4]
      ),
      WITHHOLDING_PERIOD: new OneToOneLink(
        'WithholdingPeriod',
        this,
        linkedApis[5]
      )
    };
    return this;
  }

  entityConstructor = WithholdingTaxCodes;

  requestBuilder(): WithholdingTaxCodesRequestBuilder<DeSerializersT> {
    return new WithholdingTaxCodesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    WithholdingTaxCodes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<WithholdingTaxCodes<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    WithholdingTaxCodes<DeSerializersT>,
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
    typeof WithholdingTaxCodes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WithholdingTaxCodes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      WithholdingTaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WITHHOLDING_CODE: OrderableEdmTypeField<
      WithholdingTaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    APPLY_THRESHOLD: EnumField<
      WithholdingTaxCodes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WITHHOLDING_TAX_BASE: EnumField<
      WithholdingTaxCodes<DeSerializers>,
      DeSerializersT,
      TaxWithholdBaseType,
      true,
      true
    >;
    WITHHOLDING_TAX_NAME: OrderableEdmTypeField<
      WithholdingTaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WITHHOLDING_TAX_COMPONENT: OrderableEdmTypeField<
      WithholdingTaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_CODE_ID: OrderableEdmTypeField<
      WithholdingTaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SETTLEMENT_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      WithholdingTaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVABLE_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      WithholdingTaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAIN_ACCOUNT_ID_DISPLAY_VALUE: OrderableEdmTypeField<
      WithholdingTaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WITHHOLDING_COMPONENT_GROUP: OrderableEdmTypeField<
      WithholdingTaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_TYPE: EnumField<
      WithholdingTaxCodes<DeSerializers>,
      DeSerializersT,
      TaxWithholdCodeTypeIn,
      true,
      true
    >;
    BRAZILIAN_TAX_WITHHOLD_PERIOD: OrderableEdmTypeField<
      WithholdingTaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_WITHHOLD_ACCOUNT_GROUP: OrderableEdmTypeField<
      WithholdingTaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WITHHOLDING_TAX_ROUND_OFF: OrderableEdmTypeField<
      WithholdingTaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BRAZILIAN_TAX_WITHHOLD_TYPE: EnumField<
      WithholdingTaxCodes<DeSerializers>,
      DeSerializersT,
      TaxWithholdTypeBr,
      true,
      true
    >;
    TAX_WITHHOLD_PERIOD: OrderableEdmTypeField<
      WithholdingTaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WITHHOLDING_TAX_ROUND_OFF_TYPE: EnumField<
      WithholdingTaxCodes<DeSerializers>,
      DeSerializersT,
      RoundOffType,
      true,
      true
    >;
    SETTLEMENT_PERIOD: OrderableEdmTypeField<
      WithholdingTaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WITHHOLDING_TAX_RECEIVABLE_DISPLAY_VALUE: OrderableEdmTypeField<
      WithholdingTaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link withholdingTaxCodeLimit} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WITHHOLDING_TAX_CODE_LIMIT: OneToManyLink<
      WithholdingTaxCodes<DeSerializersT>,
      DeSerializersT,
      WithholdingTaxCodeLimitsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link withholdingTaxCodeValue} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WITHHOLDING_TAX_CODE_VALUE: OneToManyLink<
      WithholdingTaxCodes<DeSerializersT>,
      DeSerializersT,
      WithholdingTaxCodeValuesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link withholdingGroupData} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WITHHOLDING_GROUP_DATA: OneToManyLink<
      WithholdingTaxCodes<DeSerializersT>,
      DeSerializersT,
      WithholdingGroupDatasApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link withholdLedgerAccountGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WITHHOLD_LEDGER_ACCOUNT_GROUP: OneToOneLink<
      WithholdingTaxCodes<DeSerializersT>,
      DeSerializersT,
      WithholdLedgerAccountGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      WithholdingTaxCodes<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link withholdingPeriod} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WITHHOLDING_PERIOD: OneToOneLink<
      WithholdingTaxCodes<DeSerializersT>,
      DeSerializersT,
      WithholdingPeriodsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<WithholdingTaxCodes<DeSerializers>>;
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
         * Static representation of the {@link withholdingCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WITHHOLDING_CODE: fieldBuilder.buildEdmTypeField(
          'WithholdingCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link applyThreshold} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPLY_THRESHOLD: fieldBuilder.buildEnumField(
          'ApplyThreshold',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link withholdingTaxBase} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WITHHOLDING_TAX_BASE: fieldBuilder.buildEnumField(
          'WithholdingTaxBase',
          TaxWithholdBaseType,
          true
        ),
        /**
         * Static representation of the {@link withholdingTaxName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WITHHOLDING_TAX_NAME: fieldBuilder.buildEdmTypeField(
          'WithholdingTaxName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link withholdingTaxComponent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WITHHOLDING_TAX_COMPONENT: fieldBuilder.buildEdmTypeField(
          'WithholdingTaxComponent',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link currencyCodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_CODE_ID: fieldBuilder.buildEdmTypeField(
          'CurrencyCodeID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link settlementAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETTLEMENT_ACCOUNT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'SettlementAccountDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receivableAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVABLE_ACCOUNT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'ReceivableAccountDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mainAccountIdDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAIN_ACCOUNT_ID_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'MainAccountIdDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link withholdingComponentGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WITHHOLDING_COMPONENT_GROUP: fieldBuilder.buildEdmTypeField(
          'WithholdingComponentGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_TYPE: fieldBuilder.buildEnumField(
          'TaxType',
          TaxWithholdCodeTypeIn,
          true
        ),
        /**
         * Static representation of the {@link brazilianTaxWithholdPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BRAZILIAN_TAX_WITHHOLD_PERIOD: fieldBuilder.buildEdmTypeField(
          'BrazilianTaxWithholdPeriod',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxWithholdAccountGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_WITHHOLD_ACCOUNT_GROUP: fieldBuilder.buildEdmTypeField(
          'TaxWithholdAccountGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link withholdingTaxRoundOff} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WITHHOLDING_TAX_ROUND_OFF: fieldBuilder.buildEdmTypeField(
          'WithholdingTaxRoundOff',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link brazilianTaxWithholdType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BRAZILIAN_TAX_WITHHOLD_TYPE: fieldBuilder.buildEnumField(
          'BrazilianTaxWithholdType',
          TaxWithholdTypeBr,
          true
        ),
        /**
         * Static representation of the {@link taxWithholdPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_WITHHOLD_PERIOD: fieldBuilder.buildEdmTypeField(
          'TaxWithholdPeriod',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link withholdingTaxRoundOffType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WITHHOLDING_TAX_ROUND_OFF_TYPE: fieldBuilder.buildEnumField(
          'WithholdingTaxRoundOffType',
          RoundOffType,
          true
        ),
        /**
         * Static representation of the {@link settlementPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETTLEMENT_PERIOD: fieldBuilder.buildEdmTypeField(
          'SettlementPeriod',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link withholdingTaxReceivableDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WITHHOLDING_TAX_RECEIVABLE_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'WithholdingTaxReceivableDisplayValue',
            'Edm.String',
            true
          ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WithholdingTaxCodes)
      };
    }

    return this._schema;
  }
}
