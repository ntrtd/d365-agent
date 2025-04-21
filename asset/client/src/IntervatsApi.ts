/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Intervats } from './Intervats';
import { IntervatsRequestBuilder } from './IntervatsRequestBuilder';
import { NoYes } from './NoYes';
import { TaxIntervatFrequency } from './TaxIntervatFrequency';
import { TaxIntervatStatus } from './TaxIntervatStatus';
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
export class IntervatsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Intervats<DeSerializersT>, DeSerializersT>
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
  ): IntervatsApi<DeSerializersT> {
    return new IntervatsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = Intervats;

  requestBuilder(): IntervatsRequestBuilder<DeSerializersT> {
    return new IntervatsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Intervats<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Intervats<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Intervats<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Intervats, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Intervats, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      Intervats<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INTERVAT_ID: OrderableEdmTypeField<
      Intervats<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      Intervats<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      Intervats<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SALES_TAX_NUMBER: OrderableEdmTypeField<
      Intervats<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_TAX_BOX: OrderableEdmTypeField<
      Intervats<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PREPARATION_DATE: OrderableEdmTypeField<
      Intervats<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PERIOD: OrderableEdmTypeField<
      Intervats<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUEST_FOR_REIMBURSEMENT: EnumField<
      Intervats<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COMPANY_NAME: OrderableEdmTypeField<
      Intervats<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENTERPRISE_NUMBER: OrderableEdmTypeField<
      Intervats<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AMOUNT: OrderableEdmTypeField<
      Intervats<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NIL_ANNUAL_LISTING: EnumField<
      Intervats<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FILENAME: OrderableEdmTypeField<
      Intervats<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUEST_FOR_PAYMENT_FORMS: EnumField<
      Intervats<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PERIOD_FREQUENCY: EnumField<
      Intervats<DeSerializers>,
      DeSerializersT,
      TaxIntervatFrequency,
      true,
      true
    >;
    E_MAIL: OrderableEdmTypeField<
      Intervats<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATUS: EnumField<
      Intervats<DeSerializers>,
      DeSerializersT,
      TaxIntervatStatus,
      true,
      true
    >;
    LOCATION: OrderableEdmTypeField<
      Intervats<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPLACED_VAT_DECLARATION: OrderableEdmTypeField<
      Intervats<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TELEPHONE: OrderableEdmTypeField<
      Intervats<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<Intervats<DeSerializers>>;
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
         * Static representation of the {@link intervatId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERVAT_ID: fieldBuilder.buildEdmTypeField(
          'IntervatId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link validFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_FROM: fieldBuilder.buildEdmTypeField(
          'ValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link validTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_TO: fieldBuilder.buildEdmTypeField(
          'ValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link salesTaxNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_NUMBER: fieldBuilder.buildEdmTypeField(
          'SalesTaxNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesTaxBox} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_BOX: fieldBuilder.buildEdmTypeField(
          'SalesTaxBox',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link preparationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREPARATION_DATE: fieldBuilder.buildEdmTypeField(
          'PreparationDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link period} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD: fieldBuilder.buildEdmTypeField('Period', 'Edm.String', true),
        /**
         * Static representation of the {@link requestForReimbursement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUEST_FOR_REIMBURSEMENT: fieldBuilder.buildEnumField(
          'RequestForReimbursement',
          NoYes,
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
        /**
         * Static representation of the {@link enterpriseNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENTERPRISE_NUMBER: fieldBuilder.buildEdmTypeField(
          'EnterpriseNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT: fieldBuilder.buildEdmTypeField('Amount', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link nilAnnualListing} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NIL_ANNUAL_LISTING: fieldBuilder.buildEnumField(
          'NilAnnualListing',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link filename} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FILENAME: fieldBuilder.buildEdmTypeField(
          'Filename',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link requestForPaymentForms} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUEST_FOR_PAYMENT_FORMS: fieldBuilder.buildEnumField(
          'RequestForPaymentForms',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link periodFrequency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_FREQUENCY: fieldBuilder.buildEnumField(
          'PeriodFrequency',
          TaxIntervatFrequency,
          true
        ),
        /**
         * Static representation of the {@link eMail} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        E_MAIL: fieldBuilder.buildEdmTypeField('EMail', 'Edm.String', true),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField('Status', TaxIntervatStatus, true),
        /**
         * Static representation of the {@link location} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCATION: fieldBuilder.buildEdmTypeField(
          'Location',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link replacedVatDeclaration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPLACED_VAT_DECLARATION: fieldBuilder.buildEdmTypeField(
          'ReplacedVATDeclaration',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link telephone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TELEPHONE: fieldBuilder.buildEdmTypeField(
          'Telephone',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Intervats)
      };
    }

    return this._schema;
  }
}
