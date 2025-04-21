/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetMaintenanceFunctionalLocationTypeMaintenanceSequenses } from './AssetMaintenanceFunctionalLocationTypeMaintenanceSequenses';
import { AssetMaintenanceFunctionalLocationTypeMaintenanceSequensesRequestBuilder } from './AssetMaintenanceFunctionalLocationTypeMaintenanceSequensesRequestBuilder';
import { AssetMaintenancePlansApi } from './AssetMaintenancePlansApi';
import { AssetMaintenanceFunctionalLocationTypesApi } from './AssetMaintenanceFunctionalLocationTypesApi';
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
export class AssetMaintenanceFunctionalLocationTypeMaintenanceSequensesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      AssetMaintenanceFunctionalLocationTypeMaintenanceSequenses<DeSerializersT>,
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
  ): AssetMaintenanceFunctionalLocationTypeMaintenanceSequensesApi<DeSerializersT> {
    return new AssetMaintenanceFunctionalLocationTypeMaintenanceSequensesApi(
      deSerializers
    );
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenancePlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_PLAN: OneToOneLink<
      AssetMaintenanceFunctionalLocationTypeMaintenanceSequenses<DeSerializersT>,
      DeSerializersT,
      AssetMaintenancePlansApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceFunctionalLocationType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_TYPE: OneToOneLink<
      AssetMaintenanceFunctionalLocationTypeMaintenanceSequenses<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationTypesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      AssetMaintenancePlansApi<DeSerializersT>,
      AssetMaintenanceFunctionalLocationTypesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ASSET_MAINTENANCE_PLAN: new OneToOneLink(
        'AssetMaintenancePlan',
        this,
        linkedApis[0]
      ),
      ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_TYPE: new OneToOneLink(
        'AssetMaintenanceFunctionalLocationType',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor =
    AssetMaintenanceFunctionalLocationTypeMaintenanceSequenses;

  requestBuilder(): AssetMaintenanceFunctionalLocationTypeMaintenanceSequensesRequestBuilder<DeSerializersT> {
    return new AssetMaintenanceFunctionalLocationTypeMaintenanceSequensesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AssetMaintenanceFunctionalLocationTypeMaintenanceSequenses<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetMaintenanceFunctionalLocationTypeMaintenanceSequenses<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetMaintenanceFunctionalLocationTypeMaintenanceSequenses<DeSerializersT>,
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
    typeof AssetMaintenanceFunctionalLocationTypeMaintenanceSequenses,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetMaintenanceFunctionalLocationTypeMaintenanceSequenses,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetMaintenanceFunctionalLocationTypeMaintenanceSequenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FUNCTIONAL_LOCATION_TYPE_ID: OrderableEdmTypeField<
      AssetMaintenanceFunctionalLocationTypeMaintenanceSequenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MAINTENANCE_PLAN_ID: OrderableEdmTypeField<
      AssetMaintenanceFunctionalLocationTypeMaintenanceSequenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenancePlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_PLAN: OneToOneLink<
      AssetMaintenanceFunctionalLocationTypeMaintenanceSequenses<DeSerializersT>,
      DeSerializersT,
      AssetMaintenancePlansApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceFunctionalLocationType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_TYPE: OneToOneLink<
      AssetMaintenanceFunctionalLocationTypeMaintenanceSequenses<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationTypesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      AssetMaintenanceFunctionalLocationTypeMaintenanceSequenses<DeSerializers>
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
         * Static representation of the {@link functionalLocationTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUNCTIONAL_LOCATION_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'FunctionalLocationTypeId',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          AssetMaintenanceFunctionalLocationTypeMaintenanceSequenses
        )
      };
    }

    return this._schema;
  }
}
