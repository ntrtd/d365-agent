/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustomerPostingProfileLines } from './CustomerPostingProfileLines';
import { CustomerPostingProfileLinesRequestBuilder } from './CustomerPostingProfileLinesRequestBuilder';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { CustomerPostingProfilesApi } from './CustomerPostingProfilesApi';
import { TableGroupAll } from './TableGroupAll';
import { DimensionHierarchyType } from './DimensionHierarchyType';
import { DimensionHierarchyConstraintStatus } from './DimensionHierarchyConstraintStatus';
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
export class CustomerPostingProfileLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<CustomerPostingProfileLines<DeSerializersT>, DeSerializersT>
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
  ): CustomerPostingProfileLinesApi<DeSerializersT> {
    return new CustomerPostingProfileLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link custWriteOffLedgerDimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUST_WRITE_OFF_LEDGER_DIMENSION_COMBINATION: OneToOneLink<
      CustomerPostingProfileLines<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      CustomerPostingProfileLines<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link custLiabilitiesForDiscountLedgerDimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUST_LIABILITIES_FOR_DISCOUNT_LEDGER_DIMENSION_COMBINATION: OneToOneLink<
      CustomerPostingProfileLines<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link custCustomerPostingProfileHeadRelation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUST_CUSTOMER_POSTING_PROFILE_HEAD_RELATION: OneToOneLink<
      CustomerPostingProfileLines<DeSerializersT>,
      DeSerializersT,
      CustomerPostingProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link custSummaryLedgerDimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUST_SUMMARY_LEDGER_DIMENSION_COMBINATION: OneToOneLink<
      CustomerPostingProfileLines<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link custVatPrepaymentsLedgerDimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUST_VAT_PREPAYMENTS_LEDGER_DIMENSION_COMBINATION: OneToOneLink<
      CustomerPostingProfileLines<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      DimensionCombinationsApi<DeSerializersT>,
      DimensionCombinationsApi<DeSerializersT>,
      DimensionCombinationsApi<DeSerializersT>,
      CustomerPostingProfilesApi<DeSerializersT>,
      DimensionCombinationsApi<DeSerializersT>,
      DimensionCombinationsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      CUST_WRITE_OFF_LEDGER_DIMENSION_COMBINATION: new OneToOneLink(
        'CustWriteOffLedgerDimensionCombination',
        this,
        linkedApis[0]
      ),
      DIMENSION_COMBINATION: new OneToOneLink(
        'DimensionCombination',
        this,
        linkedApis[1]
      ),
      CUST_LIABILITIES_FOR_DISCOUNT_LEDGER_DIMENSION_COMBINATION:
        new OneToOneLink(
          'CustLiabilitiesForDiscountLedgerDimensionCombination',
          this,
          linkedApis[2]
        ),
      CUST_CUSTOMER_POSTING_PROFILE_HEAD_RELATION: new OneToOneLink(
        'CustCustomerPostingProfileHeadRelation',
        this,
        linkedApis[3]
      ),
      CUST_SUMMARY_LEDGER_DIMENSION_COMBINATION: new OneToOneLink(
        'CustSummaryLedgerDimensionCombination',
        this,
        linkedApis[4]
      ),
      CUST_VAT_PREPAYMENTS_LEDGER_DIMENSION_COMBINATION: new OneToOneLink(
        'CustVATPrepaymentsLedgerDimensionCombination',
        this,
        linkedApis[5]
      )
    };
    return this;
  }

  entityConstructor = CustomerPostingProfileLines;

  requestBuilder(): CustomerPostingProfileLinesRequestBuilder<DeSerializersT> {
    return new CustomerPostingProfileLinesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CustomerPostingProfileLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CustomerPostingProfileLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CustomerPostingProfileLines<DeSerializersT>,
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
    typeof CustomerPostingProfileLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CustomerPostingProfileLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CustomerPostingProfileLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    POSTING_PROFILE: OrderableEdmTypeField<
      CustomerPostingProfileLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ACCOUNT_CODE: EnumField<
      CustomerPostingProfileLines<DeSerializers>,
      DeSerializersT,
      TableGroupAll,
      true,
      true
    >;
    ACCOUNT_OR_GROUP_NUMBER: OrderableEdmTypeField<
      CustomerPostingProfileLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INTEREST_CODE: OrderableEdmTypeField<
      CustomerPostingProfileLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUMMARY_MAIN_ACCOUNT_ID_DISPLAY_VALUE: OrderableEdmTypeField<
      CustomerPostingProfileLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SETTLE_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      CustomerPostingProfileLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      CustomerPostingProfileLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COLLECTION_LETTER_SEQUENCE: OrderableEdmTypeField<
      CustomerPostingProfileLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXPORT_SALE_DISPLAY_VALUE: OrderableEdmTypeField<
      CustomerPostingProfileLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HIERARCHY_TYPE: EnumField<
      CustomerPostingProfileLines<DeSerializers>,
      DeSerializersT,
      DimensionHierarchyType,
      true,
      true
    >;
    LIABILITIES_FOR_DISCOUNT_MAIN_ACCOUNT_ID_DISPLAY_VALUE: OrderableEdmTypeField<
      CustomerPostingProfileLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_TRANSFER_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      CustomerPostingProfileLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FINE_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      CustomerPostingProfileLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_TAX_PREPAYMENTS_MAIN_ACCOUNT_ID_DISPLAY_VALUE: OrderableEdmTypeField<
      CustomerPostingProfileLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HIERARCHY_STATUS: EnumField<
      CustomerPostingProfileLines<DeSerializers>,
      DeSerializersT,
      DimensionHierarchyConstraintStatus,
      true,
      true
    >;
    HIERARCHY_NAME: OrderableEdmTypeField<
      CustomerPostingProfileLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENDORSE_MAIN_ACCOUNT_ID_DISPLAY_VALUE: OrderableEdmTypeField<
      CustomerPostingProfileLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FINANCIAL_INTEREST_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      CustomerPostingProfileLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WRITE_OFF_MAIN_ACCOUNT_ID_DISPLAY_VALUE: OrderableEdmTypeField<
      CustomerPostingProfileLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link custWriteOffLedgerDimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUST_WRITE_OFF_LEDGER_DIMENSION_COMBINATION: OneToOneLink<
      CustomerPostingProfileLines<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      CustomerPostingProfileLines<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link custLiabilitiesForDiscountLedgerDimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUST_LIABILITIES_FOR_DISCOUNT_LEDGER_DIMENSION_COMBINATION: OneToOneLink<
      CustomerPostingProfileLines<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link custCustomerPostingProfileHeadRelation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUST_CUSTOMER_POSTING_PROFILE_HEAD_RELATION: OneToOneLink<
      CustomerPostingProfileLines<DeSerializersT>,
      DeSerializersT,
      CustomerPostingProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link custSummaryLedgerDimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUST_SUMMARY_LEDGER_DIMENSION_COMBINATION: OneToOneLink<
      CustomerPostingProfileLines<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link custVatPrepaymentsLedgerDimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUST_VAT_PREPAYMENTS_LEDGER_DIMENSION_COMBINATION: OneToOneLink<
      CustomerPostingProfileLines<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CustomerPostingProfileLines<DeSerializers>>;
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
         * Static representation of the {@link postingProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_PROFILE: fieldBuilder.buildEdmTypeField(
          'PostingProfile',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link accountCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_CODE: fieldBuilder.buildEnumField(
          'AccountCode',
          TableGroupAll,
          true
        ),
        /**
         * Static representation of the {@link accountOrGroupNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_OR_GROUP_NUMBER: fieldBuilder.buildEdmTypeField(
          'AccountOrGroupNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link interestCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTEREST_CODE: fieldBuilder.buildEdmTypeField(
          'InterestCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link summaryMainAccountIdDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUMMARY_MAIN_ACCOUNT_ID_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'SummaryMainAccountIdDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link settleAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETTLE_ACCOUNT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'SettleAccountDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link collectionLetterSequence} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLLECTION_LETTER_SEQUENCE: fieldBuilder.buildEdmTypeField(
          'CollectionLetterSequence',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link exportSaleDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPORT_SALE_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'ExportSaleDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link hierarchyType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HIERARCHY_TYPE: fieldBuilder.buildEnumField(
          'HierarchyType',
          DimensionHierarchyType,
          true
        ),
        /**
         * Static representation of the {@link liabilitiesForDiscountMainAccountIdDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIABILITIES_FOR_DISCOUNT_MAIN_ACCOUNT_ID_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'LiabilitiesForDiscountMainAccountIdDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link taxTransferAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_TRANSFER_ACCOUNT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'TaxTransferAccountDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fineAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FINE_ACCOUNT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'FineAccountDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesTaxPrepaymentsMainAccountIdDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_PREPAYMENTS_MAIN_ACCOUNT_ID_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'SalesTaxPrepaymentsMainAccountIdDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link hierarchyStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HIERARCHY_STATUS: fieldBuilder.buildEnumField(
          'HierarchyStatus',
          DimensionHierarchyConstraintStatus,
          true
        ),
        /**
         * Static representation of the {@link hierarchyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HIERARCHY_NAME: fieldBuilder.buildEdmTypeField(
          'HierarchyName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link endorseMainAccountIdDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENDORSE_MAIN_ACCOUNT_ID_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'EndorseMainAccountIdDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link financialInterestAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FINANCIAL_INTEREST_ACCOUNT_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'FinancialInterestAccountDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link writeOffMainAccountIdDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WRITE_OFF_MAIN_ACCOUNT_ID_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'WriteOffMainAccountIdDisplayValue',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CustomerPostingProfileLines)
      };
    }

    return this._schema;
  }
}
