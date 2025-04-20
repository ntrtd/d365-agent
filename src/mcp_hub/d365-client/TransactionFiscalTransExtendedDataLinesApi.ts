/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TransactionFiscalTransExtendedDataLines } from './TransactionFiscalTransExtendedDataLines';
import { TransactionFiscalTransExtendedDataLinesRequestBuilder } from './TransactionFiscalTransExtendedDataLinesRequestBuilder';
import { RetailFiscalRegistrationExtendedDataType } from './RetailFiscalRegistrationExtendedDataType';
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
export class TransactionFiscalTransExtendedDataLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      TransactionFiscalTransExtendedDataLines<DeSerializersT>,
      DeSerializersT
    >
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
  ): TransactionFiscalTransExtendedDataLinesApi<DeSerializersT> {
    return new TransactionFiscalTransExtendedDataLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = TransactionFiscalTransExtendedDataLines;

  requestBuilder(): TransactionFiscalTransExtendedDataLinesRequestBuilder<DeSerializersT> {
    return new TransactionFiscalTransExtendedDataLinesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    TransactionFiscalTransExtendedDataLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      TransactionFiscalTransExtendedDataLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TransactionFiscalTransExtendedDataLines<DeSerializersT>,
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
    typeof TransactionFiscalTransExtendedDataLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TransactionFiscalTransExtendedDataLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      TransactionFiscalTransExtendedDataLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OPERATING_UNIT_NUMBER: OrderableEdmTypeField<
      TransactionFiscalTransExtendedDataLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TERMINAL: OrderableEdmTypeField<
      TransactionFiscalTransExtendedDataLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSACTION_ID: OrderableEdmTypeField<
      TransactionFiscalTransExtendedDataLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FISCAL_TRANSACTION_LINE_NUMBER: OrderableEdmTypeField<
      TransactionFiscalTransExtendedDataLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FISCAL_TRANSACTION_RECORD_GUID: OrderableEdmTypeField<
      TransactionFiscalTransExtendedDataLines<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    DATA_KEY: EnumField<
      TransactionFiscalTransExtendedDataLines<DeSerializers>,
      DeSerializersT,
      RetailFiscalRegistrationExtendedDataType,
      true,
      true
    >;
    DATA_VALUE: OrderableEdmTypeField<
      TransactionFiscalTransExtendedDataLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<
      TransactionFiscalTransExtendedDataLines<DeSerializers>
    >;
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
         * Static representation of the {@link operatingUnitNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATING_UNIT_NUMBER: fieldBuilder.buildEdmTypeField(
          'OperatingUnitNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link terminal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TERMINAL: fieldBuilder.buildEdmTypeField(
          'Terminal',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link transactionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_ID: fieldBuilder.buildEdmTypeField(
          'TransactionId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link fiscalTransactionLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_TRANSACTION_LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'FiscalTransactionLineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link fiscalTransactionRecordGuid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_TRANSACTION_RECORD_GUID: fieldBuilder.buildEdmTypeField(
          'FiscalTransactionRecordGuid',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link dataKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_KEY: fieldBuilder.buildEnumField(
          'DataKey',
          RetailFiscalRegistrationExtendedDataType,
          true
        ),
        /**
         * Static representation of the {@link dataValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_VALUE: fieldBuilder.buildEdmTypeField(
          'DataValue',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TransactionFiscalTransExtendedDataLines)
      };
    }

    return this._schema;
  }
}
