/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ExpMobileExpTransGuests } from './ExpMobileExpTransGuests';
import { ExpMobileExpTransGuestsRequestBuilder } from './ExpMobileExpTransGuestsRequestBuilder';
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
export class ExpMobileExpTransGuestsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ExpMobileExpTransGuests<DeSerializersT>, DeSerializersT>
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
  ): ExpMobileExpTransGuestsApi<DeSerializersT> {
    return new ExpMobileExpTransGuestsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ExpMobileExpTransGuests;

  requestBuilder(): ExpMobileExpTransGuestsRequestBuilder<DeSerializersT> {
    return new ExpMobileExpTransGuestsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ExpMobileExpTransGuests<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ExpMobileExpTransGuests<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ExpMobileExpTransGuests<DeSerializersT>,
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
    typeof ExpMobileExpTransGuests,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ExpMobileExpTransGuests,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ENT_REC_ID: OrderableEdmTypeField<
      ExpMobileExpTransGuests<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    REMAINING_AMOUNT: OrderableEdmTypeField<
      ExpMobileExpTransGuests<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ITEMIZED_COST_AMOUNT: OrderableEdmTypeField<
      ExpMobileExpTransGuests<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TITLE: OrderableEdmTypeField<
      ExpMobileExpTransGuests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GUEST_ID: OrderableEdmTypeField<
      ExpMobileExpTransGuests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRV_EXP_GUEST: OrderableEdmTypeField<
      ExpMobileExpTransGuests<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    AMOUNT_CURR: OrderableEdmTypeField<
      ExpMobileExpTransGuests<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COMPANY: OrderableEdmTypeField<
      ExpMobileExpTransGuests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRV_EXP_TRANS: OrderableEdmTypeField<
      ExpMobileExpTransGuests<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    EXP_TRANS_NUMBER_ATTACH: OrderableEdmTypeField<
      ExpMobileExpTransGuests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ExpMobileExpTransGuests<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link entRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENT_REC_ID: fieldBuilder.buildEdmTypeField(
          'EntRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link remainingAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMAINING_AMOUNT: fieldBuilder.buildEdmTypeField(
          'RemainingAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link itemizedCostAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEMIZED_COST_AMOUNT: fieldBuilder.buildEdmTypeField(
          'ItemizedCostAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link title} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TITLE: fieldBuilder.buildEdmTypeField('Title', 'Edm.String', true),
        /**
         * Static representation of the {@link guestId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GUEST_ID: fieldBuilder.buildEdmTypeField('GuestId', 'Edm.String', true),
        /**
         * Static representation of the {@link trvExpGuest} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRV_EXP_GUEST: fieldBuilder.buildEdmTypeField(
          'TrvExpGuest',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link amountCurr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_CURR: fieldBuilder.buildEdmTypeField(
          'AmountCurr',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link company} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY: fieldBuilder.buildEdmTypeField('Company', 'Edm.String', true),
        /**
         * Static representation of the {@link trvExpTrans} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRV_EXP_TRANS: fieldBuilder.buildEdmTypeField(
          'TrvExpTrans',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link expTransNumberAttach} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXP_TRANS_NUMBER_ATTACH: fieldBuilder.buildEdmTypeField(
          'ExpTransNumberAttach',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ExpMobileExpTransGuests)
      };
    }

    return this._schema;
  }
}
