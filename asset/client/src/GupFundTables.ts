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
import type { GupFundTablesApi } from './GupFundTablesApi';
import { TamFundType } from './TamFundType';
import { NoYes } from './NoYes';
import { GupFundValueType } from './GupFundValueType';
import { GupFundSourceType } from './GupFundSourceType';
import { TamFundStatus } from './TamFundStatus';

/**
 * This class represents the entity "GUPFundTables" of service "d365_metadata".
 */
export class GupFundTables<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements GupFundTablesType<T>
{
  /**
   * Technical entity name for GupFundTables.
   */
  static override _entityName = 'GUPFundTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the GupFundTables entity.
   */
  static _keys = ['dataAreaId', 'FundID'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Fund Id.
   */
  declare fundId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Details.
   * @nullable
   */
  declare details?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Usage.
   * @nullable
   */
  declare usage?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * To Date.
   */
  declare toDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unit Of Measure Symbol.
   * @nullable
   */
  declare unitOfMeasureSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * From Date.
   */
  declare fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Type.
   * @nullable
   */
  declare type?: TamFundType | null;
  /**
   * Ordered Amt.
   */
  declare orderedAmt: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Rebate Related.
   * @nullable
   */
  declare rebateRelated?: NoYes | null;
  /**
   * Fund Value Type.
   * @nullable
   */
  declare fundValueType?: GupFundValueType | null;
  /**
   * Invoiced Amt.
   */
  declare invoicedAmt: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Fund Source Type.
   * @nullable
   */
  declare fundSourceType?: GupFundSourceType | null;
  /**
   * Status.
   * @nullable
   */
  declare status?: TamFundStatus | null;
  /**
   * Total Fund Amt.
   */
  declare totalFundAmt: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: GupFundTablesApi<T>) {
    super(_entityApi);
  }
}

export interface GupFundTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  fundId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  details?: DeserializedType<T, 'Edm.String'> | null;
  usage?: DeserializedType<T, 'Edm.String'> | null;
  toDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  unitOfMeasureSymbol?: DeserializedType<T, 'Edm.String'> | null;
  fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  type?: TamFundType | null;
  orderedAmt: DeserializedType<T, 'Edm.Decimal'>;
  rebateRelated?: NoYes | null;
  fundValueType?: GupFundValueType | null;
  invoicedAmt: DeserializedType<T, 'Edm.Decimal'>;
  fundSourceType?: GupFundSourceType | null;
  status?: TamFundStatus | null;
  totalFundAmt: DeserializedType<T, 'Edm.Decimal'>;
}
