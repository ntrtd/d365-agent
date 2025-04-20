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
import type { ImpairmentIndicatorsApi } from './ImpairmentIndicatorsApi';
import { AssetImpairmentLevelJp } from './AssetImpairmentLevelJp';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "ImpairmentIndicators" of service "d365_metadata".
 */
export class ImpairmentIndicators<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ImpairmentIndicatorsType<T>
{
  /**
   * Technical entity name for ImpairmentIndicators.
   */
  static override _entityName = 'ImpairmentIndicators';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ImpairmentIndicators entity.
   */
  static _keys = [
    'dataAreaId',
    'ReferenceFixedAssetNumber',
    'ReferenceBook',
    'LineNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Reference Fixed Asset Number.
   */
  declare referenceFixedAssetNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Reference Book.
   */
  declare referenceBook: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Assessment Level.
   * @nullable
   */
  declare assessmentLevel?: AssetImpairmentLevelJp | null;
  /**
   * Is Finalized.
   * @nullable
   */
  declare isFinalized?: NoYes | null;
  /**
   * Modify Date.
   */
  declare modifyDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Undiscounted Cash Flow.
   */
  declare undiscountedCashFlow: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Recoverable Amount.
   */
  declare recoverableAmount: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: ImpairmentIndicatorsApi<T>) {
    super(_entityApi);
  }
}

export interface ImpairmentIndicatorsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  referenceFixedAssetNumber: DeserializedType<T, 'Edm.String'>;
  referenceBook: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  assessmentLevel?: AssetImpairmentLevelJp | null;
  isFinalized?: NoYes | null;
  modifyDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  undiscountedCashFlow: DeserializedType<T, 'Edm.Decimal'>;
  recoverableAmount: DeserializedType<T, 'Edm.Decimal'>;
}
