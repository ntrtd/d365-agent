/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailCategoryPriceRuleGroups } from './RetailCategoryPriceRuleGroups';
import { RetailCategoryPriceRuleGroupsRequestBuilder } from './RetailCategoryPriceRuleGroupsRequestBuilder';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class RetailCategoryPriceRuleGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RetailCategoryPriceRuleGroups<DeSerializersT>, DeSerializersT>
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
  ): RetailCategoryPriceRuleGroupsApi<DeSerializersT> {
    return new RetailCategoryPriceRuleGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailCategoryPriceRuleGroups;

  requestBuilder(): RetailCategoryPriceRuleGroupsRequestBuilder<DeSerializersT> {
    return new RetailCategoryPriceRuleGroupsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RetailCategoryPriceRuleGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailCategoryPriceRuleGroups<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailCategoryPriceRuleGroups<DeSerializersT>,
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
    typeof RetailCategoryPriceRuleGroups,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailCategoryPriceRuleGroups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailCategoryPriceRuleGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CODE: OrderableEdmTypeField<
      RetailCategoryPriceRuleGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      RetailCategoryPriceRuleGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SAVE_OTHER_GROUP_PRICE: EnumField<
      RetailCategoryPriceRuleGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SAVE_INVENTORY_COST: EnumField<
      RetailCategoryPriceRuleGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRICE_GROUP_ID: OrderableEdmTypeField<
      RetailCategoryPriceRuleGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SAVE_ADD_DATA: EnumField<
      RetailCategoryPriceRuleGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CATEGORY_HIERARCHY_NAME: OrderableEdmTypeField<
      RetailCategoryPriceRuleGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SAVE_BASE_PRICE: EnumField<
      RetailCategoryPriceRuleGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SAVE_SALES_PRICE: EnumField<
      RetailCategoryPriceRuleGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<RetailCategoryPriceRuleGroups<DeSerializers>>;
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
         * Static representation of the {@link code} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CODE: fieldBuilder.buildEdmTypeField('Code', 'Edm.String', false),
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
         * Static representation of the {@link saveOtherGroupPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAVE_OTHER_GROUP_PRICE: fieldBuilder.buildEnumField(
          'SaveOtherGroupPrice',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link saveInventoryCost} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAVE_INVENTORY_COST: fieldBuilder.buildEnumField(
          'SaveInventoryCost',
          NoYes,
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
         * Static representation of the {@link saveAddData} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAVE_ADD_DATA: fieldBuilder.buildEnumField('SaveAddData', NoYes, true),
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
         * Static representation of the {@link saveBasePrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAVE_BASE_PRICE: fieldBuilder.buildEnumField(
          'SaveBasePrice',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link saveSalesPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAVE_SALES_PRICE: fieldBuilder.buildEnumField(
          'SaveSalesPrice',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailCategoryPriceRuleGroups)
      };
    }

    return this._schema;
  }
}
