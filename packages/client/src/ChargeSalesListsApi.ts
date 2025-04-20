/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ChargeSalesLists } from './ChargeSalesLists';
import { ChargeSalesListsRequestBuilder } from './ChargeSalesListsRequestBuilder';
import { ListStatus } from './ListStatus';
import { Listcode } from './Listcode';
import { Quarter } from './Quarter';
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
export class ChargeSalesListsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ChargeSalesLists<DeSerializersT>, DeSerializersT>
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
  ): ChargeSalesListsApi<DeSerializersT> {
    return new ChargeSalesListsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ChargeSalesLists;

  requestBuilder(): ChargeSalesListsRequestBuilder<DeSerializersT> {
    return new ChargeSalesListsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ChargeSalesLists<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ChargeSalesLists<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ChargeSalesLists<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ChargeSalesLists, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ChargeSalesLists,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ChargeSalesLists<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REPORTING_STATUS: EnumField<
      ChargeSalesLists<DeSerializers>,
      DeSerializersT,
      ListStatus,
      true,
      true
    >;
    DISPATCH: OrderableEdmTypeField<
      ChargeSalesLists<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NUMBER: OrderableEdmTypeField<
      ChargeSalesLists<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    LISTCODE: EnumField<
      ChargeSalesLists<DeSerializers>,
      DeSerializersT,
      Listcode,
      true,
      true
    >;
    TRANS_QUARTER: EnumField<
      ChargeSalesLists<DeSerializers>,
      DeSerializersT,
      Quarter,
      true,
      true
    >;
    INVOICE_DATE: OrderableEdmTypeField<
      ChargeSalesLists<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VALUE: OrderableEdmTypeField<
      ChargeSalesLists<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CORRECTION: EnumField<
      ChargeSalesLists<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LOG: OrderableEdmTypeField<
      ChargeSalesLists<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    YEARS: OrderableEdmTypeField<
      ChargeSalesLists<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TAX_EXEMPT_NUMBER: OrderableEdmTypeField<
      ChargeSalesLists<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY: OrderableEdmTypeField<
      ChargeSalesLists<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_ACCOUNT: OrderableEdmTypeField<
      ChargeSalesLists<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTRY_REGION: OrderableEdmTypeField<
      ChargeSalesLists<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE: OrderableEdmTypeField<
      ChargeSalesLists<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ChargeSalesLists<DeSerializers>>;
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
         * Static representation of the {@link reportingStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTING_STATUS: fieldBuilder.buildEnumField(
          'ReportingStatus',
          ListStatus,
          true
        ),
        /**
         * Static representation of the {@link dispatch} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPATCH: fieldBuilder.buildEdmTypeField(
          'Dispatch',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link number} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER: fieldBuilder.buildEdmTypeField('Number', 'Edm.Int32', false),
        /**
         * Static representation of the {@link listcode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LISTCODE: fieldBuilder.buildEnumField('Listcode', Listcode, true),
        /**
         * Static representation of the {@link transQuarter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_QUARTER: fieldBuilder.buildEnumField(
          'TransQuarter',
          Quarter,
          true
        ),
        /**
         * Static representation of the {@link invoiceDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_DATE: fieldBuilder.buildEdmTypeField(
          'InvoiceDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link value} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE: fieldBuilder.buildEdmTypeField('Value', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link correction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRECTION: fieldBuilder.buildEnumField('Correction', NoYes, true),
        /**
         * Static representation of the {@link log} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOG: fieldBuilder.buildEdmTypeField('Log', 'Edm.String', true),
        /**
         * Static representation of the {@link years} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        YEARS: fieldBuilder.buildEdmTypeField('Years', 'Edm.Int32', false),
        /**
         * Static representation of the {@link taxExemptNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_EXEMPT_NUMBER: fieldBuilder.buildEdmTypeField(
          'TaxExemptNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link company} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY: fieldBuilder.buildEdmTypeField('Company', 'Edm.String', true),
        /**
         * Static representation of the {@link customerAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'CustomerAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link countryRegion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_REGION: fieldBuilder.buildEdmTypeField(
          'CountryRegion',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE: fieldBuilder.buildEdmTypeField('Invoice', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ChargeSalesLists)
      };
    }

    return this._schema;
  }
}
