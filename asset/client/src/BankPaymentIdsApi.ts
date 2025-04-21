/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BankPaymentIds } from './BankPaymentIds';
import { BankPaymentIdsRequestBuilder } from './BankPaymentIdsRequestBuilder';
import { BankModuloCheckNo } from './BankModuloCheckNo';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class BankPaymentIdsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BankPaymentIds<DeSerializersT>, DeSerializersT>
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
  ): BankPaymentIdsApi<DeSerializersT> {
    return new BankPaymentIdsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = BankPaymentIds;

  requestBuilder(): BankPaymentIdsRequestBuilder<DeSerializersT> {
    return new BankPaymentIdsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BankPaymentIds<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BankPaymentIds<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<BankPaymentIds<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof BankPaymentIds, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(BankPaymentIds, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      BankPaymentIds<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PAYMENT_ID_TYPE: OrderableEdmTypeField<
      BankPaymentIds<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MODULO: EnumField<
      BankPaymentIds<DeSerializers>,
      DeSerializersT,
      BankModuloCheckNo,
      true,
      true
    >;
    ACCOUNT_TO_POSITION: OrderableEdmTypeField<
      BankPaymentIds<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      BankPaymentIds<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_REFERENCE_TO_POSITION: OrderableEdmTypeField<
      BankPaymentIds<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    INVOICE_FROM_POSITION: OrderableEdmTypeField<
      BankPaymentIds<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PREFIX_VALUE: OrderableEdmTypeField<
      BankPaymentIds<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SUFFIX_FROM_POSITION: OrderableEdmTypeField<
      BankPaymentIds<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SUFFIX_VALUE: OrderableEdmTypeField<
      BankPaymentIds<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PREFIX_TO_POSITION: OrderableEdmTypeField<
      BankPaymentIds<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    INVOICE_TO_POSITION: OrderableEdmTypeField<
      BankPaymentIds<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PREFIX_FROM_POSITION: OrderableEdmTypeField<
      BankPaymentIds<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PREFIX_TEXT_VALUE: OrderableEdmTypeField<
      BankPaymentIds<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUFFIX_TEXT_VALUE: OrderableEdmTypeField<
      BankPaymentIds<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUFFIX_TO_POSITION: OrderableEdmTypeField<
      BankPaymentIds<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ACCOUNT_FROM_POSITION: OrderableEdmTypeField<
      BankPaymentIds<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    BLANK_PAYMENT_ID: EnumField<
      BankPaymentIds<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PAYMENT_ID_LENGTH: OrderableEdmTypeField<
      BankPaymentIds<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    EXTERNAL_REFERENCE_FROM_POSITION: OrderableEdmTypeField<
      BankPaymentIds<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALL_FIELDS: AllFields<BankPaymentIds<DeSerializers>>;
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
         * Static representation of the {@link paymentIdType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_ID_TYPE: fieldBuilder.buildEdmTypeField(
          'PaymentIDType',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link modulo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MODULO: fieldBuilder.buildEnumField('Modulo', BankModuloCheckNo, true),
        /**
         * Static representation of the {@link accountToPosition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_TO_POSITION: fieldBuilder.buildEdmTypeField(
          'AccountToPosition',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link externalReferenceToPosition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_REFERENCE_TO_POSITION: fieldBuilder.buildEdmTypeField(
          'ExternalReferenceToPosition',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link invoiceFromPosition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_FROM_POSITION: fieldBuilder.buildEdmTypeField(
          'InvoiceFromPosition',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link prefixValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREFIX_VALUE: fieldBuilder.buildEdmTypeField(
          'PrefixValue',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link suffixFromPosition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUFFIX_FROM_POSITION: fieldBuilder.buildEdmTypeField(
          'SuffixFromPosition',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link suffixValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUFFIX_VALUE: fieldBuilder.buildEdmTypeField(
          'SuffixValue',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link prefixToPosition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREFIX_TO_POSITION: fieldBuilder.buildEdmTypeField(
          'PrefixToPosition',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link invoiceToPosition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_TO_POSITION: fieldBuilder.buildEdmTypeField(
          'InvoiceToPosition',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link prefixFromPosition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREFIX_FROM_POSITION: fieldBuilder.buildEdmTypeField(
          'PrefixFromPosition',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link prefixTextValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREFIX_TEXT_VALUE: fieldBuilder.buildEdmTypeField(
          'PrefixTextValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link suffixTextValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUFFIX_TEXT_VALUE: fieldBuilder.buildEdmTypeField(
          'SuffixTextValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link suffixToPosition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUFFIX_TO_POSITION: fieldBuilder.buildEdmTypeField(
          'SuffixToPosition',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link accountFromPosition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_FROM_POSITION: fieldBuilder.buildEdmTypeField(
          'AccountFromPosition',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link blankPaymentId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BLANK_PAYMENT_ID: fieldBuilder.buildEnumField(
          'BlankPaymentID',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link paymentIdLength} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_ID_LENGTH: fieldBuilder.buildEdmTypeField(
          'PaymentIDLength',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link externalReferenceFromPosition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_REFERENCE_FROM_POSITION: fieldBuilder.buildEdmTypeField(
          'ExternalReferenceFromPosition',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BankPaymentIds)
      };
    }

    return this._schema;
  }
}
