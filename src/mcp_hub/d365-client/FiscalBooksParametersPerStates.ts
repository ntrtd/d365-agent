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
import type { FiscalBooksParametersPerStatesApi } from './FiscalBooksParametersPerStatesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "FiscalBooksParametersPerStates" of service "d365_metadata".
 */
export class FiscalBooksParametersPerStates<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements FiscalBooksParametersPerStatesType<T>
{
  /**
   * Technical entity name for FiscalBooksParametersPerStates.
   */
  static override _entityName = 'FiscalBooksParametersPerStates';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FiscalBooksParametersPerStates entity.
   */
  static _keys = ['State'];
  /**
   * State.
   */
  declare state: DeserializedType<T, 'Edm.String'>;
  /**
   * Observation Code.
   * @nullable
   */
  declare observationCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fiscal Document Adjustment Code Fixed Asset.
   * @nullable
   */
  declare fiscalDocumentAdjustmentCodeFixedAsset?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * By Fiscal Document.
   * @nullable
   */
  declare byFiscalDocument?: NoYes | null;
  /**
   * Fiscal Document Adjustment Code.
   * @nullable
   */
  declare fiscalDocumentAdjustmentCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Ciap Calculate Installment For Outgoing.
   * @nullable
   */
  declare ciapCalculateInstallmentForOutgoing?: NoYes | null;
  /**
   * General Adjustment Code.
   * @nullable
   */
  declare generalAdjustmentCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * General Adjustment Code Fixed Asset.
   * @nullable
   */
  declare generalAdjustmentCodeFixedAsset?: DeserializedType<
    T,
    'Edm.String'
  > | null;

  constructor(_entityApi: FiscalBooksParametersPerStatesApi<T>) {
    super(_entityApi);
  }
}

export interface FiscalBooksParametersPerStatesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  state: DeserializedType<T, 'Edm.String'>;
  observationCode?: DeserializedType<T, 'Edm.String'> | null;
  fiscalDocumentAdjustmentCodeFixedAsset?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  byFiscalDocument?: NoYes | null;
  fiscalDocumentAdjustmentCode?: DeserializedType<T, 'Edm.String'> | null;
  ciapCalculateInstallmentForOutgoing?: NoYes | null;
  generalAdjustmentCode?: DeserializedType<T, 'Edm.String'> | null;
  generalAdjustmentCodeFixedAsset?: DeserializedType<T, 'Edm.String'> | null;
}
