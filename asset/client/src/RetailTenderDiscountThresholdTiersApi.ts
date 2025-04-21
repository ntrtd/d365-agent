/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailTenderDiscountThresholdTiers } from './RetailTenderDiscountThresholdTiers';
import { RetailTenderDiscountThresholdTiersRequestBuilder } from './RetailTenderDiscountThresholdTiersRequestBuilder';
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
export class RetailTenderDiscountThresholdTiersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      RetailTenderDiscountThresholdTiers<DeSerializersT>,
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
  ): RetailTenderDiscountThresholdTiersApi<DeSerializersT> {
    return new RetailTenderDiscountThresholdTiersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailTenderDiscountThresholdTiers;

  requestBuilder(): RetailTenderDiscountThresholdTiersRequestBuilder<DeSerializersT> {
    return new RetailTenderDiscountThresholdTiersRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RetailTenderDiscountThresholdTiers<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailTenderDiscountThresholdTiers<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailTenderDiscountThresholdTiers<DeSerializersT>,
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
    typeof RetailTenderDiscountThresholdTiers,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailTenderDiscountThresholdTiers,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailTenderDiscountThresholdTiers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OFFER_ID: OrderableEdmTypeField<
      RetailTenderDiscountThresholdTiers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    AMOUNT_THRESHOLD: OrderableEdmTypeField<
      RetailTenderDiscountThresholdTiers<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DISCOUNT_VALUE: OrderableEdmTypeField<
      RetailTenderDiscountThresholdTiers<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<RetailTenderDiscountThresholdTiers<DeSerializers>>;
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailTenderDiscountThresholdTiers)
      };
    }

    return this._schema;
  }
}
