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
import type { EarningCodeGroupsApi } from './EarningCodeGroupsApi';
import {
  AccrualBasisEarningCodes,
  AccrualBasisEarningCodesType
} from './AccrualBasisEarningCodes';
import {
  TotalCompStatementSectionEarnings,
  TotalCompStatementSectionEarningsType
} from './TotalCompStatementSectionEarnings';

/**
 * This class represents the entity "EarningCodeGroups" of service "d365_metadata".
 */
export class EarningCodeGroups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements EarningCodeGroupsType<T>
{
  /**
   * Technical entity name for EarningCodeGroups.
   */
  static override _entityName = 'EarningCodeGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EarningCodeGroups entity.
   */
  static _keys = ['EarningCodeGroup'];
  /**
   * Earning Code Group.
   */
  declare earningCodeGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link AccrualBasisEarningCodes} entity.
   */
  declare accrualBasisEarningCodes: AccrualBasisEarningCodes<T>[];
  /**
   * One-to-many navigation property to the {@link TotalCompStatementSectionEarnings} entity.
   */
  declare totalCompStatementSectionEarning: TotalCompStatementSectionEarnings<T>[];

  constructor(_entityApi: EarningCodeGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface EarningCodeGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  earningCodeGroup: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  accrualBasisEarningCodes: AccrualBasisEarningCodesType<T>[];
  totalCompStatementSectionEarning: TotalCompStatementSectionEarningsType<T>[];
}
