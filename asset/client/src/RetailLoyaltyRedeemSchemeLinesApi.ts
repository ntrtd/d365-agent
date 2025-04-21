/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailLoyaltyRedeemSchemeLines } from './RetailLoyaltyRedeemSchemeLines';
import { RetailLoyaltyRedeemSchemeLinesRequestBuilder } from './RetailLoyaltyRedeemSchemeLinesRequestBuilder';
import { RetailLoyaltyRewardType } from './RetailLoyaltyRewardType';
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
export class RetailLoyaltyRedeemSchemeLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RetailLoyaltyRedeemSchemeLines<DeSerializersT>, DeSerializersT>
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
  ): RetailLoyaltyRedeemSchemeLinesApi<DeSerializersT> {
    return new RetailLoyaltyRedeemSchemeLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailLoyaltyRedeemSchemeLines;

  requestBuilder(): RetailLoyaltyRedeemSchemeLinesRequestBuilder<DeSerializersT> {
    return new RetailLoyaltyRedeemSchemeLinesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RetailLoyaltyRedeemSchemeLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailLoyaltyRedeemSchemeLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailLoyaltyRedeemSchemeLines<DeSerializersT>,
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
    typeof RetailLoyaltyRedeemSchemeLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailLoyaltyRedeemSchemeLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    LOYALTY_SCHEME_ID: OrderableEdmTypeField<
      RetailLoyaltyRedeemSchemeLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      RetailLoyaltyRedeemSchemeLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TO_REWARD_AMOUNT_QTY: OrderableEdmTypeField<
      RetailLoyaltyRedeemSchemeLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    STYLE: OrderableEdmTypeField<
      RetailLoyaltyRedeemSchemeLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FROM_REWARD_POINT_ID: OrderableEdmTypeField<
      RetailLoyaltyRedeemSchemeLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COLOR: OrderableEdmTypeField<
      RetailLoyaltyRedeemSchemeLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOYALTY_PROGRAM_NAME: OrderableEdmTypeField<
      RetailLoyaltyRedeemSchemeLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TO_REWARD_TYPE: EnumField<
      RetailLoyaltyRedeemSchemeLines<DeSerializers>,
      DeSerializersT,
      RetailLoyaltyRewardType,
      true,
      true
    >;
    AFFILIATION_NAME: OrderableEdmTypeField<
      RetailLoyaltyRedeemSchemeLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FROM_REWARD_POINT_AMOUNT_QTY: OrderableEdmTypeField<
      RetailLoyaltyRedeemSchemeLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      RetailLoyaltyRedeemSchemeLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ITEM_ID: OrderableEdmTypeField<
      RetailLoyaltyRedeemSchemeLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_DATA_AREA_ID: OrderableEdmTypeField<
      RetailLoyaltyRedeemSchemeLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CATEGORY_NAME: OrderableEdmTypeField<
      RetailLoyaltyRedeemSchemeLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONFIG_ID: OrderableEdmTypeField<
      RetailLoyaltyRedeemSchemeLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      RetailLoyaltyRedeemSchemeLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SIZE: OrderableEdmTypeField<
      RetailLoyaltyRedeemSchemeLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CATEGORY_HIERARCHY_NAME: OrderableEdmTypeField<
      RetailLoyaltyRedeemSchemeLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOYALTY_TIER_ID: OrderableEdmTypeField<
      RetailLoyaltyRedeemSchemeLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TO_REWARD_AMOUNT_CURRENCY: OrderableEdmTypeField<
      RetailLoyaltyRedeemSchemeLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<RetailLoyaltyRedeemSchemeLines<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link loyaltySchemeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOYALTY_SCHEME_ID: fieldBuilder.buildEdmTypeField(
          'LoyaltySchemeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link toRewardAmountQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_REWARD_AMOUNT_QTY: fieldBuilder.buildEdmTypeField(
          'ToRewardAmountQty',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link style} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STYLE: fieldBuilder.buildEdmTypeField('Style', 'Edm.String', true),
        /**
         * Static representation of the {@link fromRewardPointId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_REWARD_POINT_ID: fieldBuilder.buildEdmTypeField(
          'FromRewardPointId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link color} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLOR: fieldBuilder.buildEdmTypeField('Color', 'Edm.String', true),
        /**
         * Static representation of the {@link loyaltyProgramName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOYALTY_PROGRAM_NAME: fieldBuilder.buildEdmTypeField(
          'LoyaltyProgramName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link toRewardType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_REWARD_TYPE: fieldBuilder.buildEnumField(
          'ToRewardType',
          RetailLoyaltyRewardType,
          true
        ),
        /**
         * Static representation of the {@link affiliationName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AFFILIATION_NAME: fieldBuilder.buildEdmTypeField(
          'AffiliationName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fromRewardPointAmountQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_REWARD_POINT_AMOUNT_QTY: fieldBuilder.buildEdmTypeField(
          'FromRewardPointAmountQty',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link validTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_TO: fieldBuilder.buildEdmTypeField(
          'ValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link itemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_ID: fieldBuilder.buildEdmTypeField('ItemId', 'Edm.String', true),
        /**
         * Static representation of the {@link sourceDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'SourceDataAreaId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link categoryName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY_NAME: fieldBuilder.buildEdmTypeField(
          'CategoryName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link configId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONFIG_ID: fieldBuilder.buildEdmTypeField(
          'ConfigId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link validFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_FROM: fieldBuilder.buildEdmTypeField(
          'ValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link size} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SIZE: fieldBuilder.buildEdmTypeField('Size', 'Edm.String', true),
        /**
         * Static representation of the {@link categoryHierarchyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY_HIERARCHY_NAME: fieldBuilder.buildEdmTypeField(
          'CategoryHierarchyName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link loyaltyTierId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOYALTY_TIER_ID: fieldBuilder.buildEdmTypeField(
          'LoyaltyTierId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link toRewardAmountCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_REWARD_AMOUNT_CURRENCY: fieldBuilder.buildEdmTypeField(
          'ToRewardAmountCurrency',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailLoyaltyRedeemSchemeLines)
      };
    }

    return this._schema;
  }
}
