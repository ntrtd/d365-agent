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
import type { SubBillItemGroupSetupsApi } from './SubBillItemGroupSetupsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "SubBillItemGroupSetups" of service "d365_metadata".
 */
export class SubBillItemGroupSetups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SubBillItemGroupSetupsType<T>
{
  /**
   * Technical entity name for SubBillItemGroupSetups.
   */
  static override _entityName = 'SubBillItemGroupSetups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SubBillItemGroupSetups entity.
   */
  static _keys = ['dataAreaId', 'ItemGroup'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Group.
   */
  declare itemGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Prorate Support And Renewal.
   * @nullable
   */
  declare prorateSupportAndRenewal?: NoYes | null;
  /**
   * Number Of Top Lines.
   */
  declare numberOfTopLines: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Adjust Renewal Dates.
   * @nullable
   */
  declare adjustRenewalDates?: NoYes | null;

  constructor(_entityApi: SubBillItemGroupSetupsApi<T>) {
    super(_entityApi);
  }
}

export interface SubBillItemGroupSetupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  itemGroup: DeserializedType<T, 'Edm.String'>;
  prorateSupportAndRenewal?: NoYes | null;
  numberOfTopLines: DeserializedType<T, 'Edm.Int32'>;
  adjustRenewalDates?: NoYes | null;
}
