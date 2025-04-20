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
import type { RebateStatusTablesApi } from './RebateStatusTablesApi';
import {
  RebateAndDeductionAgreementHeaders,
  RebateAndDeductionAgreementHeadersType
} from './RebateAndDeductionAgreementHeaders';
import {
  RebateAndDeductionsParameters,
  RebateAndDeductionsParametersType
} from './RebateAndDeductionsParameters';
import {
  RebateAndDeductionsAgreementDeals,
  RebateAndDeductionsAgreementDealsType
} from './RebateAndDeductionsAgreementDeals';

/**
 * This class represents the entity "RebateStatusTables" of service "d365_metadata".
 */
export class RebateStatusTables<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RebateStatusTablesType<T>
{
  /**
   * Technical entity name for RebateStatusTables.
   */
  static override _entityName = 'RebateStatusTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RebateStatusTables entity.
   */
  static _keys = ['StatusId'];
  /**
   * Status Id.
   */
  declare statusId: DeserializedType<T, 'Edm.String'>;
  /**
   * Status Description.
   * @nullable
   */
  declare statusDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link RebateAndDeductionAgreementHeaders} entity.
   */
  declare rebateAndDeductionsAgreementHeaders: RebateAndDeductionAgreementHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link RebateAndDeductionsParameters} entity.
   */
  declare rebateAndDeductionsParameters: RebateAndDeductionsParameters<T>[];
  /**
   * One-to-many navigation property to the {@link RebateAndDeductionsAgreementDeals} entity.
   */
  declare rebateAndDeductionsAgreementDeals: RebateAndDeductionsAgreementDeals<T>[];

  constructor(_entityApi: RebateStatusTablesApi<T>) {
    super(_entityApi);
  }
}

export interface RebateStatusTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  statusId: DeserializedType<T, 'Edm.String'>;
  statusDescription?: DeserializedType<T, 'Edm.String'> | null;
  rebateAndDeductionsAgreementHeaders: RebateAndDeductionAgreementHeadersType<T>[];
  rebateAndDeductionsParameters: RebateAndDeductionsParametersType<T>[];
  rebateAndDeductionsAgreementDeals: RebateAndDeductionsAgreementDealsType<T>[];
}
