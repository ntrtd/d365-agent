/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CostFlowAssumptionPolicies } from './CostFlowAssumptionPolicies';
import { CostFlowAssumptionPoliciesRequestBuilder } from './CostFlowAssumptionPoliciesRequestBuilder';
import { InventoryPoliciesApi } from './InventoryPoliciesApi';
import { NoYes } from './NoYes';
import { InventModel } from './InventModel';
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
export class CostFlowAssumptionPoliciesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<CostFlowAssumptionPolicies<DeSerializersT>, DeSerializersT>
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
  ): CostFlowAssumptionPoliciesApi<DeSerializersT> {
    return new CostFlowAssumptionPoliciesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link inventoryPolicy} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_POLICY: OneToOneLink<
      CostFlowAssumptionPolicies<DeSerializersT>,
      DeSerializersT,
      InventoryPoliciesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [InventoryPoliciesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      INVENTORY_POLICY: new OneToOneLink('InventoryPolicy', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = CostFlowAssumptionPolicies;

  requestBuilder(): CostFlowAssumptionPoliciesRequestBuilder<DeSerializersT> {
    return new CostFlowAssumptionPoliciesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CostFlowAssumptionPolicies<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CostFlowAssumptionPolicies<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CostFlowAssumptionPolicies<DeSerializersT>,
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
    typeof CostFlowAssumptionPolicies,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CostFlowAssumptionPolicies,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CostFlowAssumptionPolicies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    POLICY_ID: OrderableEdmTypeField<
      CostFlowAssumptionPolicies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_UNIT_COST_INCLUDING_PHYSICALLY_UPDATED_INVENTORY: EnumField<
      CostFlowAssumptionPolicies<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WILL_SALES_DELIVERY_PROCESS_POST_DEFERRED_REVENUE: EnumField<
      CostFlowAssumptionPolicies<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POLICY_NAME: OrderableEdmTypeField<
      CostFlowAssumptionPolicies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_MODEL: EnumField<
      CostFlowAssumptionPolicies<DeSerializers>,
      DeSerializersT,
      InventModel,
      true,
      true
    >;
    IS_FINANCIAL_INVENTORY_POSTED: EnumField<
      CostFlowAssumptionPolicies<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_PHYSICAL_INVENTORY_POSTED: EnumField<
      CostFlowAssumptionPolicies<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_FIXED_RECEIPT_PRICE_USED: EnumField<
      CostFlowAssumptionPolicies<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_STOCKED_PRODUCT: EnumField<
      CostFlowAssumptionPolicies<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WILL_PRODUCT_RECEIPT_PROCESSING_ACCRUE_LIABILITY: EnumField<
      CostFlowAssumptionPolicies<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link inventoryPolicy} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_POLICY: OneToOneLink<
      CostFlowAssumptionPolicies<DeSerializersT>,
      DeSerializersT,
      InventoryPoliciesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CostFlowAssumptionPolicies<DeSerializers>>;
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
         * Static representation of the {@link policyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POLICY_ID: fieldBuilder.buildEdmTypeField(
          'PolicyId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link isUnitCostIncludingPhysicallyUpdatedInventory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_UNIT_COST_INCLUDING_PHYSICALLY_UPDATED_INVENTORY:
          fieldBuilder.buildEnumField(
            'IsUnitCostIncludingPhysicallyUpdatedInventory',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link willSalesDeliveryProcessPostDeferredRevenue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_SALES_DELIVERY_PROCESS_POST_DEFERRED_REVENUE:
          fieldBuilder.buildEnumField(
            'WillSalesDeliveryProcessPostDeferredRevenue',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link policyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POLICY_NAME: fieldBuilder.buildEdmTypeField(
          'PolicyName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventoryModel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_MODEL: fieldBuilder.buildEnumField(
          'InventoryModel',
          InventModel,
          true
        ),
        /**
         * Static representation of the {@link isFinancialInventoryPosted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_FINANCIAL_INVENTORY_POSTED: fieldBuilder.buildEnumField(
          'IsFinancialInventoryPosted',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isPhysicalInventoryPosted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PHYSICAL_INVENTORY_POSTED: fieldBuilder.buildEnumField(
          'IsPhysicalInventoryPosted',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isFixedReceiptPriceUsed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_FIXED_RECEIPT_PRICE_USED: fieldBuilder.buildEnumField(
          'IsFixedReceiptPriceUsed',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isStockedProduct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_STOCKED_PRODUCT: fieldBuilder.buildEnumField(
          'IsStockedProduct',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link willProductReceiptProcessingAccrueLiability} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_PRODUCT_RECEIPT_PROCESSING_ACCRUE_LIABILITY:
          fieldBuilder.buildEnumField(
            'WillProductReceiptProcessingAccrueLiability',
            NoYes,
            true
          ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CostFlowAssumptionPolicies)
      };
    }

    return this._schema;
  }
}
