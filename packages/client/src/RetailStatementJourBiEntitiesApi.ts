/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailStatementJourBiEntities } from './RetailStatementJourBiEntities';
import { RetailStatementJourBiEntitiesRequestBuilder } from './RetailStatementJourBiEntitiesRequestBuilder';
import { RetailClosingMethodType } from './RetailClosingMethodType';
import { NoYes } from './NoYes';
import { RetailStatementType } from './RetailStatementType';
import { RetailEodCodeVersion } from './RetailEodCodeVersion';
import { RetailStaffTerminalTotal } from './RetailStaffTerminalTotal';
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
export class RetailStatementJourBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RetailStatementJourBiEntities<DeSerializersT>, DeSerializersT>
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
  ): RetailStatementJourBiEntitiesApi<DeSerializersT> {
    return new RetailStatementJourBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailStatementJourBiEntities;

  requestBuilder(): RetailStatementJourBiEntitiesRequestBuilder<DeSerializersT> {
    return new RetailStatementJourBiEntitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RetailStatementJourBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailStatementJourBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailStatementJourBiEntities<DeSerializersT>,
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
    typeof RetailStatementJourBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailStatementJourBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailStatementJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STATEMENT_ID: OrderableEdmTypeField<
      RetailStatementJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CALCULATED_DATE_TIME: OrderableEdmTypeField<
      RetailStatementJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    POSTED_DATE_TIME: OrderableEdmTypeField<
      RetailStatementJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CLOSING_METHOD: EnumField<
      RetailStatementJourBiEntities<DeSerializers>,
      DeSerializersT,
      RetailClosingMethodType,
      true,
      true
    >;
    NUMBER_OF_ITEMS_BARCODES_NOT_ON_FILE: OrderableEdmTypeField<
      RetailStatementJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CALCULATION_TIME: OrderableEdmTypeField<
      RetailStatementJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CALCULATED_LINES: OrderableEdmTypeField<
      RetailStatementJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    EXPENSES_AMOUNT: OrderableEdmTypeField<
      RetailStatementJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NUMBER_OF_WRONG_SHIFT_TRANSACTIONS: OrderableEdmTypeField<
      RetailStatementJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SKIP_CONFIRMATION: EnumField<
      RetailStatementJourBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    STAFF_TERMINAL: OrderableEdmTypeField<
      RetailStatementJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CALCULATED_TIME: OrderableEdmTypeField<
      RetailStatementJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    POSTED_DATE: OrderableEdmTypeField<
      RetailStatementJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LOYALTY_DISC_AMOUNT_RU: OrderableEdmTypeField<
      RetailStatementJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TOTAL_DISC_AMOUNT: OrderableEdmTypeField<
      RetailStatementJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    USE_CHANNEL_CASH_MANAGEMENT_RECONCILIATION: EnumField<
      RetailStatementJourBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POSTED_TIME: OrderableEdmTypeField<
      RetailStatementJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SHIFT_DATE: OrderableEdmTypeField<
      RetailStatementJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    STORE_ID: OrderableEdmTypeField<
      RetailStatementJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_CREATED_BY: OrderableEdmTypeField<
      RetailStatementJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTING_DATE: OrderableEdmTypeField<
      RetailStatementJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SHIFT_ID: OrderableEdmTypeField<
      RetailStatementJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CALCULATED_DATE: OrderableEdmTypeField<
      RetailStatementJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TAX_AMOUNT: OrderableEdmTypeField<
      RetailStatementJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    STATEMENT_DATE: OrderableEdmTypeField<
      RetailStatementJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    NUMBER_OF_BLOCKED_CUSTOMERS: OrderableEdmTypeField<
      RetailStatementJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ENABLE_PARALLEL_PAYMENT_POSTING_FOR_SALES: EnumField<
      RetailStatementJourBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    STATEMENT_TYPE: EnumField<
      RetailStatementJourBiEntities<DeSerializers>,
      DeSerializersT,
      RetailStatementType,
      true,
      true
    >;
    REPLICATION_COUNTER: OrderableEdmTypeField<
      RetailStatementJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TRANS_TO_DATE: OrderableEdmTypeField<
      RetailStatementJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      RetailStatementJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_AMOUNT: OrderableEdmTypeField<
      RetailStatementJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EOD_CODE_VERSION: EnumField<
      RetailStatementJourBiEntities<DeSerializers>,
      DeSerializersT,
      RetailEodCodeVersion,
      true,
      true
    >;
    IGNORE_RETURN_LINK: EnumField<
      RetailStatementJourBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    NUMBER_OF_SALES_PAYMENT_DIFFERENCE_TRANS: OrderableEdmTypeField<
      RetailStatementJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TRANS_TO_TIME: OrderableEdmTypeField<
      RetailStatementJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      RetailStatementJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    NUMBER_SEQUENCE_CODE: OrderableEdmTypeField<
      RetailStatementJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INCOME_AMOUNT: OrderableEdmTypeField<
      RetailStatementJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NUMBER_OF_BLOCKED_ITEMS: OrderableEdmTypeField<
      RetailStatementJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CREATED_ON: OrderableEdmTypeField<
      RetailStatementJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    STATEMENT_METHOD: EnumField<
      RetailStatementJourBiEntities<DeSerializers>,
      DeSerializersT,
      RetailStaffTerminalTotal,
      true,
      true
    >;
    TRANS_FROM_DATE: OrderableEdmTypeField<
      RetailStatementJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TRANS_FROM_TIME: OrderableEdmTypeField<
      RetailStatementJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    LINE_DISC_AMOUNT: OrderableEdmTypeField<
      RetailStatementJourBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<RetailStatementJourBiEntities<DeSerializers>>;
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
         * Static representation of the {@link statementId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATEMENT_ID: fieldBuilder.buildEdmTypeField(
          'statementId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link calculatedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'CalculatedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link postedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'PostedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link closingMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLOSING_METHOD: fieldBuilder.buildEnumField(
          'closingMethod',
          RetailClosingMethodType,
          true
        ),
        /**
         * Static representation of the {@link numberOfItemsBarcodesNotOnFile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_OF_ITEMS_BARCODES_NOT_ON_FILE: fieldBuilder.buildEdmTypeField(
          'numberOfItemsBarcodesNotOnFile',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link calculationTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATION_TIME: fieldBuilder.buildEdmTypeField(
          'calculationTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link calculatedLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATED_LINES: fieldBuilder.buildEdmTypeField(
          'CalculatedLines',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link expensesAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPENSES_AMOUNT: fieldBuilder.buildEdmTypeField(
          'expensesAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link numberOfWrongShiftTransactions} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_OF_WRONG_SHIFT_TRANSACTIONS: fieldBuilder.buildEdmTypeField(
          'numberOfWrongShiftTransactions',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link skipConfirmation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SKIP_CONFIRMATION: fieldBuilder.buildEnumField(
          'skipConfirmation',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link staffTerminal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STAFF_TERMINAL: fieldBuilder.buildEdmTypeField(
          'staffTerminal',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link calculatedTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATED_TIME: fieldBuilder.buildEdmTypeField(
          'calculatedTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link postedDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTED_DATE: fieldBuilder.buildEdmTypeField(
          'postedDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link loyaltyDiscAmountRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOYALTY_DISC_AMOUNT_RU: fieldBuilder.buildEdmTypeField(
          'LoyaltyDiscAmount_RU',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link totalDiscAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_DISC_AMOUNT: fieldBuilder.buildEdmTypeField(
          'totalDiscAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link useChannelCashManagementReconciliation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_CHANNEL_CASH_MANAGEMENT_RECONCILIATION: fieldBuilder.buildEnumField(
          'UseChannelCashManagementReconciliation',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link postedTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTED_TIME: fieldBuilder.buildEdmTypeField(
          'postedTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link shiftDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIFT_DATE: fieldBuilder.buildEdmTypeField(
          'shiftDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link storeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORE_ID: fieldBuilder.buildEdmTypeField('storeId', 'Edm.String', true),
        /**
         * Static representation of the {@link sysCreatedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_CREATED_BY: fieldBuilder.buildEdmTypeField(
          'SysCreatedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link postingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_DATE: fieldBuilder.buildEdmTypeField(
          'postingDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link shiftId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIFT_ID: fieldBuilder.buildEdmTypeField('shiftId', 'Edm.String', true),
        /**
         * Static representation of the {@link calculatedDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATED_DATE: fieldBuilder.buildEdmTypeField(
          'calculatedDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link taxAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_AMOUNT: fieldBuilder.buildEdmTypeField(
          'taxAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link statementDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATEMENT_DATE: fieldBuilder.buildEdmTypeField(
          'statementDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link numberOfBlockedCustomers} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_OF_BLOCKED_CUSTOMERS: fieldBuilder.buildEdmTypeField(
          'numberOfBlockedCustomers',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link enableParallelPaymentPostingForSales} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_PARALLEL_PAYMENT_POSTING_FOR_SALES: fieldBuilder.buildEnumField(
          'EnableParallelPaymentPostingForSales',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link statementType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATEMENT_TYPE: fieldBuilder.buildEnumField(
          'StatementType',
          RetailStatementType,
          true
        ),
        /**
         * Static representation of the {@link replicationCounter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPLICATION_COUNTER: fieldBuilder.buildEdmTypeField(
          'replicationCounter',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link transToDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_TO_DATE: fieldBuilder.buildEdmTypeField(
          'transToDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link sysDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'SysDataAreaId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_AMOUNT: fieldBuilder.buildEdmTypeField(
          'salesAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link eodCodeVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EOD_CODE_VERSION: fieldBuilder.buildEnumField(
          'EodCodeVersion',
          RetailEodCodeVersion,
          true
        ),
        /**
         * Static representation of the {@link ignoreReturnLink} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IGNORE_RETURN_LINK: fieldBuilder.buildEnumField(
          'IgnoreReturnLink',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link numberOfSalesPaymentDifferenceTrans} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_OF_SALES_PAYMENT_DIFFERENCE_TRANS:
          fieldBuilder.buildEdmTypeField(
            'numberOfSalesPaymentDifferenceTrans',
            'Edm.Int32',
            false
          ),
        /**
         * Static representation of the {@link transToTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_TO_TIME: fieldBuilder.buildEdmTypeField(
          'transToTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link sourceKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_KEY: fieldBuilder.buildEdmTypeField(
          'SourceKey',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link numberSequenceCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_SEQUENCE_CODE: fieldBuilder.buildEdmTypeField(
          'numberSequenceCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link incomeAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCOME_AMOUNT: fieldBuilder.buildEdmTypeField(
          'incomeAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link numberOfBlockedItems} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_OF_BLOCKED_ITEMS: fieldBuilder.buildEdmTypeField(
          'numberOfBlockedItems',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link createdOn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_ON: fieldBuilder.buildEdmTypeField(
          'CreatedOn',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link statementMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATEMENT_METHOD: fieldBuilder.buildEnumField(
          'statementMethod',
          RetailStaffTerminalTotal,
          true
        ),
        /**
         * Static representation of the {@link transFromDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_FROM_DATE: fieldBuilder.buildEdmTypeField(
          'transFromDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link transFromTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_FROM_TIME: fieldBuilder.buildEdmTypeField(
          'transFromTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link lineDiscAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_DISC_AMOUNT: fieldBuilder.buildEdmTypeField(
          'lineDiscAmount',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailStatementJourBiEntities)
      };
    }

    return this._schema;
  }
}
