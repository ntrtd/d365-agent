/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FreeItemDiscountTiersInquiryResults } from './FreeItemDiscountTiersInquiryResults';
import { FreeItemDiscountTiersInquiryResultsRequestBuilder } from './FreeItemDiscountTiersInquiryResultsRequestBuilder';
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
export class FreeItemDiscountTiersInquiryResultsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      FreeItemDiscountTiersInquiryResults<DeSerializersT>,
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
  ): FreeItemDiscountTiersInquiryResultsApi<DeSerializersT> {
    return new FreeItemDiscountTiersInquiryResultsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = FreeItemDiscountTiersInquiryResults;

  requestBuilder(): FreeItemDiscountTiersInquiryResultsRequestBuilder<DeSerializersT> {
    return new FreeItemDiscountTiersInquiryResultsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    FreeItemDiscountTiersInquiryResults<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      FreeItemDiscountTiersInquiryResults<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    FreeItemDiscountTiersInquiryResults<DeSerializersT>,
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
    typeof FreeItemDiscountTiersInquiryResults,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        FreeItemDiscountTiersInquiryResults,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      FreeItemDiscountTiersInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FREE_ITEM_ID: OrderableEdmTypeField<
      FreeItemDiscountTiersInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    QTY_OR_AMOUNT_THRESHOLD: OrderableEdmTypeField<
      FreeItemDiscountTiersInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FREE_ITEM_QUANTITY: OrderableEdmTypeField<
      FreeItemDiscountTiersInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<FreeItemDiscountTiersInquiryResults<DeSerializers>>;
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
         * Static representation of the {@link freeItemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREE_ITEM_ID: fieldBuilder.buildEdmTypeField(
          'FreeItemId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link qtyOrAmountThreshold} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QTY_OR_AMOUNT_THRESHOLD: fieldBuilder.buildEdmTypeField(
          'QtyOrAmountThreshold',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link freeItemQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREE_ITEM_QUANTITY: fieldBuilder.buildEdmTypeField(
          'FreeItemQuantity',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', FreeItemDiscountTiersInquiryResults)
      };
    }

    return this._schema;
  }
}
