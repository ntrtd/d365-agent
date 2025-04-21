/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WarehouseWorkPolicies } from './WarehouseWorkPolicies';
import { WarehouseWorkPoliciesRequestBuilder } from './WarehouseWorkPoliciesRequestBuilder';
import { WarehouseWorkCreationRulesApi } from './WarehouseWorkCreationRulesApi';
import { WarehouseWorkPolicyLocationsApi } from './WarehouseWorkPolicyLocationsApi';
import { WarehouseWorkCreationRulesV2Api } from './WarehouseWorkCreationRulesV2Api';
import { WarehouseWorkPolicyProductsApi } from './WarehouseWorkPolicyProductsApi';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class WarehouseWorkPoliciesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<WarehouseWorkPolicies<DeSerializersT>, DeSerializersT>
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
  ): WarehouseWorkPoliciesApi<DeSerializersT> {
    return new WarehouseWorkPoliciesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link warehouseWorkCreationRules} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE_WORK_CREATION_RULES: OneToManyLink<
      WarehouseWorkPolicies<DeSerializersT>,
      DeSerializersT,
      WarehouseWorkCreationRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link warehouseWorkPolicyLocations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE_WORK_POLICY_LOCATIONS: OneToManyLink<
      WarehouseWorkPolicies<DeSerializersT>,
      DeSerializersT,
      WarehouseWorkPolicyLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link warehouseWorkCreationRulesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE_WORK_CREATION_RULES_V_2: OneToManyLink<
      WarehouseWorkPolicies<DeSerializersT>,
      DeSerializersT,
      WarehouseWorkCreationRulesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link warehouseWorkPolicyProducts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE_WORK_POLICY_PRODUCTS: OneToManyLink<
      WarehouseWorkPolicies<DeSerializersT>,
      DeSerializersT,
      WarehouseWorkPolicyProductsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      WarehouseWorkCreationRulesApi<DeSerializersT>,
      WarehouseWorkPolicyLocationsApi<DeSerializersT>,
      WarehouseWorkCreationRulesV2Api<DeSerializersT>,
      WarehouseWorkPolicyProductsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      WAREHOUSE_WORK_CREATION_RULES: new OneToManyLink(
        'WarehouseWorkCreationRules',
        this,
        linkedApis[0]
      ),
      WAREHOUSE_WORK_POLICY_LOCATIONS: new OneToManyLink(
        'WarehouseWorkPolicyLocations',
        this,
        linkedApis[1]
      ),
      WAREHOUSE_WORK_CREATION_RULES_V_2: new OneToManyLink(
        'WarehouseWorkCreationRulesV2',
        this,
        linkedApis[2]
      ),
      WAREHOUSE_WORK_POLICY_PRODUCTS: new OneToManyLink(
        'WarehouseWorkPolicyProducts',
        this,
        linkedApis[3]
      )
    };
    return this;
  }

  entityConstructor = WarehouseWorkPolicies;

  requestBuilder(): WarehouseWorkPoliciesRequestBuilder<DeSerializersT> {
    return new WarehouseWorkPoliciesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    WarehouseWorkPolicies<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<WarehouseWorkPolicies<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    WarehouseWorkPolicies<DeSerializersT>,
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
    typeof WarehouseWorkPolicies,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WarehouseWorkPolicies,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      WarehouseWorkPolicies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      WarehouseWorkPolicies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link warehouseWorkCreationRules} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE_WORK_CREATION_RULES: OneToManyLink<
      WarehouseWorkPolicies<DeSerializersT>,
      DeSerializersT,
      WarehouseWorkCreationRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link warehouseWorkPolicyLocations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE_WORK_POLICY_LOCATIONS: OneToManyLink<
      WarehouseWorkPolicies<DeSerializersT>,
      DeSerializersT,
      WarehouseWorkPolicyLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link warehouseWorkCreationRulesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE_WORK_CREATION_RULES_V_2: OneToManyLink<
      WarehouseWorkPolicies<DeSerializersT>,
      DeSerializersT,
      WarehouseWorkCreationRulesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link warehouseWorkPolicyProducts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE_WORK_POLICY_PRODUCTS: OneToManyLink<
      WarehouseWorkPolicies<DeSerializersT>,
      DeSerializersT,
      WarehouseWorkPolicyProductsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<WarehouseWorkPolicies<DeSerializers>>;
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
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', false),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WarehouseWorkPolicies)
      };
    }

    return this._schema;
  }
}
