/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InventoryPolicies } from './InventoryPolicies';
import { InventoryPoliciesRequestBuilder } from './InventoryPoliciesRequestBuilder';
import { ReleasedProductsV2Api } from './ReleasedProductsV2Api';
import { CostFlowAssumptionPoliciesApi } from './CostFlowAssumptionPoliciesApi';
import { NoYes } from './NoYes';
import { McrItemReservation } from './McrItemReservation';
import { PdsPickCriteria } from './PdsPickCriteria';
import { WhsPickingListBatchExpirationDateValidation } from './WhsPickingListBatchExpirationDateValidation';
import { PdsVendorCheckItem } from './PdsVendorCheckItem';
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
export class InventoryPoliciesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<InventoryPolicies<DeSerializersT>, DeSerializersT>
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
  ): InventoryPoliciesApi<DeSerializersT> {
    return new InventoryPoliciesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link releasedProductsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCTS_V_2: OneToOneLink<
      InventoryPolicies<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link costFlowAssumptionPolicy} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COST_FLOW_ASSUMPTION_POLICY: OneToOneLink<
      InventoryPolicies<DeSerializersT>,
      DeSerializersT,
      CostFlowAssumptionPoliciesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ReleasedProductsV2Api<DeSerializersT>,
      CostFlowAssumptionPoliciesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      RELEASED_PRODUCTS_V_2: new OneToOneLink(
        'ReleasedProductsV2',
        this,
        linkedApis[0]
      ),
      COST_FLOW_ASSUMPTION_POLICY: new OneToOneLink(
        'CostFlowAssumptionPolicy',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = InventoryPolicies;

  requestBuilder(): InventoryPoliciesRequestBuilder<DeSerializersT> {
    return new InventoryPoliciesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    InventoryPolicies<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<InventoryPolicies<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<InventoryPolicies<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof InventoryPolicies,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        InventoryPolicies,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      InventoryPolicies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    POLICY_ID: OrderableEdmTypeField<
      InventoryPolicies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WILL_REGISTRATION_PROVIDE_VENDOR_BATCH_DETAILS: EnumField<
      InventoryPolicies<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WILL_INVENTORY_RESERVATION_RESERVE_SAME_BATCH: EnumField<
      InventoryPolicies<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WILL_INVENTORY_RESERVATION_USE_FEFO_RESERVATION: EnumField<
      InventoryPolicies<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_SALES_RESERVATION_MODE: EnumField<
      InventoryPolicies<DeSerializers>,
      DeSerializersT,
      McrItemReservation,
      true,
      true
    >;
    ARE_QUARANTINE_MANAGEMENT_PROCESSES_ENABLED: EnumField<
      InventoryPolicies<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FEFO_DATE_CONTROLLED_INVENTORY_RESERVATION_CRITERIA: EnumField<
      InventoryPolicies<DeSerializers>,
      DeSerializersT,
      PdsPickCriteria,
      true,
      true
    >;
    IS_RECEIVING_REQUIRED: EnumField<
      InventoryPolicies<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BATCH_DISPOSITION_CODE: OrderableEdmTypeField<
      InventoryPolicies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHOULD_CONSOLIDATE_SAME_BATCH_RESERVATIONS: EnumField<
      InventoryPolicies<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_REGISTRATION_REQUIRED: EnumField<
      InventoryPolicies<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WILL_INVENTORY_RESERVATION_USE_FIFO_RESERVATION: EnumField<
      InventoryPolicies<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PICKING_LIST_BATCH_EXPIRATION_CHECK_RULE: EnumField<
      InventoryPolicies<DeSerializers>,
      DeSerializersT,
      WhsPickingListBatchExpirationDateValidation,
      true,
      true
    >;
    APPROVED_VENDOR_CHECK_METHOD: EnumField<
      InventoryPolicies<DeSerializers>,
      DeSerializersT,
      PdsVendorCheckItem,
      true,
      true
    >;
    IS_PICKING_REQUIRED: EnumField<
      InventoryPolicies<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_NEGATIVE_FINANCIAL_INVENTORY_ALLOWED: EnumField<
      InventoryPolicies<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_NEGATIVE_PHYSICAL_INVENTORY_ALLOWED: EnumField<
      InventoryPolicies<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_DEDUCTION_REQUIRED: EnumField<
      InventoryPolicies<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SHOULD_FIFO_DATE_RESERVE_BACKWARDS: EnumField<
      InventoryPolicies<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link releasedProductsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCTS_V_2: OneToOneLink<
      InventoryPolicies<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link costFlowAssumptionPolicy} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COST_FLOW_ASSUMPTION_POLICY: OneToOneLink<
      InventoryPolicies<DeSerializersT>,
      DeSerializersT,
      CostFlowAssumptionPoliciesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<InventoryPolicies<DeSerializers>>;
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
         * Static representation of the {@link willRegistrationProvideVendorBatchDetails} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_REGISTRATION_PROVIDE_VENDOR_BATCH_DETAILS:
          fieldBuilder.buildEnumField(
            'WillRegistrationProvideVendorBatchDetails',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link willInventoryReservationReserveSameBatch} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_INVENTORY_RESERVATION_RESERVE_SAME_BATCH:
          fieldBuilder.buildEnumField(
            'WillInventoryReservationReserveSameBatch',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link willInventoryReservationUseFefoReservation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_INVENTORY_RESERVATION_USE_FEFO_RESERVATION:
          fieldBuilder.buildEnumField(
            'WillInventoryReservationUseFEFOReservation',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link defaultSalesReservationMode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_SALES_RESERVATION_MODE: fieldBuilder.buildEnumField(
          'DefaultSalesReservationMode',
          McrItemReservation,
          true
        ),
        /**
         * Static representation of the {@link areQuarantineManagementProcessesEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARE_QUARANTINE_MANAGEMENT_PROCESSES_ENABLED:
          fieldBuilder.buildEnumField(
            'AreQuarantineManagementProcessesEnabled',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link fefoDateControlledInventoryReservationCriteria} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FEFO_DATE_CONTROLLED_INVENTORY_RESERVATION_CRITERIA:
          fieldBuilder.buildEnumField(
            'FEFODateControlledInventoryReservationCriteria',
            PdsPickCriteria,
            true
          ),
        /**
         * Static representation of the {@link isReceivingRequired} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_RECEIVING_REQUIRED: fieldBuilder.buildEnumField(
          'IsReceivingRequired',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link batchDispositionCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BATCH_DISPOSITION_CODE: fieldBuilder.buildEdmTypeField(
          'BatchDispositionCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shouldConsolidateSameBatchReservations} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHOULD_CONSOLIDATE_SAME_BATCH_RESERVATIONS: fieldBuilder.buildEnumField(
          'ShouldConsolidateSameBatchReservations',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isRegistrationRequired} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_REGISTRATION_REQUIRED: fieldBuilder.buildEnumField(
          'IsRegistrationRequired',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link willInventoryReservationUseFifoReservation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_INVENTORY_RESERVATION_USE_FIFO_RESERVATION:
          fieldBuilder.buildEnumField(
            'WillInventoryReservationUseFIFOReservation',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link pickingListBatchExpirationCheckRule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PICKING_LIST_BATCH_EXPIRATION_CHECK_RULE: fieldBuilder.buildEnumField(
          'PickingListBatchExpirationCheckRule',
          WhsPickingListBatchExpirationDateValidation,
          true
        ),
        /**
         * Static representation of the {@link approvedVendorCheckMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPROVED_VENDOR_CHECK_METHOD: fieldBuilder.buildEnumField(
          'ApprovedVendorCheckMethod',
          PdsVendorCheckItem,
          true
        ),
        /**
         * Static representation of the {@link isPickingRequired} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PICKING_REQUIRED: fieldBuilder.buildEnumField(
          'IsPickingRequired',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isNegativeFinancialInventoryAllowed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_NEGATIVE_FINANCIAL_INVENTORY_ALLOWED: fieldBuilder.buildEnumField(
          'IsNegativeFinancialInventoryAllowed',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isNegativePhysicalInventoryAllowed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_NEGATIVE_PHYSICAL_INVENTORY_ALLOWED: fieldBuilder.buildEnumField(
          'IsNegativePhysicalInventoryAllowed',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isDeductionRequired} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DEDUCTION_REQUIRED: fieldBuilder.buildEnumField(
          'IsDeductionRequired',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link shouldFifoDateReserveBackwards} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHOULD_FIFO_DATE_RESERVE_BACKWARDS: fieldBuilder.buildEnumField(
          'ShouldFIFODateReserveBackwards',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', InventoryPolicies)
      };
    }

    return this._schema;
  }
}
