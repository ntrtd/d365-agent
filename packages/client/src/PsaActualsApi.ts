/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PsaActuals } from './PsaActuals';
import { PsaActualsRequestBuilder } from './PsaActualsRequestBuilder';
import { DimensionSetsApi } from './DimensionSetsApi';
import { ProjOrigin } from './ProjOrigin';
import { ProjCostSales } from './ProjCostSales';
import { ProjPaymentStatus } from './ProjPaymentStatus';
import { LedgerPostingType } from './LedgerPostingType';
import { ProjType } from './ProjType';
import { ProjTransType } from './ProjTransType';
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
export class PsaActualsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PsaActuals<DeSerializersT>, DeSerializersT>
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
  ): PsaActualsApi<DeSerializersT> {
    return new PsaActualsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      PsaActuals<DeSerializersT>,
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

  entityConstructor = PsaActuals;

  requestBuilder(): PsaActualsRequestBuilder<DeSerializersT> {
    return new PsaActualsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PsaActuals<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PsaActuals<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<PsaActuals<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof PsaActuals, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(PsaActuals, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANS_ID: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROJ_FUNDING_SOURCE_FUNDING_SOURCE_ID: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PL_ACCRUED_REVENUE_ON_ACC: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONSUMED_MATERIAL_COST_WITHOUT_NEVER_LEDGER: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PL_MATERIAL_COST: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NET_WIP: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PL_ACCRUED_REVENUE_PRODUCTION: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MATERIAL_INVOICED_REVENUE: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONSUMED_LABOR_COST: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROJ_TRANS_DATE: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    WIP_PRODUCTION: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PL_ACCRUED_REVENUE_PROFIT: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PL_ACCRUED_REVENUE_SUBSCRIPTION: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PL_COST_ACCRUED_LOSS: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PL_ACCRUED_REVENUE_SALES_VALUE_FEE: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONSUMED_LABOR_QTY_WITHOUT_NO_NEVER_LEDGER: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PL_TOTAL_COST: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ON_ACC_TOTAL: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TOTAL_CONSUMPTION: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RESOURCE_COMPANY_ID: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_ORIGIN: EnumField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      ProjOrigin,
      true,
      true
    >;
    PL_LABOR_QTY_WITHOUT_NO_NEVER_LEDGER: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONTRACT_ID: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEDGER_ORIGIN: EnumField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      ProjOrigin,
      true,
      true
    >;
    COST_SALES: EnumField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      ProjCostSales,
      true,
      true
    >;
    WIP_MATERIAL_COST: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONSUMED_EXPENSE_COST: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVENT_TRANS_ID: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_STATUS: EnumField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      ProjPaymentStatus,
      true,
      true
    >;
    PL_LABOR_COST: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    POSTING_TYPE: EnumField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      LedgerPostingType,
      true,
      true
    >;
    GROSS_WIP: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROJ_TYPE: EnumField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      ProjType,
      true,
      true
    >;
    PL_ACCRUED_REVENUE_SALES_VALUE_MATERIAL: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PL_LABOR_QTY: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VOUCHER: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSUMED_LABOR_QTY: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    WIP_SALES_TOTAL: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PL_TOTAL_ACCRUED_REVENUE: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ON_ACC_BEG_BAL: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PL_EXPENSE_COST: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PL_ACCRUED_REVENUE_SALES_VALUE_EXPENSE: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PL_ACCRUED_REVENUE_SALES_VALUE: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXPENSE_INVOICED_REVENUE: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FEE_INVOICED_REVENUE: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COMPANY_INFO_DATA_AREA: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYROLL_ALLOCATION: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LABOR_INVOICED_QTY: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EMPL_ITEM_ID: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QTY: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    WIP_PROFIT: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    WIP_EXPENSE_COST: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LABOR_INVOICED_REVENUE: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONSUMED_LABOR_COST_WITHOUT_NO_NEVER_LEDGER: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PL_MATERIAL_COST_WITHOUT_NEVER_LEDGER: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PAYMENT_DATE: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    WIP_SUBSCRIPTION: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RESOURCE_ID: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CATEGORY_ID: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSUMED_MATERIAL_COST: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ON_ACC_PRE_PAYMENT: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SUBSCRIPTION_ID: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TOTAL_INVOICED_REVENUE: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    WIP_LABOR_COST: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    WIP_TOTAL_COST: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PL_INVOICED_REVENUE_ON_ACCOUNT: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PL_ACCRUED_REVENUE_SALES_VALUE_LABOR: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AMOUNT_MST: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEFAULT_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEDGER_TRANS_DATE: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PROJ_TRANS_TYPE: EnumField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      ProjTransType,
      true,
      true
    >;
    ON_ACC_DEDUCTION: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ACTIVITY_NUMBER: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PL_INVOICED_REVENUE: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJ_FUNDING_SOURCE_CONTRACT_ID: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ON_ACC_MILESTONE: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROJ_ADJUST_REF_ID: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WIP_COST_ACCRUED_LOSS: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    WIP_SALES_VALUE: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    WIP_INVOICED_ON_ACCOUNT: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PL_LABOR_COST_WITHOUT_NO_NEVER_LEDGER: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROJ_ID: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUB_BILL_DEFERRAL_COST_ITEM: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SUB_BILL_DEFERRAL_SALES_ITEM: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SUB_BILL_DEFERRAL_COST_HOUR: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SUB_BILL_DEFERRAL_SALES_HOUR: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SUB_BILL_DEFERRAL_COST_EXPENSE: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SUB_BILL_DEFERRAL_SALES_EXPENSE: OrderableEdmTypeField<
      PsaActuals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      PsaActuals<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PsaActuals<DeSerializers>>;
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
         * Static representation of the {@link transId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_ID: fieldBuilder.buildEdmTypeField(
          'TransId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link projFundingSourceFundingSourceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_FUNDING_SOURCE_FUNDING_SOURCE_ID: fieldBuilder.buildEdmTypeField(
          'ProjFundingSource_FundingSourceId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link plAccruedRevenueOnAcc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PL_ACCRUED_REVENUE_ON_ACC: fieldBuilder.buildEdmTypeField(
          'PLAccruedRevenueOnAcc',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link consumedMaterialCostWithoutNeverLedger} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSUMED_MATERIAL_COST_WITHOUT_NEVER_LEDGER:
          fieldBuilder.buildEdmTypeField(
            'ConsumedMaterialCostWithoutNeverLedger',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link plMaterialCost} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PL_MATERIAL_COST: fieldBuilder.buildEdmTypeField(
          'PLMaterialCost',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link netWip} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NET_WIP: fieldBuilder.buildEdmTypeField('NetWIP', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link plAccruedRevenueProduction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PL_ACCRUED_REVENUE_PRODUCTION: fieldBuilder.buildEdmTypeField(
          'PLAccruedRevenueProduction',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link materialInvoicedRevenue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATERIAL_INVOICED_REVENUE: fieldBuilder.buildEdmTypeField(
          'MaterialInvoicedRevenue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link consumedLaborCost} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSUMED_LABOR_COST: fieldBuilder.buildEdmTypeField(
          'ConsumedLaborCost',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link projTransDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_TRANS_DATE: fieldBuilder.buildEdmTypeField(
          'ProjTransDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link wipProduction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WIP_PRODUCTION: fieldBuilder.buildEdmTypeField(
          'WIPProduction',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link plAccruedRevenueProfit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PL_ACCRUED_REVENUE_PROFIT: fieldBuilder.buildEdmTypeField(
          'PLAccruedRevenueProfit',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link plAccruedRevenueSubscription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PL_ACCRUED_REVENUE_SUBSCRIPTION: fieldBuilder.buildEdmTypeField(
          'PLAccruedRevenueSubscription',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link plCostAccruedLoss} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PL_COST_ACCRUED_LOSS: fieldBuilder.buildEdmTypeField(
          'PLCostAccruedLoss',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link plAccruedRevenueSalesValueFee} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PL_ACCRUED_REVENUE_SALES_VALUE_FEE: fieldBuilder.buildEdmTypeField(
          'PLAccruedRevenueSalesValueFee',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link consumedLaborQtyWithoutNoNeverLedger} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSUMED_LABOR_QTY_WITHOUT_NO_NEVER_LEDGER:
          fieldBuilder.buildEdmTypeField(
            'ConsumedLaborQtyWithoutNoNeverLedger',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link plTotalCost} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PL_TOTAL_COST: fieldBuilder.buildEdmTypeField(
          'PLTotalCost',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link onAccTotal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ON_ACC_TOTAL: fieldBuilder.buildEdmTypeField(
          'OnAccTotal',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link totalConsumption} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_CONSUMPTION: fieldBuilder.buildEdmTypeField(
          'totalConsumption',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link resourceCompanyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOURCE_COMPANY_ID: fieldBuilder.buildEdmTypeField(
          'ResourceCompanyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transactionOrigin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_ORIGIN: fieldBuilder.buildEnumField(
          'TransactionOrigin',
          ProjOrigin,
          true
        ),
        /**
         * Static representation of the {@link plLaborQtyWithoutNoNeverLedger} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PL_LABOR_QTY_WITHOUT_NO_NEVER_LEDGER: fieldBuilder.buildEdmTypeField(
          'PLLaborQtyWithoutNoNeverLedger',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link contractId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTRACT_ID: fieldBuilder.buildEdmTypeField(
          'ContractId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ledgerOrigin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_ORIGIN: fieldBuilder.buildEnumField(
          'LedgerOrigin',
          ProjOrigin,
          true
        ),
        /**
         * Static representation of the {@link costSales} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_SALES: fieldBuilder.buildEnumField(
          'costSales',
          ProjCostSales,
          true
        ),
        /**
         * Static representation of the {@link wipMaterialCost} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WIP_MATERIAL_COST: fieldBuilder.buildEdmTypeField(
          'WIPMaterialCost',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link consumedExpenseCost} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSUMED_EXPENSE_COST: fieldBuilder.buildEdmTypeField(
          'ConsumedExpenseCost',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link inventTransId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_TRANS_ID: fieldBuilder.buildEdmTypeField(
          'InventTransId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_STATUS: fieldBuilder.buildEnumField(
          'PaymentStatus',
          ProjPaymentStatus,
          true
        ),
        /**
         * Static representation of the {@link plLaborCost} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PL_LABOR_COST: fieldBuilder.buildEdmTypeField(
          'PLLaborCost',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link postingType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_TYPE: fieldBuilder.buildEnumField(
          'PostingType',
          LedgerPostingType,
          true
        ),
        /**
         * Static representation of the {@link grossWip} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROSS_WIP: fieldBuilder.buildEdmTypeField(
          'GrossWIP',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link projType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_TYPE: fieldBuilder.buildEnumField('ProjType', ProjType, true),
        /**
         * Static representation of the {@link plAccruedRevenueSalesValueMaterial} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PL_ACCRUED_REVENUE_SALES_VALUE_MATERIAL: fieldBuilder.buildEdmTypeField(
          'PLAccruedRevenueSalesValueMaterial',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link plLaborQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PL_LABOR_QTY: fieldBuilder.buildEdmTypeField(
          'PLLaborQty',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link voucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOUCHER: fieldBuilder.buildEdmTypeField('Voucher', 'Edm.String', true),
        /**
         * Static representation of the {@link consumedLaborQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSUMED_LABOR_QTY: fieldBuilder.buildEdmTypeField(
          'ConsumedLaborQty',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link wipSalesTotal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WIP_SALES_TOTAL: fieldBuilder.buildEdmTypeField(
          'WIPSalesTotal',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link plTotalAccruedRevenue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PL_TOTAL_ACCRUED_REVENUE: fieldBuilder.buildEdmTypeField(
          'PLTotalAccruedRevenue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link onAccBegBal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ON_ACC_BEG_BAL: fieldBuilder.buildEdmTypeField(
          'OnAccBegBal',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link plExpenseCost} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PL_EXPENSE_COST: fieldBuilder.buildEdmTypeField(
          'PLExpenseCost',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link plAccruedRevenueSalesValueExpense} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PL_ACCRUED_REVENUE_SALES_VALUE_EXPENSE: fieldBuilder.buildEdmTypeField(
          'PLAccruedRevenueSalesValueExpense',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link plAccruedRevenueSalesValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PL_ACCRUED_REVENUE_SALES_VALUE: fieldBuilder.buildEdmTypeField(
          'PLAccruedRevenueSalesValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link expenseInvoicedRevenue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPENSE_INVOICED_REVENUE: fieldBuilder.buildEdmTypeField(
          'ExpenseInvoicedRevenue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link feeInvoicedRevenue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FEE_INVOICED_REVENUE: fieldBuilder.buildEdmTypeField(
          'FeeInvoicedRevenue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link companyInfoDataArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_INFO_DATA_AREA: fieldBuilder.buildEdmTypeField(
          'CompanyInfo_DataArea',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payrollAllocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYROLL_ALLOCATION: fieldBuilder.buildEdmTypeField(
          'PayrollAllocation',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link laborInvoicedQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LABOR_INVOICED_QTY: fieldBuilder.buildEdmTypeField(
          'LaborInvoicedQty',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link emplItemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPL_ITEM_ID: fieldBuilder.buildEdmTypeField(
          'EmplItemId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link qty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QTY: fieldBuilder.buildEdmTypeField('Qty', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link wipProfit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WIP_PROFIT: fieldBuilder.buildEdmTypeField(
          'WIPProfit',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link wipExpenseCost} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WIP_EXPENSE_COST: fieldBuilder.buildEdmTypeField(
          'WIPExpenseCost',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link laborInvoicedRevenue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LABOR_INVOICED_REVENUE: fieldBuilder.buildEdmTypeField(
          'LaborInvoicedRevenue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link consumedLaborCostWithoutNoNeverLedger} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSUMED_LABOR_COST_WITHOUT_NO_NEVER_LEDGER:
          fieldBuilder.buildEdmTypeField(
            'ConsumedLaborCostWithoutNoNeverLedger',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link plMaterialCostWithoutNeverLedger} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PL_MATERIAL_COST_WITHOUT_NEVER_LEDGER: fieldBuilder.buildEdmTypeField(
          'PLMaterialCostWithoutNeverLedger',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link paymentDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_DATE: fieldBuilder.buildEdmTypeField(
          'PaymentDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link wipSubscription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WIP_SUBSCRIPTION: fieldBuilder.buildEdmTypeField(
          'WIPSubscription',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link resourceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOURCE_ID: fieldBuilder.buildEdmTypeField(
          'ResourceId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link categoryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY_ID: fieldBuilder.buildEdmTypeField(
          'CategoryId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link consumedMaterialCost} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSUMED_MATERIAL_COST: fieldBuilder.buildEdmTypeField(
          'ConsumedMaterialCost',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link onAccPrePayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ON_ACC_PRE_PAYMENT: fieldBuilder.buildEdmTypeField(
          'OnAccPrePayment',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link subscriptionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBSCRIPTION_ID: fieldBuilder.buildEdmTypeField(
          'SubscriptionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link totalInvoicedRevenue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_INVOICED_REVENUE: fieldBuilder.buildEdmTypeField(
          'totalInvoicedRevenue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link wipLaborCost} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WIP_LABOR_COST: fieldBuilder.buildEdmTypeField(
          'WIPLaborCost',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link wipTotalCost} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WIP_TOTAL_COST: fieldBuilder.buildEdmTypeField(
          'WIPTotalCost',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link plInvoicedRevenueOnAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PL_INVOICED_REVENUE_ON_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'PLInvoicedRevenueOnAccount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link plAccruedRevenueSalesValueLabor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PL_ACCRUED_REVENUE_SALES_VALUE_LABOR: fieldBuilder.buildEdmTypeField(
          'PLAccruedRevenueSalesValueLabor',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link amountMst} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_MST: fieldBuilder.buildEdmTypeField(
          'AmountMst',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link defaultDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DefaultDimensionDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ledgerTransDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_TRANS_DATE: fieldBuilder.buildEdmTypeField(
          'LedgerTransDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link projTransType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_TRANS_TYPE: fieldBuilder.buildEnumField(
          'ProjTransType',
          ProjTransType,
          true
        ),
        /**
         * Static representation of the {@link onAccDeduction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ON_ACC_DEDUCTION: fieldBuilder.buildEdmTypeField(
          'OnAccDeduction',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link activityNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVITY_NUMBER: fieldBuilder.buildEdmTypeField(
          'ActivityNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link plInvoicedRevenue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PL_INVOICED_REVENUE: fieldBuilder.buildEdmTypeField(
          'PLInvoicedRevenue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link ledgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'LedgerDimensionDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projFundingSourceContractId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_FUNDING_SOURCE_CONTRACT_ID: fieldBuilder.buildEdmTypeField(
          'ProjFundingSource_ContractId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link onAccMilestone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ON_ACC_MILESTONE: fieldBuilder.buildEdmTypeField(
          'OnAccMilestone',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link projAdjustRefId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_ADJUST_REF_ID: fieldBuilder.buildEdmTypeField(
          'ProjAdjustRefId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link wipCostAccruedLoss} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WIP_COST_ACCRUED_LOSS: fieldBuilder.buildEdmTypeField(
          'WIPCostAccruedLoss',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link wipSalesValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WIP_SALES_VALUE: fieldBuilder.buildEdmTypeField(
          'WIPSalesValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link wipInvoicedOnAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WIP_INVOICED_ON_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'WIPInvoicedOnAccount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link plLaborCostWithoutNoNeverLedger} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PL_LABOR_COST_WITHOUT_NO_NEVER_LEDGER: fieldBuilder.buildEdmTypeField(
          'PLLaborCostWithoutNoNeverLedger',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link projId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_ID: fieldBuilder.buildEdmTypeField('ProjId', 'Edm.String', true),
        /**
         * Static representation of the {@link subBillDeferralCostItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_DEFERRAL_COST_ITEM: fieldBuilder.buildEdmTypeField(
          'SubBillDeferralCostItem',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link subBillDeferralSalesItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_DEFERRAL_SALES_ITEM: fieldBuilder.buildEdmTypeField(
          'SubBillDeferralSalesItem',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link subBillDeferralCostHour} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_DEFERRAL_COST_HOUR: fieldBuilder.buildEdmTypeField(
          'SubBillDeferralCostHour',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link subBillDeferralSalesHour} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_DEFERRAL_SALES_HOUR: fieldBuilder.buildEdmTypeField(
          'SubBillDeferralSalesHour',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link subBillDeferralCostExpense} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_DEFERRAL_COST_EXPENSE: fieldBuilder.buildEdmTypeField(
          'SubBillDeferralCostExpense',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link subBillDeferralSalesExpense} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_DEFERRAL_SALES_EXPENSE: fieldBuilder.buildEdmTypeField(
          'SubBillDeferralSalesExpense',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PsaActuals)
      };
    }

    return this._schema;
  }
}
