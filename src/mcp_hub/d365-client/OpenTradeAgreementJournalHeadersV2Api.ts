/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenTradeAgreementJournalHeadersV2 } from './OpenTradeAgreementJournalHeadersV2';
import { OpenTradeAgreementJournalHeadersV2RequestBuilder } from './OpenTradeAgreementJournalHeadersV2RequestBuilder';
import { TradeAgreementJournalNamesApi } from './TradeAgreementJournalNamesApi';
import { PriceType } from './PriceType';
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
export class OpenTradeAgreementJournalHeadersV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      OpenTradeAgreementJournalHeadersV2<DeSerializersT>,
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
  ): OpenTradeAgreementJournalHeadersV2Api<DeSerializersT> {
    return new OpenTradeAgreementJournalHeadersV2Api(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link tradeAgreementJournalName} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRADE_AGREEMENT_JOURNAL_NAME: OneToOneLink<
      OpenTradeAgreementJournalHeadersV2<DeSerializersT>,
      DeSerializersT,
      TradeAgreementJournalNamesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [TradeAgreementJournalNamesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      TRADE_AGREEMENT_JOURNAL_NAME: new OneToOneLink(
        'TradeAgreementJournalName',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = OpenTradeAgreementJournalHeadersV2;

  requestBuilder(): OpenTradeAgreementJournalHeadersV2RequestBuilder<DeSerializersT> {
    return new OpenTradeAgreementJournalHeadersV2RequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    OpenTradeAgreementJournalHeadersV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      OpenTradeAgreementJournalHeadersV2<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    OpenTradeAgreementJournalHeadersV2<DeSerializersT>,
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
    typeof OpenTradeAgreementJournalHeadersV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        OpenTradeAgreementJournalHeadersV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      OpenTradeAgreementJournalHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOURNAL_NUMBER: OrderableEdmTypeField<
      OpenTradeAgreementJournalHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOURNAL_DESCRIPTION: OrderableEdmTypeField<
      OpenTradeAgreementJournalHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_TRADE_AGREEMENT_TYPE: EnumField<
      OpenTradeAgreementJournalHeadersV2<DeSerializers>,
      DeSerializersT,
      PriceType,
      true,
      true
    >;
    IS_CURRENT_PRICE_EXPORTED: EnumField<
      OpenTradeAgreementJournalHeadersV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TRADE_AGREEMENT_JOURNAL_NAME_ID: OrderableEdmTypeField<
      OpenTradeAgreementJournalHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link tradeAgreementJournalName} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRADE_AGREEMENT_JOURNAL_NAME: OneToOneLink<
      OpenTradeAgreementJournalHeadersV2<DeSerializersT>,
      DeSerializersT,
      TradeAgreementJournalNamesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<OpenTradeAgreementJournalHeadersV2<DeSerializers>>;
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
         * Static representation of the {@link journalNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'JournalNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link journalDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'JournalDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultTradeAgreementType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_TRADE_AGREEMENT_TYPE: fieldBuilder.buildEnumField(
          'DefaultTradeAgreementType',
          PriceType,
          true
        ),
        /**
         * Static representation of the {@link isCurrentPriceExported} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CURRENT_PRICE_EXPORTED: fieldBuilder.buildEnumField(
          'IsCurrentPriceExported',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link tradeAgreementJournalNameId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRADE_AGREEMENT_JOURNAL_NAME_ID: fieldBuilder.buildEdmTypeField(
          'TradeAgreementJournalNameId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', OpenTradeAgreementJournalHeadersV2)
      };
    }

    return this._schema;
  }
}
