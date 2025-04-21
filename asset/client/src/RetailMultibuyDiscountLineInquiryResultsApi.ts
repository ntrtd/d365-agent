/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailMultibuyDiscountLineInquiryResults } from './RetailMultibuyDiscountLineInquiryResults';
import { RetailMultibuyDiscountLineInquiryResultsRequestBuilder } from './RetailMultibuyDiscountLineInquiryResultsRequestBuilder';
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
export class RetailMultibuyDiscountLineInquiryResultsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      RetailMultibuyDiscountLineInquiryResults<DeSerializersT>,
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
  ): RetailMultibuyDiscountLineInquiryResultsApi<DeSerializersT> {
    return new RetailMultibuyDiscountLineInquiryResultsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailMultibuyDiscountLineInquiryResults;

  requestBuilder(): RetailMultibuyDiscountLineInquiryResultsRequestBuilder<DeSerializersT> {
    return new RetailMultibuyDiscountLineInquiryResultsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RetailMultibuyDiscountLineInquiryResults<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailMultibuyDiscountLineInquiryResults<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailMultibuyDiscountLineInquiryResults<DeSerializersT>,
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
    typeof RetailMultibuyDiscountLineInquiryResults,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailMultibuyDiscountLineInquiryResults,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailMultibuyDiscountLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MULTIBUY_ID: OrderableEdmTypeField<
      RetailMultibuyDiscountLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    QTY_LOWEST: OrderableEdmTypeField<
      RetailMultibuyDiscountLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRICE_DISC_PCT: OrderableEdmTypeField<
      RetailMultibuyDiscountLineInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<
      RetailMultibuyDiscountLineInquiryResults<DeSerializers>
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
         * Static representation of the {@link multibuyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MULTIBUY_ID: fieldBuilder.buildEdmTypeField(
          'MultibuyId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link qtyLowest} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QTY_LOWEST: fieldBuilder.buildEdmTypeField(
          'QtyLowest',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link priceDiscPct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_DISC_PCT: fieldBuilder.buildEdmTypeField(
          'PriceDiscPct',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailMultibuyDiscountLineInquiryResults)
      };
    }

    return this._schema;
  }
}
