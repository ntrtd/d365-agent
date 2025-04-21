/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailDiscountThresholdTiersInquiryResults } from './RetailDiscountThresholdTiersInquiryResults';
import { RetailDiscountThresholdTiersInquiryResultsRequestBuilder } from './RetailDiscountThresholdTiersInquiryResultsRequestBuilder';
import { RetailThresholdDiscountMethod } from './RetailThresholdDiscountMethod';
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
export class RetailDiscountThresholdTiersInquiryResultsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      RetailDiscountThresholdTiersInquiryResults<DeSerializersT>,
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
  ): RetailDiscountThresholdTiersInquiryResultsApi<DeSerializersT> {
    return new RetailDiscountThresholdTiersInquiryResultsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailDiscountThresholdTiersInquiryResults;

  requestBuilder(): RetailDiscountThresholdTiersInquiryResultsRequestBuilder<DeSerializersT> {
    return new RetailDiscountThresholdTiersInquiryResultsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RetailDiscountThresholdTiersInquiryResults<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailDiscountThresholdTiersInquiryResults<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailDiscountThresholdTiersInquiryResults<DeSerializersT>,
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
    typeof RetailDiscountThresholdTiersInquiryResults,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailDiscountThresholdTiersInquiryResults,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailDiscountThresholdTiersInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OFFER_ID: OrderableEdmTypeField<
      RetailDiscountThresholdTiersInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    AMOUNT_THRESHOLD: OrderableEdmTypeField<
      RetailDiscountThresholdTiersInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DISCOUNT_VALUE: OrderableEdmTypeField<
      RetailDiscountThresholdTiersInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DISCOUNT_METHOD: EnumField<
      RetailDiscountThresholdTiersInquiryResults<DeSerializers>,
      DeSerializersT,
      RetailThresholdDiscountMethod,
      true,
      true
    >;
    ALL_FIELDS: AllFields<
      RetailDiscountThresholdTiersInquiryResults<DeSerializers>
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
         * Static representation of the {@link offerId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFER_ID: fieldBuilder.buildEdmTypeField(
          'OfferId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link amountThreshold} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_THRESHOLD: fieldBuilder.buildEdmTypeField(
          'AmountThreshold',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link discountValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_VALUE: fieldBuilder.buildEdmTypeField(
          'DiscountValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link discountMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_METHOD: fieldBuilder.buildEnumField(
          'DiscountMethod',
          RetailThresholdDiscountMethod,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          RetailDiscountThresholdTiersInquiryResults
        )
      };
    }

    return this._schema;
  }
}
