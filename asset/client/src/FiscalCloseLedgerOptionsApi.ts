/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FiscalCloseLedgerOptions } from './FiscalCloseLedgerOptions';
import { FiscalCloseLedgerOptionsRequestBuilder } from './FiscalCloseLedgerOptionsRequestBuilder';
import { DimensionSetsApi } from './DimensionSetsApi';
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
export class FiscalCloseLedgerOptionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<FiscalCloseLedgerOptions<DeSerializersT>, DeSerializersT>
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
  ): FiscalCloseLedgerOptionsApi<DeSerializersT> {
    return new FiscalCloseLedgerOptionsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      FiscalCloseLedgerOptions<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [DimensionSetsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      DIMENSION_SET: new OneToOneLink('DimensionSet', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = FiscalCloseLedgerOptions;

  requestBuilder(): FiscalCloseLedgerOptionsRequestBuilder<DeSerializersT> {
    return new FiscalCloseLedgerOptionsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    FiscalCloseLedgerOptions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      FiscalCloseLedgerOptions<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    FiscalCloseLedgerOptions<DeSerializersT>,
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
    typeof FiscalCloseLedgerOptions,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        FiscalCloseLedgerOptions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    LEDGER_FISCAL_CLOSE_GROUP_NAME: OrderableEdmTypeField<
      FiscalCloseLedgerOptions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEGAL_ENTITY: OrderableEdmTypeField<
      FiscalCloseLedgerOptions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSFER_BALANCE_SHEET_DIMENSIONS: EnumField<
      FiscalCloseLedgerOptions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PROFIT_LOSS_DEFAULT_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      FiscalCloseLedgerOptions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROFIT_LOSS_CLOSE_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      FiscalCloseLedgerOptions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETAINED_EARNINGS_MAIN_ACCOUNT: OrderableEdmTypeField<
      FiscalCloseLedgerOptions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      FiscalCloseLedgerOptions<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<FiscalCloseLedgerOptions<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link ledgerFiscalCloseGroupName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_FISCAL_CLOSE_GROUP_NAME: fieldBuilder.buildEdmTypeField(
          'LedgerFiscalCloseGroupName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link legalEntity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_ENTITY: fieldBuilder.buildEdmTypeField(
          'LegalEntity',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link transferBalanceSheetDimensions} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSFER_BALANCE_SHEET_DIMENSIONS: fieldBuilder.buildEnumField(
          'TransferBalanceSheetDimensions',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link profitLossDefaultDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROFIT_LOSS_DEFAULT_DIMENSION_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'ProfitLossDefaultDimensionDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link profitLossCloseDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROFIT_LOSS_CLOSE_DIMENSION_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'ProfitLossCloseDimensionDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link retainedEarningsMainAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAINED_EARNINGS_MAIN_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'RetainedEarningsMainAccount',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', FiscalCloseLedgerOptions)
      };
    }

    return this._schema;
  }
}
