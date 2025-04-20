/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailTenderTypeCards } from './RetailTenderTypeCards';
import { RetailTenderTypeCardsRequestBuilder } from './RetailTenderTypeCardsRequestBuilder';
import { RetailChannelsApi } from './RetailChannelsApi';
import { CardTypeBr } from './CardTypeBr';
import { RetailCardTypesBase } from './RetailCardTypesBase';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class RetailTenderTypeCardsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RetailTenderTypeCards<DeSerializersT>, DeSerializersT>
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
  ): RetailTenderTypeCardsApi<DeSerializersT> {
    return new RetailTenderTypeCardsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link retailChannel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CHANNEL: OneToManyLink<
      RetailTenderTypeCards<DeSerializersT>,
      DeSerializersT,
      RetailChannelsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [RetailChannelsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      RETAIL_CHANNEL: new OneToManyLink('RetailChannel', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = RetailTenderTypeCards;

  requestBuilder(): RetailTenderTypeCardsRequestBuilder<DeSerializersT> {
    return new RetailTenderTypeCardsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailTenderTypeCards<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RetailTenderTypeCards<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailTenderTypeCards<DeSerializersT>,
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
    typeof RetailTenderTypeCards,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailTenderTypeCards,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CARD_TYPE_ID: OrderableEdmTypeField<
      RetailTenderTypeCards<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      RetailTenderTypeCards<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CARD_PROCESSOR_CODE: OrderableEdmTypeField<
      RetailTenderTypeCards<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_SYSTEM: EnumField<
      RetailTenderTypeCards<DeSerializers>,
      DeSerializersT,
      CardTypeBr,
      true,
      true
    >;
    CARD_ISSUER: OrderableEdmTypeField<
      RetailTenderTypeCards<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CARD_TYPES: EnumField<
      RetailTenderTypeCards<DeSerializers>,
      DeSerializersT,
      RetailCardTypesBase,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailChannel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CHANNEL: OneToManyLink<
      RetailTenderTypeCards<DeSerializersT>,
      DeSerializersT,
      RetailChannelsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RetailTenderTypeCards<DeSerializers>>;
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
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link cardProcessorCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CARD_PROCESSOR_CODE: fieldBuilder.buildEdmTypeField(
          'CardProcessorCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentSystem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_SYSTEM: fieldBuilder.buildEnumField(
          'PaymentSystem',
          CardTypeBr,
          true
        ),
        /**
         * Static representation of the {@link cardIssuer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CARD_ISSUER: fieldBuilder.buildEdmTypeField(
          'CardIssuer',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cardTypes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CARD_TYPES: fieldBuilder.buildEnumField(
          'CardTypes',
          RetailCardTypesBase,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailTenderTypeCards)
      };
    }

    return this._schema;
  }
}
