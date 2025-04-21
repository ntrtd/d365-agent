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
import type { WithholdingGroupDatasApi } from './WithholdingGroupDatasApi';
import { NoYes } from './NoYes';
import {
  WithholdingTaxCodes,
  WithholdingTaxCodesType
} from './WithholdingTaxCodes';
import { WithholdingGroups, WithholdingGroupsType } from './WithholdingGroups';

/**
 * This class represents the entity "WithholdingGroupDatas" of service "d365_metadata".
 */
export class WithholdingGroupDatas<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WithholdingGroupDatasType<T>
{
  /**
   * Technical entity name for WithholdingGroupDatas.
   */
  static override _entityName = 'WithholdingGroupDatas';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WithholdingGroupDatas entity.
   */
  static _keys = [
    'dataAreaId',
    'WithholdingTaxGroupId',
    'WithholdingTaxCodeId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Withholding Tax Group Id.
   */
  declare withholdingTaxGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Withholding Tax Code Id.
   */
  declare withholdingTaxCodeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Overlook Threshold.
   * @nullable
   */
  declare overlookThreshold?: NoYes | null;
  /**
   * Exempt.
   * @nullable
   */
  declare exempt?: NoYes | null;
  /**
   * One-to-one navigation property to the {@link WithholdingTaxCodes} entity.
   */
  declare withholdingTaxCode?: WithholdingTaxCodes<T> | null;
  /**
   * One-to-one navigation property to the {@link WithholdingGroups} entity.
   */
  declare withholdingGroup?: WithholdingGroups<T> | null;

  constructor(_entityApi: WithholdingGroupDatasApi<T>) {
    super(_entityApi);
  }
}

export interface WithholdingGroupDatasType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  withholdingTaxGroupId: DeserializedType<T, 'Edm.String'>;
  withholdingTaxCodeId: DeserializedType<T, 'Edm.String'>;
  overlookThreshold?: NoYes | null;
  exempt?: NoYes | null;
  withholdingTaxCode?: WithholdingTaxCodesType<T> | null;
  withholdingGroup?: WithholdingGroupsType<T> | null;
}
