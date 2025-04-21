/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SadDocumentPurchaseOrders } from './SadDocumentPurchaseOrders';
import { SadDocumentPurchaseOrdersRequestBuilder } from './SadDocumentPurchaseOrdersRequestBuilder';
import { DimensionSetsApi } from './DimensionSetsApi';
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
  EnumField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class SadDocumentPurchaseOrdersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<SadDocumentPurchaseOrders<DeSerializersT>, DeSerializersT>
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
  ): SadDocumentPurchaseOrdersApi<DeSerializersT> {
    return new SadDocumentPurchaseOrdersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      SadDocumentPurchaseOrders<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [DimensionSetsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      DIMENSION_SET: new OneToOneLink('DimensionSet', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = SadDocumentPurchaseOrders;

  requestBuilder(): SadDocumentPurchaseOrdersRequestBuilder<DeSerializersT> {
    return new SadDocumentPurchaseOrdersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SadDocumentPurchaseOrders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SadDocumentPurchaseOrders<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SadDocumentPurchaseOrders<DeSerializersT>,
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
    typeof SadDocumentPurchaseOrders,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SadDocumentPurchaseOrders,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SadDocumentPurchaseOrders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DOCUMENT_CODE: OrderableEdmTypeField<
      SadDocumentPurchaseOrders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DATE_OF_VAT_REGISTER: OrderableEdmTypeField<
      SadDocumentPurchaseOrders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SAD_DATE: OrderableEdmTypeField<
      SadDocumentPurchaseOrders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DUTY_GOVERNMENT: OrderableEdmTypeField<
      SadDocumentPurchaseOrders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      SadDocumentPurchaseOrders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTED: EnumField<
      SadDocumentPurchaseOrders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      SadDocumentPurchaseOrders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATE: OrderableEdmTypeField<
      SadDocumentPurchaseOrders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    MISC_PAYMENTS: OrderableEdmTypeField<
      SadDocumentPurchaseOrders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXCHANGE_RATE: OrderableEdmTypeField<
      SadDocumentPurchaseOrders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SAD: OrderableEdmTypeField<
      SadDocumentPurchaseOrders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSPORT: OrderableEdmTypeField<
      SadDocumentPurchaseOrders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      SadDocumentPurchaseOrders<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SadDocumentPurchaseOrders<DeSerializers>>;
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
         * Static representation of the {@link documentCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_CODE: fieldBuilder.buildEdmTypeField(
          'DocumentCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link dateOfVatRegister} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_OF_VAT_REGISTER: fieldBuilder.buildEdmTypeField(
          'DateOfVATRegister',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link sadDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAD_DATE: fieldBuilder.buildEdmTypeField(
          'SADDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link dutyGovernment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DUTY_GOVERNMENT: fieldBuilder.buildEdmTypeField(
          'DutyGovernment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DimensionDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link posted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTED: fieldBuilder.buildEnumField('Posted', NoYes, true),
        /**
         * Static representation of the {@link currency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY: fieldBuilder.buildEdmTypeField(
          'Currency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link date} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE: fieldBuilder.buildEdmTypeField(
          'Date',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link miscPayments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MISC_PAYMENTS: fieldBuilder.buildEdmTypeField(
          'MiscPayments',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link exchangeRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCHANGE_RATE: fieldBuilder.buildEdmTypeField(
          'ExchangeRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link sad} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAD: fieldBuilder.buildEdmTypeField('SAD', 'Edm.String', true),
        /**
         * Static representation of the {@link transport} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORT: fieldBuilder.buildEdmTypeField(
          'Transport',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SadDocumentPurchaseOrders)
      };
    }

    return this._schema;
  }
}
