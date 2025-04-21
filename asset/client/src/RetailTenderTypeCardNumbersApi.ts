/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailTenderTypeCardNumbers } from './RetailTenderTypeCardNumbers';
import { RetailTenderTypeCardNumbersRequestBuilder } from './RetailTenderTypeCardNumbersRequestBuilder';
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
export class RetailTenderTypeCardNumbersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RetailTenderTypeCardNumbers<DeSerializersT>, DeSerializersT>
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
  ): RetailTenderTypeCardNumbersApi<DeSerializersT> {
    return new RetailTenderTypeCardNumbersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailTenderTypeCardNumbers;

  requestBuilder(): RetailTenderTypeCardNumbersRequestBuilder<DeSerializersT> {
    return new RetailTenderTypeCardNumbersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailTenderTypeCardNumbers<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailTenderTypeCardNumbers<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailTenderTypeCardNumbers<DeSerializersT>,
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
    typeof RetailTenderTypeCardNumbers,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailTenderTypeCardNumbers,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CARD_TYPE_ID: OrderableEdmTypeField<
      RetailTenderTypeCardNumbers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CARD_NUMBER_FROM: OrderableEdmTypeField<
      RetailTenderTypeCardNumbers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CARD_NUMBER_TO: OrderableEdmTypeField<
      RetailTenderTypeCardNumbers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CARD_NUMBER_LENGTH: OrderableEdmTypeField<
      RetailTenderTypeCardNumbers<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALL_FIELDS: AllFields<RetailTenderTypeCardNumbers<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link cardTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CARD_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'CardTypeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link cardNumberFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CARD_NUMBER_FROM: fieldBuilder.buildEdmTypeField(
          'CardNumberFrom',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link cardNumberTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CARD_NUMBER_TO: fieldBuilder.buildEdmTypeField(
          'CardNumberTo',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link cardNumberLength} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CARD_NUMBER_LENGTH: fieldBuilder.buildEdmTypeField(
          'CardNumberLength',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailTenderTypeCardNumbers)
      };
    }

    return this._schema;
  }
}
