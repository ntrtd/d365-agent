/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CdsProjectContractLines } from './CdsProjectContractLines';
import { CdsProjectContractLinesRequestBuilder } from './CdsProjectContractLinesRequestBuilder';
import { PsaContractLineType } from './PsaContractLineType';
import { ProjForecastInvoiceFrequency } from './ProjForecastInvoiceFrequency';
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
export class CdsProjectContractLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CdsProjectContractLines<DeSerializersT>, DeSerializersT>
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
  ): CdsProjectContractLinesApi<DeSerializersT> {
    return new CdsProjectContractLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CdsProjectContractLines;

  requestBuilder(): CdsProjectContractLinesRequestBuilder<DeSerializersT> {
    return new CdsProjectContractLinesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CdsProjectContractLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CdsProjectContractLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CdsProjectContractLines<DeSerializersT>,
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
    typeof CdsProjectContractLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CdsProjectContractLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CdsProjectContractLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CONTRACT_ID: OrderableEdmTypeField<
      CdsProjectContractLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CONTRACT_LINE: OrderableEdmTypeField<
      CdsProjectContractLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      CdsProjectContractLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_ID: OrderableEdmTypeField<
      CdsProjectContractLines<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    PROJECT_ID: OrderableEdmTypeField<
      CdsProjectContractLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TYPE: EnumField<
      CdsProjectContractLines<DeSerializers>,
      DeSerializersT,
      PsaContractLineType,
      true,
      true
    >;
    FORECAST_INVOICE_FREQUENCY: EnumField<
      CdsProjectContractLines<DeSerializers>,
      DeSerializersT,
      ProjForecastInvoiceFrequency,
      true,
      true
    >;
    ALL_FIELDS: AllFields<CdsProjectContractLines<DeSerializers>>;
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
         * Static representation of the {@link contractId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTRACT_ID: fieldBuilder.buildEdmTypeField(
          'ContractId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link contractLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTRACT_LINE: fieldBuilder.buildEdmTypeField(
          'ContractLine',
          'Edm.Int32',
          false
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
         * Static representation of the {@link transactionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_ID: fieldBuilder.buildEdmTypeField(
          'TransactionId',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link projectId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_ID: fieldBuilder.buildEdmTypeField(
          'ProjectId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEnumField('Type', PsaContractLineType, true),
        /**
         * Static representation of the {@link forecastInvoiceFrequency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORECAST_INVOICE_FREQUENCY: fieldBuilder.buildEnumField(
          'ForecastInvoiceFrequency',
          ProjForecastInvoiceFrequency,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CdsProjectContractLines)
      };
    }

    return this._schema;
  }
}
