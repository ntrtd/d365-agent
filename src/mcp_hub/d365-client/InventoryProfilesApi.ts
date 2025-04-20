/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InventoryProfiles } from './InventoryProfiles';
import { InventoryProfilesRequestBuilder } from './InventoryProfilesRequestBuilder';
import { NoYes } from './NoYes';
import { AlcoholActivityTypeRu } from './AlcoholActivityTypeRu';
import { StockInTransitRu } from './StockInTransitRu';
import { InventProfileTypeRu } from './InventProfileTypeRu';
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
export class InventoryProfilesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<InventoryProfiles<DeSerializersT>, DeSerializersT>
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
  ): InventoryProfilesApi<DeSerializersT> {
    return new InventoryProfilesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = InventoryProfiles;

  requestBuilder(): InventoryProfilesRequestBuilder<DeSerializersT> {
    return new InventoryProfilesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    InventoryProfiles<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<InventoryProfiles<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<InventoryProfiles<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof InventoryProfiles,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        InventoryProfiles,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      InventoryProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVENTORY_PROFILE_ID: OrderableEdmTypeField<
      InventoryProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INITIALIZE_DIMENSION: EnumField<
      InventoryProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALCOHOL_ACTIVITY_TYPE: EnumField<
      InventoryProfiles<DeSerializers>,
      DeSerializersT,
      AlcoholActivityTypeRu,
      true,
      true
    >;
    PROHIBIT_MISC_CHARGES: EnumField<
      InventoryProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SPLIT_CUSTOMER_INVOICE: EnumField<
      InventoryProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      InventoryProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROHIBIT_COST_ADJUSTMENT: EnumField<
      InventoryProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CONTROL_DIMENSION_IN_PURCHASE_ORDER: EnumField<
      InventoryProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SELECTION_SKIP: EnumField<
      InventoryProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CONTROL_DIMENSION_IN_SALES_ORDER: EnumField<
      InventoryProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MATCHING_PRIORITY: OrderableEdmTypeField<
      InventoryProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    KIND_OF_INVENTORY: EnumField<
      InventoryProfiles<DeSerializers>,
      DeSerializersT,
      StockInTransitRu,
      true,
      true
    >;
    KIND_OF_ACTIVITY: EnumField<
      InventoryProfiles<DeSerializers>,
      DeSerializersT,
      InventProfileTypeRu,
      true,
      true
    >;
    ALL_FIELDS: AllFields<InventoryProfiles<DeSerializers>>;
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
         * Static representation of the {@link inventoryProfileId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_PROFILE_ID: fieldBuilder.buildEdmTypeField(
          'InventoryProfileId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link initializeDimension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INITIALIZE_DIMENSION: fieldBuilder.buildEnumField(
          'InitializeDimension',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link alcoholActivityType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALCOHOL_ACTIVITY_TYPE: fieldBuilder.buildEnumField(
          'AlcoholActivityType',
          AlcoholActivityTypeRu,
          true
        ),
        /**
         * Static representation of the {@link prohibitMiscCharges} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROHIBIT_MISC_CHARGES: fieldBuilder.buildEnumField(
          'ProhibitMiscCharges',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link splitCustomerInvoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPLIT_CUSTOMER_INVOICE: fieldBuilder.buildEnumField(
          'SplitCustomerInvoice',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link prohibitCostAdjustment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROHIBIT_COST_ADJUSTMENT: fieldBuilder.buildEnumField(
          'ProhibitCostAdjustment',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link controlDimensionInPurchaseOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTROL_DIMENSION_IN_PURCHASE_ORDER: fieldBuilder.buildEnumField(
          'ControlDimensionInPurchaseOrder',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link selectionSkip} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SELECTION_SKIP: fieldBuilder.buildEnumField(
          'SelectionSkip',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link controlDimensionInSalesOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTROL_DIMENSION_IN_SALES_ORDER: fieldBuilder.buildEnumField(
          'ControlDimensionInSalesOrder',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link matchingPriority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATCHING_PRIORITY: fieldBuilder.buildEdmTypeField(
          'MatchingPriority',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link kindOfInventory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KIND_OF_INVENTORY: fieldBuilder.buildEnumField(
          'KindOfInventory',
          StockInTransitRu,
          true
        ),
        /**
         * Static representation of the {@link kindOfActivity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KIND_OF_ACTIVITY: fieldBuilder.buildEnumField(
          'KindOfActivity',
          InventProfileTypeRu,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', InventoryProfiles)
      };
    }

    return this._schema;
  }
}
