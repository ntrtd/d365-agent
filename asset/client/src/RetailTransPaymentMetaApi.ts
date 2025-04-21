/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailTransPaymentMeta } from './RetailTransPaymentMeta';
import { RetailTransPaymentMetaRequestBuilder } from './RetailTransPaymentMetaRequestBuilder';
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
export class RetailTransPaymentMetaApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RetailTransPaymentMeta<DeSerializersT>, DeSerializersT>
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
  ): RetailTransPaymentMetaApi<DeSerializersT> {
    return new RetailTransPaymentMetaApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailTransPaymentMeta;

  requestBuilder(): RetailTransPaymentMetaRequestBuilder<DeSerializersT> {
    return new RetailTransPaymentMetaRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailTransPaymentMeta<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailTransPaymentMeta<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailTransPaymentMeta<DeSerializersT>,
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
    typeof RetailTransPaymentMeta,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailTransPaymentMeta,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    YEAR_OFFSET: OrderableEdmTypeField<
      RetailTransPaymentMeta<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    RETAIL_CHANNEL_ID: OrderableEdmTypeField<
      RetailTransPaymentMeta<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEGAL_ENTITY_ID: OrderableEdmTypeField<
      RetailTransPaymentMeta<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MONTH_GREGORIAN_ID: OrderableEdmTypeField<
      RetailTransPaymentMeta<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TENDER_TYPE_ID: OrderableEdmTypeField<
      RetailTransPaymentMeta<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TERMINAL_ID: OrderableEdmTypeField<
      RetailTransPaymentMeta<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EMPLOYEE_ID: OrderableEdmTypeField<
      RetailTransPaymentMeta<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NUM_OF_TRANSACTIONS: OrderableEdmTypeField<
      RetailTransPaymentMeta<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    NUM_OF_GOODS: OrderableEdmTypeField<
      RetailTransPaymentMeta<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PAYMENT_AMOUNT: OrderableEdmTypeField<
      RetailTransPaymentMeta<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NUM_OF_PAYMENT_LINES: OrderableEdmTypeField<
      RetailTransPaymentMeta<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ALL_FIELDS: AllFields<RetailTransPaymentMeta<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link yearOffset} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        YEAR_OFFSET: fieldBuilder.buildEdmTypeField(
          'YearOffset',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link retailChannelId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_CHANNEL_ID: fieldBuilder.buildEdmTypeField(
          'RetailChannelId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link legalEntityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_ENTITY_ID: fieldBuilder.buildEdmTypeField(
          'LegalEntityId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link monthGregorianId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MONTH_GREGORIAN_ID: fieldBuilder.buildEdmTypeField(
          'MonthGregorianId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link tenderTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TENDER_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'TenderTypeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link terminalId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TERMINAL_ID: fieldBuilder.buildEdmTypeField(
          'TerminalId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link employeeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYEE_ID: fieldBuilder.buildEdmTypeField(
          'EmployeeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link numOfTransactions} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUM_OF_TRANSACTIONS: fieldBuilder.buildEdmTypeField(
          'NumOfTransactions',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link numOfGoods} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUM_OF_GOODS: fieldBuilder.buildEdmTypeField(
          'NumOfGoods',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link paymentAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'PaymentAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link numOfPaymentLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUM_OF_PAYMENT_LINES: fieldBuilder.buildEdmTypeField(
          'NumOfPaymentLines',
          'Edm.Int64',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailTransPaymentMeta)
      };
    }

    return this._schema;
  }
}
