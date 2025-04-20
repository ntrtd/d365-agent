/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { InventoryPoliciesApi } from './InventoryPoliciesApi';
import { NoYes } from './NoYes';
import { McrItemReservation } from './McrItemReservation';
import { PdsPickCriteria } from './PdsPickCriteria';
import { WhsPickingListBatchExpirationDateValidation } from './WhsPickingListBatchExpirationDateValidation';
import { PdsVendorCheckItem } from './PdsVendorCheckItem';
import {
  ReleasedProductsV2,
  ReleasedProductsV2Type
} from './ReleasedProductsV2';
import {
  CostFlowAssumptionPolicies,
  CostFlowAssumptionPoliciesType
} from './CostFlowAssumptionPolicies';

/**
 * This class represents the entity "InventoryPolicies" of service "d365_metadata".
 */
export class InventoryPolicies<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements InventoryPoliciesType<T>
{
  /**
   * Technical entity name for InventoryPolicies.
   */
  static override _entityName = 'InventoryPolicies';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InventoryPolicies entity.
   */
  static _keys = ['dataAreaId', 'PolicyId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Policy Id.
   */
  declare policyId: DeserializedType<T, 'Edm.String'>;
  /**
   * Will Registration Provide Vendor Batch Details.
   * @nullable
   */
  declare willRegistrationProvideVendorBatchDetails?: NoYes | null;
  /**
   * Will Inventory Reservation Reserve Same Batch.
   * @nullable
   */
  declare willInventoryReservationReserveSameBatch?: NoYes | null;
  /**
   * Will Inventory Reservation Use Fefo Reservation.
   * @nullable
   */
  declare willInventoryReservationUseFefoReservation?: NoYes | null;
  /**
   * Default Sales Reservation Mode.
   * @nullable
   */
  declare defaultSalesReservationMode?: McrItemReservation | null;
  /**
   * Are Quarantine Management Processes Enabled.
   * @nullable
   */
  declare areQuarantineManagementProcessesEnabled?: NoYes | null;
  /**
   * Fefo Date Controlled Inventory Reservation Criteria.
   * @nullable
   */
  declare fefoDateControlledInventoryReservationCriteria?: PdsPickCriteria | null;
  /**
   * Is Receiving Required.
   * @nullable
   */
  declare isReceivingRequired?: NoYes | null;
  /**
   * Batch Disposition Code.
   * @nullable
   */
  declare batchDispositionCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Should Consolidate Same Batch Reservations.
   * @nullable
   */
  declare shouldConsolidateSameBatchReservations?: NoYes | null;
  /**
   * Is Registration Required.
   * @nullable
   */
  declare isRegistrationRequired?: NoYes | null;
  /**
   * Will Inventory Reservation Use Fifo Reservation.
   * @nullable
   */
  declare willInventoryReservationUseFifoReservation?: NoYes | null;
  /**
   * Picking List Batch Expiration Check Rule.
   * @nullable
   */
  declare pickingListBatchExpirationCheckRule?: WhsPickingListBatchExpirationDateValidation | null;
  /**
   * Approved Vendor Check Method.
   * @nullable
   */
  declare approvedVendorCheckMethod?: PdsVendorCheckItem | null;
  /**
   * Is Picking Required.
   * @nullable
   */
  declare isPickingRequired?: NoYes | null;
  /**
   * Is Negative Financial Inventory Allowed.
   * @nullable
   */
  declare isNegativeFinancialInventoryAllowed?: NoYes | null;
  /**
   * Is Negative Physical Inventory Allowed.
   * @nullable
   */
  declare isNegativePhysicalInventoryAllowed?: NoYes | null;
  /**
   * Is Deduction Required.
   * @nullable
   */
  declare isDeductionRequired?: NoYes | null;
  /**
   * Should Fifo Date Reserve Backwards.
   * @nullable
   */
  declare shouldFifoDateReserveBackwards?: NoYes | null;
  /**
   * One-to-one navigation property to the {@link ReleasedProductsV2} entity.
   */
  declare releasedProductsV2?: ReleasedProductsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link CostFlowAssumptionPolicies} entity.
   */
  declare costFlowAssumptionPolicy?: CostFlowAssumptionPolicies<T> | null;

  constructor(_entityApi: InventoryPoliciesApi<T>) {
    super(_entityApi);
  }
}

export interface InventoryPoliciesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  policyId: DeserializedType<T, 'Edm.String'>;
  willRegistrationProvideVendorBatchDetails?: NoYes | null;
  willInventoryReservationReserveSameBatch?: NoYes | null;
  willInventoryReservationUseFefoReservation?: NoYes | null;
  defaultSalesReservationMode?: McrItemReservation | null;
  areQuarantineManagementProcessesEnabled?: NoYes | null;
  fefoDateControlledInventoryReservationCriteria?: PdsPickCriteria | null;
  isReceivingRequired?: NoYes | null;
  batchDispositionCode?: DeserializedType<T, 'Edm.String'> | null;
  shouldConsolidateSameBatchReservations?: NoYes | null;
  isRegistrationRequired?: NoYes | null;
  willInventoryReservationUseFifoReservation?: NoYes | null;
  pickingListBatchExpirationCheckRule?: WhsPickingListBatchExpirationDateValidation | null;
  approvedVendorCheckMethod?: PdsVendorCheckItem | null;
  isPickingRequired?: NoYes | null;
  isNegativeFinancialInventoryAllowed?: NoYes | null;
  isNegativePhysicalInventoryAllowed?: NoYes | null;
  isDeductionRequired?: NoYes | null;
  shouldFifoDateReserveBackwards?: NoYes | null;
  releasedProductsV2?: ReleasedProductsV2Type<T> | null;
  costFlowAssumptionPolicy?: CostFlowAssumptionPoliciesType<T> | null;
}
