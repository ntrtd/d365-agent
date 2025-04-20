/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailReplenishmentRules } from './RetailReplenishmentRules';
import { RetailReplenishmentRulesRequestBuilder } from './RetailReplenishmentRulesRequestBuilder';
import { RetailServiceCategoriesApi } from './RetailServiceCategoriesApi';
import { ReplenishmentRuleLinesV2Api } from './ReplenishmentRuleLinesV2Api';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class RetailReplenishmentRulesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RetailReplenishmentRules<DeSerializersT>, DeSerializersT>
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
  ): RetailReplenishmentRulesApi<DeSerializersT> {
    return new RetailReplenishmentRulesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link retailServiceCategory} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_SERVICE_CATEGORY: OneToManyLink<
      RetailReplenishmentRules<DeSerializersT>,
      DeSerializersT,
      RetailServiceCategoriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link replenishmentRuleLinesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REPLENISHMENT_RULE_LINES_V_2: OneToOneLink<
      RetailReplenishmentRules<DeSerializersT>,
      DeSerializersT,
      ReplenishmentRuleLinesV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      RetailServiceCategoriesApi<DeSerializersT>,
      ReplenishmentRuleLinesV2Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      RETAIL_SERVICE_CATEGORY: new OneToManyLink(
        'RetailServiceCategory',
        this,
        linkedApis[0]
      ),
      REPLENISHMENT_RULE_LINES_V_2: new OneToOneLink(
        'ReplenishmentRuleLinesV2',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = RetailReplenishmentRules;

  requestBuilder(): RetailReplenishmentRulesRequestBuilder<DeSerializersT> {
    return new RetailReplenishmentRulesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailReplenishmentRules<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailReplenishmentRules<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailReplenishmentRules<DeSerializersT>,
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
    typeof RetailReplenishmentRules,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailReplenishmentRules,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailReplenishmentRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REPLENISHMENT_RULE: OrderableEdmTypeField<
      RetailReplenishmentRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      RetailReplenishmentRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailServiceCategory} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_SERVICE_CATEGORY: OneToManyLink<
      RetailReplenishmentRules<DeSerializersT>,
      DeSerializersT,
      RetailServiceCategoriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link replenishmentRuleLinesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REPLENISHMENT_RULE_LINES_V_2: OneToOneLink<
      RetailReplenishmentRules<DeSerializersT>,
      DeSerializersT,
      ReplenishmentRuleLinesV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RetailReplenishmentRules<DeSerializers>>;
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
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailReplenishmentRules)
      };
    }

    return this._schema;
  }
}
