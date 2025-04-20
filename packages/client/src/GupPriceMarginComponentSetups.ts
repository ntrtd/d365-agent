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
import type { GupPriceMarginComponentSetupsApi } from './GupPriceMarginComponentSetupsApi';
import { NoYes } from './NoYes';
import { GupPriceComponent } from './GupPriceComponent';
import { GupDiscountConcurrencyModeAcrossPriority } from './GupDiscountConcurrencyModeAcrossPriority';

/**
 * This class represents the entity "GUPPriceMarginComponentSetups" of service "d365_metadata".
 */
export class GupPriceMarginComponentSetups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements GupPriceMarginComponentSetupsType<T>
{
  /**
   * Technical entity name for GupPriceMarginComponentSetups.
   */
  static override _entityName = 'GUPPriceMarginComponentSetups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the GupPriceMarginComponentSetups entity.
   */
  static _keys = ['dataAreaId', 'PriceTreeName', 'PriceComponentCodeName'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Price Tree Name.
   */
  declare priceTreeName: DeserializedType<T, 'Edm.String'>;
  /**
   * Price Component Code Name.
   */
  declare priceComponentCodeName: DeserializedType<T, 'Edm.String'>;
  /**
   * Post In Ledger.
   * @nullable
   */
  declare postInLedger?: NoYes | null;
  /**
   * Posting Profile Name.
   * @nullable
   */
  declare postingProfileName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price Component.
   * @nullable
   */
  declare priceComponent?: GupPriceComponent | null;
  /**
   * Flexible.
   * @nullable
   */
  declare flexible?: NoYes | null;
  /**
   * Compoundcalculation Basis.
   * @nullable
   */
  declare compoundcalculationBasis?: NoYes | null;
  /**
   * Concurrency Mode Across Priority.
   * @nullable
   */
  declare concurrencyModeAcrossPriority?: GupDiscountConcurrencyModeAcrossPriority | null;
  /**
   * Calculation Sequence.
   */
  declare calculationSequence: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Is Mandatory.
   * @nullable
   */
  declare isMandatory?: NoYes | null;

  constructor(_entityApi: GupPriceMarginComponentSetupsApi<T>) {
    super(_entityApi);
  }
}

export interface GupPriceMarginComponentSetupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  priceTreeName: DeserializedType<T, 'Edm.String'>;
  priceComponentCodeName: DeserializedType<T, 'Edm.String'>;
  postInLedger?: NoYes | null;
  postingProfileName?: DeserializedType<T, 'Edm.String'> | null;
  priceComponent?: GupPriceComponent | null;
  flexible?: NoYes | null;
  compoundcalculationBasis?: NoYes | null;
  concurrencyModeAcrossPriority?: GupDiscountConcurrencyModeAcrossPriority | null;
  calculationSequence: DeserializedType<T, 'Edm.Int32'>;
  isMandatory?: NoYes | null;
}
