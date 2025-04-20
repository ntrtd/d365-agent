/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProjectContracts } from './ProjectContracts';
import { ProjectContractsRequestBuilder } from './ProjectContractsRequestBuilder';
import { ProjectFundingRulesApi } from './ProjectFundingRulesApi';
import { NoYes } from './NoYes';
import { ProjForecastInvoiceFrequency } from './ProjForecastInvoiceFrequency';
import { DetailSummary } from './DetailSummary';
import { Listcode } from './Listcode';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class ProjectContractsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProjectContracts<DeSerializersT>, DeSerializersT>
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
  ): ProjectContractsApi<DeSerializersT> {
    return new ProjectContractsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link fundingRule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FUNDING_RULE: OneToManyLink<
      ProjectContracts<DeSerializersT>,
      DeSerializersT,
      ProjectFundingRulesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [ProjectFundingRulesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      FUNDING_RULE: new OneToManyLink('FundingRule', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = ProjectContracts;

  requestBuilder(): ProjectContractsRequestBuilder<DeSerializersT> {
    return new ProjectContractsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProjectContracts<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ProjectContracts<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ProjectContracts<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ProjectContracts, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProjectContracts,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ProjectContracts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROJECT_CONTRACT_ID: OrderableEdmTypeField<
      ProjectContracts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CONTRACT_DATE: OrderableEdmTypeField<
      ProjectContracts<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LOCK_CONTRACT_SALES_CURRENCY: EnumField<
      ProjectContracts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BANK_ACCOUNT: OrderableEdmTypeField<
      ProjectContracts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CENTRAL_BANK_PURPOSE_CODE: OrderableEdmTypeField<
      ProjectContracts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICING_NAME: OrderableEdmTypeField<
      ProjectContracts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_TAX_GROUP: OrderableEdmTypeField<
      ProjectContracts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_RESPONSIBLE_PERSONNEL_NUMBER: OrderableEdmTypeField<
      ProjectContracts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE_GROUP: OrderableEdmTypeField<
      ProjectContracts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURPOSE_TEXT: OrderableEdmTypeField<
      ProjectContracts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NET_PRICE: EnumField<
      ProjectContracts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVOICE_FREQUENCY: EnumField<
      ProjectContracts<DeSerializers>,
      DeSerializersT,
      ProjForecastInvoiceFrequency,
      true,
      true
    >;
    SALES_CURRENCY: OrderableEdmTypeField<
      ProjectContracts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_POSTING_LEVEL: EnumField<
      ProjectContracts<DeSerializers>,
      DeSerializersT,
      DetailSummary,
      true,
      true
    >;
    TRANSACTION_CODE: OrderableEdmTypeField<
      ProjectContracts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETAINAGE_PERCENT: OrderableEdmTypeField<
      ProjectContracts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MINIMUM_TIME_INCREMENT: OrderableEdmTypeField<
      ProjectContracts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONTRACT_LINES: EnumField<
      ProjectContracts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SERVICE_ON_DELIVERY_ADDRESS: EnumField<
      ProjectContracts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CUSTOMER_RETENTION_TERM_ID: OrderableEdmTypeField<
      ProjectContracts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LIST_CODE_ID: EnumField<
      ProjectContracts<DeSerializers>,
      DeSerializersT,
      Listcode,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      ProjectContracts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROGRESS_INVOICING: OrderableEdmTypeField<
      ProjectContracts<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link fundingRule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FUNDING_RULE: OneToManyLink<
      ProjectContracts<DeSerializersT>,
      DeSerializersT,
      ProjectFundingRulesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProjectContracts<DeSerializers>>;
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
         * Static representation of the {@link projectContractId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_CONTRACT_ID: fieldBuilder.buildEdmTypeField(
          'ProjectContractID',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link contractDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTRACT_DATE: fieldBuilder.buildEdmTypeField(
          'ContractDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link lockContractSalesCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCK_CONTRACT_SALES_CURRENCY: fieldBuilder.buildEnumField(
          'LockContractSalesCurrency',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link bankAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'BankAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link centralBankPurposeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CENTRAL_BANK_PURPOSE_CODE: fieldBuilder.buildEdmTypeField(
          'CentralBankPurposeCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoicingName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICING_NAME: fieldBuilder.buildEdmTypeField(
          'InvoicingName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesTaxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_GROUP: fieldBuilder.buildEdmTypeField(
          'SalesTaxGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesResponsiblePersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_RESPONSIBLE_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'SalesResponsiblePersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link priceGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_GROUP: fieldBuilder.buildEdmTypeField(
          'PriceGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purposeText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURPOSE_TEXT: fieldBuilder.buildEdmTypeField(
          'PurposeText',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link netPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NET_PRICE: fieldBuilder.buildEnumField('NetPrice', NoYes, true),
        /**
         * Static representation of the {@link invoiceFrequency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_FREQUENCY: fieldBuilder.buildEnumField(
          'InvoiceFrequency',
          ProjForecastInvoiceFrequency,
          true
        ),
        /**
         * Static representation of the {@link salesCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_CURRENCY: fieldBuilder.buildEdmTypeField(
          'SalesCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultPostingLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_POSTING_LEVEL: fieldBuilder.buildEnumField(
          'DefaultPostingLevel',
          DetailSummary,
          true
        ),
        /**
         * Static representation of the {@link transactionCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CODE: fieldBuilder.buildEdmTypeField(
          'TransactionCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link retainagePercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAINAGE_PERCENT: fieldBuilder.buildEdmTypeField(
          'RetainagePercent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link minimumTimeIncrement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_TIME_INCREMENT: fieldBuilder.buildEdmTypeField(
          'MinimumTimeIncrement',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link contractLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTRACT_LINES: fieldBuilder.buildEnumField(
          'ContractLines',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link serviceOnDeliveryAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_ON_DELIVERY_ADDRESS: fieldBuilder.buildEnumField(
          'ServiceOnDeliveryAddress',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link customerRetentionTermId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_RETENTION_TERM_ID: fieldBuilder.buildEdmTypeField(
          'CustomerRetentionTermId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link listCodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIST_CODE_ID: fieldBuilder.buildEnumField('ListCodeId', Listcode, true),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link progressInvoicing} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROGRESS_INVOICING: fieldBuilder.buildEdmTypeField(
          'ProgressInvoicing',
          'Edm.Boolean',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProjectContracts)
      };
    }

    return this._schema;
  }
}
