/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CatchWeightItemHandlingPolicies } from './CatchWeightItemHandlingPolicies';
import { CatchWeightItemHandlingPoliciesRequestBuilder } from './CatchWeightItemHandlingPoliciesRequestBuilder';
import { ReleasedProductsV2Api } from './ReleasedProductsV2Api';
import { WhsOutboundWeightCapturingMethod } from './WhsOutboundWeightCapturingMethod';
import { WhsInboundCatchWeightTagCapturingMethod } from './WhsInboundCatchWeightTagCapturingMethod';
import { WhsOutboundWeightVarianceMethod } from './WhsOutboundWeightVarianceMethod';
import { WhsSalesOrderWeightCapturingProcess } from './WhsSalesOrderWeightCapturingProcess';
import { WhsInboundWeightCapturingMethod } from './WhsInboundWeightCapturingMethod';
import { WhsMovementWeightCapturingMethod } from './WhsMovementWeightCapturingMethod';
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
export class CatchWeightItemHandlingPoliciesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<CatchWeightItemHandlingPolicies<DeSerializersT>, DeSerializersT>
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
  ): CatchWeightItemHandlingPoliciesApi<DeSerializersT> {
    return new CatchWeightItemHandlingPoliciesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link releasedProductsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCTS_V_2: OneToManyLink<
      CatchWeightItemHandlingPolicies<DeSerializersT>,
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

  entityConstructor = CatchWeightItemHandlingPolicies;

  requestBuilder(): CatchWeightItemHandlingPoliciesRequestBuilder<DeSerializersT> {
    return new CatchWeightItemHandlingPoliciesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    CatchWeightItemHandlingPolicies<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CatchWeightItemHandlingPolicies<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CatchWeightItemHandlingPolicies<DeSerializersT>,
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
    typeof CatchWeightItemHandlingPolicies,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CatchWeightItemHandlingPolicies,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CatchWeightItemHandlingPolicies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    POLICY_NAME: OrderableEdmTypeField<
      CatchWeightItemHandlingPolicies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OUTBOUND_WEIGHT_CAPTURING_METHOD: EnumField<
      CatchWeightItemHandlingPolicies<DeSerializers>,
      DeSerializersT,
      WhsOutboundWeightCapturingMethod,
      true,
      true
    >;
    INBOUND_CATCH_WEIGHT_TAG_CAPTURING_METHOD: EnumField<
      CatchWeightItemHandlingPolicies<DeSerializers>,
      DeSerializersT,
      WhsInboundCatchWeightTagCapturingMethod,
      true,
      true
    >;
    OUTBOUND_WEIGHT_VARIANCE_METHOD: EnumField<
      CatchWeightItemHandlingPolicies<DeSerializers>,
      DeSerializersT,
      WhsOutboundWeightVarianceMethod,
      true,
      true
    >;
    POLICY_DESCRIPTION: OrderableEdmTypeField<
      CatchWeightItemHandlingPolicies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_ORDER_WEIGHT_CAPTURING_PROCESS: EnumField<
      CatchWeightItemHandlingPolicies<DeSerializers>,
      DeSerializersT,
      WhsSalesOrderWeightCapturingProcess,
      true,
      true
    >;
    INBOUND_WEIGHT_CAPTURING_METHOD: EnumField<
      CatchWeightItemHandlingPolicies<DeSerializers>,
      DeSerializersT,
      WhsInboundWeightCapturingMethod,
      true,
      true
    >;
    MOVEMENT_WEIGHT_CAPTURING_METHOD: EnumField<
      CatchWeightItemHandlingPolicies<DeSerializers>,
      DeSerializersT,
      WhsMovementWeightCapturingMethod,
      true,
      true
    >;
    COUNTING_WEIGHT_CAPTURING_METHOD: EnumField<
      CatchWeightItemHandlingPolicies<DeSerializers>,
      DeSerializersT,
      WhsCountingWeightCapturingMethod,
      true,
      true
    >;
    TRANSFER_ISSUE_WEIGHT_CAPTURING_PROCESS: EnumField<
      CatchWeightItemHandlingPolicies<DeSerializers>,
      DeSerializersT,
      WhsTransferIssueWeightCapturingProcess,
      true,
      true
    >;
    CATCH_WEIGHT_TAG_TRACKING: EnumField<
      CatchWeightItemHandlingPolicies<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRODUCTION_PICKING_WEIGHT_CAPTURING_METHOD: EnumField<
      CatchWeightItemHandlingPolicies<DeSerializers>,
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
      CatchWeightItemHandlingPolicies<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CatchWeightItemHandlingPolicies<DeSerializers>>;
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
        ALL_FIELDS: new AllFields('*', CatchWeightItemHandlingPolicies)
      };
    }

    return this._schema;
  }
}
