/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailLoyaltyCards } from './RetailLoyaltyCards';
import { RetailLoyaltyCardsRequestBuilder } from './RetailLoyaltyCardsRequestBuilder';
import { RetailLoyaltyTenderTypeBase } from './RetailLoyaltyTenderTypeBase';
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
export class RetailLoyaltyCardsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RetailLoyaltyCards<DeSerializersT>, DeSerializersT>
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
  ): RetailLoyaltyCardsApi<DeSerializersT> {
    return new RetailLoyaltyCardsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailLoyaltyCards;

  requestBuilder(): RetailLoyaltyCardsRequestBuilder<DeSerializersT> {
    return new RetailLoyaltyCardsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailLoyaltyCards<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RetailLoyaltyCards<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailLoyaltyCards<DeSerializersT>,
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
    typeof RetailLoyaltyCards,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailLoyaltyCards,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CARD_NUMBER: OrderableEdmTypeField<
      RetailLoyaltyCards<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CARD_TENDER_TYPE: EnumField<
      RetailLoyaltyCards<DeSerializers>,
      DeSerializersT,
      RetailLoyaltyTenderTypeBase,
      true,
      true
    >;
    LOYALTY_ENROLLMENT_DATE_LOCAL: OrderableEdmTypeField<
      RetailLoyaltyCards<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    REPLACEMENT_CARD_NUMBER: OrderableEdmTypeField<
      RetailLoyaltyCards<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOYALTY_ENROLLMENT_TIME: OrderableEdmTypeField<
      RetailLoyaltyCards<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    LOYALTY_ENROLLMENT_TIME_LOCAL: OrderableEdmTypeField<
      RetailLoyaltyCards<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PARTY_NUMBER: OrderableEdmTypeField<
      RetailLoyaltyCards<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOYALTY_ENROLLMENT_DATE: OrderableEdmTypeField<
      RetailLoyaltyCards<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    OM_OPERATING_UNIT_NUMBER: OrderableEdmTypeField<
      RetailLoyaltyCards<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<RetailLoyaltyCards<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link cardNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CARD_NUMBER: fieldBuilder.buildEdmTypeField(
          'CardNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link cardTenderType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CARD_TENDER_TYPE: fieldBuilder.buildEnumField(
          'CardTenderType',
          RetailLoyaltyTenderTypeBase,
          true
        ),
        /**
         * Static representation of the {@link loyaltyEnrollmentDateLocal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOYALTY_ENROLLMENT_DATE_LOCAL: fieldBuilder.buildEdmTypeField(
          'LoyaltyEnrollmentDateLocal',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link replacementCardNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPLACEMENT_CARD_NUMBER: fieldBuilder.buildEdmTypeField(
          'ReplacementCardNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link loyaltyEnrollmentTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOYALTY_ENROLLMENT_TIME: fieldBuilder.buildEdmTypeField(
          'LoyaltyEnrollmentTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link loyaltyEnrollmentTimeLocal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOYALTY_ENROLLMENT_TIME_LOCAL: fieldBuilder.buildEdmTypeField(
          'LoyaltyEnrollmentTimeLocal',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link partyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'PartyNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link loyaltyEnrollmentDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOYALTY_ENROLLMENT_DATE: fieldBuilder.buildEdmTypeField(
          'LoyaltyEnrollmentDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link omOperatingUnitNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OM_OPERATING_UNIT_NUMBER: fieldBuilder.buildEdmTypeField(
          'OmOperatingUnitNumber',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailLoyaltyCards)
      };
    }

    return this._schema;
  }
}
