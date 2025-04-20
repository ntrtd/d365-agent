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
import type { TaxationCodesSetupApi } from './TaxationCodesSetupApi';
import { TaxTypeBr } from './TaxTypeBr';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "TaxationCodesSetup" of service "d365_metadata".
 */
export class TaxationCodesSetup<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TaxationCodesSetupType<T>
{
  /**
   * Technical entity name for TaxationCodesSetup.
   */
  static override _entityName = 'TaxationCodesSetup';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TaxationCodesSetup entity.
   */
  static _keys = ['dataAreaId', 'TaxType'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Type.
   * @nullable
   */
  declare taxType?: TaxTypeBr | null;
  /**
   * Mandatory.
   * @nullable
   */
  declare mandatory?: NoYes | null;

  constructor(_entityApi: TaxationCodesSetupApi<T>) {
    super(_entityApi);
  }
}

export interface TaxationCodesSetupType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  taxType?: TaxTypeBr | null;
  mandatory?: NoYes | null;
}
