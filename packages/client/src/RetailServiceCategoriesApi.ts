/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailServiceCategories } from './RetailServiceCategories';
import { RetailServiceCategoriesRequestBuilder } from './RetailServiceCategoriesRequestBuilder';
import { WarehousesApi } from './WarehousesApi';
import { WorkCalendarsApi } from './WorkCalendarsApi';
import { RetailReplenishmentRulesApi } from './RetailReplenishmentRulesApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class RetailServiceCategoriesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RetailServiceCategories<DeSerializersT>, DeSerializersT>
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
  ): RetailServiceCategoriesApi<DeSerializersT> {
    return new RetailServiceCategoriesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link warehouse} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE: OneToOneLink<
      RetailServiceCategories<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link workCalendar} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORK_CALENDAR: OneToOneLink<
      RetailServiceCategories<DeSerializersT>,
      DeSerializersT,
      WorkCalendarsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailReplenishmentRule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_REPLENISHMENT_RULE: OneToOneLink<
      RetailServiceCategories<DeSerializersT>,
      DeSerializersT,
      RetailReplenishmentRulesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      WarehousesApi<DeSerializersT>,
      WorkCalendarsApi<DeSerializersT>,
      RetailReplenishmentRulesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      WAREHOUSE: new OneToOneLink('Warehouse', this, linkedApis[0]),
      WORK_CALENDAR: new OneToOneLink('WorkCalendar', this, linkedApis[1]),
      RETAIL_REPLENISHMENT_RULE: new OneToOneLink(
        'RetailReplenishmentRule',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = RetailServiceCategories;

  requestBuilder(): RetailServiceCategoriesRequestBuilder<DeSerializersT> {
    return new RetailServiceCategoriesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailServiceCategories<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailServiceCategories<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailServiceCategories<DeSerializersT>,
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
    typeof RetailServiceCategories,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailServiceCategories,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailServiceCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SERVICE_CATEGORY: OrderableEdmTypeField<
      RetailServiceCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      RetailServiceCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CALENDAR: OrderableEdmTypeField<
      RetailServiceCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOCAL_DELIVERY_DATE: OrderableEdmTypeField<
      RetailServiceCategories<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    REPLENISHMENT_RULE: OrderableEdmTypeField<
      RetailServiceCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CROSS_DOCKING_WAREHOUSE: OrderableEdmTypeField<
      RetailServiceCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_DATE: OrderableEdmTypeField<
      RetailServiceCategories<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    REPLENISHMENT_WAREHOUSE: OrderableEdmTypeField<
      RetailServiceCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link warehouse} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE: OneToOneLink<
      RetailServiceCategories<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link workCalendar} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORK_CALENDAR: OneToOneLink<
      RetailServiceCategories<DeSerializersT>,
      DeSerializersT,
      WorkCalendarsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailReplenishmentRule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_REPLENISHMENT_RULE: OneToOneLink<
      RetailServiceCategories<DeSerializersT>,
      DeSerializersT,
      RetailReplenishmentRulesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RetailServiceCategories<DeSerializers>>;
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
         * Static representation of the {@link serviceCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_CATEGORY: fieldBuilder.buildEdmTypeField(
          'ServiceCategory',
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
        /**
         * Static representation of the {@link calendar} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALENDAR: fieldBuilder.buildEdmTypeField(
          'Calendar',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link localDeliveryDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCAL_DELIVERY_DATE: fieldBuilder.buildEdmTypeField(
          'LocalDeliveryDate',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link replenishmentRule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPLENISHMENT_RULE: fieldBuilder.buildEdmTypeField(
          'ReplenishmentRule',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link crossDockingWarehouse} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CROSS_DOCKING_WAREHOUSE: fieldBuilder.buildEdmTypeField(
          'CrossDockingWarehouse',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_DATE: fieldBuilder.buildEdmTypeField(
          'SalesDate',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link replenishmentWarehouse} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPLENISHMENT_WAREHOUSE: fieldBuilder.buildEdmTypeField(
          'ReplenishmentWarehouse',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailServiceCategories)
      };
    }

    return this._schema;
  }
}
