/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FiscalTransSalesLineAdjustments } from './FiscalTransSalesLineAdjustments';
import { FiscalTransSalesLineAdjustmentsRequestBuilder } from './FiscalTransSalesLineAdjustmentsRequestBuilder';
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
export class FiscalTransSalesLineAdjustmentsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<FiscalTransSalesLineAdjustments<DeSerializersT>, DeSerializersT>
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
  ): FiscalTransSalesLineAdjustmentsApi<DeSerializersT> {
    return new FiscalTransSalesLineAdjustmentsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = FiscalTransSalesLineAdjustments;

  requestBuilder(): FiscalTransSalesLineAdjustmentsRequestBuilder<DeSerializersT> {
    return new FiscalTransSalesLineAdjustmentsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    FiscalTransSalesLineAdjustments<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      FiscalTransSalesLineAdjustments<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    FiscalTransSalesLineAdjustments<DeSerializersT>,
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
    typeof FiscalTransSalesLineAdjustments,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        FiscalTransSalesLineAdjustments,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      FiscalTransSalesLineAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STORE: OrderableEdmTypeField<
      FiscalTransSalesLineAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TERMINAL: OrderableEdmTypeField<
      FiscalTransSalesLineAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSACTION_ID: OrderableEdmTypeField<
      FiscalTransSalesLineAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FISCAL_TRANSACTION_LINE_NUMBER: OrderableEdmTypeField<
      FiscalTransSalesLineAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FISCAL_TRANSACTION_RECORD_GUID: OrderableEdmTypeField<
      FiscalTransSalesLineAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    SALES_TRANSACTION_LINE_NUMBER: OrderableEdmTypeField<
      FiscalTransSalesLineAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXCLUDE: EnumField<
      FiscalTransSalesLineAdjustments<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<FiscalTransSalesLineAdjustments<DeSerializers>>;
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
         * Static representation of the {@link store} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORE: fieldBuilder.buildEdmTypeField('Store', 'Edm.String', false),
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
         * Static representation of the {@link salesTransactionLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TRANSACTION_LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'SalesTransactionLineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link exclude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCLUDE: fieldBuilder.buildEnumField('Exclude', NoYes, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', FiscalTransSalesLineAdjustments)
      };
    }

    return this._schema;
  }
}
