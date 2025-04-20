/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailReplenishmentRuleLines } from './RetailReplenishmentRuleLines';
import { RetailReplenishmentRuleLinesRequestBuilder } from './RetailReplenishmentRuleLinesRequestBuilder';
import { RetailChannelsApi } from './RetailChannelsApi';
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
export class RetailReplenishmentRuleLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RetailReplenishmentRuleLines<DeSerializersT>, DeSerializersT>
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
  ): RetailReplenishmentRuleLinesApi<DeSerializersT> {
    return new RetailReplenishmentRuleLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link retailChannel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CHANNEL: OneToOneLink<
      RetailReplenishmentRuleLines<DeSerializersT>,
      DeSerializersT,
      RetailChannelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link organizationHierarchyType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ORGANIZATION_HIERARCHY_TYPE: OneToOneLink<
      RetailReplenishmentRuleLines<DeSerializersT>,
      DeSerializersT,
      OrganizationHierarchyTypesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      RetailChannelsApi<DeSerializersT>,
      OrganizationHierarchyTypesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      RETAIL_CHANNEL: new OneToOneLink('RetailChannel', this, linkedApis[0]),
      ORGANIZATION_HIERARCHY_TYPE: new OneToOneLink(
        'OrganizationHierarchyType',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = RetailReplenishmentRuleLines;

  requestBuilder(): RetailReplenishmentRuleLinesRequestBuilder<DeSerializersT> {
    return new RetailReplenishmentRuleLinesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailReplenishmentRuleLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailReplenishmentRuleLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailReplenishmentRuleLines<DeSerializersT>,
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
    typeof RetailReplenishmentRuleLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailReplenishmentRuleLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailReplenishmentRuleLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REPLENISHMENT_RULE: OrderableEdmTypeField<
      RetailReplenishmentRuleLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TYPE: EnumField<
      RetailReplenishmentRuleLines<DeSerializers>,
      DeSerializersT,
      RetailReplenishmentRuleType,
      true,
      true
    >;
    REPLENISHMENT_HIERARCHY_TYPE_NAME: OrderableEdmTypeField<
      RetailReplenishmentRuleLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REPLENISHMENT_ORGANIZATION_PARTY_NUMBER: OrderableEdmTypeField<
      RetailReplenishmentRuleLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REPLENISHMENT_HIERARCHY_VALID_FROM: OrderableEdmTypeField<
      RetailReplenishmentRuleLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    REPLENISHMENT_HIERARCHY_VALID_TO: OrderableEdmTypeField<
      RetailReplenishmentRuleLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    RETAIL_CHANNEL_ID: OrderableEdmTypeField<
      RetailReplenishmentRuleLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DEFAULT_WEIGHT: OrderableEdmTypeField<
      RetailReplenishmentRuleLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PERCENT: OrderableEdmTypeField<
      RetailReplenishmentRuleLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    WEIGHT: OrderableEdmTypeField<
      RetailReplenishmentRuleLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      RetailReplenishmentRuleLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_PERCENT: OrderableEdmTypeField<
      RetailReplenishmentRuleLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailChannel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CHANNEL: OneToOneLink<
      RetailReplenishmentRuleLines<DeSerializersT>,
      DeSerializersT,
      RetailChannelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link organizationHierarchyType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ORGANIZATION_HIERARCHY_TYPE: OneToOneLink<
      RetailReplenishmentRuleLines<DeSerializersT>,
      DeSerializersT,
      OrganizationHierarchyTypesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RetailReplenishmentRuleLines<DeSerializers>>;
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
         * Static representation of the {@link replenishmentHierarchyTypeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPLENISHMENT_HIERARCHY_TYPE_NAME: fieldBuilder.buildEdmTypeField(
          'ReplenishmentHierarchyTypeName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link replenishmentOrganizationPartyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPLENISHMENT_ORGANIZATION_PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'ReplenishmentOrganizationPartyNumber',
          'Edm.String',
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
         * Static representation of the {@link replenishmentHierarchyValidTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPLENISHMENT_HIERARCHY_VALID_TO: fieldBuilder.buildEdmTypeField(
          'ReplenishmentHierarchyValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link retailChannelId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_CHANNEL_ID: fieldBuilder.buildEdmTypeField(
          'RetailChannelId',
          'Edm.String',
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
         * Static representation of the {@link defaultPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_PERCENT: fieldBuilder.buildEdmTypeField(
          'DefaultPercent',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailReplenishmentRuleLines)
      };
    }

    return this._schema;
  }
}
