/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TradeAllowanceAgreementMerchandisingEventProductsV2 } from './TradeAllowanceAgreementMerchandisingEventProductsV2';
import { TradeAllowanceAgreementMerchandisingEventProductsV2RequestBuilder } from './TradeAllowanceAgreementMerchandisingEventProductsV2RequestBuilder';
import { UnitsOfMeasureApi } from './UnitsOfMeasureApi';
import { ReleasedProductsV2Api } from './ReleasedProductsV2Api';
import { TradeAllowanceAgreementMerchandisingEventsApi } from './TradeAllowanceAgreementMerchandisingEventsApi';
import { TradeAllowanceAgreementHeadersApi } from './TradeAllowanceAgreementHeadersApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class TradeAllowanceAgreementMerchandisingEventProductsV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      TradeAllowanceAgreementMerchandisingEventProductsV2<DeSerializersT>,
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
  ): TradeAllowanceAgreementMerchandisingEventProductsV2Api<DeSerializersT> {
    return new TradeAllowanceAgreementMerchandisingEventProductsV2Api(
      deSerializers
    );
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link promotionalProductUnitOfMeasure} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROMOTIONAL_PRODUCT_UNIT_OF_MEASURE: OneToOneLink<
      TradeAllowanceAgreementMerchandisingEventProductsV2<DeSerializersT>,
      DeSerializersT,
      UnitsOfMeasureApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link releasedProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT: OneToOneLink<
      TradeAllowanceAgreementMerchandisingEventProductsV2<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link tradeAllowanceAgreementMerchandisingEvent} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRADE_ALLOWANCE_AGREEMENT_MERCHANDISING_EVENT: OneToOneLink<
      TradeAllowanceAgreementMerchandisingEventProductsV2<DeSerializersT>,
      DeSerializersT,
      TradeAllowanceAgreementMerchandisingEventsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link tradeAllowanceAgreementHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRADE_ALLOWANCE_AGREEMENT_HEADER: OneToOneLink<
      TradeAllowanceAgreementMerchandisingEventProductsV2<DeSerializersT>,
      DeSerializersT,
      TradeAllowanceAgreementHeadersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      UnitsOfMeasureApi<DeSerializersT>,
      ReleasedProductsV2Api<DeSerializersT>,
      TradeAllowanceAgreementMerchandisingEventsApi<DeSerializersT>,
      TradeAllowanceAgreementHeadersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PROMOTIONAL_PRODUCT_UNIT_OF_MEASURE: new OneToOneLink(
        'PromotionalProductUnitOfMeasure',
        this,
        linkedApis[0]
      ),
      RELEASED_PRODUCT: new OneToOneLink(
        'ReleasedProduct',
        this,
        linkedApis[1]
      ),
      TRADE_ALLOWANCE_AGREEMENT_MERCHANDISING_EVENT: new OneToOneLink(
        'TradeAllowanceAgreementMerchandisingEvent',
        this,
        linkedApis[2]
      ),
      TRADE_ALLOWANCE_AGREEMENT_HEADER: new OneToOneLink(
        'TradeAllowanceAgreementHeader',
        this,
        linkedApis[3]
      )
    };
    return this;
  }

  entityConstructor = TradeAllowanceAgreementMerchandisingEventProductsV2;

  requestBuilder(): TradeAllowanceAgreementMerchandisingEventProductsV2RequestBuilder<DeSerializersT> {
    return new TradeAllowanceAgreementMerchandisingEventProductsV2RequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    TradeAllowanceAgreementMerchandisingEventProductsV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      TradeAllowanceAgreementMerchandisingEventProductsV2<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TradeAllowanceAgreementMerchandisingEventProductsV2<DeSerializersT>,
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
    typeof TradeAllowanceAgreementMerchandisingEventProductsV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TradeAllowanceAgreementMerchandisingEventProductsV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      TradeAllowanceAgreementMerchandisingEventProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRADE_ALLOWANCE_AGREEMENT_MERCHANDISING_EVENT_ID: OrderableEdmTypeField<
      TradeAllowanceAgreementMerchandisingEventProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CUSTOMER_ACCOUNT_NUMBER: OrderableEdmTypeField<
      TradeAllowanceAgreementMerchandisingEventProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRADE_ALLOWANCE_AGREEMENT_ID: OrderableEdmTypeField<
      TradeAllowanceAgreementMerchandisingEventProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      TradeAllowanceAgreementMerchandisingEventProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROMOTIONAL_PRODUCT_UNIT_SYMBOL: OrderableEdmTypeField<
      TradeAllowanceAgreementMerchandisingEventProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_COLOR_ID: OrderableEdmTypeField<
      TradeAllowanceAgreementMerchandisingEventProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_STYLE_ID: OrderableEdmTypeField<
      TradeAllowanceAgreementMerchandisingEventProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_VERSION_ID: OrderableEdmTypeField<
      TradeAllowanceAgreementMerchandisingEventProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_SIZE_ID: OrderableEdmTypeField<
      TradeAllowanceAgreementMerchandisingEventProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      TradeAllowanceAgreementMerchandisingEventProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WEIGHTING_FACTOR: OrderableEdmTypeField<
      TradeAllowanceAgreementMerchandisingEventProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link promotionalProductUnitOfMeasure} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROMOTIONAL_PRODUCT_UNIT_OF_MEASURE: OneToOneLink<
      TradeAllowanceAgreementMerchandisingEventProductsV2<DeSerializersT>,
      DeSerializersT,
      UnitsOfMeasureApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link releasedProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT: OneToOneLink<
      TradeAllowanceAgreementMerchandisingEventProductsV2<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link tradeAllowanceAgreementMerchandisingEvent} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRADE_ALLOWANCE_AGREEMENT_MERCHANDISING_EVENT: OneToOneLink<
      TradeAllowanceAgreementMerchandisingEventProductsV2<DeSerializersT>,
      DeSerializersT,
      TradeAllowanceAgreementMerchandisingEventsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link tradeAllowanceAgreementHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRADE_ALLOWANCE_AGREEMENT_HEADER: OneToOneLink<
      TradeAllowanceAgreementMerchandisingEventProductsV2<DeSerializersT>,
      DeSerializersT,
      TradeAllowanceAgreementHeadersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      TradeAllowanceAgreementMerchandisingEventProductsV2<DeSerializers>
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
         * Static representation of the {@link tradeAllowanceAgreementMerchandisingEventId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRADE_ALLOWANCE_AGREEMENT_MERCHANDISING_EVENT_ID:
          fieldBuilder.buildEdmTypeField(
            'TradeAllowanceAgreementMerchandisingEventId',
            'Edm.String',
            false
          ),
        /**
         * Static representation of the {@link customerAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'CustomerAccountNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link tradeAllowanceAgreementId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRADE_ALLOWANCE_AGREEMENT_ID: fieldBuilder.buildEdmTypeField(
          'TradeAllowanceAgreementId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link itemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link promotionalProductUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROMOTIONAL_PRODUCT_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'PromotionalProductUnitSymbol',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productColorId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_COLOR_ID: fieldBuilder.buildEdmTypeField(
          'ProductColorId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productStyleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_STYLE_ID: fieldBuilder.buildEdmTypeField(
          'ProductStyleId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productVersionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_VERSION_ID: fieldBuilder.buildEdmTypeField(
          'ProductVersionId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productSizeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_SIZE_ID: fieldBuilder.buildEdmTypeField(
          'ProductSizeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productConfigurationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_CONFIGURATION_ID: fieldBuilder.buildEdmTypeField(
          'ProductConfigurationId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link weightingFactor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEIGHTING_FACTOR: fieldBuilder.buildEdmTypeField(
          'WeightingFactor',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          TradeAllowanceAgreementMerchandisingEventProductsV2
        )
      };
    }

    return this._schema;
  }
}
