/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProjectFormSetups } from './ProjectFormSetups';
import { ProjectFormSetupsRequestBuilder } from './ProjectFormSetupsRequestBuilder';
import { TaxSpecPrintLevel } from './TaxSpecPrintLevel';
import { NoYes } from './NoYes';
import { PrePrintLevel } from './PrePrintLevel';
import { FirstLast } from './FirstLast';
import { PaymentStub } from './PaymentStub';
import { OurYourBoth } from './OurYourBoth';
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
export class ProjectFormSetupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProjectFormSetups<DeSerializersT>, DeSerializersT>
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
  ): ProjectFormSetupsApi<DeSerializersT> {
    return new ProjectFormSetupsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ProjectFormSetups;

  requestBuilder(): ProjectFormSetupsRequestBuilder<DeSerializersT> {
    return new ProjectFormSetupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProjectFormSetups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ProjectFormSetups<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ProjectFormSetups<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof ProjectFormSetups,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProjectFormSetups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ProjectFormSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SALES_TAX_SPECIFICATION: EnumField<
      ProjectFormSetups<DeSerializers>,
      DeSerializersT,
      TaxSpecPrintLevel,
      true,
      true
    >;
    PRINT_PACKING_SLIP_SPECIFICATIONS_ON_INVOICE: EnumField<
      ProjectFormSetups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRINT_TAX_EXEMPT_NUMBER_ON_INVOICE: EnumField<
      ProjectFormSetups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SPECIFY_INDEX_CALCULATION: EnumField<
      ProjectFormSetups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SEPARATE_TAX_EXEMPT_BALANCE_IN_FORMS: EnumField<
      ProjectFormSetups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRE_PRINT_LEVEL_INVOICE: EnumField<
      ProjectFormSetups<DeSerializers>,
      DeSerializersT,
      PrePrintLevel,
      true,
      true
    >;
    TOTALS_FIRST_LAST_PAGE: EnumField<
      ProjectFormSetups<DeSerializers>,
      DeSerializersT,
      FirstLast,
      true,
      true
    >;
    PRINT_EURO_AMOUNT: EnumField<
      ProjectFormSetups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ASSOCIATED_PAYMENT_ATTACHMENT_ON_INVOICE: EnumField<
      ProjectFormSetups<DeSerializers>,
      DeSerializersT,
      PaymentStub,
      true,
      true
    >;
    ITEM_NUMBER_IN_FORMS: EnumField<
      ProjectFormSetups<DeSerializers>,
      DeSerializersT,
      OurYourBoth,
      true,
      true
    >;
    PACKING_SLIP: OrderableEdmTypeField<
      ProjectFormSetups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    INVOICE: OrderableEdmTypeField<
      ProjectFormSetups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALL_FIELDS: AllFields<ProjectFormSetups<DeSerializers>>;
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
         * Static representation of the {@link salesTaxSpecification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_SPECIFICATION: fieldBuilder.buildEnumField(
          'SalesTaxSpecification',
          TaxSpecPrintLevel,
          true
        ),
        /**
         * Static representation of the {@link printPackingSlipSpecificationsOnInvoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINT_PACKING_SLIP_SPECIFICATIONS_ON_INVOICE:
          fieldBuilder.buildEnumField(
            'PrintPackingSlipSpecificationsOnInvoice',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link printTaxExemptNumberOnInvoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINT_TAX_EXEMPT_NUMBER_ON_INVOICE: fieldBuilder.buildEnumField(
          'PrintTaxExemptNumberOnInvoice',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link specifyIndexCalculation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPECIFY_INDEX_CALCULATION: fieldBuilder.buildEnumField(
          'SpecifyIndexCalculation',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link separateTaxExemptBalanceInForms} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEPARATE_TAX_EXEMPT_BALANCE_IN_FORMS: fieldBuilder.buildEnumField(
          'SeparateTaxExemptBalanceInForms',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link prePrintLevelInvoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRE_PRINT_LEVEL_INVOICE: fieldBuilder.buildEnumField(
          'PrePrintLevelInvoice',
          PrePrintLevel,
          true
        ),
        /**
         * Static representation of the {@link totalsFirstLastPage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTALS_FIRST_LAST_PAGE: fieldBuilder.buildEnumField(
          'TotalsFirstLastPage',
          FirstLast,
          true
        ),
        /**
         * Static representation of the {@link printEuroAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINT_EURO_AMOUNT: fieldBuilder.buildEnumField(
          'PrintEuroAmount',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link associatedPaymentAttachmentOnInvoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSOCIATED_PAYMENT_ATTACHMENT_ON_INVOICE: fieldBuilder.buildEnumField(
          'AssociatedPaymentAttachmentOnInvoice',
          PaymentStub,
          true
        ),
        /**
         * Static representation of the {@link itemNumberInForms} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_NUMBER_IN_FORMS: fieldBuilder.buildEnumField(
          'ItemNumberInForms',
          OurYourBoth,
          true
        ),
        /**
         * Static representation of the {@link packingSlip} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACKING_SLIP: fieldBuilder.buildEdmTypeField(
          'PackingSlip',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link invoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE: fieldBuilder.buildEdmTypeField('Invoice', 'Edm.Int32', false),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProjectFormSetups)
      };
    }

    return this._schema;
  }
}
