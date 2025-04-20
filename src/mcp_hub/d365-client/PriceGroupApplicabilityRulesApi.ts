/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PriceGroupApplicabilityRules } from './PriceGroupApplicabilityRules';
import { PriceGroupApplicabilityRulesRequestBuilder } from './PriceGroupApplicabilityRulesRequestBuilder';
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
export class PriceGroupApplicabilityRulesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<PriceGroupApplicabilityRules<DeSerializersT>, DeSerializersT>
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
  ): PriceGroupApplicabilityRulesApi<DeSerializersT> {
    return new PriceGroupApplicabilityRulesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = PriceGroupApplicabilityRules;

  requestBuilder(): PriceGroupApplicabilityRulesRequestBuilder<DeSerializersT> {
    return new PriceGroupApplicabilityRulesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PriceGroupApplicabilityRules<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PriceGroupApplicabilityRules<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PriceGroupApplicabilityRules<DeSerializersT>,
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
    typeof PriceGroupApplicabilityRules,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PriceGroupApplicabilityRules,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      PriceGroupApplicabilityRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GUID_ID: OrderableEdmTypeField<
      PriceGroupApplicabilityRules<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    PROP_VALUE_2: OrderableEdmTypeField<
      PriceGroupApplicabilityRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROP_VALUE_7: OrderableEdmTypeField<
      PriceGroupApplicabilityRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETAIL_CHANNEL_ID: OrderableEdmTypeField<
      PriceGroupApplicabilityRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUST_GROUP: OrderableEdmTypeField<
      PriceGroupApplicabilityRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROP_VALUE_4: OrderableEdmTypeField<
      PriceGroupApplicabilityRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOYALTY_TIER_ID: OrderableEdmTypeField<
      PriceGroupApplicabilityRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROP_VALUE_9: OrderableEdmTypeField<
      PriceGroupApplicabilityRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROP_VALUE_1: OrderableEdmTypeField<
      PriceGroupApplicabilityRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNT_NUM: OrderableEdmTypeField<
      PriceGroupApplicabilityRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE_GROUP_ID: OrderableEdmTypeField<
      PriceGroupApplicabilityRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOYALTY_AFFILIATION_NAME: OrderableEdmTypeField<
      PriceGroupApplicabilityRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROP_VALUE_6: OrderableEdmTypeField<
      PriceGroupApplicabilityRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROP_VALUE_8: OrderableEdmTypeField<
      PriceGroupApplicabilityRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROP_VALUE_3: OrderableEdmTypeField<
      PriceGroupApplicabilityRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROP_VALUE_0: OrderableEdmTypeField<
      PriceGroupApplicabilityRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROP_VALUE_5: OrderableEdmTypeField<
      PriceGroupApplicabilityRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AFFILIATION_NAME: OrderableEdmTypeField<
      PriceGroupApplicabilityRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<PriceGroupApplicabilityRules<DeSerializers>>;
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
         * Static representation of the {@link guidId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GUID_ID: fieldBuilder.buildEdmTypeField('GuidId', 'Edm.Guid', false),
        /**
         * Static representation of the {@link propValue2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROP_VALUE_2: fieldBuilder.buildEdmTypeField(
          'PropValue2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link propValue7} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROP_VALUE_7: fieldBuilder.buildEdmTypeField(
          'PropValue7',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link retailChannelId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_CHANNEL_ID: fieldBuilder.buildEdmTypeField(
          'RetailChannelId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link custGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_GROUP: fieldBuilder.buildEdmTypeField(
          'CustGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link propValue4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROP_VALUE_4: fieldBuilder.buildEdmTypeField(
          'PropValue4',
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
         * Static representation of the {@link propValue9} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROP_VALUE_9: fieldBuilder.buildEdmTypeField(
          'PropValue9',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link propValue1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROP_VALUE_1: fieldBuilder.buildEdmTypeField(
          'PropValue1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accountNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_NUM: fieldBuilder.buildEdmTypeField(
          'AccountNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link priceGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'PriceGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link loyaltyAffiliationName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOYALTY_AFFILIATION_NAME: fieldBuilder.buildEdmTypeField(
          'LoyaltyAffiliationName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link propValue6} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROP_VALUE_6: fieldBuilder.buildEdmTypeField(
          'PropValue6',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link propValue8} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROP_VALUE_8: fieldBuilder.buildEdmTypeField(
          'PropValue8',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link propValue3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROP_VALUE_3: fieldBuilder.buildEdmTypeField(
          'PropValue3',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link propValue0} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROP_VALUE_0: fieldBuilder.buildEdmTypeField(
          'PropValue0',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link propValue5} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROP_VALUE_5: fieldBuilder.buildEdmTypeField(
          'PropValue5',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PriceGroupApplicabilityRules)
      };
    }

    return this._schema;
  }
}
