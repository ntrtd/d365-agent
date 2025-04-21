/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RoutePendingRouteCostCategoryUnitCosts } from './RoutePendingRouteCostCategoryUnitCosts';
import { RoutePendingRouteCostCategoryUnitCostsRequestBuilder } from './RoutePendingRouteCostCategoryUnitCostsRequestBuilder';
import { OperationalSitesApi } from './OperationalSitesApi';
import { CostingVersionsApi } from './CostingVersionsApi';
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
export class RoutePendingRouteCostCategoryUnitCostsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      RoutePendingRouteCostCategoryUnitCosts<DeSerializersT>,
      DeSerializersT
    >
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
  ): RoutePendingRouteCostCategoryUnitCostsApi<DeSerializersT> {
    return new RoutePendingRouteCostCategoryUnitCostsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link productionSite} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCTION_SITE: OneToOneLink<
      RoutePendingRouteCostCategoryUnitCosts<DeSerializersT>,
      DeSerializersT,
      OperationalSitesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link costingVersion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COSTING_VERSION: OneToOneLink<
      RoutePendingRouteCostCategoryUnitCosts<DeSerializersT>,
      DeSerializersT,
      CostingVersionsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      OperationalSitesApi<DeSerializersT>,
      CostingVersionsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PRODUCTION_SITE: new OneToOneLink('ProductionSite', this, linkedApis[0]),
      COSTING_VERSION: new OneToOneLink('CostingVersion', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = RoutePendingRouteCostCategoryUnitCosts;

  requestBuilder(): RoutePendingRouteCostCategoryUnitCostsRequestBuilder<DeSerializersT> {
    return new RoutePendingRouteCostCategoryUnitCostsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RoutePendingRouteCostCategoryUnitCosts<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RoutePendingRouteCostCategoryUnitCosts<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RoutePendingRouteCostCategoryUnitCosts<DeSerializersT>,
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
    typeof RoutePendingRouteCostCategoryUnitCosts,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RoutePendingRouteCostCategoryUnitCosts,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RoutePendingRouteCostCategoryUnitCosts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ROUTE_COST_CATEGORY_ID: OrderableEdmTypeField<
      RoutePendingRouteCostCategoryUnitCosts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COSTING_VERSION_ID: OrderableEdmTypeField<
      RoutePendingRouteCostCategoryUnitCosts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCTION_SITE_ID: OrderableEdmTypeField<
      RoutePendingRouteCostCategoryUnitCosts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EFFECTIVE_DATE: OrderableEdmTypeField<
      RoutePendingRouteCostCategoryUnitCosts<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    UNIT_COST: OrderableEdmTypeField<
      RoutePendingRouteCostCategoryUnitCosts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productionSite} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCTION_SITE: OneToOneLink<
      RoutePendingRouteCostCategoryUnitCosts<DeSerializersT>,
      DeSerializersT,
      OperationalSitesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link costingVersion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COSTING_VERSION: OneToOneLink<
      RoutePendingRouteCostCategoryUnitCosts<DeSerializersT>,
      DeSerializersT,
      CostingVersionsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      RoutePendingRouteCostCategoryUnitCosts<DeSerializers>
    >;
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
         * Static representation of the {@link routeCostCategoryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUTE_COST_CATEGORY_ID: fieldBuilder.buildEdmTypeField(
          'RouteCostCategoryId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link costingVersionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COSTING_VERSION_ID: fieldBuilder.buildEdmTypeField(
          'CostingVersionId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productionSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_SITE_ID: fieldBuilder.buildEdmTypeField(
          'ProductionSiteId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link effectiveDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EFFECTIVE_DATE: fieldBuilder.buildEdmTypeField(
          'EffectiveDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link unitCost} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_COST: fieldBuilder.buildEdmTypeField(
          'UnitCost',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RoutePendingRouteCostCategoryUnitCosts)
      };
    }

    return this._schema;
  }
}
