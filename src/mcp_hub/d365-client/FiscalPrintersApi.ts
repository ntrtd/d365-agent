/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FiscalPrinters } from './FiscalPrinters';
import { FiscalPrintersRequestBuilder } from './FiscalPrintersRequestBuilder';
import { PlFiscalPrinterType } from './PlFiscalPrinterType';
import { PlFiscalPosnetPrinterType } from './PlFiscalPosnetPrinterType';
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
export class FiscalPrintersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<FiscalPrinters<DeSerializersT>, DeSerializersT>
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
  ): FiscalPrintersApi<DeSerializersT> {
    return new FiscalPrintersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = FiscalPrinters;

  requestBuilder(): FiscalPrintersRequestBuilder<DeSerializersT> {
    return new FiscalPrintersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    FiscalPrinters<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<FiscalPrinters<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<FiscalPrinters<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof FiscalPrinters, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(FiscalPrinters, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      FiscalPrinters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CODE: OrderableEdmTypeField<
      FiscalPrinters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COM_PORT_NUMBER: OrderableEdmTypeField<
      FiscalPrinters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    FISCAL_PRINTER_TYPE: EnumField<
      FiscalPrinters<DeSerializers>,
      DeSerializersT,
      PlFiscalPrinterType,
      true,
      true
    >;
    FISCAL_CASH_CODE: OrderableEdmTypeField<
      FiscalPrinters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      FiscalPrinters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CERTIFICATION_OF_PRINTER: EnumField<
      FiscalPrinters<DeSerializers>,
      DeSerializersT,
      PlFiscalPosnetPrinterType,
      true,
      true
    >;
    ALL_FIELDS: AllFields<FiscalPrinters<DeSerializers>>;
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
         * Static representation of the {@link code} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CODE: fieldBuilder.buildEdmTypeField('Code', 'Edm.String', false),
        /**
         * Static representation of the {@link comPortNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COM_PORT_NUMBER: fieldBuilder.buildEdmTypeField(
          'COMPortNumber',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link fiscalPrinterType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_PRINTER_TYPE: fieldBuilder.buildEnumField(
          'FiscalPrinterType',
          PlFiscalPrinterType,
          true
        ),
        /**
         * Static representation of the {@link fiscalCashCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_CASH_CODE: fieldBuilder.buildEdmTypeField(
          'FiscalCashCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link certificationOfPrinter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CERTIFICATION_OF_PRINTER: fieldBuilder.buildEnumField(
          'CertificationOfPrinter',
          PlFiscalPosnetPrinterType,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', FiscalPrinters)
      };
    }

    return this._schema;
  }
}
