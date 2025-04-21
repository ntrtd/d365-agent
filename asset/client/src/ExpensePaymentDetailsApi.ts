/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ExpensePaymentDetails } from './ExpensePaymentDetails';
import { ExpensePaymentDetailsRequestBuilder } from './ExpensePaymentDetailsRequestBuilder';
import { TrvPaymentStatus } from './TrvPaymentStatus';
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
export class ExpensePaymentDetailsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ExpensePaymentDetails<DeSerializersT>, DeSerializersT>
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
  ): ExpensePaymentDetailsApi<DeSerializersT> {
    return new ExpensePaymentDetailsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ExpensePaymentDetails;

  requestBuilder(): ExpensePaymentDetailsRequestBuilder<DeSerializersT> {
    return new ExpensePaymentDetailsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ExpensePaymentDetails<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ExpensePaymentDetails<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ExpensePaymentDetails<DeSerializersT>,
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
    typeof ExpensePaymentDetails,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ExpensePaymentDetails,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ExpensePaymentDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVOICE_ID: OrderableEdmTypeField<
      ExpensePaymentDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EXP_NUMBER: OrderableEdmTypeField<
      ExpensePaymentDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EXP_TRANS_NUMBER: OrderableEdmTypeField<
      ExpensePaymentDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PAYMENT_DATE: OrderableEdmTypeField<
      ExpensePaymentDetails<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PAYMENT_VOUCHER: OrderableEdmTypeField<
      ExpensePaymentDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SENT_DATA_TO_EXTERNAL_DATE: OrderableEdmTypeField<
      ExpensePaymentDetails<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PAYMENT_STATUS: EnumField<
      ExpensePaymentDetails<DeSerializers>,
      DeSerializersT,
      TrvPaymentStatus,
      true,
      true
    >;
    CHECK_NUM: OrderableEdmTypeField<
      ExpensePaymentDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ExpensePaymentDetails<DeSerializers>>;
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
         * Static representation of the {@link expNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXP_NUMBER: fieldBuilder.buildEdmTypeField(
          'ExpNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link expTransNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXP_TRANS_NUMBER: fieldBuilder.buildEdmTypeField(
          'ExpTransNumber',
          'Edm.String',
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
         * Static representation of the {@link paymentVoucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_VOUCHER: fieldBuilder.buildEdmTypeField(
          'PaymentVoucher',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sentDataToExternalDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SENT_DATA_TO_EXTERNAL_DATE: fieldBuilder.buildEdmTypeField(
          'SentDataToExternalDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link paymentStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_STATUS: fieldBuilder.buildEnumField(
          'PaymentStatus',
          TrvPaymentStatus,
          true
        ),
        /**
         * Static representation of the {@link checkNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECK_NUM: fieldBuilder.buildEdmTypeField(
          'CheckNum',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ExpensePaymentDetails)
      };
    }

    return this._schema;
  }
}
