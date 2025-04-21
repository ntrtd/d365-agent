/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { IntrastatTransactionCodes } from './IntrastatTransactionCodes';
import { IntrastatTransactionCodesRequestBuilder } from './IntrastatTransactionCodesRequestBuilder';
import { NoYes } from './NoYes';
import { TransferOrderAmountValueType } from './TransferOrderAmountValueType';
import { IntrastatAmountCalcMethod } from './IntrastatAmountCalcMethod';
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
export class IntrastatTransactionCodesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<IntrastatTransactionCodes<DeSerializersT>, DeSerializersT>
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
  ): IntrastatTransactionCodesApi<DeSerializersT> {
    return new IntrastatTransactionCodesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = IntrastatTransactionCodes;

  requestBuilder(): IntrastatTransactionCodesRequestBuilder<DeSerializersT> {
    return new IntrastatTransactionCodesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    IntrastatTransactionCodes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      IntrastatTransactionCodes<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    IntrastatTransactionCodes<DeSerializersT>,
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
    typeof IntrastatTransactionCodes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        IntrastatTransactionCodes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      IntrastatTransactionCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSACTION_CODE: OrderableEdmTypeField<
      IntrastatTransactionCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INDIRECT_TRADE: EnumField<
      IntrastatTransactionCodes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      IntrastatTransactionCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSFER_ORDER_AMOUNT_VALUE_TYPE: EnumField<
      IntrastatTransactionCodes<DeSerializers>,
      DeSerializersT,
      TransferOrderAmountValueType,
      true,
      true
    >;
    STATISTICAL_AMOUNT: EnumField<
      IntrastatTransactionCodes<DeSerializers>,
      DeSerializersT,
      TransferOrderAmountValueType,
      true,
      true
    >;
    INVOICE_AMOUNT_CALC_METHOD: EnumField<
      IntrastatTransactionCodes<DeSerializers>,
      DeSerializersT,
      IntrastatAmountCalcMethod,
      true,
      true
    >;
    STATISTICAL_AMOUNT_CALC_METHOD: EnumField<
      IntrastatTransactionCodes<DeSerializers>,
      DeSerializersT,
      IntrastatAmountCalcMethod,
      true,
      true
    >;
    STATICAL_VALUE: EnumField<
      IntrastatTransactionCodes<DeSerializers>,
      DeSerializersT,
      TransferOrderAmountValueType,
      true,
      true
    >;
    ALL_FIELDS: AllFields<IntrastatTransactionCodes<DeSerializers>>;
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
         * Static representation of the {@link transactionCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CODE: fieldBuilder.buildEdmTypeField(
          'TransactionCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link indirectTrade} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INDIRECT_TRADE: fieldBuilder.buildEnumField(
          'IndirectTrade',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link transferOrderAmountValueType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSFER_ORDER_AMOUNT_VALUE_TYPE: fieldBuilder.buildEnumField(
          'TransferOrderAmountValueType',
          TransferOrderAmountValueType,
          true
        ),
        /**
         * Static representation of the {@link statisticalAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATISTICAL_AMOUNT: fieldBuilder.buildEnumField(
          'StatisticalAmount',
          TransferOrderAmountValueType,
          true
        ),
        /**
         * Static representation of the {@link invoiceAmountCalcMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_AMOUNT_CALC_METHOD: fieldBuilder.buildEnumField(
          'InvoiceAmountCalcMethod',
          IntrastatAmountCalcMethod,
          true
        ),
        /**
         * Static representation of the {@link statisticalAmountCalcMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATISTICAL_AMOUNT_CALC_METHOD: fieldBuilder.buildEnumField(
          'StatisticalAmountCalcMethod',
          IntrastatAmountCalcMethod,
          true
        ),
        /**
         * Static representation of the {@link staticalValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATICAL_VALUE: fieldBuilder.buildEnumField(
          'StaticalValue',
          TransferOrderAmountValueType,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', IntrastatTransactionCodes)
      };
    }

    return this._schema;
  }
}
