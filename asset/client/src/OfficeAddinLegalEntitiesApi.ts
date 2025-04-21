/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OfficeAddinLegalEntities } from './OfficeAddinLegalEntities';
import { OfficeAddinLegalEntitiesRequestBuilder } from './OfficeAddinLegalEntitiesRequestBuilder';
import { GeneralLedgerCustInvoiceJournalLinesApi } from './GeneralLedgerCustInvoiceJournalLinesApi';
import { VendInvoiceJournalLinesApi } from './VendInvoiceJournalLinesApi';
import { CustomerPaymentJournalLinesApi } from './CustomerPaymentJournalLinesApi';
import { VendorPaymentJournalLinesApi } from './VendorPaymentJournalLinesApi';
import { FinancialDimensionValueLegalEntityOverridesV2Api } from './FinancialDimensionValueLegalEntityOverridesV2Api';
import { FinancialDimensionValueTotalAccountIntervalsApi } from './FinancialDimensionValueTotalAccountIntervalsApi';
import { FinancialDimensionValuesApi } from './FinancialDimensionValuesApi';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class OfficeAddinLegalEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<OfficeAddinLegalEntities<DeSerializersT>, DeSerializersT>
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
  ): OfficeAddinLegalEntitiesApi<DeSerializersT> {
    return new OfficeAddinLegalEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link custInvoiceJournalLineOffsetCompany} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUST_INVOICE_JOURNAL_LINE_OFFSET_COMPANY: OneToManyLink<
      OfficeAddinLegalEntities<DeSerializersT>,
      DeSerializersT,
      GeneralLedgerCustInvoiceJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link custInvoiceJournalLineCompany} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUST_INVOICE_JOURNAL_LINE_COMPANY: OneToManyLink<
      OfficeAddinLegalEntities<DeSerializersT>,
      DeSerializersT,
      GeneralLedgerCustInvoiceJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vendInvoiceJournalLineOffsetCompany} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VEND_INVOICE_JOURNAL_LINE_OFFSET_COMPANY: OneToManyLink<
      OfficeAddinLegalEntities<DeSerializersT>,
      DeSerializersT,
      VendInvoiceJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vendInvoiceJournalLineCompany} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VEND_INVOICE_JOURNAL_LINE_COMPANY: OneToManyLink<
      OfficeAddinLegalEntities<DeSerializersT>,
      DeSerializersT,
      VendInvoiceJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link customerPaymentJournalLineCompany} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_PAYMENT_JOURNAL_LINE_COMPANY: OneToManyLink<
      OfficeAddinLegalEntities<DeSerializersT>,
      DeSerializersT,
      CustomerPaymentJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vendPaymentJournalLineCompany} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VEND_PAYMENT_JOURNAL_LINE_COMPANY: OneToManyLink<
      OfficeAddinLegalEntities<DeSerializersT>,
      DeSerializersT,
      VendorPaymentJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link financialDimensionValueLegalEntityOverrideEntityRoleLegalEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FINANCIAL_DIMENSION_VALUE_LEGAL_ENTITY_OVERRIDE_ENTITY_ROLE_LEGAL_ENTITY: OneToManyLink<
      OfficeAddinLegalEntities<DeSerializersT>,
      DeSerializersT,
      FinancialDimensionValueLegalEntityOverridesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link financialDimensionValueTotalAccountIntervalEntityRoleOfficeAddinLegalEntityEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FINANCIAL_DIMENSION_VALUE_TOTAL_ACCOUNT_INTERVAL_ENTITY_ROLE_OFFICE_ADDIN_LEGAL_ENTITY_ENTITY: OneToManyLink<
      OfficeAddinLegalEntities<DeSerializersT>,
      DeSerializersT,
      FinancialDimensionValueTotalAccountIntervalsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link financialDimensionValueEntityRoleLegalEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FINANCIAL_DIMENSION_VALUE_ENTITY_ROLE_LEGAL_ENTITY: OneToManyLink<
      OfficeAddinLegalEntities<DeSerializersT>,
      DeSerializersT,
      FinancialDimensionValuesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      GeneralLedgerCustInvoiceJournalLinesApi<DeSerializersT>,
      GeneralLedgerCustInvoiceJournalLinesApi<DeSerializersT>,
      VendInvoiceJournalLinesApi<DeSerializersT>,
      VendInvoiceJournalLinesApi<DeSerializersT>,
      CustomerPaymentJournalLinesApi<DeSerializersT>,
      VendorPaymentJournalLinesApi<DeSerializersT>,
      FinancialDimensionValueLegalEntityOverridesV2Api<DeSerializersT>,
      FinancialDimensionValueTotalAccountIntervalsApi<DeSerializersT>,
      FinancialDimensionValuesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      CUST_INVOICE_JOURNAL_LINE_OFFSET_COMPANY: new OneToManyLink(
        'CustInvoiceJournalLineOffsetCompany',
        this,
        linkedApis[0]
      ),
      CUST_INVOICE_JOURNAL_LINE_COMPANY: new OneToManyLink(
        'CustInvoiceJournalLineCompany',
        this,
        linkedApis[1]
      ),
      VEND_INVOICE_JOURNAL_LINE_OFFSET_COMPANY: new OneToManyLink(
        'VendInvoiceJournalLineOffsetCompany',
        this,
        linkedApis[2]
      ),
      VEND_INVOICE_JOURNAL_LINE_COMPANY: new OneToManyLink(
        'VendInvoiceJournalLineCompany',
        this,
        linkedApis[3]
      ),
      CUSTOMER_PAYMENT_JOURNAL_LINE_COMPANY: new OneToManyLink(
        'CustomerPaymentJournalLineCompany',
        this,
        linkedApis[4]
      ),
      VEND_PAYMENT_JOURNAL_LINE_COMPANY: new OneToManyLink(
        'VendPaymentJournalLineCompany',
        this,
        linkedApis[5]
      ),
      FINANCIAL_DIMENSION_VALUE_LEGAL_ENTITY_OVERRIDE_ENTITY_ROLE_LEGAL_ENTITY:
        new OneToManyLink(
          'FinancialDimensionValueLegalEntityOverrideEntity_Role_LegalEntity',
          this,
          linkedApis[6]
        ),
      FINANCIAL_DIMENSION_VALUE_TOTAL_ACCOUNT_INTERVAL_ENTITY_ROLE_OFFICE_ADDIN_LEGAL_ENTITY_ENTITY:
        new OneToManyLink(
          'FinancialDimensionValueTotalAccountIntervalEntity_Role_OfficeAddinLegalEntityEntity',
          this,
          linkedApis[7]
        ),
      FINANCIAL_DIMENSION_VALUE_ENTITY_ROLE_LEGAL_ENTITY: new OneToManyLink(
        'FinancialDimensionValueEntity_Role_LegalEntity',
        this,
        linkedApis[8]
      )
    };
    return this;
  }

  entityConstructor = OfficeAddinLegalEntities;

  requestBuilder(): OfficeAddinLegalEntitiesRequestBuilder<DeSerializersT> {
    return new OfficeAddinLegalEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    OfficeAddinLegalEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      OfficeAddinLegalEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    OfficeAddinLegalEntities<DeSerializersT>,
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
    typeof OfficeAddinLegalEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        OfficeAddinLegalEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    COMPANY_ID: OrderableEdmTypeField<
      OfficeAddinLegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ZAKAT_FILE_NUMBER: OrderableEdmTypeField<
      OfficeAddinLegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUSINESS_ACTIVITY_DESCRIPTION: OrderableEdmTypeField<
      OfficeAddinLegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUSINESS_ACTIVITY: OrderableEdmTypeField<
      OfficeAddinLegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY_NAME: OrderableEdmTypeField<
      OfficeAddinLegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link custInvoiceJournalLineOffsetCompany} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUST_INVOICE_JOURNAL_LINE_OFFSET_COMPANY: OneToManyLink<
      OfficeAddinLegalEntities<DeSerializersT>,
      DeSerializersT,
      GeneralLedgerCustInvoiceJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link custInvoiceJournalLineCompany} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUST_INVOICE_JOURNAL_LINE_COMPANY: OneToManyLink<
      OfficeAddinLegalEntities<DeSerializersT>,
      DeSerializersT,
      GeneralLedgerCustInvoiceJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vendInvoiceJournalLineOffsetCompany} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VEND_INVOICE_JOURNAL_LINE_OFFSET_COMPANY: OneToManyLink<
      OfficeAddinLegalEntities<DeSerializersT>,
      DeSerializersT,
      VendInvoiceJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vendInvoiceJournalLineCompany} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VEND_INVOICE_JOURNAL_LINE_COMPANY: OneToManyLink<
      OfficeAddinLegalEntities<DeSerializersT>,
      DeSerializersT,
      VendInvoiceJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link customerPaymentJournalLineCompany} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_PAYMENT_JOURNAL_LINE_COMPANY: OneToManyLink<
      OfficeAddinLegalEntities<DeSerializersT>,
      DeSerializersT,
      CustomerPaymentJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vendPaymentJournalLineCompany} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VEND_PAYMENT_JOURNAL_LINE_COMPANY: OneToManyLink<
      OfficeAddinLegalEntities<DeSerializersT>,
      DeSerializersT,
      VendorPaymentJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link financialDimensionValueLegalEntityOverrideEntityRoleLegalEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FINANCIAL_DIMENSION_VALUE_LEGAL_ENTITY_OVERRIDE_ENTITY_ROLE_LEGAL_ENTITY: OneToManyLink<
      OfficeAddinLegalEntities<DeSerializersT>,
      DeSerializersT,
      FinancialDimensionValueLegalEntityOverridesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link financialDimensionValueTotalAccountIntervalEntityRoleOfficeAddinLegalEntityEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FINANCIAL_DIMENSION_VALUE_TOTAL_ACCOUNT_INTERVAL_ENTITY_ROLE_OFFICE_ADDIN_LEGAL_ENTITY_ENTITY: OneToManyLink<
      OfficeAddinLegalEntities<DeSerializersT>,
      DeSerializersT,
      FinancialDimensionValueTotalAccountIntervalsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link financialDimensionValueEntityRoleLegalEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FINANCIAL_DIMENSION_VALUE_ENTITY_ROLE_LEGAL_ENTITY: OneToManyLink<
      OfficeAddinLegalEntities<DeSerializersT>,
      DeSerializersT,
      FinancialDimensionValuesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<OfficeAddinLegalEntities<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link companyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_ID: fieldBuilder.buildEdmTypeField(
          'CompanyId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link zakatFileNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ZAKAT_FILE_NUMBER: fieldBuilder.buildEdmTypeField(
          'ZakatFileNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link businessActivityDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_ACTIVITY_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'BusinessActivityDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link businessActivity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_ACTIVITY: fieldBuilder.buildEdmTypeField(
          'BusinessActivity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link companyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_NAME: fieldBuilder.buildEdmTypeField(
          'CompanyName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', OfficeAddinLegalEntities)
      };
    }

    return this._schema;
  }
}
