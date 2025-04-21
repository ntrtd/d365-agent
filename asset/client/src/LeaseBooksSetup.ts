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
import type { LeaseBooksSetupApi } from './LeaseBooksSetupApi';
import { AssetLeaseAccountingFrameworkType } from './AssetLeaseAccountingFrameworkType';
import { NoYes } from './NoYes';
import { CurrentOperationsTax } from './CurrentOperationsTax';
import { AssetLeaseType } from './AssetLeaseType';
import { AssetLeaseLeasingConvention } from './AssetLeaseLeasingConvention';

/**
 * This class represents the entity "LeaseBooksSetup" of service "d365_metadata".
 */
export class LeaseBooksSetup<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements LeaseBooksSetupType<T>
{
  /**
   * Technical entity name for LeaseBooksSetup.
   */
  static override _entityName = 'LeaseBooksSetup';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LeaseBooksSetup entity.
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
   * Accounting Framework.
   * @nullable
   */
  declare accountingFramework?: AssetLeaseAccountingFrameworkType | null;
  /**
   * Present Value Over Fair Value Book Set Up.
   */
  declare presentValueOverFairValueBookSetUp: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Pay To Vendor.
   * @nullable
   */
  declare payToVendor?: NoYes | null;
  /**
   * Short Term Months.
   */
  declare shortTermMonths: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Low Value Threshold.
   */
  declare lowValueThreshold: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Company.
   * @nullable
   */
  declare company?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Posting Layer.
   * @nullable
   */
  declare postingLayer?: CurrentOperationsTax | null;
  /**
   * Lease Type.
   * @nullable
   */
  declare leaseType?: AssetLeaseType | null;
  /**
   * Leasing Convention.
   * @nullable
   */
  declare leasingConvention?: AssetLeaseLeasingConvention | null;
  /**
   * Lease Term Over Asset Useful Life Book Set Up.
   */
  declare leaseTermOverAssetUsefulLifeBookSetUp: DeserializedType<
    T,
    'Edm.Decimal'
  >;

  constructor(_entityApi: LeaseBooksSetupApi<T>) {
    super(_entityApi);
  }
}

export interface LeaseBooksSetupType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  bookType: DeserializedType<T, 'Edm.String'>;
  accountingFramework?: AssetLeaseAccountingFrameworkType | null;
  presentValueOverFairValueBookSetUp: DeserializedType<T, 'Edm.Decimal'>;
  payToVendor?: NoYes | null;
  shortTermMonths: DeserializedType<T, 'Edm.Int32'>;
  lowValueThreshold: DeserializedType<T, 'Edm.Decimal'>;
  company?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  postingLayer?: CurrentOperationsTax | null;
  leaseType?: AssetLeaseType | null;
  leasingConvention?: AssetLeaseLeasingConvention | null;
  leaseTermOverAssetUsefulLifeBookSetUp: DeserializedType<T, 'Edm.Decimal'>;
}
