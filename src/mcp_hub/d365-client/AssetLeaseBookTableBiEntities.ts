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
import type { AssetLeaseBookTableBiEntitiesApi } from './AssetLeaseBookTableBiEntitiesApi';
import { NoYes } from './NoYes';
import { AssetLeaseType } from './AssetLeaseType';
import { AssetLeaseLeasingConvention } from './AssetLeaseLeasingConvention';
import { AssetLeaseAccountingFrameworkType } from './AssetLeaseAccountingFrameworkType';
import { CurrentOperationsTax } from './CurrentOperationsTax';

/**
 * This class represents the entity "AssetLeaseBookTableBiEntities" of service "d365_metadata".
 */
export class AssetLeaseBookTableBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetLeaseBookTableBiEntitiesType<T>
{
  /**
   * Technical entity name for AssetLeaseBookTableBiEntities.
   */
  static override _entityName = 'AssetLeaseBookTableBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetLeaseBookTableBiEntities entity.
   */
  static _keys = ['dataAreaId', 'BookType'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Book Type.
   */
  declare bookType: DeserializedType<T, 'Edm.String'>;
  /**
   * Low Value.
   */
  declare lowValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pay To Vendor.
   * @nullable
   */
  declare payToVendor?: NoYes | null;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Short Term Months.
   */
  declare shortTermMonths: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Lease Type.
   * @nullable
   */
  declare leaseType?: AssetLeaseType | null;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Leasing Convention.
   * @nullable
   */
  declare leasingConvention?: AssetLeaseLeasingConvention | null;
  /**
   * Accounting Framework.
   * @nullable
   */
  declare accountingFramework?: AssetLeaseAccountingFrameworkType | null;
  /**
   * Lease Term Over Asset Useful Life Book Set Up.
   */
  declare leaseTermOverAssetUsefulLifeBookSetUp: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Posting Layer.
   * @nullable
   */
  declare postingLayer?: CurrentOperationsTax | null;
  /**
   * Present Value Over Fair Value Book Set Up.
   */
  declare presentValueOverFairValueBookSetUp: DeserializedType<
    T,
    'Edm.Decimal'
  >;

  constructor(_entityApi: AssetLeaseBookTableBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface AssetLeaseBookTableBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  bookType: DeserializedType<T, 'Edm.String'>;
  lowValue: DeserializedType<T, 'Edm.Decimal'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  payToVendor?: NoYes | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  shortTermMonths: DeserializedType<T, 'Edm.Int32'>;
  leaseType?: AssetLeaseType | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  leasingConvention?: AssetLeaseLeasingConvention | null;
  accountingFramework?: AssetLeaseAccountingFrameworkType | null;
  leaseTermOverAssetUsefulLifeBookSetUp: DeserializedType<T, 'Edm.Decimal'>;
  postingLayer?: CurrentOperationsTax | null;
  presentValueOverFairValueBookSetUp: DeserializedType<T, 'Edm.Decimal'>;
}
