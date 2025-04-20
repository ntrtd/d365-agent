/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TaxTransRuBiEntities } from './TaxTransRuBiEntities';
import { TaxTransRuBiEntitiesRequestBuilder } from './TaxTransRuBiEntitiesRequestBuilder';
import { NoYes } from './NoYes';
import { TaxSourceTypeRu } from './TaxSourceTypeRu';
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
export class TaxTransRuBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<TaxTransRuBiEntities<DeSerializersT>, DeSerializersT>
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
  ): TaxTransRuBiEntitiesApi<DeSerializersT> {
    return new TaxTransRuBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = TaxTransRuBiEntities;

  requestBuilder(): TaxTransRuBiEntitiesRequestBuilder<DeSerializersT> {
    return new TaxTransRuBiEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TaxTransRuBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<TaxTransRuBiEntities<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TaxTransRuBiEntities<DeSerializersT>,
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
    typeof TaxTransRuBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TaxTransRuBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      TaxTransRuBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      TaxTransRuBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    VAT_TAX_AGENT_VEND_ACCOUNT_RU: OrderableEdmTypeField<
      TaxTransRuBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GOODS_IN_ROUTE_TO_DELIVERY_RU: EnumField<
      TaxTransRuBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VAT_OPERATION_CODE_RU: OrderableEdmTypeField<
      TaxTransRuBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_UNROUND_AMOUNT_RU: OrderableEdmTypeField<
      TaxTransRuBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_TRANS: OrderableEdmTypeField<
      TaxTransRuBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TAX_UNROUND_AMOUNT_CUR_RU: OrderableEdmTypeField<
      TaxTransRuBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CUST_VEND_TRANS_POSTING_LOG_RU: OrderableEdmTypeField<
      TaxTransRuBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    MARKUP_TRANS_REC_ID_RU: OrderableEdmTypeField<
      TaxTransRuBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TAX_SOURCE_TYPE_RU: EnumField<
      TaxTransRuBiEntities<DeSerializers>,
      DeSerializersT,
      TaxSourceTypeRu,
      true,
      true
    >;
    GOODS_IN_ROUTE_ID_RU: OrderableEdmTypeField<
      TaxTransRuBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<TaxTransRuBiEntities<DeSerializers>>;
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
         * Static representation of the {@link sourceKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_KEY: fieldBuilder.buildEdmTypeField(
          'SourceKey',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link vatTaxAgentVendAccountRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_TAX_AGENT_VEND_ACCOUNT_RU: fieldBuilder.buildEdmTypeField(
          'VATTaxAgentVendAccount_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link goodsInRouteToDeliveryRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GOODS_IN_ROUTE_TO_DELIVERY_RU: fieldBuilder.buildEnumField(
          'GoodsInRouteToDelivery_RU',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link vatOperationCodeRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_OPERATION_CODE_RU: fieldBuilder.buildEdmTypeField(
          'VATOperationCode_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxUnroundAmountRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_UNROUND_AMOUNT_RU: fieldBuilder.buildEdmTypeField(
          'TaxUnroundAmount_RU',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link taxTrans} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_TRANS: fieldBuilder.buildEdmTypeField(
          'TaxTrans',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link taxUnroundAmountCurRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_UNROUND_AMOUNT_CUR_RU: fieldBuilder.buildEdmTypeField(
          'TaxUnroundAmountCur_RU',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link custVendTransPostingLogRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_VEND_TRANS_POSTING_LOG_RU: fieldBuilder.buildEdmTypeField(
          'CustVendTransPostingLog_RU',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link markupTransRecIdRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARKUP_TRANS_REC_ID_RU: fieldBuilder.buildEdmTypeField(
          'MarkupTransRecId_RU',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link taxSourceTypeRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_SOURCE_TYPE_RU: fieldBuilder.buildEnumField(
          'TaxSourceType_RU',
          TaxSourceTypeRu,
          true
        ),
        /**
         * Static representation of the {@link goodsInRouteIdRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GOODS_IN_ROUTE_ID_RU: fieldBuilder.buildEdmTypeField(
          'GoodsInRouteId_RU',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TaxTransRuBiEntities)
      };
    }

    return this._schema;
  }
}
