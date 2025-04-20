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
import type { CatchWeightItemHandlingPoliciesV2Api } from './CatchWeightItemHandlingPoliciesV2Api';
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
  ReleasedProductsV2,
  ReleasedProductsV2Type
} from './ReleasedProductsV2';

/**
 * This class represents the entity "CatchWeightItemHandlingPoliciesV2" of service "d365_metadata".
 */
export class CatchWeightItemHandlingPoliciesV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CatchWeightItemHandlingPoliciesV2Type<T>
{
  /**
   * Technical entity name for CatchWeightItemHandlingPoliciesV2.
   */
  static override _entityName = 'CatchWeightItemHandlingPoliciesV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CatchWeightItemHandlingPoliciesV2 entity.
   */
  static _keys = ['dataAreaId', 'PolicyName'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Policy Name.
   */
  declare policyName: DeserializedType<T, 'Edm.String'>;
  /**
   * Outbound Weight Capturing Method.
   * @nullable
   */
  declare outboundWeightCapturingMethod?: WhsOutboundWeightCapturingMethod | null;
  /**
   * Inbound Catch Weight Tag Capturing Method.
   * @nullable
   */
  declare inboundCatchWeightTagCapturingMethod?: WhsInboundCatchWeightTagCapturingMethod | null;
  /**
   * Outbound Weight Variance Method.
   * @nullable
   */
  declare outboundWeightVarianceMethod?: WhsOutboundWeightVarianceMethod | null;
  /**
   * Policy Description.
   * @nullable
   */
  declare policyDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Order Weight Capturing Process.
   * @nullable
   */
  declare salesOrderWeightCapturingProcess?: WhsSalesOrderWeightCapturingProcess | null;
  /**
   * Outbound Catch Weight Tag Capturing Method.
   * @nullable
   */
  declare outboundCatchWeightTagCapturingMethod?: WhsOutboundCatchWeightTagCapturingMethod | null;
  /**
   * Warehouse Transfer Weight Capturing Method.
   * @nullable
   */
  declare warehouseTransferWeightCapturingMethod?: WhsWarehouseTransferWeightCapturingMethod | null;
  /**
   * Catch Weight Tag Dimension Tracking Method.
   * @nullable
   */
  declare catchWeightTagDimensionTrackingMethod?: WhsCatchWeightTagDimensionTrackingMethod | null;
  /**
   * Inbound Weight Capturing Method.
   * @nullable
   */
  declare inboundWeightCapturingMethod?: WhsInboundWeightCapturingMethod | null;
  /**
   * Movement Weight Capturing Method.
   * @nullable
   */
  declare movementWeightCapturingMethod?: WhsMovementWeightCapturingMethod | null;
  /**
   * Counting Weight Capturing Method.
   * @nullable
   */
  declare countingWeightCapturingMethod?: WhsCycleCountWeightCapturingMethod | null;
  /**
   * Correction Weight Capturing Process.
   * @nullable
   */
  declare correctionWeightCapturingProcess?: WhsCountingWeightCapturingMethod | null;
  /**
   * Transfer Issue Weight Capturing Process.
   * @nullable
   */
  declare transferIssueWeightCapturingProcess?: WhsTransferIssueWeightCapturingProcess | null;
  /**
   * Catch Weight Tag Tracking.
   * @nullable
   */
  declare catchWeightTagTracking?: NoYes | null;
  /**
   * Production Picking Weight Capturing Method.
   * @nullable
   */
  declare productionPickingWeightCapturingMethod?: WhsProductionPickingWeightCapturingMethod | null;
  /**
   * One-to-many navigation property to the {@link ReleasedProductsV2} entity.
   */
  declare releasedProductsV2: ReleasedProductsV2<T>[];

  constructor(_entityApi: CatchWeightItemHandlingPoliciesV2Api<T>) {
    super(_entityApi);
  }
}

export interface CatchWeightItemHandlingPoliciesV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  policyName: DeserializedType<T, 'Edm.String'>;
  outboundWeightCapturingMethod?: WhsOutboundWeightCapturingMethod | null;
  inboundCatchWeightTagCapturingMethod?: WhsInboundCatchWeightTagCapturingMethod | null;
  outboundWeightVarianceMethod?: WhsOutboundWeightVarianceMethod | null;
  policyDescription?: DeserializedType<T, 'Edm.String'> | null;
  salesOrderWeightCapturingProcess?: WhsSalesOrderWeightCapturingProcess | null;
  outboundCatchWeightTagCapturingMethod?: WhsOutboundCatchWeightTagCapturingMethod | null;
  warehouseTransferWeightCapturingMethod?: WhsWarehouseTransferWeightCapturingMethod | null;
  catchWeightTagDimensionTrackingMethod?: WhsCatchWeightTagDimensionTrackingMethod | null;
  inboundWeightCapturingMethod?: WhsInboundWeightCapturingMethod | null;
  movementWeightCapturingMethod?: WhsMovementWeightCapturingMethod | null;
  countingWeightCapturingMethod?: WhsCycleCountWeightCapturingMethod | null;
  correctionWeightCapturingProcess?: WhsCountingWeightCapturingMethod | null;
  transferIssueWeightCapturingProcess?: WhsTransferIssueWeightCapturingProcess | null;
  catchWeightTagTracking?: NoYes | null;
  productionPickingWeightCapturingMethod?: WhsProductionPickingWeightCapturingMethod | null;
  releasedProductsV2: ReleasedProductsV2Type<T>[];
}
