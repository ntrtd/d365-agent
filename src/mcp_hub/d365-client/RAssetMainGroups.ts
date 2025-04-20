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
import type { RAssetMainGroupsApi } from './RAssetMainGroupsApi';
import { RAssetGroupTypes } from './RAssetGroupTypes';
import { NoYes } from './NoYes';
import { RAssetVatRefundingStartDate } from './RAssetVatRefundingStartDate';

/**
 * This class represents the entity "RAssetMainGroups" of service "d365_metadata".
 */
export class RAssetMainGroups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RAssetMainGroupsType<T>
{
  /**
   * Technical entity name for RAssetMainGroups.
   */
  static override _entityName = 'RAssetMainGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RAssetMainGroups entity.
   */
  static _keys = ['dataAreaId', 'FAGroup'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Fa Group.
   */
  declare faGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Type Of Group.
   * @nullable
   */
  declare typeOfGroup?: RAssetGroupTypes | null;
  /**
   * Autonumeration Fa.
   * @nullable
   */
  declare autonumerationFa?: NoYes | null;
  /**
   * Fa Autonumbering Sequence.
   * @nullable
   */
  declare faAutonumberingSequence?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Barcodes Autonumeration.
   * @nullable
   */
  declare barcodesAutonumeration?: NoYes | null;
  /**
   * Vat Refunding.
   * @nullable
   */
  declare vatRefunding?: RAssetVatRefundingStartDate | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Barcode Autonumeration Sequence.
   * @nullable
   */
  declare barcodeAutonumerationSequence?: DeserializedType<
    T,
    'Edm.String'
  > | null;

  constructor(_entityApi: RAssetMainGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface RAssetMainGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  faGroup: DeserializedType<T, 'Edm.String'>;
  typeOfGroup?: RAssetGroupTypes | null;
  autonumerationFa?: NoYes | null;
  faAutonumberingSequence?: DeserializedType<T, 'Edm.String'> | null;
  barcodesAutonumeration?: NoYes | null;
  vatRefunding?: RAssetVatRefundingStartDate | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  barcodeAutonumerationSequence?: DeserializedType<T, 'Edm.String'> | null;
}
