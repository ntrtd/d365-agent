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
import type { LtmSalesPointsApi } from './LtmSalesPointsApi';
import { LtmSalesPointType } from './LtmSalesPointType';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "LTMSalesPoints" of service "d365_metadata".
 */
export class LtmSalesPoints<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements LtmSalesPointsType<T>
{
  /**
   * Technical entity name for LtmSalesPoints.
   */
  static override _entityName = 'LTMSalesPoints';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LtmSalesPoints entity.
   */
  static _keys = ['dataAreaId', 'SalesPointId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Point Id.
   */
  declare salesPointId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Point Type.
   * @nullable
   */
  declare salesPointType?: LtmSalesPointType | null;
  /**
   * Validate Cai.
   * @nullable
   */
  declare validateCai?: NoYes | null;
  /**
   * Transfer To Treasury.
   * @nullable
   */
  declare transferToTreasury?: NoYes | null;
  /**
   * Report Id.
   * @nullable
   */
  declare reportId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Point Prefix.
   * @nullable
   */
  declare salesPointPrefix?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Note 3.
   * @nullable
   */
  declare note3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Note 2.
   * @nullable
   */
  declare note2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Note 1.
   * @nullable
   */
  declare note1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Point Description.
   * @nullable
   */
  declare salesPointDescription?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: LtmSalesPointsApi<T>) {
    super(_entityApi);
  }
}

export interface LtmSalesPointsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  salesPointId: DeserializedType<T, 'Edm.String'>;
  salesPointType?: LtmSalesPointType | null;
  validateCai?: NoYes | null;
  transferToTreasury?: NoYes | null;
  reportId?: DeserializedType<T, 'Edm.String'> | null;
  salesPointPrefix?: DeserializedType<T, 'Edm.String'> | null;
  note3?: DeserializedType<T, 'Edm.String'> | null;
  note2?: DeserializedType<T, 'Edm.String'> | null;
  note1?: DeserializedType<T, 'Edm.String'> | null;
  salesPointDescription?: DeserializedType<T, 'Edm.String'> | null;
}
