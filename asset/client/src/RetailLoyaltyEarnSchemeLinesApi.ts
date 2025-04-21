/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailLoyaltyEarnSchemeLines } from './RetailLoyaltyEarnSchemeLines';
import { RetailLoyaltyEarnSchemeLinesRequestBuilder } from './RetailLoyaltyEarnSchemeLinesRequestBuilder';
import { RetailLoyaltyActivityType } from './RetailLoyaltyActivityType';
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
export class RetailLoyaltyEarnSchemeLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RetailLoyaltyEarnSchemeLines<DeSerializersT>, DeSerializersT>
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
  ): RetailLoyaltyEarnSchemeLinesApi<DeSerializersT> {
    return new RetailLoyaltyEarnSchemeLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailLoyaltyEarnSchemeLines;

  requestBuilder(): RetailLoyaltyEarnSchemeLinesRequestBuilder<DeSerializersT> {
    return new RetailLoyaltyEarnSchemeLinesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailLoyaltyEarnSchemeLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailLoyaltyEarnSchemeLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailLoyaltyEarnSchemeLines<DeSerializersT>,
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
    typeof RetailLoyaltyEarnSchemeLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailLoyaltyEarnSchemeLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    LOYALTY_SCHEME_ID: OrderableEdmTypeField<
      RetailLoyaltyEarnSchemeLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      RetailLoyaltyEarnSchemeLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TO_REWARD_POINT_ID: OrderableEdmTypeField<
      RetailLoyaltyEarnSchemeLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FROM_ACTIVITY_TYPE: EnumField<
      RetailLoyaltyEarnSchemeLines<DeSerializers>,
      DeSerializersT,
      RetailLoyaltyActivityType,
      true,
      true
    >;
    STYLE: OrderableEdmTypeField<
      RetailLoyaltyEarnSchemeLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FROM_ACTIVITY_AMOUNT_QTY: OrderableEdmTypeField<
      RetailLoyaltyEarnSchemeLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RETAIL_FROM_OTHER_ACTIVITY_TYPE: OrderableEdmTypeField<
      RetailLoyaltyEarnSchemeLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COLOR: OrderableEdmTypeField<
      RetailLoyaltyEarnSchemeLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOYALTY_PROGRAM_NAME: OrderableEdmTypeField<
      RetailLoyaltyEarnSchemeLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AFFILIATION_NAME: OrderableEdmTypeField<
      RetailLoyaltyEarnSchemeLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      RetailLoyaltyEarnSchemeLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ITEM_ID: OrderableEdmTypeField<
      RetailLoyaltyEarnSchemeLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_DATA_AREA_ID: OrderableEdmTypeField<
      RetailLoyaltyEarnSchemeLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FROM_ACTIVITY_AMOUNT_CURRENCY: OrderableEdmTypeField<
      RetailLoyaltyEarnSchemeLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CATEGORY_NAME: OrderableEdmTypeField<
      RetailLoyaltyEarnSchemeLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONFIG_ID: OrderableEdmTypeField<
      RetailLoyaltyEarnSchemeLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      RetailLoyaltyEarnSchemeLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SIZE: OrderableEdmTypeField<
      RetailLoyaltyEarnSchemeLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TO_REWARD_POINT_AMOUNT_QTY: OrderableEdmTypeField<
      RetailLoyaltyEarnSchemeLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CATEGORY_HIERARCHY_NAME: OrderableEdmTypeField<
      RetailLoyaltyEarnSchemeLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOYALTY_TIER_ID: OrderableEdmTypeField<
      RetailLoyaltyEarnSchemeLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<RetailLoyaltyEarnSchemeLines<DeSerializers>>;
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
         * Static representation of the {@link toRewardPointId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_REWARD_POINT_ID: fieldBuilder.buildEdmTypeField(
          'ToRewardPointId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fromActivityType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_ACTIVITY_TYPE: fieldBuilder.buildEnumField(
          'FromActivityType',
          RetailLoyaltyActivityType,
          true
        ),
        /**
         * Static representation of the {@link style} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STYLE: fieldBuilder.buildEdmTypeField('Style', 'Edm.String', true),
        /**
         * Static representation of the {@link fromActivityAmountQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_ACTIVITY_AMOUNT_QTY: fieldBuilder.buildEdmTypeField(
          'FromActivityAmountQty',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link retailFromOtherActivityType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_FROM_OTHER_ACTIVITY_TYPE: fieldBuilder.buildEdmTypeField(
          'RetailFromOtherActivityType',
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
         * Static representation of the {@link affiliationName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AFFILIATION_NAME: fieldBuilder.buildEdmTypeField(
          'AffiliationName',
          'Edm.String',
          true
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
         * Static representation of the {@link fromActivityAmountCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_ACTIVITY_AMOUNT_CURRENCY: fieldBuilder.buildEdmTypeField(
          'FromActivityAmountCurrency',
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
         * Static representation of the {@link toRewardPointAmountQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_REWARD_POINT_AMOUNT_QTY: fieldBuilder.buildEdmTypeField(
          'ToRewardPointAmountQty',
          'Edm.Decimal',
          false
        ),
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailLoyaltyEarnSchemeLines)
      };
    }

    return this._schema;
  }
}
