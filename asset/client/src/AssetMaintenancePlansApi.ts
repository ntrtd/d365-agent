/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetMaintenancePlans } from './AssetMaintenancePlans';
import { AssetMaintenancePlansRequestBuilder } from './AssetMaintenancePlansRequestBuilder';
import { AssetMaintenancePlanWorkOrderLinesApi } from './AssetMaintenancePlanWorkOrderLinesApi';
import { AssetMaintenanceFunctionalLocationTypeMaintenanceSequensesApi } from './AssetMaintenanceFunctionalLocationTypeMaintenanceSequensesApi';
import { AssetMaintenanceAssetCalendarsApi } from './AssetMaintenanceAssetCalendarsApi';
import { AssetMaintenanceAssetMaintenancePlansApi } from './AssetMaintenanceAssetMaintenancePlansApi';
import { AssetMaintenanceFunctionalLocationMaintenancePlansApi } from './AssetMaintenanceFunctionalLocationMaintenancePlansApi';
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
  EnumField,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class AssetMaintenancePlansApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AssetMaintenancePlans<DeSerializersT>, DeSerializersT>
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
  ): AssetMaintenancePlansApi<DeSerializersT> {
    return new AssetMaintenancePlansApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link planMaintenancePlanWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PLAN_MAINTENANCE_PLAN_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenancePlans<DeSerializersT>,
      DeSerializersT,
      AssetMaintenancePlanWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceFunctionalLocationTypeMaintenanceSequense} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_TYPE_MAINTENANCE_SEQUENSE: OneToManyLink<
      AssetMaintenancePlans<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationTypeMaintenanceSequensesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceAssetCalendar} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_CALENDAR: OneToManyLink<
      AssetMaintenancePlans<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetCalendarsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceAssetMaintenancePlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_MAINTENANCE_PLAN: OneToManyLink<
      AssetMaintenancePlans<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetMaintenancePlansApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceFunctionalLocationMaintenancePlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_MAINTENANCE_PLAN: OneToManyLink<
      AssetMaintenancePlans<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationMaintenancePlansApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      AssetMaintenancePlanWorkOrderLinesApi<DeSerializersT>,
      AssetMaintenanceFunctionalLocationTypeMaintenanceSequensesApi<DeSerializersT>,
      AssetMaintenanceAssetCalendarsApi<DeSerializersT>,
      AssetMaintenanceAssetMaintenancePlansApi<DeSerializersT>,
      AssetMaintenanceFunctionalLocationMaintenancePlansApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PLAN_MAINTENANCE_PLAN_WORK_ORDER_JOBS: new OneToManyLink(
        'Plan_MaintenancePlanWorkOrderJobs',
        this,
        linkedApis[0]
      ),
      ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_TYPE_MAINTENANCE_SEQUENSE:
        new OneToManyLink(
          'AssetMaintenanceFunctionalLocationTypeMaintenanceSequense',
          this,
          linkedApis[1]
        ),
      ASSET_MAINTENANCE_ASSET_CALENDAR: new OneToManyLink(
        'AssetMaintenanceAssetCalendar',
        this,
        linkedApis[2]
      ),
      ASSET_MAINTENANCE_ASSET_MAINTENANCE_PLAN: new OneToManyLink(
        'AssetMaintenanceAssetMaintenancePlan',
        this,
        linkedApis[3]
      ),
      ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_MAINTENANCE_PLAN: new OneToManyLink(
        'AssetMaintenanceFunctionalLocationMaintenancePlan',
        this,
        linkedApis[4]
      )
    };
    return this;
  }

  entityConstructor = AssetMaintenancePlans;

  requestBuilder(): AssetMaintenancePlansRequestBuilder<DeSerializersT> {
    return new AssetMaintenancePlansRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AssetMaintenancePlans<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<AssetMaintenancePlans<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetMaintenancePlans<DeSerializersT>,
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
    typeof AssetMaintenancePlans,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetMaintenancePlans,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetMaintenancePlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MAINTENANCE_PLAN_ID: OrderableEdmTypeField<
      AssetMaintenancePlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MAINTENANCE_DATE: OrderableEdmTypeField<
      AssetMaintenancePlans<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      AssetMaintenancePlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAINTENANCE_PLAN_ACTIVE: EnumField<
      AssetMaintenancePlans<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TOLERANCE_AFTER: OrderableEdmTypeField<
      AssetMaintenancePlans<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TOLERANCE_BEFORE: OrderableEdmTypeField<
      AssetMaintenancePlans<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link planMaintenancePlanWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PLAN_MAINTENANCE_PLAN_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenancePlans<DeSerializersT>,
      DeSerializersT,
      AssetMaintenancePlanWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceFunctionalLocationTypeMaintenanceSequense} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_TYPE_MAINTENANCE_SEQUENSE: OneToManyLink<
      AssetMaintenancePlans<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationTypeMaintenanceSequensesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceAssetCalendar} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_CALENDAR: OneToManyLink<
      AssetMaintenancePlans<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetCalendarsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceAssetMaintenancePlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_MAINTENANCE_PLAN: OneToManyLink<
      AssetMaintenancePlans<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetMaintenancePlansApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceFunctionalLocationMaintenancePlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_MAINTENANCE_PLAN: OneToManyLink<
      AssetMaintenancePlans<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationMaintenancePlansApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AssetMaintenancePlans<DeSerializers>>;
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
         * Static representation of the {@link maintenancePlanId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAINTENANCE_PLAN_ID: fieldBuilder.buildEdmTypeField(
          'MaintenancePlanId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link maintenanceDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAINTENANCE_DATE: fieldBuilder.buildEdmTypeField(
          'MaintenanceDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link maintenancePlanActive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAINTENANCE_PLAN_ACTIVE: fieldBuilder.buildEnumField(
          'MaintenancePlanActive',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link toleranceAfter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOLERANCE_AFTER: fieldBuilder.buildEdmTypeField(
          'ToleranceAfter',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link toleranceBefore} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOLERANCE_BEFORE: fieldBuilder.buildEdmTypeField(
          'ToleranceBefore',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AssetMaintenancePlans)
      };
    }

    return this._schema;
  }
}
