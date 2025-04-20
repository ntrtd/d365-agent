/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SalesInvoiceChorusProDetails } from './SalesInvoiceChorusProDetails';
import { SalesInvoiceChorusProDetailsRequestBuilder } from './SalesInvoiceChorusProDetailsRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class SalesInvoiceChorusProDetailsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<SalesInvoiceChorusProDetails<DeSerializersT>, DeSerializersT>
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
  ): SalesInvoiceChorusProDetailsApi<DeSerializersT> {
    return new SalesInvoiceChorusProDetailsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SalesInvoiceChorusProDetails;

  requestBuilder(): SalesInvoiceChorusProDetailsRequestBuilder<DeSerializersT> {
    return new SalesInvoiceChorusProDetailsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SalesInvoiceChorusProDetails<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SalesInvoiceChorusProDetails<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SalesInvoiceChorusProDetails<DeSerializersT>,
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
    typeof SalesInvoiceChorusProDetails,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SalesInvoiceChorusProDetails,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SalesInvoiceChorusProDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVOICE_ID: OrderableEdmTypeField<
      SalesInvoiceChorusProDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEDGER_VOUCHER: OrderableEdmTypeField<
      SalesInvoiceChorusProDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVOICE_DATE: OrderableEdmTypeField<
      SalesInvoiceChorusProDetails<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CHORUS_PRO_DEPOSIT_ID: OrderableEdmTypeField<
      SalesInvoiceChorusProDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHORUS_PRO_DEPOSIT_DATE_TIME: OrderableEdmTypeField<
      SalesInvoiceChorusProDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHORUS_PRO_REFUSAL_REASON: OrderableEdmTypeField<
      SalesInvoiceChorusProDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHORUS_PRO_INVOICE_STATUS: OrderableEdmTypeField<
      SalesInvoiceChorusProDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<SalesInvoiceChorusProDetails<DeSerializers>>;
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
         * Static representation of the {@link invoiceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ID: fieldBuilder.buildEdmTypeField(
          'InvoiceId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link ledgerVoucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_VOUCHER: fieldBuilder.buildEdmTypeField(
          'LedgerVoucher',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link invoiceDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_DATE: fieldBuilder.buildEdmTypeField(
          'InvoiceDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link chorusProDepositId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHORUS_PRO_DEPOSIT_ID: fieldBuilder.buildEdmTypeField(
          'ChorusProDepositId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link chorusProDepositDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHORUS_PRO_DEPOSIT_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'ChorusProDepositDateTime',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link chorusProRefusalReason} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHORUS_PRO_REFUSAL_REASON: fieldBuilder.buildEdmTypeField(
          'ChorusProRefusalReason',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link chorusProInvoiceStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHORUS_PRO_INVOICE_STATUS: fieldBuilder.buildEdmTypeField(
          'ChorusProInvoiceStatus',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SalesInvoiceChorusProDetails)
      };
    }

    return this._schema;
  }
}
