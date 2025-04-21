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
import type { ProductGroupsApi } from './ProductGroupsApi';
import { RevRecRevenueType } from './RevRecRevenueType';
import { NoYes } from './NoYes';
import {
  SupplyForecastEntries,
  SupplyForecastEntriesType
} from './SupplyForecastEntries';
import {
  ReleasedProductsV2,
  ReleasedProductsV2Type
} from './ReleasedProductsV2';
import { RecSetupBases, RecSetupBasesType } from './RecSetupBases';
import { PlannedOrders, PlannedOrdersType } from './PlannedOrders';

/**
 * This class represents the entity "ProductGroups" of service "d365_metadata".
 */
export class ProductGroups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProductGroupsType<T>
{
  /**
   * Technical entity name for ProductGroups.
   */
  static override _entityName = 'ProductGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductGroups entity.
   */
  static _keys = ['dataAreaId', 'GroupId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Group Id.
   */
  declare groupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Default Forecast Allocation Key Id.
   * @nullable
   */
  declare defaultForecastAllocationKeyId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Group Name.
   * @nullable
   */
  declare groupName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Sales Sales Tax Item Group Code.
   * @nullable
   */
  declare defaultSalesSalesTaxItemGroupCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Default Purchase Sales Tax Item Group Code.
   * @nullable
   */
  declare defaultPurchaseSalesTaxItemGroupCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Shipment Physical Load Template Id.
   * @nullable
   */
  declare shipmentPhysicalLoadTemplateId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Rev Rec Revenue Type.
   * @nullable
   */
  declare revRecRevenueType?: RevRecRevenueType | null;
  /**
   * Rev Rec Default Revenue Recognition Schedule.
   * @nullable
   */
  declare revRecDefaultRevenueRecognitionSchedule?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Rev Rec Median Price.
   * @nullable
   */
  declare revRecMedianPrice?: NoYes | null;
  /**
   * Rev Rec Median Price Minimum Tolerance.
   */
  declare revRecMedianPriceMinimumTolerance: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Rev Rec Median Price Maximum Tolerance.
   */
  declare revRecMedianPriceMaximumTolerance: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Rev Rec Exclude From Carve Out.
   * @nullable
   */
  declare revRecExcludeFromCarveOut?: NoYes | null;
  /**
   * Rev Rec Revenue Recognition Enabled.
   * @nullable
   */
  declare revRecRevenueRecognitionEnabled?: NoYes | null;
  /**
   * One-to-many navigation property to the {@link SupplyForecastEntries} entity.
   */
  declare supplyForecastEntries: SupplyForecastEntries<T>[];
  /**
   * One-to-many navigation property to the {@link ReleasedProductsV2} entity.
   */
  declare releasedProductsV2: ReleasedProductsV2<T>[];
  /**
   * One-to-many navigation property to the {@link RecSetupBases} entity.
   */
  declare revRecSetupBasis: RecSetupBases<T>[];
  /**
   * One-to-many navigation property to the {@link PlannedOrders} entity.
   */
  declare plannedOrders: PlannedOrders<T>[];

  constructor(_entityApi: ProductGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface ProductGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  groupId: DeserializedType<T, 'Edm.String'>;
  defaultForecastAllocationKeyId?: DeserializedType<T, 'Edm.String'> | null;
  groupName?: DeserializedType<T, 'Edm.String'> | null;
  defaultSalesSalesTaxItemGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  defaultPurchaseSalesTaxItemGroupCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  shipmentPhysicalLoadTemplateId?: DeserializedType<T, 'Edm.String'> | null;
  revRecRevenueType?: RevRecRevenueType | null;
  revRecDefaultRevenueRecognitionSchedule?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  revRecMedianPrice?: NoYes | null;
  revRecMedianPriceMinimumTolerance: DeserializedType<T, 'Edm.Decimal'>;
  revRecMedianPriceMaximumTolerance: DeserializedType<T, 'Edm.Decimal'>;
  revRecExcludeFromCarveOut?: NoYes | null;
  revRecRevenueRecognitionEnabled?: NoYes | null;
  supplyForecastEntries: SupplyForecastEntriesType<T>[];
  releasedProductsV2: ReleasedProductsV2Type<T>[];
  revRecSetupBasis: RecSetupBasesType<T>[];
  plannedOrders: PlannedOrdersType<T>[];
}
