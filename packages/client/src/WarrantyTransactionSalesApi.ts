/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WarrantyTransactionSales } from './WarrantyTransactionSales';
import { WarrantyTransactionSalesRequestBuilder } from './WarrantyTransactionSalesRequestBuilder';
import { WarrantySalesAction } from './WarrantySalesAction';
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
export class WarrantyTransactionSalesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<WarrantyTransactionSales<DeSerializersT>, DeSerializersT>
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
  ): WarrantyTransactionSalesApi<DeSerializersT> {
    return new WarrantyTransactionSalesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = WarrantyTransactionSales;

  requestBuilder(): WarrantyTransactionSalesRequestBuilder<DeSerializersT> {
    return new WarrantyTransactionSalesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    WarrantyTransactionSales<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      WarrantyTransactionSales<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    WarrantyTransactionSales<DeSerializersT>,
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
    typeof WarrantyTransactionSales,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WarrantyTransactionSales,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      WarrantyTransactionSales<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WARRANTABLE_PARTY_NUMBER: OrderableEdmTypeField<
      WarrantyTransactionSales<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WARRANTABLE_STORE: OrderableEdmTypeField<
      WarrantyTransactionSales<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WARRANTABLE_TERMINAL_ID: OrderableEdmTypeField<
      WarrantyTransactionSales<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WARRANTABLE_TRANSACTION_ID: OrderableEdmTypeField<
      WarrantyTransactionSales<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WARRANTABLE_LINE_NUM: OrderableEdmTypeField<
      WarrantyTransactionSales<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANSACTION_DATE_TIME: OrderableEdmTypeField<
      WarrantyTransactionSales<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ACTION: EnumField<
      WarrantyTransactionSales<DeSerializers>,
      DeSerializersT,
      WarrantySalesAction,
      true,
      true
    >;
    WARRANTY_PARTY_NUMBER: OrderableEdmTypeField<
      WarrantyTransactionSales<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WARRANTY_STORE: OrderableEdmTypeField<
      WarrantyTransactionSales<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WARRANTY_TERMINAL_ID: OrderableEdmTypeField<
      WarrantyTransactionSales<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WARRANTY_TRANSACTION_ID: OrderableEdmTypeField<
      WarrantyTransactionSales<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WARRANTY_LINE_NUM: OrderableEdmTypeField<
      WarrantyTransactionSales<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    WARRANTABLE_OM_OPERATING_UNIT_NUMBER: OrderableEdmTypeField<
      WarrantyTransactionSales<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WARRANTY_OM_OPERATING_UNIT_NUMBER: OrderableEdmTypeField<
      WarrantyTransactionSales<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WARRANTABLE_SERIAL_ID: OrderableEdmTypeField<
      WarrantyTransactionSales<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<WarrantyTransactionSales<DeSerializers>>;
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
         * Static representation of the {@link warrantablePartyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WARRANTABLE_PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'WarrantablePartyNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link warrantableStore} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WARRANTABLE_STORE: fieldBuilder.buildEdmTypeField(
          'WarrantableStore',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link warrantableTerminalId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WARRANTABLE_TERMINAL_ID: fieldBuilder.buildEdmTypeField(
          'WarrantableTerminalId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link warrantableTransactionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WARRANTABLE_TRANSACTION_ID: fieldBuilder.buildEdmTypeField(
          'WarrantableTransactionId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link warrantableLineNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WARRANTABLE_LINE_NUM: fieldBuilder.buildEdmTypeField(
          'WarrantableLineNum',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link transactionDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'TransactionDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link action} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTION: fieldBuilder.buildEnumField(
          'Action',
          WarrantySalesAction,
          true
        ),
        /**
         * Static representation of the {@link warrantyPartyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WARRANTY_PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'WarrantyPartyNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link warrantyStore} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WARRANTY_STORE: fieldBuilder.buildEdmTypeField(
          'WarrantyStore',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link warrantyTerminalId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WARRANTY_TERMINAL_ID: fieldBuilder.buildEdmTypeField(
          'WarrantyTerminalId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link warrantyTransactionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WARRANTY_TRANSACTION_ID: fieldBuilder.buildEdmTypeField(
          'WarrantyTransactionId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link warrantyLineNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WARRANTY_LINE_NUM: fieldBuilder.buildEdmTypeField(
          'WarrantyLineNum',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link warrantableOmOperatingUnitNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WARRANTABLE_OM_OPERATING_UNIT_NUMBER: fieldBuilder.buildEdmTypeField(
          'WarrantableOMOperatingUnitNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link warrantyOmOperatingUnitNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WARRANTY_OM_OPERATING_UNIT_NUMBER: fieldBuilder.buildEdmTypeField(
          'WarrantyOMOperatingUnitNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link warrantableSerialId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WARRANTABLE_SERIAL_ID: fieldBuilder.buildEdmTypeField(
          'WarrantableSerialId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WarrantyTransactionSales)
      };
    }

    return this._schema;
  }
}
