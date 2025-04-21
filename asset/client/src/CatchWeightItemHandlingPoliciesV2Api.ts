/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CatchWeightItemHandlingPoliciesV2 } from './CatchWeightItemHandlingPoliciesV2';
import { CatchWeightItemHandlingPoliciesV2RequestBuilder } from './CatchWeightItemHandlingPoliciesV2RequestBuilder';
import { ReleasedProductsV2Api } from './ReleasedProductsV2Api';
import { WhsOutboundWeightCapturingMethod } from './WhsOutboundWeightCapturingMethod';
import { WhsInboundCatchWeightTagCapturingMethod } from './WhsInboundCatchWeightTagCapturingMethod';
import { WhsOutboundWeightVarianceMethod } from './WhsOutboundWeightVarianceMethod';
import { WhsSalesOrderWeightCapturingProcess } from './WhsSalesOrderWeightCapturingProcess';
import { WhsOutboundCatchWeightTagCapturingMethod } from './WhsOutboundCatchWeightTagCapturingMethod';
import { WhsWarehouseTransferWeightCapturingMethod } from './WhsWarehouseTransferWeightCapturingMethod';
import { WhsCatchWeightTagDimensionTrackingMethod } from './WhsCatchWeightTagDimensionTrackingMethod';
import { WhsInboundWeightCapturingMethod } from './WhsInboundWeightCapturingMethod';
import { WhsMovementWeightCapturingMethod } from './WhsMovementWeightCapturingMethod';
import { WhsCycleCountWeightCapturingMethod } from './WhsCycleCountWeightCapturingMethod';
import { WhsCountingWeightCapturingMethod } from './WhsCountingWeightCapturingMethod';
import { WhsTransferIssueWeightCapturingProcess } from './WhsTransferIssueWeightCapturingProcess';
import { NoYes } from './NoYes';
import { WhsProductionPickingWeightCapturingMethod } from './WhsProductionPickingWeightCapturingMethod';
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
export class CatchWeightItemHandlingPoliciesV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<CatchWeightItemHandlingPoliciesV2<DeSerializersT>, DeSerializersT>
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
  ): CatchWeightItemHandlingPoliciesV2Api<DeSerializersT> {
    return new CatchWeightItemHandlingPoliciesV2Api(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link releasedProductsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCTS_V_2: OneToManyLink<
      CatchWeightItemHandlingPoliciesV2<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [ReleasedProductsV2Api<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      RELEASED_PRODUCTS_V_2: new OneToManyLink(
        'ReleasedProductsV2',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = CatchWeightItemHandlingPoliciesV2;

  requestBuilder(): CatchWeightItemHandlingPoliciesV2RequestBuilder<DeSerializersT> {
    return new CatchWeightItemHandlingPoliciesV2RequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    CatchWeightItemHandlingPoliciesV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CatchWeightItemHandlingPoliciesV2<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CatchWeightItemHandlingPoliciesV2<DeSerializersT>,
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
    typeof CatchWeightItemHandlingPoliciesV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CatchWeightItemHandlingPoliciesV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CatchWeightItemHandlingPoliciesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    POLICY_NAME: OrderableEdmTypeField<
      CatchWeightItemHandlingPoliciesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OUTBOUND_WEIGHT_CAPTURING_METHOD: EnumField<
      CatchWeightItemHandlingPoliciesV2<DeSerializers>,
      DeSerializersT,
      WhsOutboundWeightCapturingMethod,
      true,
      true
    >;
    INBOUND_CATCH_WEIGHT_TAG_CAPTURING_METHOD: EnumField<
      CatchWeightItemHandlingPoliciesV2<DeSerializers>,
      DeSerializersT,
      WhsInboundCatchWeightTagCapturingMethod,
      true,
      true
    >;
    OUTBOUND_WEIGHT_VARIANCE_METHOD: EnumField<
      CatchWeightItemHandlingPoliciesV2<DeSerializers>,
      DeSerializersT,
      WhsOutboundWeightVarianceMethod,
      true,
      true
    >;
    POLICY_DESCRIPTION: OrderableEdmTypeField<
      CatchWeightItemHandlingPoliciesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_ORDER_WEIGHT_CAPTURING_PROCESS: EnumField<
      CatchWeightItemHandlingPoliciesV2<DeSerializers>,
      DeSerializersT,
      WhsSalesOrderWeightCapturingProcess,
      true,
      true
    >;
    OUTBOUND_CATCH_WEIGHT_TAG_CAPTURING_METHOD: EnumField<
      CatchWeightItemHandlingPoliciesV2<DeSerializers>,
      DeSerializersT,
      WhsOutboundCatchWeightTagCapturingMethod,
      true,
      true
    >;
    WAREHOUSE_TRANSFER_WEIGHT_CAPTURING_METHOD: EnumField<
      CatchWeightItemHandlingPoliciesV2<DeSerializers>,
      DeSerializersT,
      WhsWarehouseTransferWeightCapturingMethod,
      true,
      true
    >;
    CATCH_WEIGHT_TAG_DIMENSION_TRACKING_METHOD: EnumField<
      CatchWeightItemHandlingPoliciesV2<DeSerializers>,
      DeSerializersT,
      WhsCatchWeightTagDimensionTrackingMethod,
      true,
      true
    >;
    INBOUND_WEIGHT_CAPTURING_METHOD: EnumField<
      CatchWeightItemHandlingPoliciesV2<DeSerializers>,
      DeSerializersT,
      WhsInboundWeightCapturingMethod,
      true,
      true
    >;
    MOVEMENT_WEIGHT_CAPTURING_METHOD: EnumField<
      CatchWeightItemHandlingPoliciesV2<DeSerializers>,
      DeSerializersT,
      WhsMovementWeightCapturingMethod,
      true,
      true
    >;
    COUNTING_WEIGHT_CAPTURING_METHOD: EnumField<
      CatchWeightItemHandlingPoliciesV2<DeSerializers>,
      DeSerializersT,
      WhsCycleCountWeightCapturingMethod,
      true,
      true
    >;
    CORRECTION_WEIGHT_CAPTURING_PROCESS: EnumField<
      CatchWeightItemHandlingPoliciesV2<DeSerializers>,
      DeSerializersT,
      WhsCountingWeightCapturingMethod,
      true,
      true
    >;
    TRANSFER_ISSUE_WEIGHT_CAPTURING_PROCESS: EnumField<
      CatchWeightItemHandlingPoliciesV2<DeSerializers>,
      DeSerializersT,
      WhsTransferIssueWeightCapturingProcess,
      true,
      true
    >;
    CATCH_WEIGHT_TAG_TRACKING: EnumField<
      CatchWeightItemHandlingPoliciesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRODUCTION_PICKING_WEIGHT_CAPTURING_METHOD: EnumField<
      CatchWeightItemHandlingPoliciesV2<DeSerializers>,
      DeSerializersT,
      WhsProductionPickingWeightCapturingMethod,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasedProductsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCTS_V_2: OneToManyLink<
      CatchWeightItemHandlingPoliciesV2<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CatchWeightItemHandlingPoliciesV2<DeSerializers>>;
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
         * Static representation of the {@link policyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POLICY_NAME: fieldBuilder.buildEdmTypeField(
          'PolicyName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link outboundWeightCapturingMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OUTBOUND_WEIGHT_CAPTURING_METHOD: fieldBuilder.buildEnumField(
          'OutboundWeightCapturingMethod',
          WhsOutboundWeightCapturingMethod,
          true
        ),
        /**
         * Static representation of the {@link inboundCatchWeightTagCapturingMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INBOUND_CATCH_WEIGHT_TAG_CAPTURING_METHOD: fieldBuilder.buildEnumField(
          'InboundCatchWeightTagCapturingMethod',
          WhsInboundCatchWeightTagCapturingMethod,
          true
        ),
        /**
         * Static representation of the {@link outboundWeightVarianceMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OUTBOUND_WEIGHT_VARIANCE_METHOD: fieldBuilder.buildEnumField(
          'OutboundWeightVarianceMethod',
          WhsOutboundWeightVarianceMethod,
          true
        ),
        /**
         * Static representation of the {@link policyDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POLICY_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PolicyDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesOrderWeightCapturingProcess} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ORDER_WEIGHT_CAPTURING_PROCESS: fieldBuilder.buildEnumField(
          'SalesOrderWeightCapturingProcess',
          WhsSalesOrderWeightCapturingProcess,
          true
        ),
        /**
         * Static representation of the {@link outboundCatchWeightTagCapturingMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OUTBOUND_CATCH_WEIGHT_TAG_CAPTURING_METHOD: fieldBuilder.buildEnumField(
          'OutboundCatchWeightTagCapturingMethod',
          WhsOutboundCatchWeightTagCapturingMethod,
          true
        ),
        /**
         * Static representation of the {@link warehouseTransferWeightCapturingMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_TRANSFER_WEIGHT_CAPTURING_METHOD: fieldBuilder.buildEnumField(
          'WarehouseTransferWeightCapturingMethod',
          WhsWarehouseTransferWeightCapturingMethod,
          true
        ),
        /**
         * Static representation of the {@link catchWeightTagDimensionTrackingMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATCH_WEIGHT_TAG_DIMENSION_TRACKING_METHOD: fieldBuilder.buildEnumField(
          'CatchWeightTagDimensionTrackingMethod',
          WhsCatchWeightTagDimensionTrackingMethod,
          true
        ),
        /**
         * Static representation of the {@link inboundWeightCapturingMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INBOUND_WEIGHT_CAPTURING_METHOD: fieldBuilder.buildEnumField(
          'InboundWeightCapturingMethod',
          WhsInboundWeightCapturingMethod,
          true
        ),
        /**
         * Static representation of the {@link movementWeightCapturingMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MOVEMENT_WEIGHT_CAPTURING_METHOD: fieldBuilder.buildEnumField(
          'MovementWeightCapturingMethod',
          WhsMovementWeightCapturingMethod,
          true
        ),
        /**
         * Static representation of the {@link countingWeightCapturingMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTING_WEIGHT_CAPTURING_METHOD: fieldBuilder.buildEnumField(
          'CountingWeightCapturingMethod',
          WhsCycleCountWeightCapturingMethod,
          true
        ),
        /**
         * Static representation of the {@link correctionWeightCapturingProcess} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRECTION_WEIGHT_CAPTURING_PROCESS: fieldBuilder.buildEnumField(
          'CorrectionWeightCapturingProcess',
          WhsCountingWeightCapturingMethod,
          true
        ),
        /**
         * Static representation of the {@link transferIssueWeightCapturingProcess} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSFER_ISSUE_WEIGHT_CAPTURING_PROCESS: fieldBuilder.buildEnumField(
          'TransferIssueWeightCapturingProcess',
          WhsTransferIssueWeightCapturingProcess,
          true
        ),
        /**
         * Static representation of the {@link catchWeightTagTracking} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATCH_WEIGHT_TAG_TRACKING: fieldBuilder.buildEnumField(
          'CatchWeightTagTracking',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link productionPickingWeightCapturingMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_PICKING_WEIGHT_CAPTURING_METHOD: fieldBuilder.buildEnumField(
          'ProductionPickingWeightCapturingMethod',
          WhsProductionPickingWeightCapturingMethod,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CatchWeightItemHandlingPoliciesV2)
      };
    }

    return this._schema;
  }
}
