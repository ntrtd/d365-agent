/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WarehouseWorkCreationRulesV2 } from './WarehouseWorkCreationRulesV2';
import { WarehouseWorkCreationRulesV2RequestBuilder } from './WarehouseWorkCreationRulesV2RequestBuilder';
import { WarehouseWorkPoliciesApi } from './WarehouseWorkPoliciesApi';
import { WhsWorkTransType } from './WhsWorkTransType';
import { WhsWorkProcess } from './WhsWorkProcess';
import { WhsWorkCreationMethod } from './WhsWorkCreationMethod';
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
export class WarehouseWorkCreationRulesV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<WarehouseWorkCreationRulesV2<DeSerializersT>, DeSerializersT>
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
  ): WarehouseWorkCreationRulesV2Api<DeSerializersT> {
    return new WarehouseWorkCreationRulesV2Api(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link warehouseWorkPolicy} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE_WORK_POLICY: OneToOneLink<
      WarehouseWorkCreationRulesV2<DeSerializersT>,
      DeSerializersT,
      WarehouseWorkPoliciesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [WarehouseWorkPoliciesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      WAREHOUSE_WORK_POLICY: new OneToOneLink(
        'WarehouseWorkPolicy',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = WarehouseWorkCreationRulesV2;

  requestBuilder(): WarehouseWorkCreationRulesV2RequestBuilder<DeSerializersT> {
    return new WarehouseWorkCreationRulesV2RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    WarehouseWorkCreationRulesV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      WarehouseWorkCreationRulesV2<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    WarehouseWorkCreationRulesV2<DeSerializersT>,
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
    typeof WarehouseWorkCreationRulesV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WarehouseWorkCreationRulesV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      WarehouseWorkCreationRulesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WORK_POLICY_NAME: OrderableEdmTypeField<
      WarehouseWorkCreationRulesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WORK_ORDER_TYPE: EnumField<
      WarehouseWorkCreationRulesV2<DeSerializers>,
      DeSerializersT,
      WhsWorkTransType,
      true,
      true
    >;
    WORK_PROCESS: EnumField<
      WarehouseWorkCreationRulesV2<DeSerializers>,
      DeSerializersT,
      WhsWorkProcess,
      true,
      true
    >;
    WORK_CREATION_METHOD: EnumField<
      WarehouseWorkCreationRulesV2<DeSerializers>,
      DeSerializersT,
      WhsWorkCreationMethod,
      true,
      true
    >;
    CROSS_DOCKING_OPPORTUNITY_POLICY_NAME: OrderableEdmTypeField<
      WarehouseWorkCreationRulesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link warehouseWorkPolicy} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE_WORK_POLICY: OneToOneLink<
      WarehouseWorkCreationRulesV2<DeSerializersT>,
      DeSerializersT,
      WarehouseWorkPoliciesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<WarehouseWorkCreationRulesV2<DeSerializers>>;
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
         * Static representation of the {@link workPolicyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_POLICY_NAME: fieldBuilder.buildEdmTypeField(
          'WorkPolicyName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link workOrderType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_ORDER_TYPE: fieldBuilder.buildEnumField(
          'WorkOrderType',
          WhsWorkTransType,
          true
        ),
        /**
         * Static representation of the {@link workProcess} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_PROCESS: fieldBuilder.buildEnumField(
          'WorkProcess',
          WhsWorkProcess,
          true
        ),
        /**
         * Static representation of the {@link workCreationMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_CREATION_METHOD: fieldBuilder.buildEnumField(
          'WorkCreationMethod',
          WhsWorkCreationMethod,
          true
        ),
        /**
         * Static representation of the {@link crossDockingOpportunityPolicyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CROSS_DOCKING_OPPORTUNITY_POLICY_NAME: fieldBuilder.buildEdmTypeField(
          'CrossDockingOpportunityPolicyName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WarehouseWorkCreationRulesV2)
      };
    }

    return this._schema;
  }
}
