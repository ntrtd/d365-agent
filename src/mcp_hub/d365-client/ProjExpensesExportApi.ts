/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProjExpensesExport } from './ProjExpensesExport';
import { ProjExpensesExportRequestBuilder } from './ProjExpensesExportRequestBuilder';
import { ProjBillingType } from './ProjBillingType';
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
export class ProjExpensesExportApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProjExpensesExport<DeSerializersT>, DeSerializersT>
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
  ): ProjExpensesExportApi<DeSerializersT> {
    return new ProjExpensesExportApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ProjExpensesExport;

  requestBuilder(): ProjExpensesExportRequestBuilder<DeSerializersT> {
    return new ProjExpensesExportRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProjExpensesExport<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ProjExpensesExport<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProjExpensesExport<DeSerializersT>,
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
    typeof ProjExpensesExport,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProjExpensesExport,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    EXP_TRANS_NUMBER: OrderableEdmTypeField<
      ProjExpensesExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REFERENCE_DATA_AREA_ID: OrderableEdmTypeField<
      ProjExpensesExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROJ_TRANS_ID: OrderableEdmTypeField<
      ProjExpensesExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NET_AMOUNT: OrderableEdmTypeField<
      ProjExpensesExport<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROJ_ID: OrderableEdmTypeField<
      ProjExpensesExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_AMOUNT: OrderableEdmTypeField<
      ProjExpensesExport<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXCHANGE_CODE: OrderableEdmTypeField<
      ProjExpensesExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJ_COST_TRANS_EXISTS: OrderableEdmTypeField<
      ProjExpensesExport<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TRANSACTION_CATEGORY_ID: OrderableEdmTypeField<
      ProjExpensesExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AMOUNT: OrderableEdmTypeField<
      ProjExpensesExport<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANS_DATE: OrderableEdmTypeField<
      ProjExpensesExport<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ADDITIONAL_INFORMATION: OrderableEdmTypeField<
      ProjExpensesExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILLING_TYPE: EnumField<
      ProjExpensesExport<DeSerializers>,
      DeSerializersT,
      ProjBillingType,
      true,
      true
    >;
    COST_TYPE: OrderableEdmTypeField<
      ProjExpensesExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTER_COMPANY_LE: OrderableEdmTypeField<
      ProjExpensesExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJ_ACTIVITY_NUMBER: OrderableEdmTypeField<
      ProjExpensesExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUANTITY: OrderableEdmTypeField<
      ProjExpensesExport<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<ProjExpensesExport<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
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
         * Static representation of the {@link referenceDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCE_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'ReferenceDataAreaId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link projTransId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_TRANS_ID: fieldBuilder.buildEdmTypeField(
          'ProjTransId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link netAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NET_AMOUNT: fieldBuilder.buildEdmTypeField(
          'NetAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link projId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_ID: fieldBuilder.buildEdmTypeField('ProjId', 'Edm.String', true),
        /**
         * Static representation of the {@link taxAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TaxAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link exchangeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCHANGE_CODE: fieldBuilder.buildEdmTypeField(
          'ExchangeCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projCostTransExists} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_COST_TRANS_EXISTS: fieldBuilder.buildEdmTypeField(
          'ProjCostTransExists',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link transactionCategoryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CATEGORY_ID: fieldBuilder.buildEdmTypeField(
          'TransactionCategoryId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT: fieldBuilder.buildEdmTypeField('Amount', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link transDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_DATE: fieldBuilder.buildEdmTypeField(
          'TransDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link additionalInformation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDITIONAL_INFORMATION: fieldBuilder.buildEdmTypeField(
          'AdditionalInformation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link billingType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_TYPE: fieldBuilder.buildEnumField(
          'BillingType',
          ProjBillingType,
          true
        ),
        /**
         * Static representation of the {@link costType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_TYPE: fieldBuilder.buildEdmTypeField(
          'CostType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link interCompanyLe} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTER_COMPANY_LE: fieldBuilder.buildEdmTypeField(
          'InterCompanyLE',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projActivityNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_ACTIVITY_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProjActivityNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link quantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY: fieldBuilder.buildEdmTypeField(
          'Quantity',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProjExpensesExport)
      };
    }

    return this._schema;
  }
}
