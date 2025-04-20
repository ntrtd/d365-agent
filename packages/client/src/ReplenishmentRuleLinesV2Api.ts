/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ReplenishmentRuleLinesV2 } from './ReplenishmentRuleLinesV2';
import { ReplenishmentRuleLinesV2RequestBuilder } from './ReplenishmentRuleLinesV2RequestBuilder';
import { RetailChannelsApi } from './RetailChannelsApi';
import { RetailReplenishmentRulesApi } from './RetailReplenishmentRulesApi';
import { OrganizationHierarchyTypesApi } from './OrganizationHierarchyTypesApi';
import { RetailReplenishmentRuleType } from './RetailReplenishmentRuleType';
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
export class ReplenishmentRuleLinesV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ReplenishmentRuleLinesV2<DeSerializersT>, DeSerializersT>
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
  ): ReplenishmentRuleLinesV2Api<DeSerializersT> {
    return new ReplenishmentRuleLinesV2Api(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link retailChannel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CHANNEL: OneToOneLink<
      ReplenishmentRuleLinesV2<DeSerializersT>,
      DeSerializersT,
      RetailChannelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailReplenishmentRule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_REPLENISHMENT_RULE: OneToOneLink<
      ReplenishmentRuleLinesV2<DeSerializersT>,
      DeSerializersT,
      RetailReplenishmentRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link organizationHierarchyType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ORGANIZATION_HIERARCHY_TYPE: OneToOneLink<
      ReplenishmentRuleLinesV2<DeSerializersT>,
      DeSerializersT,
      OrganizationHierarchyTypesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      RetailChannelsApi<DeSerializersT>,
      RetailReplenishmentRulesApi<DeSerializersT>,
      OrganizationHierarchyTypesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      RETAIL_CHANNEL: new OneToOneLink('RetailChannel', this, linkedApis[0]),
      RETAIL_REPLENISHMENT_RULE: new OneToOneLink(
        'RetailReplenishmentRule',
        this,
        linkedApis[1]
      ),
      ORGANIZATION_HIERARCHY_TYPE: new OneToOneLink(
        'OrganizationHierarchyType',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = ReplenishmentRuleLinesV2;

  requestBuilder(): ReplenishmentRuleLinesV2RequestBuilder<DeSerializersT> {
    return new ReplenishmentRuleLinesV2RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ReplenishmentRuleLinesV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ReplenishmentRuleLinesV2<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ReplenishmentRuleLinesV2<DeSerializersT>,
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
    typeof ReplenishmentRuleLinesV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ReplenishmentRuleLinesV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ReplenishmentRuleLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REPLENISHMENT_RULE: OrderableEdmTypeField<
      ReplenishmentRuleLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TYPE: EnumField<
      ReplenishmentRuleLinesV2<DeSerializers>,
      DeSerializersT,
      RetailReplenishmentRuleType,
      true,
      true
    >;
    RELATION_ID: OrderableEdmTypeField<
      ReplenishmentRuleLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    REPLENISHMENT_HIERARCHY_VALID_FROM: OrderableEdmTypeField<
      ReplenishmentRuleLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DEFAULT_WEIGHT: OrderableEdmTypeField<
      ReplenishmentRuleLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PERCENT: OrderableEdmTypeField<
      ReplenishmentRuleLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REPLENISHMENT_HIERARCHY_VALID_TO: OrderableEdmTypeField<
      ReplenishmentRuleLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    WEIGHT: OrderableEdmTypeField<
      ReplenishmentRuleLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      ReplenishmentRuleLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETAIL_CHANNEL_ID: OrderableEdmTypeField<
      ReplenishmentRuleLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPLENISHMENT_ORGANIZATION_PARTY_NUMBER: OrderableEdmTypeField<
      ReplenishmentRuleLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_PERCENT: OrderableEdmTypeField<
      ReplenishmentRuleLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REPLENISHMENT_HIERARCHY_TYPE_NAME: OrderableEdmTypeField<
      ReplenishmentRuleLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailChannel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CHANNEL: OneToOneLink<
      ReplenishmentRuleLinesV2<DeSerializersT>,
      DeSerializersT,
      RetailChannelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailReplenishmentRule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_REPLENISHMENT_RULE: OneToOneLink<
      ReplenishmentRuleLinesV2<DeSerializersT>,
      DeSerializersT,
      RetailReplenishmentRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link organizationHierarchyType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ORGANIZATION_HIERARCHY_TYPE: OneToOneLink<
      ReplenishmentRuleLinesV2<DeSerializersT>,
      DeSerializersT,
      OrganizationHierarchyTypesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ReplenishmentRuleLinesV2<DeSerializers>>;
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
         * Static representation of the {@link replenishmentRule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPLENISHMENT_RULE: fieldBuilder.buildEdmTypeField(
          'ReplenishmentRule',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEnumField(
          'Type',
          RetailReplenishmentRuleType,
          true
        ),
        /**
         * Static representation of the {@link relationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELATION_ID: fieldBuilder.buildEdmTypeField(
          'RelationId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link replenishmentHierarchyValidFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPLENISHMENT_HIERARCHY_VALID_FROM: fieldBuilder.buildEdmTypeField(
          'ReplenishmentHierarchyValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link defaultWeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_WEIGHT: fieldBuilder.buildEdmTypeField(
          'DefaultWeight',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link percent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERCENT: fieldBuilder.buildEdmTypeField(
          'Percent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link replenishmentHierarchyValidTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPLENISHMENT_HIERARCHY_VALID_TO: fieldBuilder.buildEdmTypeField(
          'ReplenishmentHierarchyValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link weight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEIGHT: fieldBuilder.buildEdmTypeField('Weight', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
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
         * Static representation of the {@link replenishmentOrganizationPartyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPLENISHMENT_ORGANIZATION_PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'ReplenishmentOrganizationPartyNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_PERCENT: fieldBuilder.buildEdmTypeField(
          'DefaultPercent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link replenishmentHierarchyTypeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPLENISHMENT_HIERARCHY_TYPE_NAME: fieldBuilder.buildEdmTypeField(
          'ReplenishmentHierarchyTypeName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ReplenishmentRuleLinesV2)
      };
    }

    return this._schema;
  }
}
